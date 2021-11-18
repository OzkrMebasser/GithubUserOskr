import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

//Components
import ReposCard from '../../Components/ReposCard/ReposCard';
import Loader from '../../Components/Loader/Loader';
import { Link } from 'react-router-dom';

const Repos = () => {
   
    //Hooks
    const { user } = useParams();
    //State
    const [repos, setRepos] = useState([])
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setRepos([])
        setLoader(true)
        const handleUserRepos = async () => {
            const response = await fetch(
                `https://api.github.com/users/${user}/repos`
            );
            const result = await response.json();
            setRepos(result)
            console.log(result);
        }
        handleUserRepos();
        setLoader(false)
    }, [user])

    return (
        <div className="bg-gradient-to-t from-grey via-white to-grey  ">
            <div>
                
            <h4 className="text-2xl p-8 self-center"><span className="font-bold text-black">{user}</span> Repositories</h4>
            
            <button value="button" className="px-4 py-2 rounded bg-black text-white hover:bg-red my-4 w-50" id="whoobe-ibemp"><Link to="/">Go back...</Link></button>
            

            <div className="flex flex-wrap justify-center ">
                {repos && repos.length > 0 && !loader ? (
                    repos.map((user) => (
                        <ReposCard
                        key={user?.id}
                        name={user?.name}
                        />
                    ))
                ) : <Loader />
                }
            </div>
        </div>

        </div>
        
    )
}

export default Repos
