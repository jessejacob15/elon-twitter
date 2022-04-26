import "./App.css";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import Navigation from "./components/NavBar/Navbar";

function App() {
  return (
    <>
      <Navigation />
      <div className="App">
        <TwitterTimelineEmbed sourceType="profile" screenName="elonmusk" />
      </div>
    </>
  );
}

export default App;
