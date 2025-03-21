import heart from './heart.png';
import './App.css';
import { useState, useEffect , Button, Link} from 'react';


let heartSize;
function App() {

  const [heartSize, setHeartSize] = useState(50);
  const [ifGrows, setIfGrows] = useState(1);
  let [timeInterval, setTimeInterval] = useState(0);


  function handleClick(){
    <Link to="/another-page">
      <button>Go to Another Page</button>
    </Link>
  }

  useEffect(() =>{
    const interval = setInterval(() => {
      if(heartSize == 50)  
        setHeartSize(65);
      else if(heartSize==65)
        setHeartSize(50);

      setTimeInterval(Math.max(-400, timeInterval-6));
     
    }, 450 + timeInterval);

    return () => clearInterval(interval);
  }, [heartSize, timeInterval]);

  return (
    <div className="App">
      <div styles ="height: 50%">
          <header className="App-header">
            <a href="gallery.html" onClick={handleClick}>
            <img src={heart} className="heart-logo"  style={{width: `${heartSize}%`}} alt="logo" />
            </a>
         
          <p>
          My heart beats this fast when I see you! <br></br>
          Click the heart!!!
          </p>
   
        </header>
      </div>
    </div>
  );
}

export default App;
