import "./App.css"
import {NoButton} from "./NoButton"
import { useState, useEffect, Fragment } from 'react';
import Confetti from 'react-confetti'


function App() {
  const { height, width } = useWindowDimensions();
  const [isHovered, setIsHovered] = useState(false)
  const [randomTop, setRandomTop ]= useState(0)
  const [randomLeft, setRandomLeft] = useState(0)
  const [sheSaidYes, setSheSaidYes] = useState(false)


  function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min - 50;
  }

  const handleNo = () => {
    const randomTop = getRandomNumber(0, height);
    const randomLeft = getRandomNumber(0, width);
    setIsHovered(true)
    setRandomTop(randomTop + "px")
    setRandomLeft(randomLeft + "px")
  }

  const handleYes = () => {
    setSheSaidYes(true)
  }


  return (
    <section className="masthead" role="img" aria-label="Image Description">
      <Confetti
        run={sheSaidYes}
        recycle={sheSaidYes}
        width={width}
        height={height}
      />
      {!sheSaidYes && 
        <Fragment>
          <h1>
            Señorita hermosa, chula, preciosa!
            <br/>
            Quieres Ser Mi Novia? ❤️
          </h1>
          <div className="answers">
            <button 
              className="YesButton"
              onClick={handleYes}
            >
              YES
            </button>
            <NoButton 
              onMouseEnter={handleNo}
              isHovered={isHovered}
              randomLeft={randomLeft}
              randomTop={randomTop}
            >
              NO 
            </NoButton>
          </div>
            </Fragment>
      }
      
      {
      sheSaidYes && <h1>I knew you would say YES 😉😘🥰</h1>
      }
      
    </section>
  );
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}


export default App;
