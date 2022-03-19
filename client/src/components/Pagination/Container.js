import { getCardActionsUtilityClass } from "@mui/material";
import { borderBottom } from "@mui/system";
import React, {useState, useEffect} from "react"; 
import Card from "../Card/Card"
import {GET_ALL_CARDS} from "../../utils/queries"
import { useQuery } from "@apollo/client";

const CARDS_PER_PAGE = 1;
const Container = () => {
    const {loading, data, error}= useQuery(GET_ALL_CARDS);
    const [currPage, setCurrPage] = useState(1);
    const [totalCards, setTotalCards] = useState([]);
    console.log(loading, data);
    let currCards = [];
    if(totalCards.length === 0  && !loading){ 
        setTotalCards(data.resourcesCards);
    }
    const startingCardIndex = (currPage - 1) * CARDS_PER_PAGE;
    currCards = data.resourcesCards.slice(startingCardIndex, startingCardIndex + CARDS_PER_PAGE);

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
        </div>
        
        )
    }
    };
    export default Container; 