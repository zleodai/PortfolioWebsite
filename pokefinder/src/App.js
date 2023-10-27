import './App.css';

function App() {
  return (
    <div className="App">
      <header className = "Header">
        <div id = "headerName">
          Leo Dai
        </div>
        <div id = "buttonContainer">
          <a href = "#education" className = "Buttons">
            Education
          </a>
          <a href = "#experience" className = "Buttons">
            Experience
          </a> 
          <a href = "#projects" className = "Buttons">
            Projects  
          </a>
          <a href = "#resume" className = "Buttons">
            Resume
          </a>
          <a href = "#contact" className = "Buttons">
            Contact
          </a>
        </div>
      </header>
      <div className="Front">
        <div className = "EducationBanner" id = "education">
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
        <div className = "Experience">
          <div className = "Top" id = "experience"> 
            <div id = "filler"></div>
            <div id = "title">Work Experience</div>
            <div id = "filler"></div>
          </div>
          <div className = "Info">
            <div id = "logo">
              <img src = {require('./media/targetIcon.png')} id = "icon" alt = "Target Logo"/>
            </div>
            <div id = "company">Target Inc.</div>
            <div id = "title">General Merchandise Expert</div>
            <div id = "date">October 2021 - Present</div>
          </div>
          <div className = "Content">
            <div id = "content">
              I worked at Target part time average around 24-32 hours a week ever since October of 2021. At Target I provided customer service to all guests and managed my departmenmt of the store making sure it was nice and tidy. Working at Target helped with me gain familiarity with deadlines and daily workloads.  
            </div>
          </div>
        </div>
        <div className = "ProjectsBanner" id = "projects">
          <div id = "title">
            Projects
          </div>
        </div>
        <div className = "Projects">
          <div className = "Timeline">
            <div className = "TimelineDates">
              <div id = "date" className = "Date">Mar. 2023</div>
              <div id = "date" className = "Date">April 2023</div>
              <div id = "date1" className = "Date">Sep. 2023</div>
              <div id = "date2" className = "Date">Oct. 2023</div>
              <div id = "date3" className = "Date">Oct. 2023</div>
            </div>
            <div id = "timelineImageContainer">
              <img src = {require('./media/timeline.png')} id = "timelineImage"/>
            </div>
            <div className = "TimelineItems">
              <div id = "item" className = "Item">
                <div className = "Title">Distile Solver</div>
                <div className = "Content">Made an AI that solves a modified version of wordle using a bottom-up search calculating the edit diffrences between words</div>
                <div className = "ButtonContainer">
                  <a href = "https://drive.google.com/drive/folders/1Kjb7Jf_bsg798YDF6zc3wFCgY4g9Vqab?usp=sharing">
                    <button className = "ProjectsButton" id = "item">Download Link</button>
                  </a>
                </div>
              </div>
              <div id = "item1" className = "Item">
                <div className = "Title">Favela Finder</div>
                <div className = "Content">Worked in a team filtering through Twitter data and using sklearn’s clustering algorithm to determine high-density areas not classified as official districts. These we deduced were locations of favelas.</div>
                <div className = "ButtonContainer">
                  <a href = "https://drive.google.com/drive/folders/1L8iaPA8LyPI0Yr3DKDhDhuEtRCwJ5hwa?usp=sharing">
                    <button className = "ProjectsButton" id = "item">Download Link</button>
                  </a>
                </div>
              </div>
              <div id = "item2" className = "Item">  
                <div className = "Title">AI Maze Pathfinder using Knowledge Bases</div>
                <div className = "Content">Created a bot that navigates a minesweeper like maze to a goal. Maze agent was designed with CNF clauses in a Knowledge Base to properly keep track of potential mine locations to navigate the maze safely.</div>
                <div className = "ButtonContainer">
                  <a href = "https://drive.google.com/drive/folders/19bHTMhiUoNzqdTRhYXWr08keHcnHthxv?usp=sharing">
                    <button className = "ProjectsButton" id = "item2">Download Link</button>
                  </a>
                </div>
              </div>
              <div id = "item3" className = "Item">
                <div className = "Title">Portfolio Website</div>
                <div className = "Content">I made this website using React.js along with HTML/CSS/JavaScript.</div>
                <div className = "ButtonContainer">
                  <a href = "https://drive.google.com/drive/folders/1_2ril9-TEG73IRGjJu2kc_ICDxMygFjN?usp=sharing">
                    <button className = "ProjectsButton" id = "item3">Download Link</button>
                  </a>
                </div>
              </div>
              <div id = "item4" className = "Item">
                <div className = "Title">Attack on Titan FanGame</div>
                <div className = "Content">Made a game with grappling hook physics and also in air movement physics using the Unity game engine and c# scripts.</div>
                <div className = "ButtonContainer">
                  <a href = "https://zleodai.itch.io/odm-grapple-game">
                    <button className = "ProjectsButton" id = "item1">Itch.io Link</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className = "Resume" id = "resume">
          <div id = "title">Resume</div>
          <div id = "buttonContainerA" class = "ButtonContainer">
            <a href="https://drive.google.com/drive/folders/1TASU4RcOeUw66Zf0vW_cZtB0adrtEiCS?usp=sharing">
              <button id = "buttonA" class = "ResumeButton">
                Download PNG
              </button>
            </a>
          </div>
          <div id = "buttonContainerB" class = "ButtonContainer">
            <a href="https://drive.google.com/drive/folders/1tkgPKQUsUI4nr1UQCLcO-S6IJKm1xoXe?usp=sharing">
              <button id = "buttonB" class = "ResumeButton">
                Download PDF
              </button>
            </a>
          </div>
        </div>
        <div className = "Contact" id = "contact">
          <div id = "title">
            Contact Info  
          </div>
          <div className = "ContactOptions">
            <div className = "ContactFlexContainer">
              <a href = "https://www.linkedin.com/in/leo-dai-5a729623a/">
                <button className = "ContactButton">
                  <div className = "ContactContainer">
                    <div className = "ContactIcon">
                      <img className = "ContactPict" src={require('./media/linkedinIcon.png')}/>
                    </div>
                    <div className = "ContactText">
                      <div className = "ContactTextA">
                        Linkedin
                      </div>
                      <div className = "ContactTextB">
                        leo-dai
                      </div>
                    </div>
                  </div>
                </button>
              </a>
            </div>
            <div className = "ContactFlexContainer">
              <a href = "https://github.com/zleodai">
                <button className = "ContactButton">
                  <div className = "ContactContainer">
                    <div className = "ContactIcon">
                      <img className = "ContactPict" src={require('./media/githubIcon.png')}/>
                    </div>
                    <div className = "ContactText">
                      <div className = "ContactTextA">
                        Github
                      </div>
                      <div className = "ContactTextB">
                        zleodai
                      </div>
                    </div>
                  </div>
                </button>
              </a>
            </div>
            <div className = "ContactFlexContainer">
              <a href = "mailto:awsomeleodai@gmail.com">
                <button className = "ContactButton">
                  <div className = "ContactContainer">
                    <div className = "ContactIcon">
                      <img className = "ContactPict" src={require('./media/emailIcon.png')}/>
                    </div>
                    <div className = "ContactText">
                      <div className = "ContactTextA">
                        Email
                      </div>
                      <div className = "ContactTextB">
                        awsomeleodai@gmail.com
                      </div>
                    </div>
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
