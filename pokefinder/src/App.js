import './App.css';

function App() {
  return (
    <div className="App">
      <header className = "Header">
        <div id = "headerName">
          Leo Dai
        </div>
        <div id = "buttonContainer">
          <button className = "Buttons" id = "education">
            Education
          </button>
          <button className = "Buttons" id = "projects">
            Projects
          </button>
          <button className = "Buttons" id = "experience">
            Work Experience
          </button>
          <button className = "Buttons" id = "skills">
            Skills
          </button>
          <button className = "Buttons" id = "resume">
            Resume
          </button>
          <button className = "Buttons" id = "contact">
            Contact
          </button>
        </div>
      </header>
      <div className="Front">
        <div className = "Education">
          <img src = {require('./media/lmuPicture.jpg')} id = "lmuPicture" alt = "LMU Photo"/>
          <div className = "TextContainer">
            <div id = "info">
              Loyola Marymount University, <a href="https://www.lmu.edu/">lmu.edu</a>
            </div>
            <div id = "relevance">
              Currently pursuing an undergraduate degree in computer science
            </div>
            <div id = "relevance1">
              Graduating 2025 June
            </div>
            <div id = "coursesHeader">
                Courses taken:
              </div>
            <div className = "Courses">
              <div id = "0">Data Structures and Applications</div>
              <div id = "1">Algorithmns and Analysis</div>
              <div id = "2">Data Science</div>
              <div id = "3">Game Design</div>
              <div id = "4">Web App Development</div>
              <div id = "5">Artificial Intelligence</div>
              <div id = "6">Computer Systems Organization</div>
              <div id = "7">Game Development</div>
            </div>
          </div>
        </div>
        <div className = "Projects">
    
        </div>
        <div className = "Experience">

        </div>
        <div className = "Skills">

        </div>
        <div className = "Resume">

        </div>
        <div className = "Contact">

        </div>
      </div>
    </div>
  );
}

export default App;
