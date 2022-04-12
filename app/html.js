const d = document,
  $nodes = d.querySelectorAll("[data-include]");


const getHTML = (e) => {
    $nodes.forEach((el,i) => {
        const url = el.getAttribute("data-include");
        fetch(url, {
            headers: { "Content-Type" : "text/html;charset=utf-8" }            
        })
        .then(res => res.text())
        .then(html => el.outerHTML = html)
    })
  }


d.addEventListener("DOMContentLoaded", getHTML)