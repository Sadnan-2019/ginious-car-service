import React from 'react';
import Gallery from '../../Gallery/Gallery';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
          return (
                    <div>
                          {/* <h3>this is home</h3>    */}
                          <PageTitle title="Home"></PageTitle>
                          <Banner></Banner>
                          <Services></Services> 
                          <Experts></Experts>
                         <Gallery></Gallery>
                    </div>
          );
};

export default Home;