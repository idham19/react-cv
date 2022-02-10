import React from 'react';

const Hobbies = () => {
    return (
        <div className='hobbies'>
            <h3>Hobbies</h3>
            <ul>
                <li className='hobby'><i className='fas fa-running'></i> <span> Running</span></li>
                <li className='hobby'><i className='fas fa-hiking'></i> <span>Hinking</span></li>
                <li className='hobby'><i className='fas fa-seedling'></i> <span>Permaculture</span></li>
                <li className='hobby'><i className='fab fa-bitcoin'></i> <span>Crypto money</span></li>
                <li className='hobby'><i className='fas fa-rocket'></i> <span>Space</span></li>
            </ul>
        </div>
    );
};

export default Hobbies;