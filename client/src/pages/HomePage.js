import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageCarousel from "../components/ImageCarousel";
import "./HomePage.css";

function HomePage({ loginState }) {
    const userInfo = JSON.parse(localStorage.getItem("profile"));
    // console.log(userInfo);
    const history = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (!loginState) {
            history("/Login");
        }
    }, [history, userInfo, loginState]);

    /* using hooks. Might help with backend (?) */
    const recentImage =
        "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80";

    const images = [];

    console.log(currentImageIndex); // To prevent error in console
    if (!loginState) {
        return <></>;
    } else {
        return (
            <>
                <div className="HomePageBase">
                    <div className="HomePageGrid">
                        <div className="HomePageGridItem">
                            <div className="HomePageTitle">
                                <h1>Welcome Back, {userInfo.result.userName}</h1>
                                <p className="text2">Our top Picks For The Day</p>
                            </div>
                        </div>
                        <div className="HomePageGridItem">
                            <div className="HomePageUpComing">
                                <div className="HomePageUpComingTop">
                                    <h2>Upcoming Trips</h2>
                                </div>
                                <div className="HomePageUpComingBottom">
                                    <h2>Joe's exotic tour</h2>
                                    <div className="HomePageUpComingTimeBox">
                                        <h1>7 Days Away!</h1>
                                    </div>
                                    <div className="HomePageUpComingGoTo ">
                                        <span className="material-symbols-outlined">double_arrow</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="HomePageGridItem">
                            <div className="HomePageMainPictureContainer">
                                <ImageCarousel
                                    images={images}
                                    setCurrentImageIndex={setCurrentImageIndex}
                                ></ImageCarousel>
                            </div>
                        </div>
                        <div className="HomePageGridItem">
                            <div className="HomePageRecentMemories">
                                <div className="HomePageRecentMemoriesTop">
                                    <h2>Recent Memories</h2>
                                </div>
                                <div className="HomePageRecentMemoriesBottom">
                                    <img
                                        className="HomePageRecentMemoriesPicture"
                                        src={recentImage}
                                        alt="HomePageMemoriesImage"
                                    ></img>
                                    <div className="HomePageRecentMemoriesBottomOverlay">
                                        <p className="text3 HomePageRecentMemoriesBottomOverlayText">Lake Mir</p>
                                        <div className="HomePageRecentMemoriesgGoTo">
                                            <a href="albumview">
                                                <span className="material-symbols-outlined">double_arrow</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default HomePage;
