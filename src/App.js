import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar/Navbar';
import organikone from './organic_oner.png';
import organiktwo from './organic_twor.png';
import organikthree from './organic_fhreer.png'
import Product from './Components/Products/Product';
import AllCategories from './Components/Filter/AllCategories';
import AboutUs from './Components/AboutUs/AboutUs';






function App() {
  return (
    
      <div className="wrapper">
       <Navbar />
       
       <div className="wrapp">
        <h2> КОРЕЙСКАЯ КОСМЕТИКА</h2>

        <p className='par'>Корейская косметика является одной из лучших в мире. Она прекрасно справляется с появлением возрастных морщин, улучшает состояние кожи и волос. Даже декоративные средства обладают защитными функциями, благодаря чему вы будете уверены в том, что ваша кожа сохранит свою красоту и молодость.</p>
        <div className='wrapp_block'>
          <div className='block'>
            
             
            <img className='pic'  src={organikthree} alt='kor' width="60px" />
            <p>ЭФФЕКТИВНОСТЬ И НАТУРАЛЬНОСТЬ</p>
          </div>
          <div className='block'>
            
            <img className='pic' src={organikone} alt='kor' width="80px" />
            <p>МНОГОСТУПЕНЧАТАЯ СИСТЕМА УХОДА</p>
          </div>
          <div className='block'>
          <img className='pic'  src={organiktwo} alt='kor' width="60px" />
          <p>ВЫСОКОТЕХНОЛОГИЧНОЕ ПРОИЗВОДСТВО</p>
          </div>
        </div>
        </div>
       
       <div>
        <AllCategories />
        <Product />
        <AboutUs />
       </div>
       <Footer />
    </div>
    
  );
}

export default App;
