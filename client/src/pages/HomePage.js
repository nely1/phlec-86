import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ImageCarousel from "../components/ImageCarousel";
import { getAlbums } from "../actions/album";
import { getPlans } from "../actions/plan";
import "./HomePage.css";

function HomePage({ loginState }) {
    const userInfo = JSON.parse(localStorage.getItem("profile"));
    const history = useNavigate();
    let setCurrentImageIndex = () => null;

    useEffect(() => {
        if (!loginState) {
            history("/login");
        }
    }, [history, userInfo, loginState]);

    const albums = useSelector((state) => state.album);
    const plans = useSelector((state) => state.plan);
    let msg = "";
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAlbums(JSON.parse(localStorage.getItem("profile"))));
        dispatch(getPlans(JSON.parse(localStorage.getItem("profile"))));
    }, [dispatch]);

    let createArrayOfFirstPhoto = (albums) => {
        let newArray = [];
        for (const element of albums) {
            if (element?.images[0]) {
                newArray.push(element.images[0]);
            }
        }
        return newArray;
    };
    let recentImage =
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb";

    let images = [
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
    ];

    if (albums.length > 0) {
        if (albums[albums.length - 1]?.images[0]) {
            recentImage = albums[albums.length - 1].images[0];
        }
        images = createArrayOfFirstPhoto(albums);
    }
    // console.log(albums);

    if (plans.length > 0) {
        let recentPlan = plans[0];
        const timeRemaining = (new Date(recentPlan.scheduledDate).getDate()- new Date().getDate());
        if (timeRemaining === 0){
            msg = "Today is the day!";
        } else {
            msg = timeRemaining + " days away!";
        }
    }


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
                                {plans.length > 0 ? (
                                    <div className="HomePageUpComingBottom">
                                        <h2>{plans[0].tripName}</h2>
                                        <div className="HomePageUpComingTimeBox">
                                            <h2>{msg}</h2>
                                        </div>
                                        <div className="HomePageUpComingGoTo ">
                                            <span className="material-symbols-outlined">double_arrow</span>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="HomePageUpComingBottom">
                                        <h2>Adventure awaits...</h2>
                                        <h2>Plan a new trip!</h2>
                                        <div className="HomePageUpComingGoTo ">
                                            <a href={"/plan"}>
                                                <span className="material-symbols-outlined">double_arrow</span>
                                            </a>
                                        </div>
                                    </div>
                                )}
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
                                        {albums.length > 0 ? (
                                            <p className="text3 HomePageRecentMemoriesBottomOverlayText">
                                                {albums[albums.length - 1]?.name}
                                            </p>
                                        ) : (
                                            <p className="text3 HomePageRecentMemoriesBottomOverlayText">
                                                No albums exist. Click through to add one!
                                            </p>
                                        )}

                                        <div className="HomePageRecentMemoriesgGoTo">
                                            {albums.length > 0 ? (
                                                <a href={"/albumView/" + albums[albums.length - 1]?._id}>
                                                    <span className="material-symbols-outlined">double_arrow</span>
                                                </a>
                                            ) : (
                                                <a href={"/record"}>
                                                    <span className="material-symbols-outlined">double_arrow</span>
                                                </a>
                                            )}
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
