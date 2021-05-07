import React, { ChangeEvent, useState } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { Activites } from '../../../app/models/activites'

interface Props{
    activity : Activites | undefined;
    handleCloseForm : () => void;
    CreatOrEdit : (activity: Activites) => void;
}

export default function ActivityForm( {handleCloseForm , activity:SelectedActivity , CreatOrEdit} :Props){
    const initialState = SelectedActivity ?? {
        id: '',
        title: '',
        date: '',
        description: '',
        categorie: '',
        city: '',
        venue: '',
    }

    const [activity , setActivity] = useState(initialState);

    function handleActivty(){
        CreatOrEdit(activity);
    }

    function handleChangeInpute(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name , value} =event.target;
        setActivity({...activity , [name]: value})
    }
    return(
        <Segment clearing>
            <Form onSubmit={handleActivty} autoComplete="off">
                <Form.Input placeholder="Title" value={activity.title} name="title" onChange={handleChangeInpute}/>
                <Form.TextArea placeholder="Description" value={activity.description} name="description" onChange={handleChangeInpute}/>
                <Form.Input placeholder="Categorie" value={activity.categorie} name="categorie" onChange={handleChangeInpute}/>
                <Form.Input placeholder="Date" value={activity.date} name="date" onChange={handleChangeInpute}/>
                <Form.Input placeholder="City" value={activity.city} name="city" onChange={handleChangeInpute}/>
                <Form.Input placeholder="Venue" value={activity.venue} name="venue" onChange={handleChangeInpute}/>
                <Button floated="right" positive type="submit" content="Submit"/>
                <Button onClick={handleCloseForm} floated="right" type="button" content="Cancel"/>
            </Form>
            
        </Segment>
    )
}