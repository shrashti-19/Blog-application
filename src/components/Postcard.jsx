import React from "react";
import service, { Service } from "../appwrite/conf";
import { Link } from "react-router-dom";
function Postcard({
    $id,title,featuredImg
}){

    return(
       <Link to = {`/post/${$id}`}>
        <div className="w-full bg-gray-100 rounded-xl py-4">
            <div className="w-full justify-center mb-4">
                <img src={service.filePreview
                    (featuredImg)
                } alt={title}
                className="roundex-xl"
                ></img>
            </div>
            <h2
            className="text-xl font-bold"
            >{title}</h2>
        </div>
       </Link>
    )
}

export default Postcard;