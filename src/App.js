import './App.css';

function App() {
  return (
    <div className="App">
      <div id="edit">
        <p>[Logo] Editor</p>
        <textarea id="editor" rows="15" autofocus></textarea>
      </div>
      
      {/* Markdown Parser? I think */}
      <div id="preview">
        <p>Previewer</p>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/marked/1.2.5/marked.js" integrity="sha512-29UPea5zsWDcmmCuW5BotyDjbpZmocz9WrzSa4UaZAAG1dsu0vSMCzFdB7iZsL70FtqgQGwfda3JkLnz21rCVA==" crossorigin="anonymous"></script>
      </div>
    </div>
  );
}

export default App;
