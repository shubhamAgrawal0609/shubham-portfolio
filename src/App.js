import logo from './logo.svg';
import './App.css';
import { Button } from 'flowbite-react';
import Cnavbar from './component/Cnavbar';
import Cfooter from './component/Cfooter';
import Header from './component/Header';
import About from './component/About';
import Project from './component/Project';
import Contact from './component/Contact';
import Connect from './component/Connect';

function App() {
  return (
    <div className=' bg-black flex-col min-h-[100vh] overflow-x-hidden ' >
      <Cnavbar  />
      <Header/>
      <About/>
      <Contact/>
      <Connect/>
      
      {/* <Project/> */}
      <Cfooter className =' bg-black justify-self-end -mb-24 '/>
    </div>
  )
}

export default App;
