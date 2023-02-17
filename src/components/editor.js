import React from 'react';

function Editor(props){
    
    const arrow = props.isEditorActive ? "<" : ">";
    let newStyle = props.isEditorActive ? props.styling.notCollapsed : props.styling.isCollapsed;
    let headerStyle = !props.isEditorActive ? {
        "height": "100%",
        "writing-mode": "vertical-rl",
        "text-orientation": "upright",
    }:{};
    return(
        <div id="editorContainer" style={newStyle}>
            <div className="header" style={headerStyle}>
                <button className="editorToggle" onClick={props.onClick}>{arrow}</button>
                <h2>Editor</h2>
            </div>
            <textarea id="editor" value={props.value} onInput={props.handleChange}/>
        </div>
    );
}

export default Editor