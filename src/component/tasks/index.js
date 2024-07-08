


// import React, { Component } from "react";
// import './index.css';
// import TaskCard from "../TaskCard";
// import { v4 as uuidv4 } from 'uuid';

// class Task extends Component {
//     state = {
//         taskArray: [],
//         taskText: "",
//         id: uuidv4()
//     };

//     makeTask = (event) => {
//         this.setState({ taskText: event.target.value });
//     };

//     DumpToLocal = (taskArray) => {
//         localStorage.setItem("TaskList", JSON.stringify(taskArray));
//     };

//     saveTask = () => {
//         const { taskArray, id, taskText } = this.state;
//         const taskDate = new Date();
//         const taskCreated = taskDate.toLocaleTimeString();
//         const taskList = {
//             id,
//             taskText,
//             taskCreated
//         };

//         const updatedTaskArray = [...taskArray, taskList];
//         this.setState({ taskArray: updatedTaskArray });

//         this.DumpToLocal(updatedTaskArray); // Store to localStorage immediately

//         // Clear input field after saving task
//         this.setState({ taskText: "" });

        
//     };

//     deleteTask = (taskId) => {
//         const updatedTaskArray = this.state.taskArray.filter(task => task.id !== taskId);
//         this.setState({ taskArray: updatedTaskArray });
//         this.DumpToLocal(updatedTaskArray); // Update localStorage after deleting task
        
//     };

//     render() {
//         const parsedList=JSON.parse(localStorage.getItem("TaskList"))
//         return (
//             <div className="tasks-container">
//                 <h1>Task</h1>
//                 <div className="content-3">
//                     <input type="text" className="input-element" placeholder="Make Tasks.." value={this.state.taskText} onChange={this.makeTask} />
//                     <button className="taskAdd-btn" onClick={this.saveTask}>Save</button>
//                 </div>
//                 <div className="array">
//                     {parsedList.map(task => (
//                         <TaskCard key={task.id} task={task} onDelete={() => this.deleteTask(task.id)} />
//                     ))}
//                 </div>
//             </div>
//         );
//     }
// }

// export default Task;


import React, { Component } from "react";
import './index.css';
import TaskCard from "../TaskCard";
import { v4 as uuidv4 } from 'uuid';
import bg from './icons/bg1.avif'

class Task extends Component {
    state = {
        taskArray: [],
        taskText: "",
    };

    componentDidMount() {
        const parsedList = JSON.parse(localStorage.getItem("TaskList"));
        if (parsedList) {
            this.setState({ taskArray: parsedList });
        }
    }

    makeTask = (event) => {
        this.setState({ taskText: event.target.value });
    };

    DumpToLocal = (taskArray) => {
        localStorage.setItem("TaskList", JSON.stringify(taskArray));
    };

    saveTask = () => {
        const { taskArray,  taskText } = this.state;
        const taskDate = new Date();
        const taskCreated = taskDate.toLocaleTimeString();
        const taskList = {
            taskText,
            taskCreated,
            id:uuidv4()
        };

        const updatedTaskArray = [...taskArray, taskList];
        this.setState({ taskArray: updatedTaskArray });

        this.DumpToLocal(updatedTaskArray); // Store to localStorage immediately

        // Clear input field after saving task
        this.setState({ taskText: "" });
    };

    deleteTask = (taskId) => {
        const updatedTaskArray = this.state.taskArray.filter(task => task.id !== taskId);
        this.setState({ taskArray: updatedTaskArray });
        this.DumpToLocal(updatedTaskArray); // Update localStorage after deleting task
    };

    render() {
        const { taskText, taskArray } = this.state;
        return (
            <div className="tasks-container" style={{backgroundImage:`url(${bg})`, backgroundSize:"cover"}}>
                <h1>Task</h1>
                <div className="content-3">
                    <input type="text" className="input-element" placeholder="Make Tasks.. by using 100 words" value={taskText} onChange={this.makeTask} />
                    <button className="taskAdd-btn" onClick={this.saveTask}>Save</button>
                </div>
                <div className="array">
                    {taskArray.map(task => (
                        <TaskCard key={task.id} task={task} onDelete={() => this.deleteTask(task.id)} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Task;

