import logo from './logo.svg';
import Navbar from 'react-bootstrap/Navbar'
import './App.css';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import trilogyImg from './TrilogyScreenshot640x400.jpg';
import trilogyGIF from './trilogy4GIF.gif';
import Rating from '@material-ui/lab/Rating';
<style>
import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700;900&display=swap');
</style>


function App() {
  return (
    <div className="trilogyWebsite">
      <div className="trilogyNavBar">
        <Navbar bg="dark" variant="dark" fixed="top" navbarScroll>
          <div className="trilogyNavbarText">
            <Navbar.Brand className = "trilogyText" href="#home">
              Trilogy    
            </Navbar.Brand>
            <NavbarBrand className="urlCopierText" href="#home">
              URL Copier
            </NavbarBrand>
          </div>
          <div className="trilogyNavbarButton">
            <button className='webStoreLink'><a id="webStoreLink" href="https://chrome.google.com/webstore/detail/trilogy-url-copier/nlbbmjbfkbfgdbfhaoicjignkbgjdico">Add to Chrome - It's Free!</a></button>
          </div>
          <div className="theme-switch-wrapper">
                    <label className="theme-switch" for="checkbox"> 
                        <input type="checkbox" id="checkbox" />
                        <div className="slider round"></div> 
                      </label>
                    </div>
        </Navbar>
      </div>
      <div className="section1">
        <div className="sectionContent">
          <div className="descriptionTrilogy">
            <h1 id="descriptionTitle">Copy it, Save it, Send it</h1>
            <h3 id="descriptionContent">Trilogy URL Copier is a chrome extension that makes copying and sending URLs easier than ever.</h3>
            <button className='webStoreLink2'><a id="webStoreLink" href="https://chrome.google.com/webstore/detail/trilogy-url-copier/nlbbmjbfkbfgdbfhaoicjignkbgjdico">Add to Chrome - It's Free!</a></button>
            <div className='trilogyRating'>
              <Rating name="read-only" value={10} readOnly></Rating>
              <h4>Chrome Store Rating</h4>
            </div>
          </div>
          <div className ="imageTrilogy">
            <img src={trilogyImg}></img> 
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="sectionContent">
          <div className="imageHowItWorks">
            <img id="trilogyGIF" src={trilogyGIF}></img>
          </div>
          <div className="descriptionHowItWorks">
            <h1 id="howItWorksTitle">How It Works</h1>
            <div className="step1">
              <h2>1. Find Website</h2>
              <h3 id="steps" >Find the website you want to send.</h3>
            </div>
            <div className="step2">
              <h2>2. Open Trilogy</h2>
              <h3 id="steps">When Trilogy is open, click on the icon of the website you want to send link through.</h3>
            </div>
            <div className="step3">
              <h2>3. Paste link</h2>
              <h3 id="steps">Once you get into the website's messaging board, print the link and send it to whoever you want</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="section3">
        <h1 id="websiteSupportedTitle">Websites to Send Links Through</h1>
        <div className="section3Content">
          <div className="emailAndMessagesWebsites">
            <h2>Email and Messages</h2>
            <div className="appIcons">
              
            </div>
          </div>
          <div className="socialMediaWebsites">
            <h2>Social Media</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

//  Code for dark mode from website
// const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

// function switchTheme(e) {
//     if (e.target.checked) {
//         document.documentElement.setAttribute('data-theme', 'dark');
//         localStorage.setItem('theme', 'dark'); //add this
//     }
//     else {
//         document.documentElement.setAttribute('data-theme', 'light');
//         localStorage.setItem('theme', 'light'); //add this
//     }    
// }

// const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

// if (currentTheme) {
//     document.documentElement.setAttribute('data-theme', currentTheme);

//     if (currentTheme === 'dark') {
//         toggleSwitch.checked = true;
//     }
// }


// toggleSwitch.addEventListener('change', switchTheme, false);

export default App;
