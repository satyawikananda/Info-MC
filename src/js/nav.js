document.addEventListener('DOMContentLoaded', () => {
    const el = document.querySelectorAll('.sidenav')
    M.Sidenav.init(el)
    // let page = window.location.hash.substr(1)
    // if(page === "") page = "home"
    loadNav()
    
    function loadNav(){
        const xhttp = new XMLHttpRequest()
        xhttp.onreadystatechange = function () {
            if(this.readyState === 4) {
                if(this.status !== 200) return
                
                document.querySelectorAll(".sidenav, .topnav").forEach((elm) => {
                    elm.innerHTML = xhttp.responseText
                })

                document.querySelectorAll('.sidenav a, .topnav a').forEach((elm) => {
                    elm.addEventListener("click", (e) => {
                        const sidenav = document.querySelector('.sidenav')
                        M.Sidenav.getInstance(sidenav).close()
                    })
                })
            }
        }
        xhttp.open("GET", "nav.html", true)
        xhttp.send()
    }
})