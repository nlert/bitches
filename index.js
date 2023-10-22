// Variables
const names = document.querySelector(".name")
const reveal = document.querySelector(".reveal")
const button = document.querySelector(".bitches-btn")
let bitchesVal = document.querySelector(".bitches-val")

// Theme Button
const sun = document.getElementById("sun")
const moon = document.getElementById("moon")
const themeStyle = document.getElementById("theme-style")

sun.addEventListener('click', function() {
    moon.classList.remove("theme-hide");
    moon.classList.add("theme");

    sun.classList.remove("theme");
    sun.classList.add("theme-hide");

    themeStyle.href = "light-theme.css";
})

moon.addEventListener('click', function() {
    sun.classList.remove("theme-hide");
    sun.classList.add("theme");

    moon.classList.remove("theme");
    moon.classList.add("theme-hide");

    themeStyle.href = "dark-theme.css";
})

// Name Buttons
let frank = document.querySelector(".frank")
let jack = document.querySelector(".jack")
let will = document.querySelector(".will")
let evan = document.querySelector(".evan")
let ryan = document.querySelector(".ryan")
let neil = document.querySelector(".neil")
let luan = document.querySelector(".luan")
let baylor = document.querySelector(".baylor")

frank.addEventListener('click', function() {
    reveal.classList.add("reveal-reveal"); // Reveal textbox
    names.textContent = "Frank,"; // Add name to welcome statement
    bitchesVal.textContent = ""; // Clear textbox 
    window.scrollTo(0, document.body.scrollHeight); // Scroll to bottom of page

    button.addEventListener('click', function() { // Add text to textbox
        bitchesVal.textContent = "1 (giga_chad.png)";
    })
})

jack.addEventListener('click', function() {
    reveal.classList.add("reveal-reveal");
    names.textContent = "Jack,"
    bitchesVal.textContent = ""
    window.scrollTo(0, document.body.scrollHeight);

    button.addEventListener('click', function() {
        bitchesVal.textContent = "1 (giga_chad.gif)"
    })
})

will.addEventListener('click', function() {
    reveal.classList.add("reveal-reveal");
    names.textContent = "Will,"
    bitchesVal.textContent = ""
    window.scrollTo(0, document.body.scrollHeight);

    button.addEventListener('click', function() {
        bitchesVal.textContent = "0 (Still deciding on 2 tho)"
    })
})

evan.addEventListener('click', function() {
    reveal.classList.add("reveal-reveal");
    names.textContent = "Evan,"
    bitchesVal.textContent = ""
    window.scrollTo(0, document.body.scrollHeight);
    
    button.addEventListener('click', function() {
        bitchesVal.textContent = "ZEROOOOOOOOOOO"
    })
})

ryan.addEventListener('click', function() {
    reveal.classList.add("reveal-reveal");
    names.textContent = "Ryan,"
    bitchesVal.textContent = ""
    window.scrollTo(0, document.body.scrollHeight);
    
    button.addEventListener('click', function() {
        bitchesVal.textContent = "Many (Fat, Ugly, Drunk)"
    })
})

neil.addEventListener('click', function() {
    reveal.classList.add("reveal-reveal");
    names.textContent = "Neil,"
    bitchesVal.textContent = ""
    window.scrollTo(0, document.body.scrollHeight);
    
    button.addEventListener('click', function() {
        bitchesVal.textContent = "0 (giga_chad.jpg)"
    })
})

luan.addEventListener('click', function() {
    reveal.classList.add("reveal-reveal");
    names.textContent = "Luan,"
    bitchesVal.textContent = ""
    window.scrollTo(0, document.body.scrollHeight);
    
    button.addEventListener('click', function() {
        bitchesVal.textContent = "Many (They all have bfs)"
    })
})

baylor.addEventListener('click', function() {
    reveal.classList.add("reveal-reveal");
    names.textContent = "Baylor,"
    bitchesVal.textContent = ""
    window.scrollTo(0, document.body.scrollHeight);
    
    button.addEventListener('click', function() {
        bitchesVal.textContent = "1 (Not even MLE????)"
    })
})