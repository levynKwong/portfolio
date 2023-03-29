let isHidden = true;

// hide the elements initially
document.querySelectorAll('.middle-folder, .smile, .computer, .email, .note, .work').forEach(el => {
  el.style.display = 'none';
});

const middleFolderClose = document.querySelector('#middle-folder-close');
const middleFolder = document.querySelector('#middle-folder');

middleFolderClose.addEventListener('click', () => {
  if (isHidden) {
    document.querySelectorAll('.middle-folder, .smile, .computer, .email, .note, .work').forEach(el => {
      el.style.display = 'block';
    });
    middleFolderClose.classList.add('hide');
    middleFolder.classList.remove('hide');
    isHidden = false;
  } else {
    document.querySelectorAll('.middle-folder, .smile, .computer, .email, .note, .work').forEach(el => {
      el.style.display = 'none';
    });
    middleFolderClose.classList.remove('hide');
    middleFolder.classList.add('hide');
    isHidden = true;
  }
});

middleFolder.addEventListener('click', () => {
  if (!isHidden) {
    middleFolderClose.classList.remove('hide');
    middleFolder.classList.add('hide');
    isHidden = true;
  }
});


const scrollBg = document.getElementById("scroll-bg1");
const smileBtn = document.getElementById("smile");
const closeBtn = document.getElementById("close1");

scrollBg.style.display = 'none';

smileBtn.addEventListener("click", () => {
  scrollBg.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  scrollBg.style.display = "none";
});


