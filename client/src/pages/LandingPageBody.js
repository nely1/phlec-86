import React from "react";
import "./LandingPage.css";

function LandingPageBody() {
  return (
    <>
      <div data-testid="landingPage" className="landingBodyGrid">
        <div className="landingBodyGridItem landingBodyGridItemLeft">
          <h1 className="landingBodyHeading">
            With You <br></br> Every Step of the Way
          </h1>
          <p className="text1 landingBodyText">
            Phlec Travels is a web app designed to record the journeys you have
            been, and help you discover where to go next
          </p>
          <div className="landingBodyLogInOut">
            <div className="landingBodyLogIn landingBodyLogInOutButton">
              <a href="/login">
                <h1>Sign In</h1>
              </a>
            </div>
            <div className="landingBodyLogOut landingBodyLogInOutButton">
              <a href="/signUp">
                <h1>Sign Up</h1>
              </a>
            </div>
          </div>
        </div>
        <div className="landingBodyGridItem landingBodyGridItemRight">
          <img
            className="landingBodyImage"
            src="https://images.pexels.com/photos/1933316/pexels-photo-1933316.jpeg?cs=srgb&dl=pexels-stein-egil-liland-1933316.jpg&fm=jpg"
            alt="Aurora Borealis"
          ></img>
        </div>
      </div>
    </>
  );
}

export default LandingPageBody;
