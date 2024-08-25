import './App.css';
import Available from './components/available/available';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import Home from './pages/home/home'
import Review from './pages/reviews/review';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Review/>
      <Available/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
