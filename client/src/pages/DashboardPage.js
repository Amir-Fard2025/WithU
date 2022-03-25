// import Container from "../components/Pagination/Container"
import BasicModal from "../components/Modals/Modal"
// import { GET_ALL_CARDS, GET_LIKED_CARDS_BY_USER_ID, GET_CREATED_CARDS_BY_USER_ID } from "../utils/queries";
import { useState } from "react";
import { Button } from "@mui/material";
import CreatedCardsContainer from "../components/Dashboard/UserCreatedCardsContainer";
import CreatedLikedContainer from "../components/Dashboard/UserLikedCardsContainer";

export default function DashboardPage() {
  const [displayCreatedArray, setDisplayCreatedArray] = useState(true);
  // let dataParameter = "getAllUserLikedCards"
  // let query = GET_LIKED_CARDS_BY_USER_ID


  return (
    <div style={{ border: "solid 1px green", position: "absolute", top: "30%", left: "50%", transform: "translate(-50%, -30%)" }}>
      <Button id="created-cards-btn" onClick={() => {
        setDisplayCreatedArray(true)
        // dataParameter = "getAllUserCreatedCards";
        // query = GET_CREATED_CARDS_BY_USER_ID;
        // console.log(dataParameter, query)
      }}>

        My Cards
      </Button>
      <Button id="liked-cards-btn" onClick={() => {
        setDisplayCreatedArray(false)
        // dataParameter = "getAllUserLikedCards";
        // query = GET_LIKED_CARDS_BY_USER_ID;
        // console.log(dataParameter, query)
      }}>
        Liked
      </Button>
      {displayCreatedArray ?


        <CreatedCardsContainer />

        :

        <CreatedLikedContainer />

      }


      <BasicModal />
    </div>
  );
}
