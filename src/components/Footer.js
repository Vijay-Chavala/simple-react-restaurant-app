import React from "react";
import { Link } from "react-router-dom";
import { social } from "../data";
import footerStyles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={footerStyles.footer_row}>
        <div className={footerStyles.footer_logo}>
          <h2 className={footerStyles.footer_logo_text}>
            Royal <span>Foods</span>
          </h2>
        </div>
        <div className={footerStyles.footer_content}>
          <div className={footerStyles.footer_company}>
            <h4>COMPANY</h4>
            <ul>
              <li>
                <Link className={footerStyles.company_link}>About Us</Link>
              </li>
              <li>
                <Link className={footerStyles.company_link}>Services </Link>
              </li>
              <li>
                <Link className={footerStyles.company_link}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className={footerStyles.footer_contact}>
            <h4>CONTACT</h4>
            <div className={footerStyles.footer_social_icons}>
              <p>contact@royalfoods.com</p>
              <p>+91 888 555 222 1</p>
              <ul className={footerStyles.footer_social_link}>
                {social.map((item) => {
                  const { id, url, icon } = item;
                  return (
                    <li key={id}>
                      <Link className={footerStyles.social_link} to={url}>
                        {icon}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className={footerStyles.address}>
            <h4>ADDRESS</h4>
            <p>
              101 NH16 Road <br />
              Andhra Pradesh <br />
              533449
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
