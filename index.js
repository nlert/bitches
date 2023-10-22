const names = document.querySelector(".name")
const reveal = document.querySelector(".reveal")
const button = document.querySelector(".bitches-btn")
let bitchesVal = document.querySelector(".bitches-val")
let frank = document.querySelector(".frank")
let jack = document.querySelector(".jack")
let will = document.querySelector(".will")
let evan = document.querySelector(".evan")
let ryan = document.querySelector(".ryan")
let neil = document.querySelector(".neil")
let luan = document.querySelector(".luan")
let baylor = document.querySelector(".baylor")

frank.addEventListener('click', function() {
    reveal.classList.add("reveal-reveal");
    names.textContent = "Frank,"
    bitchesVal.textContent = ""

    button.addEventListener('click', function() {
        bitchesVal.textContent = "1 (giga_chad.png)"
    })
})

jack.addEventListener('click', function() {
    reveal.classList.add("reveal-reveal");
    names.textContent = "Jack,"
    bitchesVal.textContent = ""

    button.addEventListener('click', function() {
        bitchesVal.textContent = "1 (giga_chad.gif)"
    })
})

will.addEventListener('click', function() {
    reveal.classList.add("reveal-reveal");
    names.textContent = "Will,"
    bitchesVal.textContent = ""

    button.addEventListener('click', function() {
        bitchesVal.textContent = "0 (Still deciding on 2 tho)"
    })
})

evan.addEventListener('click', function() {
    reveal.classList.add("reveal-reveal");
    names.textContent = "Evan,"
    bitchesVal.textContent = ""
    
    button.addEventListener('click', function() {
        bitchesVal.textContent = "ZEROOOOOOOOOOO"
    })
})

ryan.addEventListener('click', function() {
    reveal.classList.add("reveal-reveal");
    names.textContent = "Ryan,"
    bitchesVal.textContent = ""
    
    button.addEventListener('click', function() {
        bitchesVal.textContent = "Many (Fat, Ugly, Drunk)"
    })
})

neil.addEventListener('click', function() {
    reveal.classList.add("reveal-reveal");
    names.textContent = "Neil,"
    bitchesVal.textContent = ""
    
    button.addEventListener('click', function() {
        bitchesVal.textContent = "0 (giga_chad.jpg)"
    })
})

luan.addEventListener('click', function() {
    reveal.classList.add("reveal-reveal");
    names.textContent = "Luan,"
    bitchesVal.textContent = ""
    
    button.addEventListener('click', function() {
        bitchesVal.textContent = "Many (They all have bfs)"
    })
})

baylor.addEventListener('click', function() {
    reveal.classList.add("reveal-reveal");
    names.textContent = "Baylor,"
    bitchesVal.textContent = ""
    
    button.addEventListener('click', function() {
        bitchesVal.textContent = "1 (Not even MLE????)"
    })
})