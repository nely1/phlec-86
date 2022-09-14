import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ImageCarousel from "../components/ImageCarousel";
import "./HomePage.css";

function HomePage() {
  const loggedIn = JSON.parse(localStorage.getItem("profile"));
  const history = useNavigate();

  useEffect(() => {
    if (!loggedIn) {
      history("/Login");
    } else {
      console.log(loggedIn);
    }
  }, [history, loggedIn]);

  /* using hooks. Might help with backend (?) */
  const [user] = useState(() => {
    return "Pat012";
  });
  const [dashImage] = useState(() => {
    return "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
  });
  const recentImage =
    "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80";
  const images = [
    {
      url: "http://cdn.cnn.com/cnnnext/dam/assets/181010131059-australia-best-beaches-cossies-beach-cocos3.jpg",
      alt: "one",
    },
    {
      url: "https://whatsonblog.melbourne.vic.gov.au/wp-content/uploads/2020/07/DJI_0031_D-Hannah.jpg",
      alt: "two",
    },
    {
      url: "https://images.pexels.com/photos/130576/pexels-photo-130576.jpeg?cs=srgb&dl=pexels-pok-rie-130576.jpg&fm=jpg",
      alt: "three",
    },
  ];

  return (
    <>
      <div className="HomePageBase">
        <div className="HomePageGrid">
          <div className="HomePageGridItem">
            <div className="HomePageTitle">
              <h1>Welcome Back, {user}</h1>
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
                  <span className="material-symbols-outlined">
                    double_arrow
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="HomePageGridItem">
            <div className="HomePageMainPictureContainer">
              <ImageCarousel images={images}></ImageCarousel>
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
                  <p className="text3 HomePageRecentMemoriesBottomOverlayText">
                    Lake Mir
                  </p>
                  <div className="HomePageRecentMemoriesgGoTo">
                    <span className="material-symbols-outlined">
                      double_arrow
                    </span>
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

export default HomePage;
