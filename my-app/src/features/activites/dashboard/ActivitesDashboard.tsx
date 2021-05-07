import React from 'react'
import { Grid, GridColumn, List } from 'semantic-ui-react'
import { Activites } from '../../../app/models/activites'
import ActivityDetails from '../detailsActivities/ActivityDetails'
import ActivityForm from '../form/ActivityForm'
import ListActivities from './ListActivities'

interface Props {
    activities : Activites[];
    activitySelect : Activites | undefined ;
    activitySelected: (id: string) => void;
    activityCancel: () => void;
    FormtMode : boolean;
    handleOpenForm : (id: string) => void;
    handleCloseForm: () => void;
    CreatOrEdit : (activity: Activites) => void;
    DeleteActivity : (id:string) => void;
}

export default function DashboardAcyivites({activities , activitySelect , activitySelected , activityCancel , FormtMode , handleOpenForm , handleCloseForm , CreatOrEdit , DeleteActivity} : Props){
    return(
        <Grid>
            <Grid.Column width='10'>
                <ListActivities 
                    activities={activities}
                    activitySelected = {activitySelected}
                    DeleteActivity = {DeleteActivity}
                />
            </Grid.Column>
            <Grid.Column width='6'>
                {activitySelect && !FormtMode &&
                <ActivityDetails handleOpenForm = {handleOpenForm} activitySelect={activitySelect} activityCancel={activityCancel}/>}
                {FormtMode &&
                <ActivityForm handleCloseForm = {handleCloseForm} activity={activitySelect} CreatOrEdit={CreatOrEdit}/>}
            </Grid.Column>

        </Grid>
    )
}