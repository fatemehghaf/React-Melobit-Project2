import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FooterBox,FooterContainer,FooterRow,FooterColumn,FooterLink,Heading} from "./FooterStyles.js";
import {FaHome,FaSearch,FaTelegram,FaInstagram, FaFacebook} from 'react-icons/fa'



const Footer = () => {
return (
<FooterBox>
    <hr className='clearfix d-md-none rgba-white-light'/>   
    <footer className='page-footer'>
          
        <FooterContainer>
          <FooterRow>
            <FooterColumn>
              <Heading>About Us</Heading>
              <FooterLink href="#">Aim</FooterLink>
              <FooterLink href="#">Vision</FooterLink>
              <FooterLink href="#">Testimonials</FooterLink>
            </FooterColumn>

            <FooterColumn>
              <Heading>Services</Heading>
                <FooterLink href="#">Writing</FooterLink>
                <FooterLink href="#">Internships</FooterLink>
                <FooterLink href="#">Coding</FooterLink>

            </FooterColumn>

            <FooterColumn>
              <Heading>Contact Us</Heading>
              <FooterLink href="#">Uttar Pradesh</FooterLink>
              <FooterLink href="#">Ahemdabad</FooterLink>
              <FooterLink href="#">Indore</FooterLink>
            </FooterColumn>
			
            
            <FooterColumn>
            <Heading>Social Media</Heading>
            <div className='social-icons'>   
			<FooterLink href="https://t.me/s/melodio">
              <h3 className='m-2'> <FaTelegram/></h3>
              </FooterLink>			
			  <FooterLink href="https://www.instagram.com/melobotmusic/?hl=en">
                <h3 className='m-2'> <FaInstagram/></h3>
              </FooterLink>
              <FooterLink href="https://www.facebook.com/melobot.melobit/">
                <h3 className='m-2'><FaFacebook/></h3>
              </FooterLink>   
        </div>
        </FooterColumn>
        
          </FooterRow>
      </FooterContainer>
    

        <div className='footer-copyright text-center py-2 text-white mt-4'>© 2023 Developed By: Fatemeh Ghafouri , Mahdiye Shayan </div> 
    </footer>
 </FooterBox> 
	
    
);
};
export default Footer;
