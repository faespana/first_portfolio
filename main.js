const hiddenElements = document.querySelectorAll(".hidden")

const links = document.querySelectorAll(".link")

const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");

                links.forEach((link) => {
                    const href = link.getAttribute("href").split('#')[1]
                    const id = entry.target.id;

                    if(href === id){
                        link.classList.add("link--active")
                    } else {
                        link.classList.remove("link--active")
                    }
                });
            } else {
                entry.target.classList.remove("show");
            }
        });
    },
    {
    threshold: 0.5, 
});

hiddenElements.forEach((element) => observer.observe(element)); 

//menu show

const iconShowMenu = document.querySelector(".iconShowMenu");
const navbarMenu = document.querySelector(".navbar_Menu");

iconShowMenu.addEventListener("click", () => {
    if(navbarMenu.classList.toggle("navbar_menu--show")) {
        iconShowMenu.classList.add("bx-x")
    } else {
        iconShowMenu.classList.remove("bx-x")
    }
});

links.forEach((link) => {
    link.addEventListener("click", () => {
        if(navbarMenu.classList.toogle("navbar_menu--show"))
            return iconShowMenu.classList
    })
})

//darkmode

const iconTheme = document.querySelector(".iconTheme")

iconTheme.addEventListener("click", () => {
    if(document.body.classList.toggle("darkTheme")) 
        return (iconTheme.textContent = "☀️")
    iconTheme.textContent = "🌛"
})