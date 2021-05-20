import React from 'react'
import './Card.css'


function Card(props) {
    return (
        <div className="cardContainer">
            <a href="" className="cardArrowLink">
                <div className="card-bg">
                    <div className="background"></div>
                </div>
                <div className="card-content">
                    <div href="" className="imageCoverContainer">
                        <div className="image-cover">
                            <div className="ratio">
                                <div className="child">
                                    <div className="CoverImg">
                                        <div className="CoverRatio">
                                            <img src={props.image} className="Img" />
                                        </div>


                                    </div>

                                </div>


                            </div>

                        </div>

                    </div>
                    <div className="content">
                        <div className="listCardContent">
                            <div className="tags"><span className="Tag"><span>{props.tag}</span></span></div>
                            <h2 >{props.title}</h2>
                            <p>{props.text}</p>
                            <div className="author">
                            <p className="name">{props.name}</p>
                            <p className="date">{props.date}</p>


                            </div>

                        </div>



                    </div>



                </div>

            </a>

        </div>
    )
}



export default Card

