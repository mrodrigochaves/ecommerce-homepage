
import Home from './pages/Home.js';

const routes = {
  '/': Home,
};

export default function router() {
  const path = window.location.pathname;
  const page = routes[path] || Home;
  document.getElementById('app').innerHTML = page();
}
