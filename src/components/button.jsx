import React from "react";

function Button({
    children, //text display ho jayega
    type='button',
    bgColor='bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props //jitni properties di utni spread ho jayengi
}){
  return (
    <button className= {`px-4 py-2 rounded-lg ${bgColor} ${className} , ${textColor}`} {...props}>
        {children}
    </button>
  )
}

export default Button;