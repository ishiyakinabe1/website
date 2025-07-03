const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const closeBtn = document.getElementById("close");

document.querySelectorAll(".thumbnail").forEach(thumbnail => {
    thumbnail.addEventListener("click", () => {
        modal.style.display = "block";
        modalImage.src = thumbnail.src;
        modalImage.alt = thumbnail.alt;
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});