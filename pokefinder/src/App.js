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
          <button className = "Buttons" id = "experience">
            Experience
          </button> 
          <button className = "Buttons" id = "projects">
            Projects  
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
        <div className = "EducationBanner">
          <div className = "Padding" id = "topPadding"></div>
          <div id = "content">
            Education
          </div>
          <div className = "Padding" id = "bottomPadding"></div>
        </div>
        <div className = "Education">
          <div className = "Padding" id = "educationAPadding"></div>
          
          <img src = {require('./media/lmuPicture.jpg')} id = "lmuPicture" alt = "LMU Photo"/>

          <div className = "TextContainer">
            <div id = "info">
              Loyola Marymount University 
            </div>
            <div id = "relevance">
              Located at 1 Loyola Marymount University Dr, Los Angeles, CA 90045
            </div>
            <div id = "relevance1">
              I am currently studying at the College of Science and Engineering. I will be graduating in 2025 with an Undergraduate in Computer Science. I also intend on going for a Masters in Computer Science.
            </div>
            <div id = "buttonContainer">
              <button class="educationButton">
                <h2>LMU Website</h2>
                <h3>Check out their website</h3>
              </button>
            </div>
          </div>
          <div className = "Padding" id = "educationBPadding"></div>


        </div>
        <div className = "Experience">
          Experience Placeholder
        </div>
        <div className = "Projects">
          Projects Placeholder
        </div>
        <div className = "Skills">
          Skills Placeholder
        </div>
        <div className = "Resume">
          Resume Placeholder
        </div>
        <div className = "Contact">
          Contact Placeholder
        </div>
      </div>
    </div>
  );
}

export default App;
