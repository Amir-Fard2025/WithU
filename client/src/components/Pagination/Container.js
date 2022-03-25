import { getCardActionsUtilityClass } from "@mui/material";
import { borderBottom } from "@mui/system";
import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import { useQuery } from "@apollo/client";
import Pagination from "./Pagination";

const CARDS_PER_PAGE = 2;
const Container = ({ variables, query, dataParameter }) => {

    const { loading, data, error } = useQuery(query,
        {
            variables
        });


    const [currPage, setCurrPage] = useState(-1);
    const [totalCards, setTotalCards] = useState([]);
    let currCards = [];
    if (totalCards.length === 0 && !loading && data) {
        setTotalCards(data[dataParameter]);
        setCurrPage(0);
        console.log(data)
    }
    if (currPage > -1 && !loading && data) {
        const startingCardIndex = (currPage) * CARDS_PER_PAGE
        currCards = data[dataParameter].slice(startingCardIndex, startingCardIndex + CARDS_PER_PAGE);
    }




    const updatePage = (pageNum) => {
        if (pageNum) {
            setCurrPage(pageNum - 1);
        }
        // else {
        //     console.log(pageNum);
        // }
    }

    if (error) {
        console.log(error);
        return (
            <div>
                oops, seems like there are no cards associated with your search. Please
                try again with a different tag :){" "}
            </div>
        );
    } else if (loading) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    } else {
        return (
            <div style={{ display: "flex", height: "80vh", width: "95vw", flexDirection: "row", justifyContent: "space-around", alignContent: "center" }}>

                {currCards.map(c => <Card key={c.id} title={c.title} description={c.description} languages={c.language} screenshot={c.screenshot} />)}

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