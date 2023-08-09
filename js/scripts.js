/*!
* Start Bootstrap - Resume v7.0.4 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

// Splash Screen
// const splash = document.querySelector('.splash');

// document.addEventListener('DOMContentLoaded', (e)=>{
//     setTimeout(()=>{
//         splash.classList.add('display-none');
//     }, 2000);
// })

// The function is called in the CDN on HTML.
function liveViews(response) {
    document.getElementById('visits').innerText = response.value;
}

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


// ------------------Prgressbar------------------

let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}


// ------------------Animated Text------------------

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml9 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({
    loop: true
}).add({
    targets: '.ml9 .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i + 1)
}).add({
    targets: '.ml9',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
});


// --------- JUST UNCOMMENT WHICH QUOTES WANT TO USE (Developer @ Normal) ---------

// ------------------Quote 1 (Developer Quotes)------------------

$.getJSON('/js/quotes.json', function(data) {
    
    var quotesTotal = data.data.length;
    var indexRandom = Math.floor(Math.random() * quotesTotal);

    var quote = `${data.data[indexRandom].en}`
    var author = `${data.data[indexRandom].author}`

    var text = `<h5>
                    "` + quote + `"
                    <span class="red2-fsx"> - </span>
                    <span class="blue-fsx">` + author + `</span>
                </h5>
                <br>`

    $("#quote").html(text);

});


// ------------------Quote 2 (Normal Quotes)------------------

// $.getJSON('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json', function(data) {

//     function getRandomInt() {
//         return Math.floor(Math.random() * data.quotes.length);
//     }

//     var ob_num = getRandomInt()

//     var quote = `${data.quotes[ob_num].quote}`
//     var author = `${data.quotes[ob_num].author}`

//     // console.log(ob_num)  which n-th object display in console

//     var text = `<h5>
//                     "` + quote + `"
//                     <span class="red2-fsx"> - </span>
//                     <span class="blue-fsx">` + author + `</span>
//                 </h5>
//                 <br>`

//     $("#quote").html(text);

// });