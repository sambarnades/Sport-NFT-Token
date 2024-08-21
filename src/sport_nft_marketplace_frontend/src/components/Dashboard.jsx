import React from "react";

function Dashboard(props) {
    return (
        <div className="row mb-3">
            <div className="component dashboard-component" >
                <h1>Dashboard</h1>
                <h2>Hello {props.identifier}</h2>
            </div>
        </div>
    );
}

export default Dashboard;