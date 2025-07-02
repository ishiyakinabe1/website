// すべてのサムネイル画像を取得
const thumbnails = document.querySelectorAll('.thumbnail');
// モーダル関連の要素を取得
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.getElementById('close');

// 各サムネイル画像にクリックイベントを追加
thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImage.src = thumbnail.src;
    modalImage.alt = thumbnail.alt;
  });
});

// 閉じるボタンにクリックイベントを追加
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// モーダル背景をクリックして閉じる（画像以外の場所）
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});