import loadnav from './components/nav';
import content from './components/content';
import getTanding from './pages/tanding';
import 'regenerator-runtime';
import '../style/style.css';

document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelectorAll('.sidenav');
  M.Sidenav.init(el);
  let page = window.location.hash.substr(1);
  if (page === '') page = 'home';
  content(page);
  loadnav();
  getTanding();
});
