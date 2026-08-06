import { Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { Riple } from "react-loading-indicators";

const Protected = ({children}) => {

    const {loading, user} = useAuth();

    if(loading){
        return (
            <main>
                <Riple color="#ffffff" size="medium" text="" textColor="#ffffff" />
            </main>
        )
    }
    if(!user){
       return <Navigate to={'/login'}/>
    }
  return children;
}

export default Protected