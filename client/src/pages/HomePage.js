import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAlbums } from "../actions/album";
import ImageCarousel from "../components/ImageCarousel";
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

  // Display the most recent plan, along with the corresponding time remaining
  if (plans.length > 0) {
    let recentPlan = plans[0];
    const timeRemaining =
      new Date(recentPlan.scheduledDate).getDate() - new Date().getDate();
    const daysRemaining = Math.floor(
      (new Date(recentPlan.scheduledDate).getTime() - new Date().getTime()) /
        (1000 * 60 * 60 * 24)
    );
    if (timeRemaining === 0) {
      msg = "Today is the day!";
    } else if (timeRemaining === 1) {
      msg = "1 day away!";
    } else {
      msg = daysRemaining + " days away!";
    }
  }

  /* Prevents user from accessing page if not logged in, later redirected to login page in use effect */
  if (!loginState) {
    return <></>;
  } else {
    return (
      <>
        <div className="HomePageBase">
          <div className="HomePageGrid">
            <div className="HomePageBoxLeft">
              <div className="HomePageGridItem">
                <div className="HomePageTitle">
                  <h1>Welcome Back, {userInfo.result.userName}</h1>
                  <p className="text2">Your Highlights</p>
                </div>
              </div>
              <div className="HomePageMainPictureContainer">
                <ImageCarousel
                  images={images}
                  setCurrentImageIndex={setCurrentImageIndex}
                ></ImageCarousel>
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
                    <div className="HomePageUpComingLower">
                      <p></p>
                      <div className="HomePageUpComingGoTo ">
                        <a href={"/planEdit/" + plans[0]._id}>
                          <span className="material-symbols-outlined">
                            double_arrow
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="HomePageUpComingBottom">
                    <h2>Adventure awaits...</h2>
                    <h2>Plan a new trip!</h2>
                    <div className="HomePageUpComingLower">
                      <p></p>
                      <div className="HomePageUpComingGoTo ">
                        <a href={"/planView"}>
                          <span className="material-symbols-outlined">
                            double_arrow
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="HomePageGridItem"></div>
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
                        <a
                          href={"/albumView/" + albums[albums.length - 1]?._id}
                        >
                          <span className="material-symbols-outlined">
                            double_arrow
                          </span>
                        </a>
                      ) : (
                        <a href={"/record"}>
                          <span className="material-symbols-outlined">
                            double_arrow
                          </span>
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
