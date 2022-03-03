import React from "react";

class Nav extends React.Component{
    
    render(){
        const labels = ["Home", "Personal Information", "Personal Profile", "Interest in IT", "Ideal Job", "Project Idea" ];
        let buttons = [];
        labels.forEach((string, i)=> {buttons.push(<button>{labels[i]}</button>)});
        
        return(
            <div className="navigatio0n">
            {buttons}
            </div>
        );
        
        
    }
}

export default Nav;

