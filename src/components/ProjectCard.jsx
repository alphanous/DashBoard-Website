import React from 'react';
import CountUp from 'react-countup'

const ProjectCard = (props) => {
    return (
        <div className="project-card">
            <div className="upper">
                <div className="card_left">
                    <h2>{props.name}</h2>
                    <h1><CountUp start={0} end= {props.amount} /></h1>
                </div>
                <div className="card_right">
                    <i className={props.icon}></i>
                </div>
            </div>
            <div className="lower">
                <p><span className='num'>{props.num}%</span> then yesterday</p>
            </div>
        </div>
    );
};

export default ProjectCard;