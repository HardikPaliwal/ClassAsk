import React from "react";
import {Button, Card, Box, LinearProgress } from "@material-ui/core"
import "./Session.css";
const testID = "545543";
const testData = [{name:"Question 1"}, {name:"Question 2"}, {name:"Question 3"}, {name:"Question 4"}, {name:"Question 5"}]
const testValue = 75;
const SessionLayout = () => {
    return (
        <Card className="page">
            <div className='container'>
                <div className="id-header">
                    <h1 className='id'>
                        ID: {testID}
                    </h1>
                    <Button className="end-button" variant="contained" color="secondary">
                        End Session
                    </Button>

                </div>
            </div>
            <Box className="question-cards">
                {testData.map((data) => QuestionCard(data.name))}
            </Box>
            <div className="progress-content">
                <div className="labels">
                    <h3>On Track - {testValue}%</h3>
                    <h3>Confused - {100 - testValue}%</h3>
                </div>
                <LinearProgress className="progress" color="primary" variant="buffer" value={testValue}/>
                <LinearProgress className="progress" color="primary" variant="buffer" value={testValue}/>
            </div>

        </Card>
    );
};

const QuestionCard = (name) => {
    return(
        <Card className="question">
            {name}
        </Card>
    )
}


export default SessionLayout;
