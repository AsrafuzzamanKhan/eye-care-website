import React from 'react';
import Services from '../../Services/Services/Services';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import EyeCare from '../MiddleItem/EyeCares/EyeCare/EyeCare';
import MiddleItem from '../MiddleItem/MiddleItem';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MiddleItem></MiddleItem>
            <EyeCare></EyeCare>
            <Services></Services>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;