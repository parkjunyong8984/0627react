import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Github} from 'react-bootstrap-icons';
const Portfolio = () =>{
    return(
        <>
        <header id="hd" className="fixed-top">
            <div className="d-flex justify-content-between align-items-center container">
                <h1><a href="#" className="d-block"><img src='./img/logo.svg' alt="로고" className="logo"/></a></h1>
                <ul id="gnb" className="d-flex">
                    <li><a href="#slide">배너</a></li>
                    <li><a href="#review">나의 소개</a></li>
                    <li><a href="#contact">나의 연락처</a></li>
                </ul>
                <ul id="sns" className="d-flex">
                    <li className="git"><a href=""><Github/></a></li>
                    <li><a href=""><img src='./img/notion.jpg' alt="" /></a></li>
                </ul>
            </div>

        </header>
        <div id="slide" className="vh-100">
            <Swiper 
            loop={true}
            autoplay={true}
            loopedSlides={1}
            className="mySwiper">
            <SwiperSlide><div className="vh-100 slide-1" style={{backgroundImage : "url('./img/slider1.jpg')"}}></div></SwiperSlide>
            <SwiperSlide><div className="vh-100 slide-2" style={{backgroundImage : "url('./img/slider2.jpg')"}}></div></SwiperSlide>
            <SwiperSlide><div className="vh-100 slide-3" style={{backgroundImage : "url('./img/slider3.jpg')"}}></div></SwiperSlide>
        </Swiper>

        </div>
        {/* <div id="about" className="vh-100 bg-white"></div> */}
        <div id="review" className="">
            <div className="vh-100">
                <div className="h-100 row align-items-center">
                    <div className="col-4">
                        <div className="img1">
                            <img src='./img/col1.jpg' alt="" />
                        </div>
                        <p>안녕하세요 프론트엔드 개발자 지망생입니다</p>
                    </div>
                    <div className="col-4">
                        <div className="img2">
                            <img src='./img/col2.jpg' alt="" />
                        </div>
                        <p>이름은 박준용입니다</p>
                    </div>
                    <div className="col-4">
                        <div className="img3">
                            <img src='./img/col3.jpg' alt="" />
                        </div>
                        <p>가능한 기술은 react/Js/jQ/css/html/figma/</p>
                    </div>
                </div>
            </div>
            
        </div>
        <div id="contact" className="vh-100 bg-warning"></div>
        </>
    )
};

export default Portfolio;