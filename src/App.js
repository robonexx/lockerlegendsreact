import './App.scss';
import React, { /* useState, useEffect  */} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/header/Header'
/* import HallOfFame from './pages/HallOfFame' */
import HallOfFameTest from './pages/HallOfFameTest'
import History from './pages/History'
import Articles from './pages/Articles'
import Item1 from './pages/Item1';
import Item2 from './pages/Item2';
import Item3 from './pages/Item3';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import StepsAndMoves from './pages/stepsandmoves/StepsAndMoves';
/* import Loading from './components/loading/Loading' */

function App() {
  /* const [loading, setLoading] = useState(true) */

  /* useEffect(() => {
    setTimeout(() => {
        setLoading(false)
    }, 6000)
}, [])
 */
/*   
const [change, setChange] = useState(null)

useEffect (() =>{  
    function changeColor () {
      let header = document.querySelector("h1");
      let text = header.textContent.toLowerCase();
      let color;
      switch(text) {
        case 'about':
          color = "#16A085";
          break;
        case 'projects':
          color = "#E74C3C";
          break;
        case 'contacts':
          color = "#2980B9";
          break;
        default:
          color = "#F1C40F";
          break;
      }
      // update the custom property for the root element and have it cascade on the header as well
      let root = document.querySelector(":root");
      root.style.setProperty("--color-home", color);
    }
  })  */

  return (
    <Router>
      <div className="App">
        <ScrollToTop>
        {/* { loading ?
          <div>
            <Loading loading={loading} setLoading={setLoading} />
          </div>
          : */}
          <div>
            <Header />
            <Switch >
              <Route exact path="/">
                {/* <h1>HOME</h1> */}
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/history">
                <History />
              </Route>
              <Route path="/halloffametest">
                <HallOfFameTest />
              </Route>
              <Route path="/stepsandmoves">
                <StepsAndMoves />
              </Route>
              <Route path="/item1">
                <Item1 />
              </Route>
              <Route path="/item2">
                <Item2 />
              </Route>
              <Route path="/item3">
              <Item3 />
              </Route>
              <Route path="/articles">
                <Articles/>
              </Route>
              
              <Route path="/contact">
                <h1>Contacts</h1>
              </Route>
              <Route exact path="*" component={Error} />

            </Switch>
          </div>
          </ScrollToTop>
    </div>
    </Router>
  );
}

export default App;

