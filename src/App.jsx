import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Home,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Games
} from "./components"
import Videos from './components/videos'

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary '>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center pb-2'>
          <Navbar />
        </div>
        <Home />
        <Games />
        <Videos />
        <About />
        <div className='relative '>
          <Contact />
          {/* <StarsCanvas /> */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
