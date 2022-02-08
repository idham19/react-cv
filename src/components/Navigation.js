import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='sidebar'>
        <div className="id">
            <div className="idContent">
             <img src="./media/billGates.jpg" alt="profile-pic" />
             <h3>mahdi profile</h3>
            </div>
        </div>

        <div className="navigation">
         <ul>

        <li>
        <NavLink to='/'  activeClassName='navActive'>
         <i className='fas fa-home'></i>
          <span>Home</span>
        </NavLink>
        </li>

        <li>
        <NavLink to='/Knowledges'  activeClassName='navActive'>
         <i className='fas fa-mountain'></i>
          <span>Knowledges</span>
        </NavLink>
        </li>

        <li>
        <NavLink to='/Portfolio'  activeClassName='navActive'>
        <i className='fas fa-image'></i>
         <span>Portfolio</span>
        </NavLink>
       </li>

        <li>
        <NavLink to='/Contact'  activeClassName='navActive'>
         <i className='fas fa-address-book'></i>
          <span>Contact</span>
        </NavLink>
      </li>
         </ul>
        </div>
        <div className="socialNetwork">
            <ul>

                <li>
                    <a href="http://linkedin.com" target='_blank' rel='noopener noreferrer' ><i className='fab fa-linkedin'></i></a>
                </li>
                <li>
                    <a href="http://github.com" target='_blank' rel='noopener noreferrer' ><i className='fab fa-github'></i></a>
                </li>
                <li>
                    <a href="http://twitter.com" target='_blank' rel='noopener noreferrer' ><i className='fab fa-twitter'></i></a>
                </li>
                <li>
                    <a href="http://codepen.com" target='_blank' rel='noopener noreferrer' ><i className='fab fa-codepen'></i></a>
                </li>                         
            </ul>
        </div>
         <div className="signtaure">
             <p>mahdi -2022</p>
         </div>


        </div>
    );
};

export default Navigation;