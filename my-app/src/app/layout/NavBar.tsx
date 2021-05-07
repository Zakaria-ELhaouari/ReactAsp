import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";

interface Props{
    OpenForm : () => void;
}

export default function NavBar({OpenForm}:Props){
    return(
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item header>
                    <img src="./assets/logo.png" alt="logo" style={{marginRight: '10px'}}/>
                    Reactivites
                </Menu.Item>
                <Menu.Item name="Activites"/>
                <Menu.Item>
                    <Button onClick={OpenForm} positive content="Creat Activites" />
                </Menu.Item>
            </Container>
        </Menu>
    )
}