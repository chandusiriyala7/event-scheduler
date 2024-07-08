
// import eventIcon from './icons/eventIcon.png'

// import deleteIcon from './icons/delete1.png'

// import './index.css'

// const Task=(props)=>{

//     const {details, delete}=props
//     const {EventText,EventDate,newDate,id}=details
    
//     const makeDelete=()=>{
//         delete(id)
//     }

//     return(
//        <div className='task-container'>
//         <img src={eventIcon} alt="eventIcon" className='icon' />
//         <h2>{EventText}</h2>
//         <p>{EventDate}</p>
//         <p>{newDate}</p>
//         <img src={deleteIcon} alt="deleteIcon" className='icon' onClick={makeDelete()}/>
//        </div>
//     )
// }

// export default Task

import React from 'react';
import eventIcon from './icons/eventIcon.png';
import deleteIcon from './icons/delete5.png';
import './index.css';

const Task = (props) => {
    const { details, deleteFn } = props;
    const { EventText, EventDate,  id } = details;

    const makeDelete = () => {
        deleteFn(id);
        
    };
    // const date=newDate.toLocaleDateString()

    return (
        <div className='task-container'>
            <img src={eventIcon} alt="eventIcon" className='icon' />
            <h2>{EventText}</h2>
                <p className='event-text'>{EventDate}</p>
            <img src={deleteIcon} alt="deleteIcon" className='icon' onClick={makeDelete} />
        </div>
    );
};

export default Task;
