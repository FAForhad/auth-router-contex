import React, { useContext } from 'react';
import { AuthContexts } from '../../Contexts/UserContext/UserContext';

const Home = () => {
    const { user } = useContext(AuthContexts)
    console.log(user)
    return (
        <div>
            <h1>this is home for {user?.email}</h1>
        </div>
    );
};

export default Home;