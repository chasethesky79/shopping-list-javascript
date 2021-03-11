import './App.css';
import ListsContextProvider from '../src/Context/ListsContextProvider';

function App() {
  return (
    <Router>
        <div>
            <HeaderWrapper/>
            <ListsContextProvider>
                <Switch>
                    <Route exact path='/' render={props => <Lists {...props}/>}/>
                </Switch>
            </ListsContextProvider>
        </div>
      </Router>
  );
}

export default App;
