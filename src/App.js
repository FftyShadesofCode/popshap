import Header from "./components/Header"
import Leaderboard from "./components/Leaderboard"
import Slideshow from "./components/Slides"

import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
        <div className='app-wrapper'>
          <Leaderboard />
          <Slideshow />
        </div>

    </div>
  );
}

export default App;
