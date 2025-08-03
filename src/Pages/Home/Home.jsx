import React from 'react';
import Navbar from '../../Components/HomeComponent/Navbar/Navbar';
import Footer from '../../Components/HomeComponent/Footer/Footer';
import Banner from '../../Components/HomeComponent/Banner/Banner';
import EduHighlights from '../../Components/HomeComponent/EduHighlights/EduHighlights';
import AcademicJourney from '../../Components/HomeComponent/AcademicJourney/AcademicJourney';
import TopScholars from '../../Components/HomeComponent/TopScholars/TopScholars';

const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <TopScholars></TopScholars>
            <AcademicJourney></AcademicJourney>
           <EduHighlights></EduHighlights>
        </div>
    );
};

export default Home;