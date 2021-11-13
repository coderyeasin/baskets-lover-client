import React from 'react';
import Advantages from '../Advantages/Advantages';
import Banner from '../Banner/Banner';
import Baskets from '../Baskets/Baskets';
import BaskInfo from '../BaskInfo/BaskInfo';
import Info from '../Info/Info';
import Newsletter from '../Newsletter/Newsletter';
import Testimonal from '../Testimonal/Testimonal';

const Home = () => {
    return (
        <div className="m-0">
            <Banner></Banner>
            <Info></Info>
            <Advantages> </Advantages>
            <Baskets></Baskets>
            <BaskInfo></BaskInfo>
            <Testimonal></Testimonal>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;