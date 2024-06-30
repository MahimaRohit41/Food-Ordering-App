import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import About from './Components/About';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

function App() {
  //Autintication code

  const [userName, setUserName] = useState();

  useEffect(() => {
    // make API call and send User name and password
    const data = {
      name: 'Mahima Rohit'
    }
    setUserName(data.name);
  }, [])
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName }}>
        <div className="App">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>


  );
}


export default App;
