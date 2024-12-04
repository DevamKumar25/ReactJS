import React from "react";
import { useParams } from "react-router-dom";


function User(){
    const { Userid } = useParams();
    return(
        <div className="p-4 bg-green-700 m-10 text-white">User:{Userid}</div>
    )
}

export default User;
