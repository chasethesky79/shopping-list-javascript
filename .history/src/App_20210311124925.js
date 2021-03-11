import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
        <div>
            <HeaderWrapper/>
            <ListsContextProvider>
                <Switch>
                    {/* <Route exact path='/' component={Lists}/> */}
                </Switch>
            </ListsContextProvider>
        </div>
      </Router>
  );
}

export default App;
