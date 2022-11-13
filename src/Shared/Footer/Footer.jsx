import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer grid-cols-1 lg:grid-cols-3 bg-footer mt-20 p-20">
      <div>
        <span className="footer-title">Company</span>
        <Link className="link link-hover">About us</Link>
        <Link className="link link-hover">Contact</Link>
        <Link className="link link-hover">Jobs</Link>
        <Link className="link link-hover">Press kit</Link>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <Link className="link link-hover">Terms of use</Link>
        <Link className="link link-hover">Privacy policy</Link>
        <Link className="link link-hover">Cookie policy</Link>
      </div>
      <div>
        <span className="footer-title">Social</span>
        <Link className="link link-hover">Twitter</Link>
        <Link className="link link-hover">Instagram</Link>
        <Link className="link link-hover">Facebook</Link>
        <Link className="link link-hover">Github</Link>
      </div>
    </footer>
  );
};

export default Footer;
