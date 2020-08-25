## 개발환경

---

### 1. Node.js 설치

https://nodejs.org/ko/download/



### 2. Vscode 설치

https://code.visualstudio.com/download



### 3. Vscode 플러그인 설치

노란색 박스 선택 후 설치

![vscode-plugins](/Users/yuhyeri/Documents/로드러너/vscode-plugins.png)

추천 플러그인

- ESLint (필수)
- Prettier - Code formatter (필수)
- Git History
- Git Lens
- Auto Close Tag
- Auto Rename Tag
- Highlight Matching Tag
- IntelliSense for CSS class names in HTML
- JS JSX Snippets
- Rainbow Brackets



### 4. ESLint & Prettier 설정

- 내장되어있는 자바스크립트 포맷팅 기능을 비활성화

  Settings - Javascript > Format:enable 체크 비활성화

- 자동 코드 정리 설정

  Setting - Editor: Format On Save 체크 활성화

위의 설정을 마치면, 미리 설치해놓은 eslint-config-prettier 모듈이 ESLint와 Prettier의 충돌을 해결해주어, ESLint는 자바스크립트 문법 관련된 것들만 관리하게 되고, 코드스타일 관련 작업은 Prettier가 관리하게 됩니다.

참고: https://velog.io/@velopert/eslint-and-prettier-in-react



### 5. Git 설치

```
$ brew git install
$ git config --global user.name "Username"
$ git config --global user.email "Email"
```

- **brew 가 없다면  [여기](https://brew.sh/index_ko) 에서 설치하세요.**



### 6. Chrome Extension 추가

크롬 브라우저에서 [크롬 웹스토어](https://chrome.google.com/webstore/category/extensions) 페이지 접속, 아래 확장프로그램 설치

- React Developer Tools
- Redux DevTools





## 프로젝트 시작

---

### 1. 프로젝트 clone

``` $ git
$ git clone https://github.com/RoadRunner-Team/Frontend.git
```



### 2. 모듈 설치

``` $ cd roadrunner.frontend
$ cd Frontend
$ npm install
```



### 3. 로컬 서버 start

``` cd
$ npm start
```





## 참고자료

### 컴포넌트 구조 - Atomic Design

https://ui.toast.com/weekly-pick/ko_20200213/



### 리덕스 구조 - Ducks Pattern

https://velopert.com/3358



### i18next

https://react.i18next.com/

