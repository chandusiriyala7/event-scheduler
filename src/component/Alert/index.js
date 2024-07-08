// import React, { useEffect, useState } from "react";
// import './index.css'

// const Alert=(props)=>{
//     const {data}=props
//     const {message,date}=data

// const endTime=new Date(date).getTime();
// const [currentTime,setCurrentTime]=useState(new Date().getTime())
// const gap=endTime-currentTime


// const seconds=1000;
// const minutes=seconds * 60;
// const hours=minutes * 60;
// const days=hours * 24;


// const remainingDays=Math.floor(gap / days)
// const remainingHours=Math.floor((gap % days) / hours)
// const remainingMinutes=Math.floor((gap % hours) / minutes)
// const remainingSeconds=Math.floor((gap % minutes) / seconds)



// useEffect(()=>{
//     setTimeout(()=>setCurrentTime(new Date().getTime()),1000)
// },[currentTime])

// return(

//         <div className="alert">
//             <div className="card">
//                 <div className="card-content">
//                     <p className="card-title">{remainingDays}: {remainingHours}: {remainingMinutes}: {remainingSeconds}</p>
//                     <p className="card-para">{message}</p>
//                     <p>{date}</p>
//                 </div>
//             </div>

//         </div>
//         )
//     }


// export default Alert


import React, { useEffect, useState } from "react";
import './index.css';

const Alert = (props) => {
    const { data } = props;
    const { message, date } = data;

    const endTime = new Date(date).getTime();
    const [currentTime, setCurrentTime] = useState(new Date().getTime());
    const gap = endTime - currentTime;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    const remainingDays = Math.floor(gap / days);
    const remainingHours = Math.floor((gap % days) / hours);
    const remainingMinutes = Math.floor((gap % hours) / minutes);
    const remainingSeconds = Math.floor((gap % minutes) / seconds);

    useEffect(() => {
        const timer = setTimeout(() => setCurrentTime(new Date().getTime()), 1000);
        return () => clearTimeout(timer);
    }, [currentTime]);

    return (
        <div className="alert">
            <div className="card">
                <div className="card-content">
                    <p className="card-title">{remainingDays}d : {remainingHours}h : {remainingMinutes}m : {remainingSeconds}s</p>
                    <p className="card-para">{message}</p>
                    <p>{date}</p>
                </div>
            </div>
        </div>
    );
}

export default Alert;
