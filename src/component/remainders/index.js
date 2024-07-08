// import React, { Component } from "react";
// import Alert from "../Alert";
// import {v4 as uuidv4} from 'uuid';
// import './index.css'

// class Remainder extends Component{

//     state={
//     remainderList:[],
//     message:"",
//     date:null,
//     id:null,
//     time:null,
//     }

//     text=(event)=>{
//           this.setState({message:event.target.value})
//     }

//     componentDidMount() {
//         const parsedList = JSON.parse(localStorage.getItem("TaskList"));
//         if (parsedList) {
//             this.setState({ remainderList: parsedList });
//         }
//     }

//     DumpToLocal = (taskArray) => {
//         localStorage.setItem("AlertList", JSON.stringify(taskArray));
//     };

//     getDate=(event)=>{
//         this.setState({date:event.target.value})
//     }

//     getTime=(event)=>{
//         this.setState({time:event.target.value})
//     }

//     makeMessage=()=>{
//         const {message,remainderList,date,time}=this.state

//         const remaind={
//            id:uuidv4(),
//            message,
//            date,
//            time,
//         }

//         this.setState(Prev=>({
//             remainderList:[...Prev.remainderList,remaind]
//         }))

//         const updatedAlerts=[...remainderList,remaind]

//         this.DumpToLocal(updatedAlerts)
//         this.setState({message:"",date:null})
//     }

    

//     render(){
//         const {message,remainderList}=this.state
//         return(
//           <div className="remainder-container">
//             <div className="input-container">
//                 <input type="text" placeholder="Enter Message" onChange={this.text} className="input-field" value={message}/>
//                 <input type="date" className="date" onChange={this.getDate} />
//                 <input type="time" onChange={this.getTime} />
//                     <button  className="notify-btn" type="button" onClick={this.makeMessage} >

                    

//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
//                     </svg>


//                     <div className="text">
//                     Add
//                     </div>

//                     </button>
//             </div>
            

//             <div className="Alerts-container">
//                 {
//                     remainderList.map(each=>(
//                         <Alert data={each} key={each.id}/>
//                     ))
//                 }
//             </div>
            
//           </div>
//         )
//     }
// }

// export default Remainder


import React, { Component } from "react";
import Alert from "../Alert";
import { v4 as uuidv4 } from "uuid";
import './index.css';

class Remainder extends Component {
    state = {
        remainderList: [],
        message: "",
        date: "",
        time: "",
    };

    componentDidMount() {
        const parsedList = JSON.parse(localStorage.getItem("AlertList"));
        if (parsedList) {
            this.setState({ remainderList: parsedList });
        }
    }

    DumpToLocal = (taskArray) => {
        localStorage.setItem("AlertList", JSON.stringify(taskArray));
    };

    text = (event) => {
        this.setState({ message: event.target.value });
    };

    getDate = (event) => {
        this.setState({ date: event.target.value });
    };

    getTime = (event) => {
        this.setState({ time: event.target.value });
    };

    makeMessage = () => {
        const { message, remainderList, date, time } = this.state;
        const dateTime = `${date}T${time}`;
        
        const remaind = {
            id: uuidv4(),
            message,
            date: dateTime,
        };

        const updatedAlerts = [...remainderList, remaind];

        this.setState({
            remainderList: updatedAlerts,
            message: "",
            date: "",
            time: "",
        });

        this.DumpToLocal(updatedAlerts);
    };

    render() {
        const { message, remainderList } = this.state;
        return (
            <div className="remainder-container">
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Enter Message"
                        onChange={this.text}
                        className="input-field"
                        value={message}
                    />
                    <input type="date" className="date" onChange={this.getDate} />
                    <input type="time" onChange={this.getTime} className="date"/>
                    <button className="notify-btn" type="button" onClick={this.makeMessage}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                            />
                        </svg>
                        <div className="text">Add</div>
                    </button>
                </div>

                <div className="alerts-container">
                    {remainderList.map((each) => (
                        <Alert data={each} key={each.id} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Remainder;
