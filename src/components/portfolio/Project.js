
import React, { Component, useState} from 'react';

class Project extends Component {
    state={
        showInfo:false
            }
            handleInfo=()=>{
           this.setState({showInfo:!this.state.showInfo})
        
            }

   
    render() {
        console.log(this.props);
        let {name, languagesIcons, source, info , picture} = this.props.item;

        return (
            <div className='project'>
                <div className="icons">
                {languagesIcons.map(icon=>
                   <i className={icon} key={icon}></i>
                )}
                </div>
                <h3>{name}</h3>
                <img src={picture} alt="" onClick={this.handleInfo} />
                <span className="infos" onClick={this.handleInfo}>
                    <i className='fas fa-plus-circle'></i>
                </span>
                {
                    this.state.showInfo && (

                        <div className="showInfos">
                        <div className="infosContent">
                            <div className="sourceCode">
                                <a href={source} rel='noopener noreferer' className='button' target='_blank'>Source Code</a>
                            </div>
                            <div className="head">
                                <h2>{name}</h2>
                            </div>
                           
                            <div className="text"><p>{info}</p></div>
                            <div className="button return" onClick={this.handleInfo}>
                                back to the page
                            </div>
                        </div>
                       
                        </div>
                    )
                        
                    }

                
            </div>
        );
    }
}

export default Project;