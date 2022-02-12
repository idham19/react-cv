import React from "react";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
  return (
    <div>
      <Navigation />
      <div className="contactContent">
        <div className="header"> </div>
        <div className="contactBox">
          <h1>Contact Me</h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt">
                <span>Philadelphia</span>
              </i>
            </li>
            <li>
              <i className="fas fa-mobile-alt">
                <CopyToClipboard text="267-918-1733">
                  <span
                    className="clickInput"
                    onClick={() => {
                      alert("phone number copied");
                    }}
                  >
                    267-918-1733
                  </span>
                </CopyToClipboard>
              </i>
            </li>
            <li>
              <i className="far fa-envelope">
                <CopyToClipboard text="mahdibelabbas@gmail.com">
                  <span
                    className="clickInput"
                    onClick={() => {
                      alert("email copied");
                    }}
                  >
                    mahdibelabbas@gmail.com
                  </span>
                </CopyToClipboard>
              </i>
            </li>
          </ul>
        </div>
        <div className="scoialNetwork">

            
        </div>
      </div>
    </div>
  );
};

export default Contact;
