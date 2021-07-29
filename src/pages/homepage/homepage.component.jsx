import React from 'react';
import NavigationBar from '../../components/navigation/navigaition.component'
import Header from '../../components/header/header.component';
import ItemCardsContainer from '../../components/itemCardsContainer/itemCardsContainer.component';
import Footer from '../../components/footer/footer.component';

const Homepage = () => {
    return(
        <>
        <NavigationBar/>
        <Header/>
        <ItemCardsContainer/>
        <Footer/>
        </>
    )
}

export default Homepage;