import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
export const Footer = () => {
  return (
    <footer className="footer">
      <Link style={{color:"white",textDecorationLine:"none"}} to="/">2024 Routemate by Talha Nawaz</Link>
    </footer>
  );
};
