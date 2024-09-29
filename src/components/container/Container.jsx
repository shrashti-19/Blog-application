import react, { Children } from "react";

function Container({children}){
    return(
       <div className="w-full-max-7xl mx-auto px-4 ">
           {children}
       </div>
    )
}

export default Container;