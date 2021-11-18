import React from 'react'

import "./Form.css"

const Form = ({ handleUserName, handleSearchUser}) => {
    return (
        <div className="bg-gradient-to-b from-grey via-white to-grey   ">
            <form className=" flex  justify-center" onSubmit={e => handleSearchUser(e)}>
                <input 
                    type="text" 
                    placeholder="Search a git-hub user" 
                    className="input-box text-xs text-black w-32 md:w-96 lg:mt-5 lg:h-10 lg:w-1/4 lg:text-xl" 
                    onChange={({ target }) => handleUserName(target)} />
                <input 
                    type="submit" 
                    value="Search" 
                    className="submit bg-green font-bold text-white p-2 rounded-r-lg md:px-4 md:w-32 hover:bg-orange lg:mt-5" />
            </form>
        </div>
    )
}

export default Form
