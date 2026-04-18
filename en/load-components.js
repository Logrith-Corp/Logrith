function loadComponent(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

// no language detect, direct load
loadComponent("navbar", "/en/components/navbar.html");
loadComponent("footer", "/en/components/footer.html");