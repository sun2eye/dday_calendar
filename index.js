// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '211px';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message": "크리스마스가 다가오니 설레는 마음이 가득해져요." },
  { "number": 2, "message": "크리스마스 트리를 꾸미는 마음으로 기다려지는 순간이에요." },
  { "number": 3, "message": "크리스마스 캐롤을 듣고 행복한 기분에 취해보세요." },
  { "number": 4, "message": "크리스마스 선물을 준비하는데 설레는 마음이 가득해져요." },
  { "number": 5, "message": "따뜻한 가족의 온기를 느껴보세요." },
  { "number": 6, "message": "특별한 메뉴를 즐겨보세요." },
  { "number": 7, "message": "사랑과 관용으로 마음을 나누어보세요." },
  { "number": 8, "message": "빛나는 캔들로 분위기를 연출해보세요." },
  { "number": 9, "message": "크리스마스 카드를 보내어 소중한 사람들에게 감사의 마음을 전해보세요." },
  { "number": 10, "message": "따뜻한 차 한 잔과 함께 휴식을 취해보세요." },
  { "number": 11, "message": "즐거운 웃음 소리가 가득하기를 바랍니다." },
  { "number": 12, "message": "소중한 이야기를 나누며 추억을 쌓아보세요." },
  { "number": 13, "message": "마음에 있는 생각들을 이루어보는 것이 좋겠네요." },
  { "number": 14, "message": "연인 또는 친구들과 함께하여 더욱 특별한 하루가 되길..." },
  { "number": 15, "message": "사랑과 관용을 나누며 세상을 밝혀보세요." },
  { "number": 16, "message": "아름다운 노래와 함께 춤추어보세요." },
  { "number": 17, "message": "세상에 희망을 전해주는 별이 되어보세요." },
  { "number": 18, "message": "따뜻한 풍경을 바라보며 휴식을 취해보세요." },
  { "number": 19, "message": "소중한 사람들과 함께하는 시간을 소중히 여기세요." },
  { "number": 20, "message": "사랑과 감사의 마음으로 기도해보세요." },
  { "number": 21, "message": "소망과 기대를 가슴에 품고 새로운 시작을 준비해보세요." },
  { "number": 22, "message": "따뜻한 불빛과 함께 세상을 밝혀보세요." },
  { "number": 23, "message": "마음을 따뜻하게 하는 작은 선물을 나눠보세요." },
  { "number": 24, "message": "평화로운 밤을 보내고 새로운 희망을 품어보세요." }
];

