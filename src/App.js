import "./App.css";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import Navigation from "./components/NavBar/Navbar";

function App() {
  return (
    <div className="background">
      <Navigation />
      <div className="d-flex justify-content-center">
          <div className="logoBox">
            <img src="https://i.imgur.com/4szhJfT.png" className="App-logo" />
          </div>
          </div>
      <div className="d-flex justify-content-center">
        <div className="tweets">
          <TwitterTimelineEmbed sourceType="profile" screenName="etweetbsc" />
        </div>
      </div>
    </div>
  );
}

export default App;
