import React, { useContext } from 'react';
import { AuthProvider } from '../../context/Context';

const About = () => {
    const {user} = useContext(AuthProvider)
    return (
        <div>
            about this page {user?.email}
        </div>
    );
};

export default About;