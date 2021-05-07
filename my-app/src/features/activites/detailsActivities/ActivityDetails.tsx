import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import { Activites } from '../../../app/models/activites'

interface Props{
    activitySelect : Activites;
    activityCancel: () => void;
    handleOpenForm : (id: string) => void;
}

export default function ActivityDetails({activitySelect , activityCancel , handleOpenForm}:Props){
    return(
        <Card fluid>
            <Image src={`/assets/categoryImages/${activitySelect.categorie}.jpg`} />
            <Card.Content>
                <Card.Header>{activitySelect.title}</Card.Header>
                <Card.Meta>
                    <span className='date'>{activitySelect.date}</span>
                </Card.Meta>
                <Card.Description>
                    {activitySelect.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths="2">
                    <Button onClick={() => handleOpenForm(activitySelect.id)} basic color="blue" content="Edit"/>
                    <Button onClick={activityCancel} basic color="grey" content="Cnacel"/>
                </Button.Group>
            </Card.Content>
        </Card>
    )
}