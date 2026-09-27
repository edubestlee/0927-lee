/* Firebase 콘솔 → 프로젝트 설정 → 내 앱(웹) → SDK 설정 및 구성 → "구성" 값을 그대로 붙여넣기
   이 값은 비밀번호가 아님(웹 앱에 공개되는 식별 정보) · 보안은 database.rules.json 규칙이 담당
   databaseURL 은 Realtime Database 화면 상단 주소 (예: https://프로젝트-default-rtdb.asia-southeast1.firebasedatabase.app) */
window.FIREBASE_CONFIG = {
  apiKey: 'AIzaSyCjA17E1Dno8SrfPL0rSmxHwfLRLzlURbE',
  authDomain: 'project-1-8777a.firebaseapp.com',
  databaseURL: 'https://project-1-8777a-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'project-1-8777a',
  appId: '1:378390722036:web:782ce92547d08fa0d335a1'
};

/* 강의마다 다른 이름 - 같은 프로젝트로 여러 강의 운영 가능 (영문·숫자·하이픈) */
window.DECK_ID = 'my-lecture-0927';
