# 🎃 Vue2 TodoList

- Vue-cli와 Vue2를 이용해서 간단한 TodoList를 만들었습니다.
- React와 더불어 프론트엔드 진영에서 가장 많이 사용하는 UI 인터페이스 제작 도구(프레임워크)를 사용해볼 수 있었습니다.
- React에 비해 굉장히 직관적으로 사용할 수 있다는 장점이 있었습니다.

<br />

## 🔧 기술스택

<div>
  <img src="https://img.shields.io/badge/Vue-4FC08D?style=flat-square&logo=vue.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=sass&logoColor=white"/>
  <img src="https://img.shields.io/badge/BootstrapVue-7952B3?style=flat-square&logo=bootstrap&logoColor=white"/>
</div>
  
<br />

## 🎞 움짤

- ![Honeycam 2022-05-13 03-45-58](https://user-images.githubusercontent.com/14370441/168146852-65465c88-d85c-4852-8f5e-93c20b00ef04.gif)

<br />

## 👉 배포 페이지

[👉 바로가기](https://alittlekitten.github.io/vue2TodoList/)

<br />

## 📌 공부한 점

- vue-cli를 어떻게 사용하는 방법에 대해서 익힐 수 있었습니다.

  - 초기에 vue.cmd create를 할 때 폴더 안에 폴더가 생성되어서 lint가 깨지는 현상이 발생했는데, View > Command Palette > Preference: Open Settings (JSON) 에서 `"eslint.workingDirectories": [{ "mode": "auto" }]` 옵션을 달아서 해결했습니다.

- 컴포넌트를 나누고 props를 아래로 내려주는 방식에 대해서 알 수 있었습니다.

  - props의 이름을 설정하고 아래에서 사용할 때 상위에서 선언한 이름이 아니라 넘겨준 이름으로 사용해야 한다는 것을 알 수 있었습니다.

- 이벤트를 통해 상위에 존재하는 값을 변경할 수 있다는 것을 알게 되었습니다.

  - 이벤트 전송 방식 `$emit` 은 양방향 바인딩 `v-model` 과 함께 React에 적응되어있던 제 입장에서 굉장히 간편하다는 느낌을 받았습니다.

- CSS를 효과적으로 사용하기 위해 sass(.scss)를 도입했습니다.

  - Vue 환경에서 CSS in JS방식보다 조금 더 편리하게 사용할 수 있다고 판단했습니다.

- 동시에 간단하게 CSS를 처리하기 위해서 `BootstrapVue`를 적용했습니다.
  - 부트스트랩으로 꾸며진 요소의 CSS를 조금씩 변경하기 위해서 우선순위를 부여하기 위해 해당 컴포넌트의 최상위 div에 id를 부여하고 원하는 요소에 class를 부여해서 처리했습니다.
  - 현재 프로젝트에서는 버튼에만 부트스트랩을 적용한 상태입니다.

<br />

## 🧨 실행 방법

```
npm install
npm run serve
```
