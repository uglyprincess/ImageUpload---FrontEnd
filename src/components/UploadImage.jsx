import {React, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    form: {
        '& > *': {
          width: '25ch',
          display: 'flex',
          flexDirection: 'column',
          margin: '50px auto'
        },
    },
    body: {
        backgroundImage: 'url(https://www.imaginefactory.com/wp-content/uploads/2017/04/SPACES_BG-2.jpg)',
        backgroundSize: 'cover',
        height:'100vh',
        maxWidth: '100%',
        overflow: 'hidden',
        objectFit: 'fill',
    },

    root: {
        border: '2px solid black',
        width: '35%',
        margin: '50px auto 80px auto',
        paddingBottom: '50px',
        borderRadius: '10%',
        backgroundColor: 'white',
    },

    heading: {
        textAlign: 'center',
        paddingTop: '50px',
    },

    input: {
        display: 'none',
    }

}));

export default function UploadImage() {

    const classes = useStyles();
    
    const [name, changeName] = useState("");
    const [desc, changeDesc] = useState("");
    const [img, updateImg] = useState("");
    
    function sendInfo() {
            
        const formData = new FormData();
        
        formData.append("name", name);
        formData.append("desc", desc);
        formData.append("image", img);

        axios.post("http://localhost:4000/api/upload", formData).then(response => {
            if(response.status === 200) {
                console.log("Image uploaded!");
            }
        })
        .catch(error => {
            console.log(error);
        });
    };

    function handleName(event) {
        changeName(event.target.value);
    }

    function handleDesc(event) {
        changeDesc(event.target.value);
    }

    function handleImg(event) {
        updateImg(event.target.files[0]);
        console.log(img);
    }

    return (<div className={classes.body}>
        <div className={classes.root}>
            <div className={classes.heading}>
                <h1>Upload Image</h1>
            </div>
            <form className={classes.form} noValidate autoComplete="off" encType="multipart/form-data">
                <TextField id="outlined-basic" label="Name" variant="outlined" value={name} onChange={handleName}/>
                <TextField id="outlined-basic" label="Description" variant="outlined" value={desc} onChange={handleDesc}/>
                <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                    filename="image"
                    onChange={handleImg}
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" color="primary" component="span">
                        Choose file
                    </Button>
                </label>
                <Button variant="contained" color="primary" onClick={sendInfo}>
                    Upload
                </Button>
            </form>

        </div>
    </div>);
}