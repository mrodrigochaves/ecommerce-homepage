import twitterIcon from "../assets/twitter.svg";
import facebookIcon from "../assets/facebook.svg";
import instagramIcon from "../assets/instagram.svg";
import githubIcon from "../assets/github.svg";
import visaIcon from "../assets/visa.svg";
import mastercardIcon from "../assets/mastercard.svg";
import paypalIcon from "../assets/paypal.svg";
import applePayIcon from "../assets/apple-pay.svg";
import googlePayIcon from "../assets/google-pay.svg";

export default function Footer() {
  return `
    <footer class="footer">
      <div class="logo-down">SHOP.CO</div>
      <p class="slogan">
        We have clothes that suit your style and which you’re proud to wear. From women to men.
      </p>
      <div class="socials">
        <img class="social" src="${twitterIcon}" alt="Twitter" />
        <img class="facebook" src="${facebookIcon}" width="28" alt="Facebook" />
        <img class="social" src="${instagramIcon}" alt="Instagram" />
        <img class="social" src="${githubIcon}" alt="GitHub" />
      </div>
      <div class="footer-sections">
        <div class="column">
          <div class="section">
            <h3>Company</h3>
            <p>About</p>
            <p>Features</p>
            <p>Works</p>
            <p>Career</p>
          </div>
          <div class="section">
            <h3>FAQ</h3>
            <p>Account</p>
            <p>Manage Deliveries</p>
            <p>Order</p>
            <p>Payment</p>
          </div>
        </div>
        <div class="column">
          <div class="section">
            <h3>Help</h3>
            <p>Customer Support</p>
            <p>Delivery Details</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <div class="section">
            <h3>Resources</h3>
            <p>Free eBook</p>
            <p>Development</p>
            <p>How to - Blog</p>
            <p>YouTube Playlist</p>
          </div>
        </div>
      </div>
      <div class="footer-bar">
        <p>Shop.co © 2000-2023, All Rights Reserved</p>
        <img class="footer-icons" src="${visaIcon}" alt="Visa" />
        <img class="footer-icons" src="${mastercardIcon}" alt="MasterCard" />
        <img class="footer-icons" src="${paypalIcon}" alt="PayPal" />
        <img class="footer-icons" src="${applePayIcon}" alt="Apple Pay" />
        <img class="footer-icons" src="${googlePayIcon}" alt="Google Pay" />
      </div>
    </footer>
  `;
}
