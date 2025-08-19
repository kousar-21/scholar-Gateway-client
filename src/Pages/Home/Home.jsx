import React from 'react';
import EduHighlights from '../../Components/HomeComponent/EduHighlights/EduHighlights';
import AcademicJourney from '../../Components/HomeComponent/AcademicJourney/AcademicJourney';
import TopScholars from '../../Components/HomeComponent/TopScholars/TopScholars';
import HowItWorks from '../../Components/HomeComponent/HowItWorks/HowItWorks';
import Testimonials from '../../Components/HomeComponent/Testimonials/Testimonials';
import StatsSection from '../../Components/HomeComponent/StatsSection/StatsSection';
import BlogSection from '../../Components/HomeComponent/BlogSection/BlogSection';
import Partners from '../../Components/HomeComponent/Partners/Partners';
import Newsletter from '../../Components/HomeComponent/Newsletter/Newsletter';
import Pricing from '../../Components/HomeComponent/Pricing/Pricing';
import Contact from '../../Components/HomeComponent/Contact/Contact';
import Banners from '../../Components/HomeComponent/Banners/Banners';

const Home = () => {
    return (
        <div>

            <Banners></Banners>
            <HowItWorks></HowItWorks>
            <TopScholars></TopScholars>
            <AcademicJourney></AcademicJourney>
            <Testimonials></Testimonials>
            <StatsSection></StatsSection>
            <BlogSection></BlogSection>
            <Partners></Partners>
            <Newsletter></Newsletter>
            <Pricing></Pricing>
            <Contact></Contact>
            <EduHighlights></EduHighlights>
        </div>
    );
};

export default Home;