
document.addEventListener("DOMContentLoaded", function () {

    let bulb = document.querySelector(".mode_light_dark");
    let angle = 0;
    let direction = 1;
    // let interval;
    let interval = null;
    let isSwinging = false;
    
    // Set  point at the top center
    bulb.style.transformOrigin = "top center";

    function swingBulb() {

        angle += direction * 2;
        if (angle > 15 || angle < -15) {

            direction *= -1;

        }
        bulb.style.transform = `rotate(${angle}deg)`;
    }

    // Start swinging
    interval = setInterval(swingBulb, 50);

    // Stop swinging after 3 seconds and reset position
    setTimeout(() => {

        clearInterval(interval);  // Stops the swing loop
        interval = null;
        bulb.style.transition = "transform 0.5s ease-out"; // Smoothly reset

        bulb.style.transform = "rotate(0deg)";  // Set back to normal
    }, 3000);


// swing when click happens
    bulb.addEventListener("click", function () {

        if (isSwinging) return; // Prevent spam clicks

        isSwinging = true; // Mark swinging as active
        interval = setInterval(swingBulb, 50);
        

        setTimeout(() => {
            clearInterval(interval);  // Stops the swing loop
            interval = null;
            bulb.style.transition = "transform 0.5s ease-out"; // Smoothly reset
            
            bulb.style.transform = "rotate(0deg)";  // Set back to normal
            isSwinging = false;
        }, 2000);
    
    });
    
});
