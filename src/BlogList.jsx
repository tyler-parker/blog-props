import React from 'react'
import { List, ListItem, ListItemText, Divider } from '@material-ui/core'
import useStyles from './styles'
import BlogPost from './BlogPost'

function BlogList(props) {
    const classes = useStyles()
    return (
        <List component="nav" className={classes.root} aria-label="mailbox folders">
            <BlogPost />
        </List>
    )
}

export default BlogList