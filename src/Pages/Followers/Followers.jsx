import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

//Components
import GithubUser from '../../Components/GithubUser/GithubUser';
import Loader from '../../Components/Loader/Loader';

const Followers = () => {

    //Hooks
    const { user } = useParams();
    //State
    const [followers, setFollowers] = useState([])
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setFollowers([])
        setLoader(true)
        const handleUserFollowers = async () => {
            const response = await fetch(
                `https://api.github.com/users/${user}/followers`
            );
            const result = await response.json();
            setFollowers(result)
            console.log(result);
        }
        handleUserFollowers();
        setLoader(false)
    }, [user])

    return (
        <div class="md:container md:mx-auto ">
         <button value="button" class="px-4 py-2 rounded bg-blue text-white hover:bg-red my-4 w-50" id="whoobe-ibemp"><Link to="/">Go back...</Link></button>
            <h4 className="text-2xl p-8"><span className="font-bold text-orange">{user}</span> Followers</h4>
        <div className="grid grid-cols-3">

            

            {followers && followers.length > 0 && !loader ? (

                followers.map(user => (
                    <GithubUser 
                    key={user?.id}
                    avatar={user?.avatar_url}                    
                    username={user?.login}
                    />
                ))
            ) : <Loader />
            }
            </div>
        </div>
      
    )
}

export default Followers
