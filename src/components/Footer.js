import UserContext from "../utils/UserContext";
import { useContext} from "react";

const Footer=()=>{
    const { LoggedInUser } = useContext(UserContext);
return(
    <div className="border border-t-2 border-black bg-[#2A2A2A] h-28 flex justify-center items-center gap-1 bottom-0 w-full">
    <span className="text-lg text-white tracking-wider"> Copyright @2024; Designed By</span>
    <span className="text-lg  font-bold text-slate-100 tracking-wider">{LoggedInUser} (^_^)</span>
    </div>
)
}
export default Footer;