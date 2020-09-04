var navicon = document.getElementsByClassName('nav-icon');
navicon[0].addEventListener('click', () => {
    if (navicon[0].classList.contains('active')) {
        navicon[0].classList.remove('active')
    } else {
        navicon[0].classList.add('active')
    }
});
var list = document.querySelectorAll('.sidenav li');
var section = document.querySelectorAll('.details');
list.forEach(item => {
    if (item.getAttribute("data-item") == "call") {
        item.className = "active";
    }
    item.addEventListener('click', () => {
        list.forEach(item => {
            item.className = "";
        });
        item.className = "active";
        let value = item.getAttribute("data-item");
        section.forEach(element => {
            element.style.display = "none";
            if (element.getAttribute("data-id") == value) {
                element.style.display = "block";
            }
        });
    })
});