import React from 'react';
import styled from "styled-components"
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import {Link} from "react-router-dom"

const Container = styled.div `
    width: 200px;
`
const List = styled.ul `
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0;
    >li:first-child{
        color:#7d7d84;
    }
`
const ListItem = styled.li `
    display: flex;
    align-items: center;
    >span{
        padding-left: 5px;
    }
}
`
const LinkHome = styled(Link) `
    text-decoration:transparent;
    display: flex;
    align-items: center;
    color:#7d7d84;
    >span{
        padding-left: 5px;
    }
`
export default () => {
  return (
    <Container>
        <List>
            <ListItem>
                <LinkHome to="/">
                <HomeIcon/>
                <span>Home</span>
                </LinkHome> 
            </ListItem>
            <ListItem>/</ListItem>
            <ListItem>
                <WhatshotIcon/>
                <span>Pokemon</span>
            </ListItem>
        </List>
    </Container>
  );
}