import React from "react";

const Overview = (props) => {
    const { tasks } = props;

    // STYLING
    const box = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        
      };

    return(
        <ul style={box}>
            {tasks.map((task) => { // Takes task from props, maps over it
                return <li key={task.id}>{task.text}</li>; // Displays li from content of task
            })}    
        </ul>
    );
};

export default Overview;