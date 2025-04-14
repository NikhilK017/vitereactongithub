import Header from './header.jsx';
import Footer from './Footer.jsx';
import Stuff from './Stuff.jsx';
import MyDemo from './mydemo.jsx';
import Clock from '/src/Clock.jsx';


function App(){

  return(
    <>
      <Header/> 
      <Clock/>
      <MyDemo/>
      <Stuff name="Bob Smith" title="CEO"/>
      <Stuff name="Sue Jones" title="CFO"/>
      <Stuff name="Lukas" title="bum"/>
      <Stuff name="Bucky" title="sigma"/>
      <Stuff/> 
      <Footer/>
    </>
  );
}

export default App