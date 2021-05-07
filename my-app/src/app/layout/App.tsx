import React, { Fragment, useEffect, useState } from 'react';

import 'semantic-ui-css/semantic.min.css'
import axios from "axios"
import {  Container } from 'semantic-ui-react';
import { Activites } from '../models/activites';
import NavBar from './NavBar';
import DashboardAcyivites from '../../features/activites/dashboard/ActivitesDashboard';
import {v4 as uuid} from 'uuid';

function App() {
  const [activities , setAvtivities] = useState<Activites[]>([]);
  const [activitySelect , setActivitySelect] = useState<Activites | undefined>(undefined);
  const [editMode , setEditeMode] = useState(false);
  

  useEffect(()=>{
    axios.get<Activites[]>('http://localhost:5000/api/Activity/').then(response=>{
      setAvtivities(response.data);
    })
  }, [])

  function activitySelected(id: string){
    setActivitySelect(activities.find(x => x.id === id))
  }

  function activityCancel(){
    setActivitySelect(undefined)
  }

  function handleOpenForm(id? : string){
    id ? activitySelected(id) : activityCancel();
    setEditeMode(true);
  }

  function handleCloseForm(){
    setEditeMode(false);
  }

  function handleCreatOrEdit(activity: Activites){
    activity.id ? 
              setAvtivities([...activities.filter(x => x.id !== activity.id) , activity]) 
              : setAvtivities([...activities , {...activity , id: uuid()}]);
    setEditeMode(false);
    setActivitySelect(activity);
  }

  function handleDelete(id: string){
    setAvtivities([...activities.filter(x=>x.id !== id)]);
  }
  return (   

    <Fragment >
        <NavBar OpenForm = {handleOpenForm}/>
        <Container style={{marginTop : '7em'}}>
          <DashboardAcyivites 
            activities={activities}
            activitySelect={activitySelect}
            activitySelected={activitySelected}
            activityCancel={activityCancel}
            FormtMode = {editMode}
            handleOpenForm = {handleOpenForm}
            handleCloseForm = {handleCloseForm}
            CreatOrEdit = {handleCreatOrEdit}
            DeleteActivity = {handleDelete}
          />
        </Container>
    </Fragment>
  );
}

export default App;
