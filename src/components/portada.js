import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DeviceHubIcon from "@material-ui/icons/DeviceHub";
import StraightenIcon from "@material-ui/icons/Straighten";
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import {Link} from "react-router-dom"

const urlBaseImage = "https://img.pokemondb.net/artwork/"
const Container = styled.div`
  height: 500px;
`;
const Paper = styled.div`
  margin-top: 30px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align: center;
  padding: 10px 20px 0 0;

`;
const ListaPokemon = styled.ul`
    padding:0,
    list-style:none;
`;
const PokemonImage = styled(Link) `
    display: flex;
    justify-content: stretch;
    align-content: stretch;
    align-items: center;
    flex-flow: row wrap;
    margin-top: 50px;

    /* animation */
    @keyframes slidein {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(.95);
            }
            100% {
                transform: scale(1);
            }
    }
    >img{
      height:250px;
      margin: auto;
    }
    &:hover img{
        animation-duration: 1s;
        animation-name: slidein;
        animation-iteration-count: infinite;
    }
`
export default ({ name, height, types, weight, abilities }) => {
  return (
    <Container>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12} sm={4}>
          <PokemonImage to={`pokemon/${name}`}>
            <img src={`${urlBaseImage}${name}.jpg`} alt={name} />
          </PokemonImage>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper>
            <Typography variant="h5" style={{ textTransform: "uppercase" }}>
              {name}
            </Typography>
            <Grid container spacing={2}>

              <Grid item xs={12} sm={6}>
                <List subheader={<li />}>
                    <li>
                      <ListaPokemon>
                        <ListSubheader>Height:</ListSubheader>
                        <ListItem>
                          <ListItemIcon>
                            <StraightenIcon />
                          </ListItemIcon>
                          <ListItemText primary={parseFloat(height/10)+ " m."} />
                        </ListItem>
                      </ListaPokemon>
                    </li>
                    <li>
                      <ListaPokemon>
                        <ListSubheader>Weight:</ListSubheader>
                        <ListItem>
                          <ListItemIcon>
                            <FitnessCenterIcon />
                          </ListItemIcon>
                          <ListItemText primary={weight + " lbs."} />
                        </ListItem>
                      </ListaPokemon>
                    </li>
                </List>
              </Grid>
              <Grid item xs={12} sm={6}>
                <List subheader={<li />}>
                      <li>
                        <ListaPokemon>
                          <ListSubheader>Abilities:</ListSubheader>
                          {abilities.map(data => (
                            <ListItem key={data.ability.name}>
                              <ListItemIcon>
                                <DeviceHubIcon />
                              </ListItemIcon>
                              <ListItemText primary={data.ability.name} />
                            </ListItem>
                          ))}
                        </ListaPokemon>
                      </li>
                      <li>
                        <ListaPokemon>
                          <ListSubheader>Type:</ListSubheader>
                          {types.map(data => (
                            <ListItem key={data.type.name}>
                              <ListItemIcon>
                                <SportsBasketballIcon />
                              </ListItemIcon>
                              <ListItemText
                                key={data.type.name}
                                primary={data.type.name}
                              />
                            </ListItem>
                          ))}
                        </ListaPokemon>
                      </li>
                </List>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
