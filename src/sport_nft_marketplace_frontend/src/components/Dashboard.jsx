import React from "react";

function Dashboard(props) {
    return (
        <div className="component component-hidden dashboard-component" >
            <h1>Dashboard</h1>
            <h2>Hello {props.identifier}</h2>
        </div>
    );
}

export default Dashboard;