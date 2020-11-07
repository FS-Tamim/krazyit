import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import ImagePreview from './components/ImagePreview/ImagePreview';
import TshirtPage from './components/TshirtPage/TshirtPage';

function App() {
  return (
   <Router>
     <Switch>
       <Route path='/home'>
         <Home></Home>
       </Route>
       <Route path='/imagePreView'>
         <ImagePreview></ImagePreview>
       </Route>
       <Route path='/tshirtPage'>
         <TshirtPage></TshirtPage>
       </Route>
       <Route path='/home'>
         <Home></Home>
       </Route>
       <Route exact path='/'>
         <Home></Home>
       </Route>
       <Route path='*'>
         <NotFound></NotFound>
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
