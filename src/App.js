/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
// import bullet from "./Img/bullet.svg";
import close from "./Img/close.svg";
// import dots from "./Img/dots.svg";
import holdingPhone from "./Img/interface.jpg";
import illustration from "./Img/illustration.svg";
import person1 from "./Img/doctor.jpg";
import menu from "./Img/menu.svg";
import person2 from "./Img/patient.jpg";
import person3 from "./Img/pills.jpg";

function App() {
  return (
    <div className="App">
      <div class="nav-bar">
        <div class="container">
          <a class="logo-nav" href="">
            MEDI<span>LINE</span>
          </a>
          <img
            id="mobile-cta"
            class="mobile-menu"
            src={menu}
            alt="navigation"
          />
          <nav>
            <img
              id="mobile-exit"
              class="mobile-menu-exit"
              src={close}
              alt="close navigation"
            />
            <ul class="primary-nav">
              <li class="current">
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">UserSignup</a>
              </li>
              <li>
                <a href="#">DoctorSignup</a>
              </li>
              <li>
                <a href="#">AI Disease Predictor</a>
              </li>
            </ul>

            <ul class="second-nav">
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      
      <section class="hero">
        <div class="container">
          <div class="left-col">
            <p class="sub-head">it's best &amp; easy</p>
            <h1>A one stop solution for all doctors and patients</h1>

            <div class="hero-cta">
              <a href="#" class="primery-cta">
                Signup now(Doctor)
              </a>
              <a href="#" class="primery-cta">
                Signup now(Users)
              </a>                
            </div>
          </div>

          <img src={illustration} alt="Illustration" class="hero-img" />
        </div>
      </section>
      {/* <!--SECTION HERO BLOG END--> */}

      {/* <!--SECTION FEATURES BLOG START--> */}
      <section class="features-section">
        <div class="container">
          <ul>
            <li>Find a doctor near you</li>
            <li>Book an appointment</li>
            <li>Store all your documents in one place</li>
            <li>AI disease predictor</li>
            <li>Doctors can look into your previous medical history</li>
            <li>It is completely free</li>
            <li>Signup now</li>
          </ul>
        </div>
        <img src={holdingPhone} alt="phone" />
      </section>
      {/* <!--SECTION FEATURES BLOG END--> */}

      {/* <!--SECTION TEST  BLOG START--> */}
      <section class="test-monials-section">
        <div class="container">
          <ul>
            {/* <!--PERSON 1--> */}
            <li>
              <img src={person1} alt="Person 1" />
              <blockquote>
                We provide the best in class doctors verified by us. 
                Every doctor who signed up can be available for a meet.
              </blockquote>
            </li>

            {/* <!--PERSON 2--> */}
            <li>
              <img src={person2} alt="Person 2" />
              <blockquote>
               Interactive Design and accessible to all just from a few 
               clicks on the browser
              </blockquote>
            </li>

            {/* <!--PERSON 3--> */}
            <li>
              <img src={person3} alt="Person 3" />
              <blockquote>
                The machine learning model deployed is very accurate
                 and has been tested for various diseases and can help the
                  doctor in making the treatment easier.
              </blockquote>

            </li>
          </ul>
        </div>
      </section>
      {/* <!--SECTION TEST  BLOG END--> */}

      {/* <!--SECTION CONTACT  BLOG START--> */}
      <section class="contact-section">
        <div class="container">
          <div class="contact-left">
            <h2>Contact</h2>
            <form action="#" method="post">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" />
              <label for="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
              ></textarea>

              <input type="submit" value="send message" class="send-message" />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
