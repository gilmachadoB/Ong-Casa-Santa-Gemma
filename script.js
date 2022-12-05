window.onscroll = () => {
  var atual = "";
  var sections = window.document.querySelectorAll(".section-menu")
  var navLi = window.document.querySelectorAll(".nav-link")

//   if (pageYOffset >= 200) {
//     document.getElementById('link-topo').style.visibility = "visible";
// } else {
// document.getElementById('link-topo').style.visibility = "hidden";
// }
};
  if(navLi.forEach(li => li.classList.contains("active") == false)) {
    document.querySelector(".link-topo").style.display = "none"; 
  }
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop) {
      atual = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(atual)) {
      li.classList.add("active");

    }
  });


  // console.log(navLi.forEach((li) => {li.classList.contains("active") }))







