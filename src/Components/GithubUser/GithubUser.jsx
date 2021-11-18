import React from 'react'
import {Link} from 'react-router-dom'

//Styles
import"./GithubUser.css"

const GithubUser = ({ url,name, username, followers, following, repos, avatar, bio}) => {
    return (
        <div className="flex justify-center text-sm  bg-gradient-to-r from-grey via-white to-grey  ">
            <div className="container w-72 items-center shadow-2xl rounded-3xl mt-12 ">
            <div class="flex space-x-4 items-center rounded-tl-lg rounded-tr-lg px-6 py-2  text-white bg-black hover:bg-blue hover:text-black ">
            <i class="far fa-user-circle fa-2x"></i>
                <h1 class="text-2xl  font-semibold ">{name}</h1> 
            </div>
                <img src={avatar} class=" w-full h-56 object-cover object-center "  alt="avatar"/>
            <div class="flex items-center px-3 py-2 bg-white hover:bg-black  ">
                <i class=" text-orange far fa-folder-open fa-2x"></i>
                <p class="mx-3 text-black hover:text-white font-semibold "><Link to={`/repos/${username}`}>{repos}    Public Repos</Link></p>
            </div>
            <div class="flex items-center px-3 py-2 bg-white hover:bg-black ">
                      <i class="text-green fas fa-user-friends fa-2x"></i>
                <h1 class=" text-black hover:text-white px-2 text-sm font-semibold"><Link to={`/followers/${username}`}>{followers}    Followers</Link></h1>
            </div>
            <div class="flex items-center px-3 py-2 bg-white hover:bg-black">
            <i class="text-blue fas fa-walking fa-2x"></i>
                <h1 class="text-black hover:text-white px-2 text-sm font-semibold">{following}    Following</h1>
            </div>
            <div class="flex items-center px-3 py-2 bg-white hover:bg-black">
            <i class="text-red  fas fa-info-circle fa-2x"></i>
                <p class=" hover:text-white px-2 text-sm font-semibold">{bio}</p>
            </div>
          
            <div class="flex items-center px-3 py-2 bg-white hover:bg-black mb-12">
            <i class=" text-violet fab fa-github-alt fa-2x"></i>
                <p class=" hover:text-white px-2 text-sm text-black font-semibold"><a href={url} target="_blank">GitHub URL</a></p>
            </div>
        </div>
    </div>
        
        
    )
}

export default GithubUser
