// JavaScript for controlling video playback
window.addEventListener('DOMContentLoaded', function() {
    var video = document.querySelector('video'); // Get the video element

    // Play the video when the page is loaded
    video.play();

    // Pause the video when the user scrolls
    window.addEventListener('scroll', function() {
        if (isElementInViewport(video)) {
            video.play();
        } else {
            video.pause();
        }
    });

    // Function to check if an element is in the viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});
