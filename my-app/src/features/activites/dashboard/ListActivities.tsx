import React from 'react'
import { Button, Item, Label, Segment } from 'semantic-ui-react'
import { Activites } from '../../../app/models/activites'

interface Props {
    activities : Activites[];
    activitySelected : (id: string) => void;
    DeleteActivity : (id:string) => void;
}

export default function ListActivities({ activities , activitySelected , DeleteActivity }:Props ){
    return (
        <Segment>
            <Item.Group divided>
            {activities.map(activity =>(
                <Item key={activity.id}>
                    <Item.Content>
                        <Item.Header as='a'>{activity.title}</Item.Header>
                        <Item.Meta>{activity.date}</Item.Meta>
                        <Item.Description>
                        {/* <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' /> */}
                            <div>{activity.description}</div>
                            <div>{activity.city}, {activity.venue}</div>
                        </Item.Description>
                        <Item.Extra>
                            <Button onClick ={()=> activitySelected(activity.id)} floated='right' content="view" color="blue"/>
                            <Button onClick ={()=> DeleteActivity(activity.id)} floated='right' content="delete" color="red"/>
                            <Label basic content={activity.categorie}/>
                        </Item.Extra>
                    </Item.Content>
                </Item>
            ))}
            </Item.Group>
        </Segment>
    )
}