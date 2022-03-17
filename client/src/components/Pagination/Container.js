import { getCardActionsUtilityClass } from "@mui/material";
import { borderBottom } from "@mui/system";
import React, {useState, useEffect} from "react"; 
import Card from "../Card/Card"

const getAllUserCards = "hello from suer cards";

const Container = () => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false); 
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage, setCostsPerPage] = useState(6);

    useEffect(() => {
        const fetchCards = async () => {
            setLoading(true);
            const res = await getAllUserCards; // VERIFY WITH BACKEND
            setCards(res);
            setLoading(false);
        }
        fetchCards();
    }, []);

   if(loading) {
       return (
           <div>
               <p>Loading...</p>
           </div>
       )
   }
    return (
        <div>
        <Card/>
        </div>
        
    )
};
export default Container; 