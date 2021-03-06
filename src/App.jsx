import React from 'react'
import { Typography, Card, CardMedia, CssBaseline, AppBar, Toolbar } from '@material-ui/core'
import BlogPost from './BlogPost'
import Footer from './Footer'
import useStyles from './styles'
import BlogData from './blogData'

function App(props) {
    const classes = useStyles()
    const postComponent = BlogData.map(post => <BlogPost post={post} />)
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
                    {postComponent}
            <Footer />
        </div>
    )
}

export default App