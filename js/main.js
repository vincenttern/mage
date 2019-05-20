// Dropdown 1
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger1');
    var instances = M.Dropdown.init(elems, {
                                        inDuration: 430,
                                        outDuration: 225,
                                        hover: true,
                                        coverTrigger: false
                                    });
});

// Dropdown 2
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger2');
    var instances = M.Dropdown.init(elems, {
                                        inDuration: 430,
                                        outDuration: 225,
                                        hover: true,
                                        coverTrigger: false
                                    });
});

// Dropdown 3
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger3');
    var instances = M.Dropdown.init(elems, {
                                        inDuration: 430,
                                        outDuration: 225,
                                        hover: true,
                                        coverTrigger: false
                                    });
});


// Navigation Bar
function load_navbar (e) {
    (e || window.event).preventDefault();

    fetch("http://www.yoursite.com/home.html" /*, options */)
    .then((response) => response.text())
    .then((html) => {
        document.getElementById("navbar-top").innerHTML = html;
    })
    .catch((error) => {
        console.warn(error);
    });
}



document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {edge: 'right'});
});