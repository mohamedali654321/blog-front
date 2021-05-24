import React, { useState, useEffect } from 'react'
import './Details.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import NewsLetterBanner from './NewsLetterBanner';
import MiniCard from './MiniCard';

function Details({ match }) {
    const slug = match.params.slug;
    const [details, SetDetails] = useState([]);
    const [categories, setCategories] = useState();
    const [cardData, setCardData] = useState([])
    const BACKEND_URL = "http://54.220.211.123:1334";
    const endPoint = `http://54.220.211.123:1334/articles/${slug}`;

    useEffect(() => {
        axios.get(endPoint)
            .then(async res => {

                await SetDetails(res.data);

                await setCategories(res.data.category.slug)
            })
            .catch(err => console.log(err))
    }, [details]);


    useEffect(() => {
        axios.get(`http://54.220.211.123:1334/categories/${categories}`)
            .then(async res => {
                await console.log(res.data)
                await setCardData(res.data);


            })
            .catch(err => console.log(err))
    }, [categories])








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
                            <div className="ShareContainer">
                                <ul className="share">
                                    <li className="socialMedia">
                                        <Link to="/" className="Button" style={{ color: "#4e6294" }}>
                                            <div className="Icon">
                                                <i className="fab fa-facebook-f"></i>
                                            </div>

                                        </Link>

                                    </li>

                                    <li className="socialMedia">
                                        <Link to="/" className="Button" style={{ color: "#4e6294" }}>
                                            <div className="Icon">
                                                <i className="fab fa-twitter"></i>
                                            </div>

                                        </Link>
                                    </li>

                                    <li className="socialMedia">
                                        <Link to="/" className="Button" style={{ color: "#4e6294" }}>
                                            <div className="Icon">
                                                <i className="fab fa-linkedin"></i>
                                            </div>

                                        </Link>
                                    </li>

                                    <li className="socialMedia">
                                        <Link to="/" className="Button" style={{ color: "#4e6294" }}>
                                            <div className="Icon">
                                                <i className="fab fa-youtube"></i>
                                            </div>

                                        </Link>
                                    </li>
                                    <li className="socialMedia">
                                        <Link to="/" className="Button" style={{ color: "#4e6294" }}>
                                            <div className="Icon">
                                                <i className="far fa-envelope"></i>
                                            </div>

                                        </Link>
                                    </li>


                                </ul>

                            </div>
                            <div className="InnerContentContainer">
                                <div className="Content">
                                    <div className="Author">
                                        <div className="style-image">
                                            <div className="ratio">
                                                <img src="/images/51f6fb256629fc755b8870c801092942.png" className="avatar" />
                                            </div>
                                        </div>
                                        <div >
                                            <p className="auth">{details.author}</p>
                                            <p className="date">{details.date}</p>
                                        </div>

                                    </div>
                                    <div className="separator"></div>
                                    <div className="details">
                                        <blockquote>
                                            This article is a guest post by <Link to="/" className="nameAuth">{details.author}</Link>
                                    . He wrote this blog post through the Write for the Community program. If you are passionate about everything jamstack, open-source or javascript .
                                    </blockquote>
                                        <div dangerouslySetInnerHTML={{ __html: details.content }}></div>





                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>




                </div>




            </section>
            <div className="RelatedArticlesGrid">
                <div className="MaxWidth">
                    <section className="ArticleGradient">
                        <div className="TitleWrapper">
                            <div className="InnerTitleWrapper">
                                <div className="headerWrapper">
                                    <h1 className="typographyTitle">
                                        <span className="TitleLabel">You might be interested in</span>
                                    </h1>
                                </div>
                            </div>

                        </div>

                    </section>

                    <div className="RelatedArticlesWrapper">
                        <div className="InnerCardGrid">
                            <div className="CardGrid">
                            { cardData.articles &&(
                                cardData.articles.slice(0,3).map(article=>(
                                    <MiniCard
                                        image={BACKEND_URL + article.image.url}
                                           
                                           title={article.title}
                                           text={article.text}
                                           name={article.author}
                                           date={article.date}
                                           slug={article.slug}
                                    />
                                ))
                            )
                               
                            }

                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <NewsLetterBanner />

        </div>
    )
}

export default Details
