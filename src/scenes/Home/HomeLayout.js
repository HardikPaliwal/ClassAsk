import React from "react";
import "./Home.css";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {Button, Card, Divider, TextField} from "@material-ui/core";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const testData = [{name:"class1"}, {name:"class2"}];

const HomeLayout = () => {
    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    return (
        <Card className="card">
            <div className="header">
                <h1 className="title">Classes</h1>
                <Fab className="add-button" onClick={handleClickOpen} size="small">
                    <AddIcon/>
                </Fab>
            </div>
            <div className="cards">
                {
                    testData.map((data) => {
                        return (
                            <div className="class-card">
                                <p> {data.name} </p>
                                <Button className="start-button" color="primary" size="small">Start</Button>
                            </div>
                        )
                    })
                }
            </div>

            <Dialog open={open} onClose={handleClose} className="dialog">
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
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </Card>
    );
};


export default HomeLayout;
