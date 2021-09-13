import React from "react";

//fa-pulse --> makes it rotate
//fa-3x --> increase size 
//fa-fw --> fixed width 
export const Loading = () => {
    return (
        <div className="col">
            <i className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary" />
            <p>Loading...</p>
        </div>
    );
};