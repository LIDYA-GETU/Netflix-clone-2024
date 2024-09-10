import React from 'react'
import FacebookOutLinedIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Footer.css"
function Footer() {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_contanier">
        <div className="footer_icons">
          <FacebookOutLinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className="footer_data">
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>helep center</li>
              <li>jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="service_code">
          <p>Service Code</p>
        </div>
        <div className="copy-write">&copy;1997-2024 Netflix, INC.</div>
      </div>
    </div>
  );
}

export default Footer
