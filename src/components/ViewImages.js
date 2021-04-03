import {React, useState, useEffect} from 'react';
import axios from 'axios';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({

});

export default function ViewImages() {
    
    const classes = useStyles();
    const [images, updateImg] = useState([]);

    function getImages(){

        axios.get("http://localhost:4000/api/gallery", {withCredentials: true}).then(response => {
            if(response.status === 200) {
                updateImg(response.data);
            }
        })
        .catch(error => {
            console.log(error);
        });
    };

    function imgArray() {
        if(images) {
            
        }
    };

    useEffect(() => {
        getImages();
    });

    return (<div>
        <div>

        </div>
    </div>);
};