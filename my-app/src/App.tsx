import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import 'semantic-ui-css/semantic.min.css'
// import DemoItem from "./DemoItem"
// import { duck } from './demo';
import axios from "axios"
import { Header, List } from 'semantic-ui-react';

function App() {
  const [activities , setAvtivities] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:5000/api/Activity/').then(response=>{
      console.log(response);
      setAvtivities(response.data);
    })
  }, [])
  return (
    <div >
       <Header as='h1' icon='users' content="Reactivity" />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <List>
          {activities.map((activity: any) => (
            <List.Item key={activity.id}>
              {activity.title}
            </List.Item>
          ))}
        </List>
    </div>
  );
}

export default App;
