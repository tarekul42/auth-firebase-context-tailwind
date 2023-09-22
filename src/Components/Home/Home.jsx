import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

const Home = () => {
    const user = useContext(AuthContext)
    return (
        <div className='text-center'>
            this is {user && <span>{user.displayName}</span>}
        </div>
    );
};

export default Home;