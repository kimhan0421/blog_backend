Node.js

js엔진을 기반으로 웹 브라우저 뿐만 아니라 서버에서도 js사용할 수 있는 런타임 개발 ⇒ Node.js

- koa

웹 서버 구축 시, 웹 프레임 워크   
미들웨어 기능만. 나머지는 다른 라이브러리 적용하여 사용 ⇒ Express보다 가벼움

- node version확인
- 마지막 프로젝트이 블로그 서비스와 연동할 서버이기 때문에 blog디렉터리 만들고,
내부에 blog-backend디렉터리 생성.
- yarn init -y로 패키지 정보를 생성
  ⇒ package.json파일 생성

- koa웹 프레임워크 설치
  ⇒ yarn add koa
  ⇒ yarn run eslint —init

```
  ✔ How would you like to use ESLint? · problems
  ✔ What type of modules does your project use? · commonjs
  ✔ Which framework does your project use? · none
  ✔ Does your project use TypeScript? · No / Yes
  ✔ Where does your code run? · browser, node

  ✔ What format do you want your config file to be in? · JSON
  The config that you've selected requires the following dependencies:
```
  ⇒ .eslintrc.json 파일 생성됨

- .prettierc파일 생성
```javascript
  {
  "singleQuote": true,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80
  }
```
- src 파일 임의로 생성