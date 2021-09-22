import logo from './logo.svg';
import './App.css';
import './index.css';
import Overview from './Overview';
import InternationalCareer from './InternationalCareer'
import EarlyChildhood from './EarlyChildhood';
import EarlyCareer from './EarlyCareer';
import ChelseaCareer from './ChelseaCareer';
import LaterCareer from './LaterCareer';
import Retirement from './Retirement';
import RelationshipWithPeople from './RelationshipWithPeople';
import PageIntro from './PageIntro'
import Opinion from './Opinion';
import Footer from './Footer';
import VideoPlayer from "react-background-video-player"




function App() {

  const mystyle = {
    position: "fixed", zIndex: "-99", width: "100%", height: "100vh", transition: "2s", transitionTimingFunction: "ease-in"
  }

  // src="https://youtube.com/embed/fTU1DJlPzzA?autoplay=1&controls=0&showinfo=0&autohide=1&mute=1&playlist=fTU1DJlPzzA&loop=1"
  // src="https://player.vimeo.com/video/324999599?h=1ef2f26341&autoplay=1&title=0&byline=0&portrait=0&mute=1"

  return (
    <>
    <div id="mainContainer">
      <div id="Intro">
        <div style={mystyle} id="bgvid">
          <iframe frameBorder="0" height="100%" width="100%" 
            src="https://player.vimeo.com/video/324999599?h=1ef2f26341&background=1&autoplay=1&title=0&byline=0&portrait=0&loop=1&autopause=0&muted=1"  frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" rel="0">
          </iframe>
        </div>
        <div id="restOfIntro">
          <h1>Didier Drogba</h1>
          <ul id="Nav">

            <li><a href="#Overview">Overview</a></li>
            <li><a href="#EarlyChildhood">Early Childhood</a></li>
            <li><a href="#EarlyCareer">Early Career</a></li>
            <li><a href="#ChelseaCareer">Chelsea Career</a></li>
            <li><a href="#InternationalCareer">International Career</a></li>
            <li><a href="#LaterCareer">Later Career</a></li>
            <li><a href="#Retirement">Retirement</a></li>
          </ul>
        </div>
       
      </div>
      <Overview id="Overview"/>
      <EarlyChildhood className="card"/>
      <EarlyCareer className="card" id="EarlyCareer"/>
      <ChelseaCareer className="card" id="ChelseaCareer"/>
      <InternationalCareer className="card" id="InternationalCareer"/>
      <LaterCareer className="card" id="LaterCareer"/>
      <Retirement className="card" id="Retirement"/>
      <RelationshipWithPeople className="card" id="RelationshipWithPeople"/>
      <Opinion className="card" id="Opinion"/>
      <Footer className="card" id="Footer"/>
    </div>
    </>
  );
}

export default App;
