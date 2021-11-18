import React from 'react'



const ReposCard = ({key, name}) => {
    return (
        <div className="self-center rounded-md grid grid-rows-3 grid-flow-col gap-4 repos-card text-center bg-blue hover:bg-black hover:text-white shadow-md w-48 h-48 m-2 ">
            <div className=" rounded-md">
                
                <h3 className="font-bold md:text-lg self-center">{name}</h3>
                <i class="fas fa-folder-open fa-4x"></i>       
                <button value="button" class="px-4 py-2 rounded bg-blue text-white hover:bg-green my-4 w-50" id="whoobe-ibemp"><h3><a href="https://github.com/OzkrMebasser?tab=repositories" target="_blank"><i class=" text-black fas fa-code-branch fa-1x"><strong> Go to git-hub</strong></i></a></h3></button>
                    
                
            </div>
        </div>
    )
}

export default ReposCard
