const modal = document.getElementById('modal-bcg');
const btn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const downloadBtn = document.getElementById('download-btn');

btn.onclick = function () {
  modal.style.display = 'block';
};

closeBtn.onclick = function () {
  modal.style.display = 'none';
};

downloadBtn.onclick = function (event) {
  event.preventDefault();
};
