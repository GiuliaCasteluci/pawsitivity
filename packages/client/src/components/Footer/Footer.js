import React from 'react';
import { useLocation } from 'react-router-dom';
import { API_URL } from '../../constants.js';

const Footer = () => {
  
const location = useLocation();

let footerStyle = {};
let textColor = {};
if (location.pathname !== '/' && location.pathname !== '/homePage') {
footerStyle = {
backgroundColor: '#ef8172',
};
textColor = {
color: '#fff',
};
}

return (
<footer id="footer" style={footerStyle}>
<i class="social-icon fab fa-twitter" style={{cursor: 'pointer'}}></i>
<i class="social-icon fab fa-facebook-f" style={{cursor: 'pointer'}}></i>
<i class="social-icon fab fa-instagram" style={{cursor: 'pointer'}}></i>
<i class="social-icon fas fa-envelope" style={{cursor: 'pointer'}}></i>

  <p class="text-center" style={textColor}>
    © Copyright 2023 Pawsitivity
  </p>
</footer>
);
}
export default Footer;
