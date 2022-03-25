import Container from "../Pagination/Container"
import { GET_CREATED_CARDS_BY_USER_ID } from "../../utils/queries";



const CreatedCardsContainer = () => {

    return (<Container
        query={GET_CREATED_CARDS_BY_USER_ID}
        dataParameter={"getAllUserCreatedCards"}
        sx={{
            position: "absolute",
            top: "100px",

        }}
    />)

}



export default CreatedCardsContainer;