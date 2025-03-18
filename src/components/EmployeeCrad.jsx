import React from 'react'

const EmployeeCrad = (props) => {
    return (
        <div className="card_container">
            <div className="img_area" key={props.id}>
                <img src={props.src} alt="noimg" />
            </div>
            <div className="text_area">
                <h3>{props.name}</h3>
                <p>{props.position}</p>
            </div>
        </div>
    )
}

export default EmployeeCrad