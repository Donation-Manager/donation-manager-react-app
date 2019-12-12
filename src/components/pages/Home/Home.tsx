import React from 'react';
import { Link } from 'react-router-dom';
import '@rmwc/icon/icon.css';
import './Home.css';
import { GridList, GridTile, GridTilePrimary, GridTileTitle, GridTileSecondary } from '@rmwc/grid-list';
import '@material/grid-list/dist/mdc.grid-list.css';
import '@material/typography/dist/mdc.typography.css';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import AddIcon from '@material-ui/icons/Add';
import { Grid, makeStyles, Paper, Card, CardActionArea, CardMedia, CardContent, Typography, Button, CardActions, Icon, Box } from '@material-ui/core';
import backgroundImage from '../../../images/background.jpg'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(8),
    margin: 0
  },
  control: {
    padding: theme.spacing(4),
  },
  card: {
    maxWidth: 400,
    minWidth: 200
  },
  cardContent: {
    fontSize: 10,
    paddingTop: theme.spacing(2),
    textDecoration: 'none',
    textAlign: "center"
  },
  cardContentClass: {
    height: '100% !important'
  },
  icon: {
    fontSize: 130
  },
  addIcon: {
    marginLeft: -50,
    fontSize: 50
  },
  link: {
    textDecoration: 'none'
  },
  title: {
    fontSize: 17
  },
  description: {
    fontSize: 13
  }
}));

const isManager = true;

const Home: React.FC = () => {
  const classes = useStyles();
  if (isManager) {
  return (
    <div className="home-image-box">
      <Box className={classes.root}>
        <Grid container justify="center" spacing={2}>
          <Grid key={1} item>
            <Link className={classes.link}  to="/donationIntentions">
              <Card className={classes.card}>
                <CardActionArea className={classes.cardContent}>
                  <FavoriteBorder color="primary" className={classes.icon}/>
                  <CardContent className={classes.cardContentClass}>
                    <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                      Intenções
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
          <Grid key={2} item>
            <Link className={classes.link}  to="/donations">
              <Card className={classes.card}>
                <CardActionArea className={classes.cardContent}>
                <InsertEmoticonIcon color="primary" className={classes.icon}/>
                  <CardContent>
                    <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                      Doações
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
          <Grid key={4} item>
            <Link className={classes.link}  to="/donationNeedCreation">
              <Card className={classes.card}>
                <CardActionArea className={classes.cardContent}>
                  <EmojiPeopleIcon color="primary" className={classes.icon}/>
                  <AddIcon color="primary" className={classes.addIcon}/>
                  <CardContent>
                    <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                      Cadastro de Necessidade
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
          <Grid key={3} item>
            <Link className={classes.link}  to="/donationsNeeds">
              <Card className={classes.card}>
                <CardActionArea className={classes.cardContent}>
                <EmojiPeopleIcon color="primary" className={classes.icon}/>
                  <CardContent>
                    <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                      Necessidades de Doações
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
          <Grid key={4} item>
            <Link className={classes.link}  to="/stock">
              <Card className={classes.card}>
                <CardActionArea className={classes.cardContent}>
                  <ListAltIcon color="primary" className={classes.icon}/>
                  <CardContent>
                    <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                      Estoque
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
  } else {
    return (
      <div className="home-image-box">
        <Box className={classes.root}>
          <Grid container justify="center" spacing={2}>
            <Grid key={0} item>
              <Link className={classes.link} to="/donationIntentionCreation">
                <Card className={classes.card}>
                  <CardActionArea className={classes.cardContent}>
                    <FavoriteBorder color="primary" className={classes.icon}/>
                    <AddIcon color="primary" className={classes.addIcon}/>
                    <CardContent>
                      <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                        Cadastro de Intenções
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
            <Grid key={3} item>
              <Link className={classes.link}  to="/donationsNeeds">
                <Card className={classes.card}>
                  <CardActionArea className={classes.cardContent}>
                  <EmojiPeopleIcon color="primary" className={classes.icon}/>
                    <CardContent>
                      <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                        Necessidades de Doações
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}

export default Home;
