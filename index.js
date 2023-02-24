function clickDropdown() {
  document.getElementById("drop-click").classList.toggle("show");

  window.onclick = function(event) {
    if (!event.target.matches('.click-drop')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
}

function stayOpen() {
  var stayOpen = document.getElementsByClassName("open-drop");
  var i;

for (i = 0; i < stayOpen.length; i++) {
  stayOpen[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var stayOpenContent = this.nextElementSibling;
    if (stayOpenContent.style.display === "block") {
      stayOpenContent.style.display = "none";
    } else {
      stayOpenContent.style.display = "block";
    }
  });
}
}

