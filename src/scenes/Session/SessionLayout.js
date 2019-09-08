import React from "react";
import {Button, Card, LinearProgress } from "@material-ui/core"
import "./Session.css";
const testID = "545543";
const testData = [{name:"Question 1"}, {name:"Question 2"}]
const SessionLayout = () => {
    return (
        <div className="page">
            <div className='container'>
                <div className='row'>
                    <div className='column'/>
                    <div className='column'>
                        <h1 className='id'>
                            {testID}
                        </h1>
                    </div>
                    <div className='column'>
                        <div className='orange-column'>
                            <Button variant="contained" color="secondary">
                                End Session
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cards">
                {testData.map((data) => QuestionCard(data.name))}
            </div>
            <div>
                <LinearProgress className="progress" color="primary" variant="buffer" value="50"/>
                <LinearProgress className="progress" color="primary" variant="buffer" value="50"/>
            </div>
        </div>
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
