import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    block: {
        display: 'block',
        margin: 'auto 40px auto 40px',
        float: 'left',
    },
    image: {
        height: '50vh',
        weight: '50vh',
    }
});

export default function ImageTile(props){

    const classes = useStyles();

    const where = "./uploads/" + props.src;

    return (<div className={classes.block}>
        <div>
            <img className={classes.image} src= {where} alt = {props.name}/>
        </div>
    </div>);
}