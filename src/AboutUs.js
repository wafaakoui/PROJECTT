import "./AboutUs.css";
import logoKebili from './assets/logo-kebili.png'; 
import campus from './assets/campus.png'; 
import teamwork from './assets/Team-work.png'; 

export default function AboutUs() {
  function fok() {
    var j = document.getElementById("arr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/premium/png-64-thumb/chevron-arrow-3883460-3231250.png)";
  }

  function kof() {
    var j = document.getElementById("arr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/free/png-64/right-arrow-1438234-1216195.png)";
  }

  function gok() {
    let j = document.getElementById("brr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/premium/png-64-thumb/chevron-arrow-3883460-3231250.png)";
  }

  function kog() {
    let j = document.getElementById("brr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/free/png-64/right-arrow-1438234-1216195.png)";
  }

  function hok() {
    let j = document.getElementById("crr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/premium/png-64-thumb/chevron-arrow-3883460-3231250.png)";
  }

  function koh() {
    let j = document.getElementById("crr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/free/png-64/right-arrow-1438234-1216195.png)";
  }

  window.onscroll = function () {
    jet();
  };

  function jet() {
    var ilake = document.getElementById("head");
    ilake.style.top = "0px";
    ilake.style.position = "sticky";
  }

  window.addEventListener("scroll", () => {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var wnd = window.innerHeight;
      var rtop = reveals[i].getBoundingClientRect().top;
      var rpoint = 100;

      if (rtop < wnd - rpoint) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  });

  return (
    <div className="App">
      <header id="head">
        <a href="#">
          <span>
          <img src={logoKebili} alt="ISET Kebili Logo" />
          </span>
          <span id="c_name">ISET KEBILI</span>
        </a>
        
           
      </header>
      <main>
        <div id="front">
          <h1 style={{ textAlign: "center" }}>Welcome to ISET Kebili</h1>
          
          <p>
            At the Higher Institute of Technological Studies (ISET) in Kebili,
            we are dedicated to nurturing future leaders through innovative
            education and hands-on training. We offer a range of programs in
            technology, engineering, and business, empowering students to excel
            in their fields.
          </p>
        </div>

        <div id="second" className="reveal">
          <div className="container">
            <div>
              <h1>Our Mission</h1>
              <p>
                To provide quality education and practical skills that prepare
                students for the challenges of a dynamic workforce. We emphasize
                creativity, critical thinking, and collaboration, fostering a
                community of lifelong learners.
              </p>
            </div>
            <img
              src={campus}
              alt="Campus"
            />
          </div>
          <div className="container">
            <div>
              <h1>Why Choose Us?</h1>
              <p>
                ISET Kebili offers a vibrant learning environment with
                state-of-the-art facilities, experienced faculty, and a focus on
                practical experience. Our strong partnerships with industries
                provide our students with internships and job opportunities.
              </p>
            </div>
            <img
              src={teamwork}
              alt="Teamwork"
            />
          </div>
        </div>

        <div id="fifth" className="reveal">
          <h1>ISET KEBILI</h1>
          <div>
            <a href="#">
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/address-blue-circle-location-map-marker-navigation-icon-45868.png"
                alt="Address Icon"
              />
              <span>
                <h3>Address</h3>
                <p>Av. de la République, Kebili, Tunisia</p>
              </span>
            </a>
            <a href="#">
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/phone-2666572-2212584.png"
                alt="Phone Icon"
              />
              <span>
                <h3>Phone</h3>
                <p>+216 75 491 960</p>
              </span>
            </a>
            <a href="#">
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/gmail-2489176-2082900.png"
                alt="Email Icon"
              />
              <span>
                <h3>E-mail</h3>
                <p>contact@isetkebili.tn</p>
              </span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
