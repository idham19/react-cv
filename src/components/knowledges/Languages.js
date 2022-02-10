import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
state={
languages:[
{id:1, value: 'Javascript' , xp:1.8},
{id:2, value: 'html' , xp: 2},
{id:3, value: 'css' , xp:2},
{id:4, value: 'python' , xp:0.7},

],

frameWorks:[
{id:1, value:'React', xp:1.4},
{id:2, value:'Bootstrap', xp:2},
{id:3, value:'Sass', xp:1.5},
{id:4, value:'Materiel UI', xp:0.7},
]
}

    render() {
        let{languages, frameWorks}=this.state;
        return (
            <div className="languagesFrameWorks">

        <ProgressBar
        languages={languages}
        className='languagesDisplay'
        title='languages'
        />
        <ProgressBar
        languages={frameWorks}
        className='frameWorksDisplay'
        title='framworks'/>


            </div>
        );
    }
}

export default Languages;