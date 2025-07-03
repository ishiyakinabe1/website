// モーダル表示処理
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const closeBtn = document.getElementById("close");

// すべてのサムネイルにクリックイベントを追加
document.querySelectorAll(".thumbnail").forEach(thumbnail => {
    thumbnail.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImage.src = thumbnail.src;
        modalImage.alt = thumbnail.alt;
    });
});

// 閉じるボタン
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// モーダル外クリックで閉じる
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});