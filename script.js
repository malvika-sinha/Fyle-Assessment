document.getElementById('contactButton').addEventListener('click', function() {
    window.open('contact.html', '_blank');  // Update this URL to your actual contact page URL
});
 //FOR CONTACT BUTTON
 function Contact() {
    document.getElementById('contactButton').addEventListener('click', function () {
        window.open('contact.html', '_blank');
    });
}

// Ensuring the DOM is fully loaded before attaching the event listener
document.addEventListener('DOMContentLoaded', Contact);

//FOR READ MORE OPTION
document.getElementById('openFyle').addEventListener('click', function () {
    window.open('https://www.google.com', '_blank');
});

// <!--FOR IMAGES-->
function changeImage(imagePath) {
    document.getElementById('mainImage').src = imagePath;
}
// FOR INTERACTIONS
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.number');
    const speed = 200; // The lower the slower

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
});