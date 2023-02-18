
import './App.css';
import Navbar from './components/navbar';
import Editor from './components/editor';
import Output from './components/output';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    
    super(props);
    const input = "# Welcome to my React Markdown Previewer!\n## This is a sub-heading...\n### And here's some other cool stuff:\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\nif (firstLine == '```' && lastLine == '```') {\nreturn multiLineCode;\n}\n}\n```\n  You can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\n\nAnd if you want to get really crazy, even tables:\n\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)";
    
    
    
    this.state = {
      deviceIsMobile: window.matchMedia("(max-width: 767px)").matches,
      input: input,
      editorActive: true,
      outputActive: true,
      styling: {
        isCollapsed: {
          "width":"34px",
          "overflow": "hidden",
          },
        notCollapsed: {"width": "100%"},
      },
      mobileStyling: {
        isCollapsed: {
          "height":"30px",
          "width":"100%",
          "overflow":"hidden"
          },
        notCollapsed: {
          "height":"100%",
          "width":"100%"
        } 
       
      }
    };
    this.handleWindowResize = this.handleWindowResize.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    console.log(this.state.deviceIsMobile);
    // Additionally I could have just used an arrow function for the binding `this` to the component...
    window.addEventListener("resize", this.handleWindowResize);
  }
  
  handleClick(args){
    
    if (args === "editor"){
      if (this.state.outputActive){
        this.setState({editorActive: !this.state.editorActive});
      }else{
        this.setState({
          editorActive: !this.state.editorActive,
          outputActive: !this.state.outputActive,
        });
      }
    }

    if (args === "output"){
      if (this.state.editorActive){
        this.setState({outputActive: !this.state.outputActive});
      }else{
        this.setState({
          editorActive: !this.state.editorActive,
          outputActive: !this.state.outputActive,
        });
      }
    }
  }
    

  handleChange(event){
    this.setState({
      input: event.target.value
      
    });
    console.log(this.state.input);
  }

  handleWindowResize(){
    this.setState({
      deviceIsMobile: window.matchMedia("(max-width: 767px)").matches
    });
  }

  render(){
    
    

    return (
        <div className="App">
          <Navbar />
          <div className="container">
            <Editor device={this.state.deviceIsMobile} styling={this.state.deviceIsMobile ? this.state.mobileStyling : this.state.styling} 
              isEditorActive={this.state.editorActive} 
              isOutputActive={this.state.outputActive} 
              onClick={() => this.handleClick("editor")}
              value={this.state.input}
              handleChange={this.handleChange}/>
            <Output device={this.state.deviceIsMobile} styling={this.state.deviceIsMobile ? this.state.mobileStyling : this.state.styling} 
              isOutputActive={this.state.outputActive} 
              isEditorActive={this.state.editorActive}
              value={this.state.input} 
              onClick={() => this.handleClick("output")}/>
          </div>
        </div>
      );
    }
    componentWillUnmount() {
      window.removeEventListener("resize", this.handleWindowResize);
    }
  }
export default App;

