//props is something we pass as a variable to get rendered in our components.
// State belongs to a component, it was developed so that we can use features( like instead of this.state we use useState() ) of a class based component in function based component, it should be inside a function only, can be used in {} throughout your component,
import React, { useEffect, useState } from "react";
import bankImage from "../bankImage.jpg"; //by doing ../ you reached to components and all files in it parallel where one of the file is the bankImage
import { Login } from "./Login";
import { Register } from "./Register"; //for default export we don't require {} but for other export we require {}
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Header() {
  const [theme, setTheme] = useState(true);
  const navigate = useNavigate();
  const convertTheme = () => {
    setTheme(!theme);
  };

  useEffect(() => {
    if (!theme) {
      document.body.classList.add("darkTheme");
      document.body.classList.remove("darkTheme");
    }
  });

  const handleClick = (e) => {
    //console.log('its inside click button')
    //  if(e == 'login'){
    //     console.log('its login')

    //  }
    //  if(e == 'register'){
    //     console.log('its register')
    //  }
    navigate(e);
  };

  return (
    <>
      <div class="navigation-wrap bg-light start-header start-style header">
        <div class="container">
          <div class="row">
            <div class="">
              <nav class="navbar navbar-expand-md navbar-light">
                <a class="navbar-brand" target="_blank">
                  <img alt="Replublic bank of India" src={bankImage} />
                </a>

                {/* <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button> */}

                <div class=" navbar_flex">
                  <ul class="navbar-nav">
                    <li class="nav-item ">
                      <a class="nav-link" href="#">
                        About Us
                      </a>
                    </li>
                    <li
                      class="nav-item"
                      onClick={() => handleClick("/register")}
                    >
                      Register
                    </li>
                    <li class="nav-item " onClick={() => handleClick("/login")}>
                      Login
                    </li>
                    {/* <li
                      class="nav-item pl-4 pl-md-0 ml-0 ml-md-4"
                      onClick={convertTheme}
                    >
                      <i className="fa fa-adjust" aria-hidden="true"></i>
                    </li> */}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
