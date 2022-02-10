import React from 'react';
import Navigation from '../components/Navigation'

const Home = () => {
    return (
        <div className='home'>
        <Navigation/>
        <div className="homeContent">

        <div className="content">

            <h1>Mahdi Belabbas</h1>
            <h2>Front-end developer</h2>

                    
        <div className="pdf">
<a href="./media/CV.pdf" target='_blank'>Download Resume</a>
        </div>
        
        </div>
        </div>
        </div>
    );
};

export default Home;