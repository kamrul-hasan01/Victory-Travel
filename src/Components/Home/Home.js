import React from 'react';

import AdventureExp from '../AdventureExp/AdventureExp';
import Banner from '../Banner/Banner';
import DisplayPackages from '../DisplayPackages/DisplayPackages';

import GetTouch from '../GetTouch/GetTouch';
import HeroicPart from '../HeroicPart/HeroicPart';
import Tent from '../Tent/Tent';
import TipsNews from '../TipsNews/TipsNews';



const Home = () => {




    return (
        <div className="bg-light">

            <Banner></Banner>
            <HeroicPart></HeroicPart>
            <DisplayPackages></DisplayPackages>
            <Tent></Tent>
            <TipsNews></TipsNews>
            <AdventureExp></AdventureExp>

            <GetTouch></GetTouch>


        </div>
    );
};

export default Home;