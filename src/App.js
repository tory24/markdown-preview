import './App.css';
import React from 'react';

var defaultMarkdown = "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n  \nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n  \nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userInput: defaultMarkdown
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
		this.setState({
			userInput: e.target.value
		});
	}
	render() { 
    return (
      <div className="App">
        <h1>Markdown Previewer</h1>

        
        <div id="edit" title="Enter your raw markdown here :)">
          <h4>[Logo] Editor</h4>
          <textarea
            id="editor"
            rows="15"
            onChange={this.handleChange}
            value={this.state.userInput}
            autoFocus>
          </textarea>
        </div>
        

        <div id="preview" title="Voila! He is yo markdown dawg">
          <h4>Previewer</h4>
          <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
          <p>{this.state.userInput}</p>
        </div>

        <footer>
          <p class="copyright">Tory Moscaritolo &#169;</p>
        </footer>

      </div>
    );
  }
};

export default App;
