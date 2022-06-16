# Emotion Diary With React 
### 1. 기본 구성 환경 
- Node v16.15.0
- npm 8.5.5
- @vue/cli 4.5
- react 18.2.0
- react-router-dom 6.3.0

### 설치.
- npm install
```sh
npm install
```
### 서버실행.
- React Start
```sh
npm run start
```

### 6. Source Structure
```
- .vscode
  - settings.json : 현재 프로젝트 내에서 사용되는 에디터 설정
├── react-base        # root
  ├── public        # Contains static assets and index.html
    ├── favicon.ico           # favicon.ico
    ├── index.html           # index.html
    ├── logo192.png           # logo192.png
    ├── logo512.png           # logo512.png
    ├── manifest.json           # manifest.json
    ├── robots.txt           # robots.txt
  ├── src           # Source Directory
    ├── components           # 공통 컴포넌트
    ├── pages              # Page Dom 생성
       ├── Diary.js             # Diary Page생성
       ├── Edit.js            # Edit Page생성
       ├── Home.js            # Home Page생성
       ├── New.js            # New Page생성
    ├── App.css              # App.css
    ├── App.js               # main.js
    ├── index.css            # index.css
    ├── index.js             # index.js
  ├── package.json           # package.json
  ├── package-lock.json      # package-lock.json
  ├── README.md              # README.md
  ...
  

