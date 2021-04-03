import {React, useState, useEffect} from 'react';
import axios from 'axios';
import {makeStyles} from '@material-ui/core/styles';
import ImageTile from './ImageTile';

const useStyles = makeStyles({
    body: {
        backgroundImage: 'url(https://assets.hongkiat.com/uploads/minimalist-dekstop-wallpapers/4k/preview/03.jpg)',
        backgroundSize: 'cover',
        height:'100vh',
        maxWidth: '100%',
        overflow: 'hidden',
        objectFit: 'fill',
    },

    root: {
        border: '2px solid black',
        width: '25%',
        margin: '50px auto 50px auto',
        padding: '10px',
        backgroundColor: 'white',
    },

    heading: {
        textAlign: 'center',
    },

    gallery: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        maxWidth: '100%',
    }

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
            return (images.map((image) => <ImageTile
                name = {image.name}
                src = {image.img.data}
            />));
        }
        else {
            return "Oops";
        }
    };

    useEffect(() => {
        getImages();
    });

    return (<div className={classes.body}>
        <div className={classes.root}>
            <div className={classes.heading}>
                <h1>Gallery</h1>
            </div>
        </div>
        <div className={classes.gallery}>
            {imgArray()}
        </div>
    </div>);
};