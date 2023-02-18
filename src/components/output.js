import React from 'react';
import Markdown from 'marked-react';

function Output(props){
    
    
    
    const arrow = props.isOutputActive ? ">" : "<";
    let newStyle = props.isOutputActive ? props.styling.notCollapsed : props.styling.isCollapsed;
    var headerStyle;
    if (props.device === false){
        console.log("its true");
        headerStyle = !props.isOutputActive ? {
            "height": "100%",
            "writing-mode": "vertical-rl",
            "text-orientation": "upright",
        }:{};
    }

    return(
        <div id="previewContainer" style={newStyle}>
            <div className="header" style={headerStyle}>
                <button className="outputToggle" onClick={props.onClick}>{arrow}</button>
                <h2>Preview</h2>
            </div>
            <div  id="preview">
                <Markdown breaks="true" gfm="true">{props.value}</Markdown>
            </div>
        </div>
    );
}

export default Output