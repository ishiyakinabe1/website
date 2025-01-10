document.addEventListener("DOMContentLoaded", () => {
    const lazyImages = document.querySelectorAll('.lazy');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.onload = () => img.style.opacity = 1;
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => observer.observe(img));
});
function showImage(element) {
    var modal = document.getElementById("modal");
    var modalImage = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImage.src = element.src;
    captionText.innerHTML = element.alt;
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}