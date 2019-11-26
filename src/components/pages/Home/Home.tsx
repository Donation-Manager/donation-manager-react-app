import React from 'react';
import { Link } from 'react-router-dom';
import '@rmwc/icon/icon.css';
import { GridList, GridTile, GridTilePrimary, GridTileTitle, GridTileSecondary } from '@rmwc/grid-list';
import '@material/grid-list/dist/mdc.grid-list.css';
import '@material/typography/dist/mdc.typography.css';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import PeopleIcon from '@material-ui/icons/People';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import ListAltIcon from '@material-ui/icons/ListAlt';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import AddIcon from '@material-ui/icons/Add';
import { Grid, makeStyles, Paper, Card, CardActionArea, CardMedia, CardContent, Typography, Button, CardActions, Icon } from '@material-ui/core';
import backgroundImage from '../../../images/background.jpg'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    flexGrow: 1
    // backgroundImage: `url(${backgroundImage})`,
  },
  control: {
    padding: theme.spacing(4),
  },
  card: {
    maxWidth: 345,
    minWidth: 300,
  },
  cardContent: {
    "text-align": "center"
  },
  icon: {
    fontSize: 140
  },
  addIcon: {
    marginLeft: -50,
    fontSize: 60
  }
}));

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2} alignItems="center" >
        <Grid item xs={12} >
          <Grid container justify="center" spacing={2}>
            <Grid key={0} item>
              <Link to="/donationIntentionCreation">
                <Card className={classes.card}>
                  <CardActionArea className={classes.cardContent}>
                    <FavoriteBorder color="secondary" className={classes.icon}/>
                    <AddIcon color="secondary" className={classes.addIcon}/>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Cadastro de Intenções
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Descrição
                      </Typography>
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
            <Grid key={1} item>
              <Link to="/donationIntentions">
                <Card className={classes.card}>
                  <CardActionArea className={classes.cardContent}>
                    <FavoriteBorder color="secondary" className={classes.icon}/>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Intenções
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Descrição
                      </Typography>
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
              <Link to="/donations">
                <Card className={classes.card}>
                  <CardActionArea className={classes.cardContent}>
                  <InsertEmoticonIcon color="secondary" className={classes.icon}/>
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Doações
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Descrição
                      </Typography>
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
              <Link to="/donationsNeeds">
                <Card className={classes.card}>
                  <CardActionArea className={classes.cardContent}>
                  <EmojiPeopleIcon color="secondary" className={classes.icon}/>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Necessidades de Doações
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Descrição
                      </Typography>
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
              <Link to="/donationNeedCreation">
                <Card className={classes.card}>
                  <CardActionArea className={classes.cardContent}>
                    <EmojiPeopleIcon color="secondary" className={classes.icon}/>
                    <AddIcon color="secondary" className={classes.addIcon}/>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Cadastro de Necessidade
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Descrição
                      </Typography>
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
              <Link to="/stock">
                <Card className={classes.card}>
                  <CardActionArea className={classes.cardContent}>
                    <ListAltIcon color="secondary" className={classes.icon}/>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Estoque
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Descrição
                      </Typography>
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
    </div>
  );
}

export default Home;
