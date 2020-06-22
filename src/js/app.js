import loadnav from './components/nav';
import content from './components/content';
import runtime from 'serviceworker-webpack-plugin/lib/runtime';
import { webPush } from './api/push.config';
import '../style/style.css';
import '../style/material-icons.css';

document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelectorAll('.sidenav');
  M.Sidenav.init(el);
  let page = window.location.hash.substr(1);
  if (page === '') page = 'home';
  content(page);
  loadnav();

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      const registration = runtime.register();
      registration
        .then(() => {
          console.log('Service worker berhasil dipasang');
        })
        .catch((err) => {
          console.log(err);
          console.log('Service worker berhasil dipasang');
        });
      webPush();
    });
  } else {
    M.toast({
      html: 'Browser anda tidak mendukung service worker',
      classes: 'rounded',
    });
    console.log('Browser anda tidak mendukung service worker');
  }
});
