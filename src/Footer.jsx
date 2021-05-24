import React from 'react'
import { Typography } from '@material-ui/core'
import useStyles from './styles'

function Footer(props) {
    const classes = useStyles()
    return (
    <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
            This is my footer
        </Typography>
        <Typography variant="subtitle1" align='center' color="primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ex nam atque, vero suscipit itaque labore deleniti maiores corrupti ullam ut officia in accusantium ea? Ratione expedita vel nostrum deleniti?
        </Typography>
    </footer>
    )
}

export default Footer