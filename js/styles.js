document.addEventListener("DOMContentLoaded", function () {
    function animateValue(id, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            document.getElementById(id).innerText = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateValue("experience-count", 0, 10, 2000);
                animateValue("quality-count", 0, 100, 2000);
                animateValue("support-count", 0, 24, 2000);
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    }, {
        threshold: 0.5 // Adjust this value as needed
    });

    const target = document.querySelector('.feature');
    if (target) {
        observer.observe(target);
    }
});
     
        $(document).ready(function(){
            $('.header-carousel').owlCarousel({
                loop:true,
                margin:0,
                nav:false,
                autoplay:true,
                autoplayTimeout:4000,
                autoplayHoverPause:true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1000:{
                        items:1
                    }
                }
            });
        });
  


    $('.carousel').carousel({
      interval: 2000 
    });

    function toggleDropdown() {
  var dropdownMenu = document.getElementById("myDropdown");
  dropdownMenu.classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
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

function toggleNestedDropdown(event) {
    event.preventDefault();
    var nestedDropdown = document.getElementById("nestedDropdown");
    nestedDropdown.classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
        var nestedDropdowns = document.getElementsByClassName("nested-dropdown-content");
        for (i = 0; i < nestedDropdowns.length; i++) {
            var openNestedDropdown = nestedDropdowns[i];
            if (openNestedDropdown.classList.contains('show')) {
                openNestedDropdown.classList.remove('show');
            }
        }
    }
}

function toggleDropdown() {
    var dropdownMenu = document.getElementById("myDropdown");
    dropdownMenu.classList.toggle("show");
}


    $(document).ready(function(){
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:0,
            nav:false,
            autoplay:true,
            autoplayTimeout:1500, 
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });
    });
