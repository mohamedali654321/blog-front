import React ,{useState ,useEffect} from 'react'
import axios from 'axios'
import Card from './Card'
import FilterBar from './FilterBar'
import './Hero.css'
export default function Hero() {
const cards=[
{
    image:"https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Strapi_Custom_Plugin_11_afa46c0f75.jpg",
    tag:"Guides & Tutorials",
    title:"How to build a Movie app using Strapi and Angular",
    text:"his tutorial will leverage two amazing techs, Angular and Strapi, to build a movie app.The primary focus of this tutorial is to learn how we can use Strapi to build APIs and use them from an Angular app.",
    name:"Mohamed Ali",
    date:"May 18, 2021"
    
},
{
    image:"https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Strapi_Custom_Plugin_8_92fd247ab9.jpg",
    tag:"Guides & Tutorials",
    title:"How to build a Movie app using Strapi and Angular",
    text:"his tutorial will leverage two amazing techs, Angular and Strapi, to build a movie app.The primary focus of this tutorial is to learn how we can use Strapi to build APIs and use them from an Angular app.",
    name:"Mohamed Ali",
    date:"May 18, 2021"
    
},
{
    image:"https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Strapi_Custom_Plugin_7_8d40c54791.jpg",
    tag:"Guides & Tutorials",
    title:"How to build a Movie app using Strapi and Angular",
    text:"his tutorial will leverage two amazing techs, Angular and Strapi, to build a movie app.The primary focus of this tutorial is to learn how we can use Strapi to build APIs and use them from an Angular app.",
    name:"Mohamed Ali",
    date:"May 18, 2021"
    
},
{
    image:"https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Frame_30_3_0106182f4e.png",
    tag:"Guides & Tutorials",
    title:"How to build a Movie app using Strapi and Angular",
    text:"his tutorial will leverage two amazing techs, Angular and Strapi, to build a movie app.The primary focus of this tutorial is to learn how we can use Strapi to build APIs and use them from an Angular app.",
    name:"Mohamed Ali",
    date:"May 18, 2021"
    
},
{
    image:"https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Strapi_Guided_Tour_3_63b2959749.png",
    tag:"Guides & Tutorials",
    title:"How to build a Movie app using Strapi and Angular",
    text:"his tutorial will leverage two amazing techs, Angular and Strapi, to build a movie app.The primary focus of this tutorial is to learn how we can use Strapi to build APIs and use them from an Angular app.",
    name:"Mohamed Ali",
    date:"May 18, 2021"
    
},
{
    image:"https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Frame_30_2_169dc2c394.png",
    tag:"Guides & Tutorials",
    title:"How to build a Movie app using Strapi and Angular",
    text:"his tutorial will leverage two amazing techs, Angular and Strapi, to build a movie app.The primary focus of this tutorial is to learn how we can use Strapi to build APIs and use them from an Angular app.",
    name:"Mohamed Ali",
    date:"May 18, 2021"
    
},
{
    image:"https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Frame_30_5b0438a506.png",
    tag:"Guides & Tutorials",
    title:"How to build a Movie app using Strapi and Angular",
    text:"his tutorial will leverage two amazing techs, Angular and Strapi, to build a movie app.The primary focus of this tutorial is to learn how we can use Strapi to build APIs and use them from an Angular app.",
    name:"Mohamed Ali",
    date:"May 18, 2021"
    
},
{
    image:"https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Frame_30_5b0438a506.png",
    tag:"Guides & Tutorials",
    title:"How to build a Movie app using Strapi and Angular",
    text:"his tutorial will leverage two amazing techs, Angular and Strapi, to build a movie app.The primary focus of this tutorial is to learn how we can use Strapi to build APIs and use them from an Angular app.",
    name:"Mohamed Ali",
    date:"May 18, 2021"
    
},
{
    image:"https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Frame_30_5b0438a506.png",
    tag:"Guides & Tutorials",
    title:"How to build a Movie app using Strapi and Angular",
    text:"his tutorial will leverage two amazing techs, Angular and Strapi, to build a movie app.The primary focus of this tutorial is to learn how we can use Strapi to build APIs and use them from an Angular app.",
    name:"Mohamed Ali",
    date:"May 18, 2021"
    
},
{
    image:"https://d2zv2ciw0ln4h1.cloudfront.net/uploads/i18n_blogpost_cover_1_5fde0f850d.png",
    tag:"Guides & Tutorials",
    title:"How to build a Movie app using Strapi and Angular",
    text:"his tutorial will leverage two amazing techs, Angular and Strapi, to build a movie app.The primary focus of this tutorial is to learn how we can use Strapi to build APIs and use them from an Angular app.",
    name:"Mohamed Ali",
    date:"May 18, 2021"
    
},
{
    image:"https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Strapi_and_Next_Corporate_Starter_2_1_1367251155.jpg",
    tag:"Guides & Tutorials",
    title:"How to build a Movie app using Strapi and Angular",
    text:"his tutorial will leverage two amazing techs, Angular and Strapi, to build a movie app.The primary focus of this tutorial is to learn how we can use Strapi to build APIs and use them from an Angular app.",
    name:"Mohamed Ali",
    date:"May 18, 2021"
    
},
{
    image:"https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Strapi_and_Next_Corporate_Starter_1_5c662ccc63.jpg",
    tag:"Guides & Tutorials",
    title:"How to build a Movie app using Strapi and Angular",
    text:"his tutorial will leverage two amazing techs, Angular and Strapi, to build a movie app.The primary focus of this tutorial is to learn how we can use Strapi to build APIs and use them from an Angular app.",
    name:"Mohamed Ali",
    date:"May 18, 2021"
    
},
]


const [visible,setVisible]=useState(6);
const [card,setCard]=useState([]);
const BACKEND_URL="http://54.220.211.123:1339"
const endPoint="http://54.220.211.123:1339/articles"

const showMoreItems=()=>{
    setVisible(prevValue =>
        prevValue + 3 
        
        );
      
}


  useEffect(()=>{
     axios.get(endPoint).
       then( async res=>{
       await setCard(res.data);
        console.log(res.data)

})
.catch(err=>console.log(err))
},[])

    return (
        <div className="container" >
            <div className="maxWidth">

                <div className="wrapper">
                    <div className="innerWrapper">
                        <div className="title">
                            <h1 className="label">
                                <span className="text" >Blog</span>

                            </h1>

                        </div>

                    </div>

                </div>
                <div className="triangle">
                    <div className="triangle-wrapper">
                        <div className="dots">
                            <div className="ratio">
                                <img src="/images/dots.svg" className="Img" />

                            </div>

                        </div>
                        <div className="image">
                            <div className="ratio">
                                <img src="/images/triangle.svg" className="Img" />

                            </div>

                        </div>

                    </div>

                </div>

            </div>
            <div className="articles">
                <div className="maxwidth">
                    <div className="styles-wrapper">
                        <div className="innerWrapper">
                            <FilterBar />
                            <div className="tagResault">
                                <div className="tagsWrapper"></div>
                                <p className="text">Showing {visible <= card.length ? visible: card.length} of {card.length} Blog Posts</p>

                            </div>
                            <div className="cardsGrid">


                               {
                                   card.slice(0,visible).map(item=>(
                                       <Card
                                           image={BACKEND_URL + item.image.url}
                                           tag={item.category.name}
                                           title={item.title}
                                           text={item.text}
                                           name={item.author}
                                           date={item.date}
                                       />
                                   ))

                               }
                                

                            </div>
                            <div className="buttonContainer" >
                                <div className="styles-button">
                                    <span className="shadow"></span>
                                    <div className="background">
                                        <div className="hoverCircle"></div>
                                    </div>
                                    <a className="buttonLink" onClick={showMoreItems}  >
                                        See more
                                  <svg
                                            className="svgStyle"
                                            viewBox="0 0 11 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M5 9.4l3.2-3.8L5 1.8a1 1 0 01-.2-.7c0-.3 0-.6.2-.7.4-.4.9-.4 1.2 0L10 4.9c.3.4.3 1 0 1.4L6 10.8c-.3.4-.8.4-1.2 0-.3-.4-.3-1 0-1.4z"
                                                fill="#74E4A2"
                                            ></path>
                                            <path
                                                d="M1 4.7a.9.9 0 100 1.8V4.7zm7.4 0H1v1.8h7.4V4.7z"
                                                fill="#74E4A2"
                                            ></path>
                                        </svg>
                                    </a>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>


            </div>
        </div>
    )
}
