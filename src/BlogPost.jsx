import React from 'react';
import {Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function BlogPost(props) {
  const classes = useStyles();

  return (
    <Grid container xs={12}>
        <List className={classes.root}>
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={props.post.avatar} className={classes.avatar} />
            </ListItemAvatar>
            <ListItemText
            primary={props.post.title}
            secondary={
                <React.Fragment>
                <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                >
                    {props.post.author}
                </Typography>
                {`-${props.post.subTitle}`}
                </React.Fragment>
            }
            />
        </ListItem>
        <Divider variant="inset" component="li" />
        </List>
    </Grid>

  );
}