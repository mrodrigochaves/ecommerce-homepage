import searchIcon from "../assets/search.svg";
import cartIcon from "../assets/cart.svg";
import accountIcon from "../assets/account.svg";

export default function Navbar() {
  return `
  <div class="top-bar">
      <p>
        Sign up and get 20% off to your first order.
        <a href="url">Sign Up Now</a>
      </p>
    </div>
    <div class="nav-bar">
      <div class="hamburger" onclick="toggleMenu()">☰</div>
      <div class="logo">SHOP.CO</div>
      <div class="icons">
        <img class="icon" src="${searchIcon}" alt="Search" />
        <img class="icon" src="${cartIcon}" alt="Cart" />
        <img class="icon" src="${accountIcon}" alt="Account" />
      </div>
    </div>
  `;
}
