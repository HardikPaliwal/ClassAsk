import React, { Component } from "react";
import "./Home.css";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {Button, Card, Divider, TextField} from "@material-ui/core";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Axios from "axios"
import { DataTable } from "grommet";
const testData = [{name:"class1"}, {name:"class2"}];

class HomeLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false, 
            name: "", 
            data: []
        };
        this.loadData()
        .then((response) =>{
             this.setState({data: Array.from(Object.keys(response.data), k=>[`${k}`, response.data[k]])});
             console.log(this.state.data);
        }).catch(function (error) { 
            console.log(error);
        })
        // this.setState({data: [...data]}); 
    }

    loadData = () =>{
        return Axios.post("http://localhost:2000/api/class/get", { username: localStorage.getItem("username")}) 
    }
    handleClose= () =>{
        this.setState({open: false, name:"" });
    }
    handleClickOpen = () =>{
        this.setState({open: true});
    }
    moveToClass = () =>{
        window.location.href = "/classroom"
    }
    handleSubmit(name){ 
        Axios.post("http://localhost:2000/api/class", {"className": name, username: localStorage.getItem("username")}) 
        .then(function(response){ console.log(response); })
        .catch(function (error) { console.log(error); }); 
        this.loadData()
        .then((response) =>{
             this.setState({data: Array.from(Object.keys(response.data), k=>[`${k}`, response.data[k]])});
             console.log(this.state.data);
        }).catch(function (error) { 
            console.log(error);
        })    
    }
    handleClose= () =>{
        this.setState({open: false, name:"" });
    }

    onSubmitClick = (e) => {
        console.log(this.state.name);
        this.handleSubmit(this.state.name);
        this.handleClose();
    }

    onChangeTextfield = (event) => {
        const text = event.target.value.replace(/^\s+/g, "");
        this.setState({name:text});
    }

    render() { return (
        <Card className="card">
            <div className="header">
                <h1 className="title">Classes</h1>
                <Fab className="add-button" onClick={this.handleClickOpen} size="small">
                    <AddIcon/>
                </Fab>
            </div>
            <div className="cards">
                {
                    this.state.data.map((data) => {
                        return (
                            <div className="class-card">
                                <p> {data[1].className} </p>
                                <Button className="start-button" color="primary" size="small" onClick= {this.moveToClass}>Start</Button>
                            </div>
                        )
                    })
                }
            </div>

            <Dialog open={this.state.open} onClose={this.handleClose} className="dialog">
                <DialogTitle id="form-dialog-title">Create New Class</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter the name of the class.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        fullWidth
                        onChange={this.onChangeTextfield}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={this.onSubmitClick} color="primary">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </Card>
    )}
};


export default HomeLayout;
