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
    height: '-webkit-fill-available',
    padding: '64px 64px 0 64px',
    margin: 0,
    backgroundColor: 'transparent',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: '100%'
  },
  control: {
    padding: theme.spacing(4),
  },
  card: {
    maxWidth: 400,
    minWidth: 250
  },
  cardContent: {
    height: '-webkit-fill-available',
    fontSize: 10,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
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
  },
  item: {
    height: '-webkit-fill-available'
  },
  gridContainer: {
    height: '-webkit-fill-available'
  }
}));

const isManager = true;

const Home: React.FC = () => {
  const classes = useStyles();
  if (isManager) {
  return (
    <Box className={classes.root}>
      <Grid className="grid-container-spacing2" container spacing={2} alignItems="center">
        <Grid item xs={12} >
          <Grid container justify="center" spacing={2}>
            <Grid key={1} item className={classes.item}>
              <Link className={classes.link}  to="/donationIntentions">
                <Card className={classes.card}>
                  <CardActionArea className={classes.cardContent}>
                    <FavoriteBorder color="primary" className={classes.icon}/>
                    <CardContent className={classes.cardContentClass}>
                      <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                        Intenções
                      </Typography>
                      {/* <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
                        Descrição
                      </Typography> */}
                    </CardContent>
                  </CardActionArea>
                  {/* <CardActions>
                    <Button size="small" color="primary">
                      Saber mais
                    </Button>
                  </CardActions> */}
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
                      {/* <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
                        Descrição
                      </Typography> */}
                    </CardContent>
                  </CardActionArea>
                  {/* <CardActions>
                    <Button size="small" color="primary">
                      Saber mais
                    </Button>
                  </CardActions> */}
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
                      {/* <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
                        Descrição
                      </Typography> */}
                    </CardContent>
                  </CardActionArea>
                  {/* <CardActions>
                    <Button size="small" color="primary">
                      Saber mais
                    </Button>
                  </CardActions> */}
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
                      {/* <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
                        Descrição
                      </Typography> */}
                    </CardContent>
                  </CardActionArea>
                  {/* <CardActions>
                    <Button size="small" color="primary">
                      Saber mais
                    </Button>
                  </CardActions> */}
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
                      {/* <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
                        Descrição
                      </Typography> */}
                    </CardContent>
                  </CardActionArea>
                  {/* <CardActions>
                    <Button size="small" color="primary">
                      Saber mais
                    </Button>
                  </CardActions> */}
                </Card>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
  } else {
    return (
      <Box className={classes.root}>
        <Grid container spacing={2} alignItems="center" >
          <Grid item xs={12} >
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
                        {/* <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
                          Descrição
                        </Typography> */}
                      </CardContent>
                    </CardActionArea>
                    {/* <CardActions>
                      <Button size="small" color="primary">
                        Saber mais
                      </Button>
                    </CardActions> */}
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
                        {/* <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
                          Descrição
                        </Typography> */}
                      </CardContent>
                    </CardActionArea>
                    {/* <CardActions>
                      <Button size="small" color="primary">
                        Saber mais
                      </Button>
                    </CardActions> */}
                  </Card>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default Home;
