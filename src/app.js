import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import router from "./router.js";
import "./styles/reset.css";
import "./styles/main.css";

document.addEventListener("DOMContentLoaded", () => {
  document.body.insertAdjacentHTML("afterbegin", Navbar());
  router();
  document.body.insertAdjacentHTML("beforeend", Footer());
});
