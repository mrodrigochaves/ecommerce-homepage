import searchIcon from "../assets/search.svg";
import cartIcon from "../assets/cart.svg";
import accountIcon from "../assets/account.svg";
import trendyImage from "../assets/trendy-fashionable-couple-posing.jpg";
import starIcon from "../assets/star.svg";
import versaceLogo from "../assets/versace_logo.svg";
import zaraLogo from "../assets/zara_logo.svg";
import gucciLogo from "../assets/gucci_logo.svg";
import pradaLogo from "../assets/prada-logo.png";
import ckLogo from "../assets/ck_logo.svg";
import tshirtPreview from "../assets/tshirt-preview.png";
import skinPreview from "../assets/skin-preview.png";
import verticalPreview from "../assets/vertical-preview.png";
import couragePreview from "../assets/courage-preview.png";
import casualPreview from "../assets/casual_preview.png";
import formalPreview from "../assets/formal-preview.png";
import partyPreview from "../assets/party-preview.png";
import gymPreview from "../assets/gym-preview.png";
import prevArrow from "../assets/prev-arrow.svg";
import nextArrow from "../assets/next-arrow.svg";
import emailIcon from "../assets/email.svg";

export default function Home() {
  return `
    <!-- Hero Section -->
    <section class="hero-section">
      <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
      <p>
        Browse through our diverse range of meticulously crafted garments,
        designed to bring out your individuality and cater to your sense of
        style.
      </p>
      <button class="shop-now-btn">Shop Now</button>
      <div class="highlights">
        <div class="highlight-row">
          <div class="highlight-item">
            <h2>200+</h2>
            <p>Intenational Brands</p>
          </div>
          <div class="vertical-line"></div>
          <div class="highlight-item">
            <h2>2,000+</h2>
            <p>High-Quality Products</p>
          </div>
        </div>
        <div class="highlight-row-2">
          <div class="highlight-item">
            <h2>30,000+</h2>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Image -->
    <section class="image-section">
      <img src="${trendyImage}" alt="Couple wearing trendy clothes" class="featured-image" />
      <img src="${starIcon}" alt="Star 70" class="star-biggest" />
      <img src="${starIcon}" alt="Star 44" class="star-smallest" />
    </section>

    <!-- Brand Logos -->
    <section class="section-logos">
      <div class="brand-logos">
        <img src="${versaceLogo}" alt="Versace" />
        <img src="${zaraLogo}" alt="Zara" />
        <img src="${gucciLogo}" alt="Gucci" />
        <img src="${pradaLogo}" alt="Prada" />
        <img src="${ckLogo}" alt="Calvin Klein" />
      </div>
    </section>

    <!-- New Arrivals Section -->
    <section class="new-arrivals">
      <h2>New Arrivals</h2>
      <div class="product-grid">
        <!-- Product Card -->
        <div class="product-card">
          <img src="${tshirtPreview}" alt="T-shirt" />
          <div>T-shirt with Tape Details</div>
          <div class="rating">
            <i class="fas fa-star" style="color: #FFD700;"></i>
            <i class="fas fa-star" style="color: #FFD700;"></i>
            <i class="fas fa-star" style="color: #FFD700;"></i>
            <i class="fas fa-star" style="color: #FFD700;"></i>
            <i class="fas fa-star-half" style="color: #FFD700;"></i>
          </div>
          <div>$120</div>
        </div>
        <div class="product-card">
          <img src="${skinPreview}" alt="Skin" />
          <div>Skin Fit Jeans</div>
          <div class="rating">
            <i class="fas fa-star" style="color: #FFD700;"></i>
            <i class="fas fa-star" style="color: #FFD700;"></i>
            <i class="fas fa-star" style="color: #FFD700;"></i>
            <i class="fas fa-star-half" style="color: #FFD700;"></i>
          </div>
          <div>$240 <span class="old-price">$260</span></div>
        </div>
        <!-- Add more products here -->
      </div>
      <button class="view-all-btn">View All</button>
    </section>

    <!-- Top Selling Section -->
    <section class="top-selling">
      <h2>Top Selling</h2>
      <div class="product-grid">
        <!-- Product Card -->
        <div class="product-card">
          <img src="${verticalPreview}" alt="Vertical Striped Shirt" />
          <div>Vertical Striped Shirt</div>
          <div>$212 <span class="old-price">$235</span></div>
          <div>
            <i class="fas fa-star" style="color: #FFD700;"></i>
            <i class="fas fa-star" style="color: #FFD700;"></i>
            <i class="fas fa-star" style="color: #FFD700;"></i>
            <i class="fas fa-star" style="color: #FFD700;"></i>
            <i class="fas fa-star" style="color: #FFD700;"></i>
          </div>
        </div>

        <div class="product-card">
          <img src="${couragePreview}" alt="Courage Graphic T-shirt" />
          <div>Courage Graphic T-shirt</div>
          <div>$145</div>
          <div>
            <i class="fas fa-star" style="color: #FFD700;"></i>
            <i class="fas fa-star" style="color: #FFD700;"></i>
            <i class="fas fa-star" style="color: #FFD700;"></i>
            <i class="fas fa-star" style="color: #FFD700;"></i>
          </div>
        </div>
        <!-- Add more products here -->
      </div>
      <button class="view-all-btn">View All</button>
    </section>

    <!-- Browse by Dress Style -->
    <div class="container">
      <div class="header">BROWSE BY DRESS STYLE</div>
      <div class="category">
        <div class="category-title">Casual</div>
        <img src="${casualPreview}" alt="Casual" class="category-image">
      </div>
      <div class="category">
        <div class="category-title">Formal</div>
        <img src="${formalPreview}" alt="Formal" class="category-image">
      </div>
      <div class="category">
        <div class="category-title">Party</div>
        <img src="${partyPreview}" alt="Party" class="category-image">
      </div>
      <div class="category">
        <div class="category-title">Gym</div>
        <img src="${gymPreview}" alt="Gym" class="category-image">
      </div>
    </div>

    <!-- Testimonials Section -->
    <section class="carousel">
      <div class="carousel" aria-label="Testimonial Carousel">
        <div class="carousel-header">
          <h2 class="carousel-title">Our Happy Customers</h2>
          <div class="carousel-nav">
            <img id="prevBtn" class="nav-arrow" aria-label="Previous" src="${prevArrow}" alt="Previous">
            <img id="nextBtn" class="nav-arrow" aria-label="Next" src="${nextArrow}" alt="Next">
          </div>
        </div>
        <div class="carousel-content">
          <!-- Testimonial Items -->
          <div class="carousel-item" aria-label="Testimonial 1">
            <div class="testimonial-box">
              <div>
                <i class="fas fa-star" style="color: #FFD700;"></i>
                <i class="fas fa-star" style="color: #FFD700;"></i>
                <i class="fas fa-star" style="color: #FFD700;"></i>
                <i class="fas fa-star" style="color: #FFD700;"></i>
                <i class="fas fa-star" style="color: #FFD700;"></i>
              </div>
              <div class="person-info">
                <span class="person-name">Sarah M.</span>
                <span class="check-icon" aria-hidden="true">✔</span>
              </div>
              <p class="testimonial-text">"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
            </div>
          </div>
          <!-- Add more testimonials here -->
        </div>
      </div>
    </section>

    <!-- Newsletter Sign-Up -->
    <section class="newsletter">
      <h2>STAY UP TO DATE ABOUT OUR LATEST OFFERS</h2>
      <div class="email-input-container">
      <div>
        <input type="email" placeholder="Enter your email" />
        </div>
        <div>
          <span>&#9993;</span> 
          </div>
      </div>
      <button class="subscribe-btn">Subscribe to Newsletter</button>
    </section>

  `;
}
