import React from 'react'
import { Grid, GridList, Typography, Card, CardMedia, CssBaseline, AppBar, Toolbar } from '@material-ui/core'
// import Header from './Header'
// import Navbar from './Navbar'
import BlogPost from './BlogPost'
import Footer from './Footer'
import useStyles from './styles'

function App(props) {
    const classes = useStyles()
    return(
        <div>
            <CssBaseline />
                <AppBar position="relative">
                    <Toolbar>
                        <Typography variant="h6">Clean Blog</Typography>
                    </Toolbar>
                </AppBar>
                <Card >
                    <CardMedia className={classes.cardMedia} image='https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80' component='img'/>
                </Card>
                <GridList cellHeight={300} cols={1}>
                    <BlogPost />
                </GridList>

            <Footer />
        </div>
    )
}

export default App