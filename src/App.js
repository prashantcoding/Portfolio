
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import NavBar from './components/NavBar';
import About from './Pages/About';
import Home from './Pages/Home';
import Post from './Pages/Post';
import MyProject from './Pages/MyProject';
import SInglePost from './Pages/SInglePost';

function App() {
  return (
   <BrowserRouter>
   <NavBar/>
    <Switch>
        <Route component={Home} path='/' exact/>
        <Route component={About} path='/about' />
        <Route component={SInglePost} path='/post/:slug'/>
        <Route component={Post} path='/allpost'/>
        <Route component={MyProject} path='/project'/>
    </Switch>
   </BrowserRouter>
  );
}

export default App;
