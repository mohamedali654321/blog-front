import React, { useState, useEffect } from 'react'
import './Details.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Details({ match }) {
    const slug = match.params.slug;
    const [details, SetDetails] = useState([])
    const BACKEND_URL = "http://54.220.211.123:1334";
    const endPoint = `http://54.220.211.123:1334/articles/${slug}`;
    useEffect(() => {
        axios.get(endPoint)
            .then(async res => {

                await SetDetails(res.data)
            })
            .catch(err => console.log(err))
    }, []);


    return (
        <div className="Container" >
            <div className="HomeLinkWrapper">
                <Link to="/" className="home-link"><span className="HomeLinkContainer">
                    <span className="label">Back to articles</span>
                    <svg className="SmallArrow" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 9.4l3.2-3.8L5 1.8a1 1 0 01-.2-.7c0-.3 0-.6.2-.7.4-.4.9-.4 1.2 0L10 4.9c.3.4.3 1 0 1.4L6 10.8c-.3.4-.8.4-1.2 0-.3-.4-.3-1 0-1.4z" fill="#8c4bff">
                        </path><path d="M1 4.7a.9.9 0 100 1.8V4.7zm7.4 0H1v1.8h7.4V4.7z" fill="#8c4bff"></path></svg>
                </span></Link>
            </div>


            <section className="styles-gradient-right">


                <div className="style-wrapper">
                    <div className="Wrapper-bg">
                        <div className="innerWrapper">
                            <h1 className="Title">{details.title}</h1>

                            <div className="Ratio">
                                <div className="children">
                                    <div className="ImageCover">
                                        {
                                            details.image && (<div className="style-ratio">
                                                <img src={BACKEND_URL + details.image.url} className="Img" />
                                            </div>
                                            )
                                        }

                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="ContentWrapper">
                        <div className="ContentContainer">
                            {/* <div className="ShareContainer">
                                <ul className="share">
                                    <li className="socialMedia">
                                        <Link to="/" className="Button" style={{ color: "#4e6294" }}>
                                            <div className="Icon">
                                                <i className="fab fa-facebook-f"></i>
                                            </div>
                                            <span>Facebook</span>
                                        </Link>

                                    </li>

                                    <li className="socialMedia">
                                        <Link to="/" className="Button" style={{ color: "#4e6294" }}>
                                            <div className="Icon">
                                                <i className="fab fa-twitter"></i>
                                            </div>
                                            <span>Twitter</span>
                                        </Link>
                                    </li>

                                    <li className="socialMedia">
                                        <Link to="/" className="Button" style={{ color: "#4e6294" }}>
                                            <div className="Icon">
                                                <i className="fab fa-linkedin"></i>
                                            </div>
                                            <span>Linkedin</span>
                                        </Link>
                                    </li>

                                    <li className="socialMedia">
                                        <Link to="/" className="Button" style={{ color: "#4e6294" }}>
                                            <div className="Icon">
                                                <i className="fab fa-linkedin"></i>
                                            </div>
                                            <span>Linkedin</span>
                                        </Link>
                                    </li>


                                </ul>

                            </div> */}
                            <div className="InnerContentContainer">
                               <div className="Content">
                                   <div className="Author"></div>
                               </div>

                            </div>
                        </div>
                    </div>


                </div>




            </section>

        </div>
    )
}

export default Details
