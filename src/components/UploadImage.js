import {React, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import axios from 'axios';
import querystring from 'querystring';

const useStyles = makeStyles({
    body: {

    },

    root: {

    },

    heading: {

    },

});

export default function UploadImage() {

    const classes = useStyles();
    
    const [name, changeName] = useState("");
    const [desc, changeDesc] = useState("");
    
    function sendInfo() {
        axios.post("http://localhost:4000/api/upload", querystring({}), {
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
        })
        .then(response => {
            if(response.status === 200) {
                console.log("Image uploaded!");
            }
        });
    };

    return (<div className={classes.body}>
        <div className={classes.root}>
            <div className={classes.heading}>
                <h1>Upload Image</h1>
            </div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
        </div>
    </div>);
}