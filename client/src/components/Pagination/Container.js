import { getCardActionsUtilityClass } from "@mui/material";
import { borderBottom } from "@mui/system";
import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import { GET_ALL_CARDS, GET_PUBLISHED_CARDS_BY_TAG, GET_PUBLISHED_CARDS_BY_ALL_TAGS } from "../../utils/queries";
//GET_CREATED_CARDS_BY_USER_ID
//GET_LIKED_CARDS_BY_USER_ID
//GET_ALL_UNPUBLISED_CARDS
import { useQuery } from "@apollo/client";
import Pagination from "./Pagination";

const CARDS_PER_PAGE = 2;
const Container = ({ variables, query, dataParameter, changeBool }) => {
    
    console.log("changeBool out: ", changeBool)
    // useEffect(() => {
    //     refetch();
    //     console.log("Refetched")
    //     console.log("changeBool in: ", changeBool)
    // }, [])

    console.log("Fetching query: ", query);

    const { loading, data, error } = useQuery(query,
        {
            variables
        });


    const [currPage, setCurrPage] = useState(-1);
    const [totalCards, setTotalCards] = useState([]);
    let currCards = [];
    console.log(data)
    if (totalCards.length === 0 && !loading && data) {
        console.log(data);
        setTotalCards(data[dataParameter]);
        setCurrPage(0);
    }
    if (currPage > -1 && !loading && data) {
        const startingCardIndex = (currPage) * CARDS_PER_PAGE
        currCards = data[dataParameter].slice(startingCardIndex, startingCardIndex + CARDS_PER_PAGE);
    }

    const handleClick = (inc) => {
        const newStartIndex = (currPage + inc) * CARDS_PER_PAGE;
        const newEndIndex = newStartIndex + CARDS_PER_PAGE - 1;
        console.log(newStartIndex, newEndIndex);
        if (newStartIndex < 0 || newEndIndex > totalCards.length) {
            //Ignore the click
            return;
        }
        setCurrPage(currPage + inc);
    }


    const updatePage = (pageNum) => {
        if (pageNum) {
            setCurrPage(pageNum - 1);
        }
        else {
            console.log(pageNum);
        }
    }
    if (error) {
        console.log(error);
    } else if (loading) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    } else {
        return (
            <div style={{ border: "1px solid red", display: "flex", height: "80vh", width: "95vw", flexDirection: "row", justifyContent: "space-around", alignContent: "center" }}>

                {currCards.map(c => <Card key={c.id} title={c.title} description={c.description} />)}

                {/* <button onClick={()=>handleClick(-1)} > Dec </button>
            {currCards.map(c => <Card key={c.id} title={c.title} description = {c.description} language= {c.language} />)};
            {/* <button onClick={()=>handleClick(-1)} > Dec </button>
            <button onClick={()=>handleClick(1)} >Inc</button> */}

                <Pagination count={Math.ceil(totalCards.length / CARDS_PER_PAGE)} updatePage={updatePage} />
            </div>

        )
    }
};
export default Container;