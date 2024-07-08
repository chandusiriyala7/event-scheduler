
// import React, { Component } from "react";
// import './index.css';
// import {v4 as uuidv4} from 'uuid'
// import Task from "../task";

// class Event extends Component {
//     state = {
//         ArrayElements: [],
//         EventText: "",
//         id: uuidv4(),
//         EventDate: null
//     };

//     makeEvent = (event) => {
//         this.setState({ EventText: event.target.value });
//     };

//     makeDate = (event) => {
//         this.setState({ EventDate: event.target.value });
//     };

//     AddEvent = () => {
//         const { EventText, id, EventDate } = this.state;
//         const newDate = new Date();

//         const context = {
//             EventText,
//             EventDate: EventDate,
//             newDate: newDate.toISOString(), // Convert date to string to avoid circular reference
//             id
//         };
        

//         this.setState((prevState) => ({
//             ArrayElements: [...prevState.ArrayElements, context],
//             id: prevState.id + 1
//         }));
//     };

//    onDelete=(id)=>{
//     const {ArrayElements}=this.state
//     const newArry=  ArrayElements.filter(each=>(
//         each.id !== id 
//     ))
//     this.setState({ArrayElements:newArry})

//    }

//     AddtoLocal = () => {
//         const { ArrayElements } = this.state;
//         localStorage.setItem("EventItems", JSON.stringify(ArrayElements));
//     };

//     parsedLocalStorage = () => {
//         return JSON.parse(localStorage.getItem('EventItems')) || [];
//     };

//     componentDidMount() {
//         // Load data from local storage when component mounts
//         const parsedList = this.parsedLocalStorage();
//         this.setState({ ArrayElements: parsedList });
//     }

//     render() {
//         const { ArrayElements } = this.state;

//         return (
//             <div className="event-container">
//                 <h1>EVENTS</h1>
//                 <div className="content">
//                     <div className="context-1">
//                         <input type="text" placeholder="make Event.." onChange={this.makeEvent} />
//                         <input type="date" className="date" onChange={this.makeDate} />
//                     </div>
//                     <br />
//                     <div className="context-2">
//                         <button type="button" className="btn-event" onClick={this.AddEvent}>Add Event</button>
//                         <button type="button" className="btn-save" onClick={this.AddtoLocal}>Save</button>
//                     </div>
//                 </div>

//                 <div className="content-model">
//                     {ArrayElements.map(each => (
//                         <Task details={each} key={each.id}  deleteFn={this.onDelete()}/>
//                     ))}
//                 </div>
//             </div>
//         );
//     }
// }

// export default Event;


import React, { Component } from "react";
import './index.css';
import { v4 as uuidv4 } from 'uuid';
import Task from "../task";

class Event extends Component {
    state = {
        ArrayElements: [],
        EventText: "",
        id: uuidv4(),
        EventDate: null
    };

    makeEvent = (event) => {
        this.setState({ EventText: event.target.value });
    };

    makeDate = (event) => {
        this.setState({ EventDate: event.target.value });
    };

    AddEvent = () => {
        const { EventText,  EventDate } = this.state;
        const newDate = new Date();

        const context = {
            EventText,
            EventDate: EventDate,
            newDate: newDate.toISOString(), // Convert date to string to avoid circular reference
            id: uuidv4()
        };

        this.setState((prevState) => ({
            ArrayElements: [...prevState.ArrayElements, context],
            EventDate: null,
            EventText: "",
        }));
    };

    onDelete = (id) => {
        const { ArrayElements } = this.state;
        const newArry = ArrayElements.filter(each => (
            each.id !== id
        ));
        this.setState({ ArrayElements: newArry });
    };

    AddtoLocal = () => {
        const { ArrayElements } = this.state;
        localStorage.setItem("EventItems", JSON.stringify(ArrayElements));
    };

    parsedLocalStorage = () => {
        return JSON.parse(localStorage.getItem('EventItems')) || [];
    };

    componentDidMount() {
        // Load data from local storage when component mounts
        const parsedList = this.parsedLocalStorage();
        this.setState({ ArrayElements: parsedList });
    }

    render() {
        const { ArrayElements } = this.state;

        return (
            <div className="event-container">
                <h1>EVENTS</h1>
                <div className="content">
                    <div className="context-1">
                        <input type="text" placeholder="make Event.." onChange={this.makeEvent}  className="input-element"/>
                        <input type="date" className="date" onChange={this.makeDate}  />
                    </div>
                    <br />
                    <div className="context-2">
                        <button type="button" className="btn-event" onClick={this.AddEvent}>Add Event</button>
                        <button type="button" className="btn-save" onClick={this.AddtoLocal}>Save</button>
                    </div>
                </div>

                <div className="content-model">
                    {ArrayElements.map(each => (
                        <Task details={each} key={each.id} deleteFn={this.onDelete} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Event;
