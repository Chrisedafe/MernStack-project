import React from 'react';
import Header from '../../navigation/header/header.component';
import Directory from '../../component/directory/directory.component';
import './home-styles.css'


const Homepage = () => {
    return (
        <>
        <Header/>
       <div className="homepage">
        <Directory />
       </div>
        </>
    );
}
export default Homepage;
