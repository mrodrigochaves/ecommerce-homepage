import searchIcon from "../assets/search.svg";
import cartIcon from "../assets/cart.svg";
import accountIcon from "../assets/account.svg";
import arrowIcon from "../assets/arrow-icon.svg";

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

    <div class="nav-menu">
    <div class="shop-text">SHOP.CO</div>
    <a href="#">Shop<img src="${arrowIcon}" alt="Seta para baixo" class="arrow-icon" /></a>
    <a href="#">On Sale</a>
    <a href="#">New Arrivals</a>
    <a href="#">Brands</a>

    <div class="search-bar">
      <div class="icon-search">
        <img class="icon" src="${searchIcon}" alt="Search" />
        <input type="text" placeholder="Search for products..." class="search-input" />
      </div>
	  <div class="nav-menu-icons">
        <img class="nav-menu-icon" src="${cartIcon}" alt="Cart" />
        <img class="nav-menu-icon" src="${accountIcon}" alt="Account" />
      </div>
  </div>
  </div>
  `;
}
