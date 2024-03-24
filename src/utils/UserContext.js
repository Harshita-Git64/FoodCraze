import { createContext } from "react";

const UserContext=createContext({
    LoggedInUser:"Default user"
})
export default UserContext;