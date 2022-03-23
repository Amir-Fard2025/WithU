// import { getCardActionsUtilityClass } from "@mui/material";
// import { borderBottom } from "@mui/system";
import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import Card from "../Card/Card";
import Pagination from "./Pagination";
import { GET_PUBLISHED_CARDS_BY_TAG } from "../../utils/queries";
import { GET_ALL_CARDS } from "../../utils/queries";

const CARDS_PER_PAGE = 2;
const PageContainer = ({ tags, query }) => {
    // let variables = null;
    // if (tags != null) {
    //     const tagsArray = tags.split(".");
    //     const tagName = tagsArray[0];
    //     variables = { tagName }
    // }

    // console.log(query)
    // console.log(variables)
    // const { loading, data, error } = useQuery(GET_PUBLISHED_CARDS_BY_TAG, { variables: {tagName: tags} });
    console.log('HERE!')
    const { loading, data, error } = useQuery(GET_ALL_CARDS);

    const [currPage, setCurrPage] = useState(-1);
    const [totalCards, setTotalCards] = useState([]);
    let currCards = [];
    if (totalCards.length === 0 && !loading) {
        setTotalCards(data.resourcesCards);
        setCurrPage(1);
    }
    if (currPage > -1) {

        const startingCardIndex = (currPage) * CARDS_PER_PAGE
        currCards = data.resourcesCards.slice(startingCardIndex, startingCardIndex + CARDS_PER_PAGE);
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
            <div>

                {currCards.map(c => <Card key={c.id} title={c.title} description={c.description} />)};
                {/* <button onClick={()=>handleClick(-1)} > Dec </button>
            <button onClick={()=>handleClick(1)} >Inc</button> */}
                <Pagination count={Math.ceil(totalCards.length / CARDS_PER_PAGE)} updatePage={updatePage} />
            </div>

        )
    }
};
export default PageContainer;