import Container from "../Pagination/Container"
import { GET_LIKED_CARDS_BY_USER_ID } from "../../utils/queries";



const CreatedLikedContainer = () => {

    return (<Container
        query={GET_LIKED_CARDS_BY_USER_ID}
        dataParameter={"getAllUserLikedCards"}
        sx={{
            position: "absolute",
            top: "100px",

        }}
    />)

}

export default CreatedLikedContainer;