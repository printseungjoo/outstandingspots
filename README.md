# Outstanding Spots

![Outstanding Spots 스크린샷](https://res.cloudinary.com/dm2ginyde/image/upload/v1773507667/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_l6xwor.jpg)
Outstanding은 한국뉴욕주립대학교(SUNY Korea) 근처 매장들과 계약해  
한국뉴욕주립대학교 학생들에게 할인과 혜택을 제공하고 있습니다.

Outstanding Spots 웹사이트는 지도와 마커를 통해 한눈에 계약된 매장들을 볼 수 있게 도와줍니다. 또한 이 웹사이트는 계약된 모든 매장을 조회할 수 있고 마커 클릭 시 해당 매장의 매장 정보와 할인 내용, 유의해야할 사항들을 알려줍니다.

한국뉴욕주립대학교 학생 중에는 외국인 비율도 많기에 한글 영어 중 선택해서 웹사이트를 이용할 수 있도록 설계되었습니다.

---

## 웹사이트 링크
[https://outstandingspots.com/](https://outstandingspots.com/)

---

## 핵심 기능들

### 매장 상세 정보 확인
![매장 상세 정보 확인](https://res.cloudinary.com/dm2ginyde/image/upload/v1775809481/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2026-04-10_170805_umsbqp.png)
마커를 클릭하면 위치와 매장 상세 정보가 뜹니다. 상세 정보에서는 매장 이미지, 매장명, 지점명, 할인 가격, 추가 유의사항, 네이버맵 링크를 확인할 수 있습니다.

### 다국어 지원 (KOR / ENG)
![다국어 지원](https://res.cloudinary.com/dm2ginyde/image/upload/v1775810951/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2026-04-10_174845_cj65u2.png)
버튼 클릭으로 한국어로 된 웹사이트를 전부 영어로 전환시킬 수 있습니다. 외국인 학생까지 고려하여 UX를 설계하였습니다.

### 카테고리 필터 기능
![카테고리 필터 기능](https://res.cloudinary.com/dm2ginyde/image/upload/v1775809482/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2026-04-10_170913_ohsnia.png)
음식점, 놀거리, 술집 등 다양한 테마별로 매장을 필터링하여 볼 수 있습니다. 모바일로 웹사이트 이용 시 스크롤 형식으로 카테고리 필터를 확인할 수 있습니다.

### 전체 매장 리스트 조회
![전체 매장 리스트 조회](https://res.cloudinary.com/dm2ginyde/image/upload/v1775810837/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2026-04-10_174655_stixcf.png)
모든 매장을 한 눈에 볼 수 파악할 수 있도록 리스트 형태로 제공하고 있습니다. 스크롤을 통해 빠르게 탐색할 수 있습니다. 이들 중 한 매장을 선택하면 매장 상세 정보 확인과 같은 화면으로 넘어갑니다.

### 서비스 소개
![서비스 소개](https://res.cloudinary.com/dm2ginyde/image/upload/v1775809482/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2026-04-10_170944_noremd.png)
이 웹사이트를 처음 이용하시는 분들을 위해 서비스, Outstanding SNS 등을를 소개하고 있고 이 기능을 통해 제휴 매장 신청을 할 수 있습니다.

---

## 기술 스택

### Frontend
- React
- TypeScript
- Emotion (CSS-in-JS)
- Storybook
- Vite

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Deployment
- Railway

### Map
- Leaflet
- React-Leaflet
- OpenStreetMap

---

## 프로젝트 작업 기간

### 2025년 버전
2024.12.12 ~ 2025.02.26

### 2026년 버전
2026.02.20 ~ 2026.03.14
(어드민 페이지는 2026.06부터 이어서 만들 예정입니다.)

---

## 프로젝트 인원

1명  
@printseungjoo

기획부터 디자인, 프론트엔드 개발, 백엔드 개발, 배포, 유지보수까지 저 혼자 진행하였습니다.  
(당시 Outstanding 임원진님께서 아이디어를 제시해주셨습니다.)

---

## 리팩토링한 내용

1. HTML, CSS 중심 구조에서 React, TypeScript, Emotion 기반으로 재구성
2. 아토믹 디자인 폴더 구조로 UI 컴포넌트를 모듈화하여 유지보수성과 재사용성 개선
3. Storybook을 통해 UI 개발 생산성 향상
4. 웹 디자인을 통째로 변경하여 개발

---

## 리팩토링 후 성능 향상

1. LCP (Largest Contentful Paint, 로딩 속도)
   - 47% 단축 (1.9초 -> 1초)

2. 불필요한 JavaScript(코드) 감소
   - 186KiB 감소 (303KiB -> 117KiB)

3. Lighthouse Best Practices (보안 및 신뢰성)
   - 148% 상향 (31점 -> 77점)

---

## 개발자 연락처

이메일 : printseungjoo@gmail.com
