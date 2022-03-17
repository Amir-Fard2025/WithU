import { getCardActionsUtilityClass } from "@mui/material";
import { borderBottom } from "@mui/system";
import React, {useState, useEffect} from "react"; 
import Card from "../Card/Card"
import {GET_ALL_CARDS} from "../../utils/queries"
import { useQuery } from "@apollo/client";


const Container = () => {
    const {loading, data, error}= useQuery(GET_ALL_CARDS);

    console.log(loading, data);


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
            {data.resourcesCards.map(c => <Card key={c.id} title={c.title} description = {c.description} />)};
        </div>
        
        )
    }
    };
    export default Container; 