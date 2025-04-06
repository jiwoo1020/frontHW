const star = document.getElementById('star');
let isYellow = false;

star.addEventListener('click', () => {
  if (isYellow) {
    // 회색으로 바꾸기
    star.style.filter = 'grayscale(100%)';
  } else {
    // 원래 색으로 (노란색)
    star.style.filter = 'none';
  }
  isYellow = !isYellow; // 상태 변경 (true <-> false)
});

const catImage = document.getElementById('catImage');
const catText = document.querySelector('.content2');

// 마우스 올렸을 때
catImage.addEventListener('mouseenter', () => {
  catImage.src = 'img/cat2.png'; // 다른 고양이 사진
  catText.innerHTML = `이름: 나미<br>
    나이: 12살 추정 ..<br>
    고향: 스트릿<br>
    tmi: 털이 음청 부드러움<br>
    입맛이 엄청 까다로움 ㅜㅜ`;
});

// 마우스 뗐을 때
catImage.addEventListener('mouseleave', () => {
  catImage.src = 'img/cat1.png'; // 원래 고양이 사진
  catText.innerHTML = `이름: 치즈<br>
    나이: 14살 추정.. <br>
    고향: 스트릿(길고양이란 뜻 ..)<br>
    tmi: 초딩때 맨날 밥주던 고양이였는데 <br>
    그 다음날 천둥친다길래 나도 모르게(?) 데려옴`;
});
