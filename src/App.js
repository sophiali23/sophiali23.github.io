import React, {useLayoutEffect} from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import {
  navBar,
  mainBody,
  about,
  work,
  repos,
  leadership,
  skills,
  getInTouch,
  experiences
} from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Work from "./components/home/Work";
import Project from "./components/home/Project";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/home/Skills";
// import { Blog } from "./components/blog/Blog";
// import BlogPost from "./components/blog/BlogPost";
import GetInTouch from "./components/home/GetInTouch.jsx";
import Leadership from "./components/home/Leadership.jsx";

import Experience from "./components/home/Experience";
import PagerDutyWork from "./pages/PagerDutyWork.jsx";
import PagerDutyHackDays from "./pages/PagerDutyHackDays.jsx";
import WattpadWork from "./pages/WattpadWork.jsx";

const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
        ref={ref}
      />
      {about.show && (
        <AboutMe
          heading={about.heading}
          message={about.message}
          link={about.imageLink}
          imgSize={about.imageSize}
          resume={about.resume}
        />
      )}
      {
        experiences.show && (
          <Experience experiences={experiences}/>
        )
      }
      {work.show && (
        <Work
          heading={work.heading}
        />
      )}
      {repos.show && (
        <Project
          heading={repos.heading}
          username={repos.gitHubUsername}
          length={repos.reposLength}
          specfic={repos.specificRepos}
        />
      )}
      {leadership.show && (
        <Leadership
          heading={leadership.heading}
          message={leadership.message}
          img={leadership.images}
          imageSize={leadership.imageSize}
        />
      )}
      {skills.show && (
        <Skills
          heading={skills.heading}
          hardSkills={skills.hardSkills}
          softSkills={skills.softSkills}
        />
      )}
      
    </>
  );
});

const ScrollToTop = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 

const App = () => {
  const titleRef = React.useRef();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      <ScrollToTop>
        {navBar.show && <Navbar ref={titleRef} />}
        <Routes>
          <Route path="/" exact element={<Home ref={titleRef} />} />
          <Route path="/pagerduty" element={<PagerDutyWork/>}/>
          <Route path="/pagerduty-hacks" element={<PagerDutyHackDays/>}/>
          <Route path="/wattpad" element={<WattpadWork/>}/>
        </Routes>
        {/* {false && <Route path="/blog" exact component={Blog} />}
        {false && <Route path="/blog/:id" component={BlogPost} />} */}
        <Footer>
          {getInTouch.show && (
            <GetInTouch
              heading={getInTouch.heading}
              message={getInTouch.message}
              email={getInTouch.email}
            />
          )}
        </Footer>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
