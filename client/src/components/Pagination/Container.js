import { getCardActionsUtilityClass } from "@mui/material";
import { borderBottom } from "@mui/system";
import React, {useState, useEffect} from "react"; 
import Card from "../Card/Card";
import {GET_ALL_CARDS} from "../../utils/queries";
import { useQuery } from "@apollo/client";

const CARDS_PER_PAGE = 1;
const Container = () => {
    const {loading, data, error}= useQuery(GET_ALL_CARDS);
    const [currPage, setCurrPage] = useState(0);
    const [totalCards, setTotalCards] = useState([]);
    let currCards = [];
    if(totalCards.length === 0  && !loading){ 
        setTotalCards(data.resourcesCards);
        setCurrPage(1);
    }
    if(currPage > 0) {

        const startingCardIndex = (currPage - 1) * CARDS_PER_PAGE
        currCards = data.resourcesCards.slice(startingCardIndex, startingCardIndex + CARDS_PER_PAGE );
    }
    
    const handleClick = (inc) => {
        const newStartIndex = (currPage + inc - 1) * CARDS_PER_PAGE;
        const newEndIndex = newStartIndex + CARDS_PER_PAGE - 1;
        if(newStartIndex < 0 || newEndIndex >= totalCards.length) {
            //Ignore the click
            return;
        }
        setCurrPage(currPage + inc);
    }

    if(error) {
        console.log(error);
    } else  if(loading) {
       return (
           <div>
               <p>Loading...</p>
           </div>
       )
   } else {
       return (
           <div>

            {currCards.map(c => <Card key={c.id} title={c.title} description = {c.description} />)};
            <button onClick={()=>handleClick(-1)} > Dec </button>
            <button onClick={()=>handleClick(1)} >Inc</button> 
        </div>
        
        )
    }
    };
    export default Container; 