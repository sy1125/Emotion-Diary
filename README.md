# Emotion Diary With React

### 1. 기본 구성 환경

-   Node v16.15.0
-   npm 8.5.5
-   react 18.2.0
-   react-router-dom 6.3.0

### 설치.

-   npm install

```sh
npm install
```

### 서버실행.

-   React Start

```sh
npm run start
```

### 6. Source Structure

```
- .vscode
├── emotion-diary        # root
  ├── .firebase        # Contains hosting cache
    ├── hosting.YnVpbGQ.cache           # hosting.YnVpbGQ.cache
  ├── .github        # github
    ├── workflows           # Contains firebase git info
       ├── firebase-hosting-merge.yml                    # firebase-hosting-merge.yml
       ├── firebase-hosting-pull-request.yml             # firebase-hosting-pull-request.yml
  ├── build        # Contains public and src
    ...
  ├── public        # Contains static assets and index.html
    ├── assets           # Contains images
       ├── emotion1.png             # emotion1.png
       ├── emotion2.png             # emotion2.png
       ├── emotion3.png             # emotion3.png
       ├── emotion4.png             # emotion4.png
       ├── emotion5.png             # emotion5.png
    ├── favicon.ico           # favicon.ico
    ├── index.html           # index.html
    ├── logo192.png           # logo192.png
    ├── logo512.png           # logo512.png
    ├── manifest.json           # manifest.json
    ├── robots.txt           # robots.txt
    ├── thumbnail.png           # thumbnail.png
  ├── src           # Source Directory
    ├── components           # 공통 컴포넌트
       ├── DiaryEditor.js             # DiaryEditor.js
       ├── DiaryItem.js               # DiaryItem.js
       ├── DIaryList.js               # DIaryList.js
       ├── EmotionItem.js             # EmotionItem.js
       ├── MyButton.js                # MyButton.js
       ├── MyHeader.js                # MyHeader.js
       ├── RouteTest.js               # RouteTest.js
    ├── pages              # Page Dom 생성
       ├── Diary.js             # Diary Page생성
       ├── Edit.js            # Edit Page생성
       ├── Home.js            # Home Page생성
       ├── New.js            # New Page생성
    ├── util                 # Contains const
       ├── date.js           # date.js
       ├── emotion.js        # emotion.js
    ├── App.css              # App.css
    ├── App.js               # main.js
    ├── index.css            # index.css
    ├── index.js             # index.js
  ├── .firebaserc            # .firebaserc
  ├── .gitignore             # .gitigore
  ├── .firebase.json         # firebase.json
  ├── package-lock.json      # package-lock.json
  ├── package.json           # package.json
  ├── README.md              # README.md


```
