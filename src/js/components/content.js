export default function content(page) {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      let content = document.getElementById('body-content');
      if (this.status === 200) {
        content.innerHTML = xhttp.responseText;
      } else if (this.status === 404) {
        content.innerHTML = `<center><h2>Page not found :(</h2></center>`;
      } else {
        content.innerHTML = `<center><h2>Something went wrong</h2></center>`;
      }
    }
  };
  xhttp.open('GET', `${page}.html`, true);
  xhttp.send();
}
