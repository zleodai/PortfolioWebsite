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
              I am currently studying at the College of Science and Engineering. I will be graduating in 2025 with an Undergraduate in Computer Science. I also intend on going for a master's degree in Computer Science.
            </div>
            <div id = "buttonContainer">
              <a href = "https://lmu.edu">
                <button class="EducationButton">
                  LMU Website
                </button>
              </a>
            </div>
          </div>
          <div className = "Padding" id = "educationBPadding"></div>
        </div>
        <div className = "ExperienceBanner">
          <div className = "Sides" id = "leftContent"></div>
            <div id = "content"></div>
          <div className = "Sides" id = "rightContent"></div>
        </div>
        <div className = "Experience">
          <div className = "Top"> 
            <div id = "logoContainer">
              <img src = {require('./media/targetIcon.png')} id = "logo" alt = "Target Logo"/>
            </div>
            <div id = "title">Work Experience</div>
            <div id = "filler"></div>
          </div>
          <div className = "Info">
            <div id = "title">General Merchandise Expert</div>
            <div id = "date">October 2021 - Present</div>
          </div>
          <div className = "Content">
            <div id = "content">
              - Provided customer service to all guests and gained experience in sales
            </div>
            <div id = "content1">
              - Experience with deadlines and daily tasks as part of the work routine
            </div>
            <div id = "content2">
              - Communicated with management when issues arose with deadlines or on-hand tasks
            </div>
          </div>
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
