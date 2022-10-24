import React, {useState, useEffect} from 'react';


const User = () => {
    const [user, setUser] = useState([]);
    const [error, setError]= useState([]);
    const [isLoading, setIsLoading] = useState(true);
    async function fetchUser() {
        try {
            await fetch ('https://randomuser.me/api/?results=144')
            .then (results => {
                return results.json();
            })
            .then(data => {
                let user = data.results.map((user) => {
                    let userElm ='';

                    if (typeof user !== undefined && typeof user.name !== undefined && typeof user.picture !==undefined) {
                        userElm = <div key = {user}>
                            <h2>{user.name.first} {user.name.last} </h2>
                            <img src= {user.picture.large} alt="" />
                        </div>;
                    }
                    return userElm;
                });
                setUser(user);
                setIsLoading(false);

            });
        }
        catch(error) {
            setError(error);
            setIsLoading(false);
            
        }
    }
    useEffect (()=> {
        fetchUser();
    }, []);


    return(
        <div>
            {error && <p>{error.message}</p>}
            {isLoading && <p>Loading...</p>}
            {user}
        </div>
    );
};







export default User;