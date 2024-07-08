// import './index.css'
// import cross from './icons/cross1.png'

// const TaskCard=(props)=>{
//     const {task,onDelete}=props
//     const {id,taskText,taskCreated}=task

//     const makeDelete=()=>{
//       onDelete(id)
//     }

//     return(
//       <div className='TaskCard-container'>
//         <img src={cross} className='cross-img' alt="close" onClick={makeDelete} />
//         <p>{taskText}</p>
//         <p>{taskCreated}</p>
//       </div>
//     )
// }

// export default TaskCard


import React from 'react';
import './index.css'
import cross from './icons/cross1.png';


const TaskCard = (props) => {
    const { task,onDelete} = props;
    const {taskText, taskCreated } = task;

    const makeDel=()=>{
        onDelete()
    }
    

    return (
        <div className='TaskCard-container' >
            <img src={cross} className='cross-img' alt="close" onClick={makeDel}/>
            <p className='tasktext'>{taskText}</p>
            <p className='bottomText'>{taskCreated}</p>
        </div>
    );
};

export default TaskCard;
