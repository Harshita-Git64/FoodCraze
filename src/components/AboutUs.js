import { useState } from "react";
import UserClass from "./UserClass";

const AboutUs=()=>{
    let [count,Updatecount]=useState(0)
    return(
        <div className="aboutus">
            <h1>Hello this is about us page</h1>
            <UserClass name={"Harshita Paliwal"} profile={"software engineer"} contact={"harshita23@gmail.com"}/>
            <h1>count:{count}</h1>
            <button onClick={()=>{
            //    count=count+1;
                Updatecount(count++);
               
            }}>click me</button>
            
        </div>
    )
}
export default AboutUs;