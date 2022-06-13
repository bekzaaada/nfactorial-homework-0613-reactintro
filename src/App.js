import { format } from 'date-fns'
import './App.css'

import logo from './img/logo.png'
import m from './img/m.jpg'
import m1 from './img/m1.jpeg'
import m2 from './img/m2.jpeg'
import m3 from './img/m3.jpeg'
import m4 from './img/m4.jpeg'

function App() {
  const current = new Date();
  const date = format(new Date(), 'dd/MM/yyyy hh:mm')
  
  return (
   <>
    <div className='base'>
      <div className='header'>
        <div className='leftSide'>
          <Header/>
          <form>
              <input className='input' type="text" name='text' color='#595959'/>
          </form>
        </div>
        <h2>{date}</h2>
        
      </div>  
      <div className='content'>
        <div id="img-wrapper">
          <div className='image'>
            <img className='img' src={m4} alt="m"/>
            <h1 className='text'> Heey</h1>
          </div>
          <div className='image'>
            <img className='img' src={m} alt="m2" />
            <h1 className='text'>Let's</h1>
          </div>
          <div className='image'>
            <img className='img' src={m1} alt="m3" />
            <h1 className='text'>Give</h1>
          </div>
          <div className='image'>
            <img className='img' src={m2} alt="m4" />
            <h1 className='text'> All</h1>
          </div>
          <div className='image'>
            <img className='img' src={m3} alt="m1" />
            <h1 className='text'>You Can</h1>
          </div>
        </div>
      </div>
    </div>
</>
  );
}
function Header(){
  return (
  <img src={logo} alt="Logo" />
 
  );
}



export default App;
