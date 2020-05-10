# React

### Portal(Grobal) Component
- React Modal Component with react hooks, refs and create portal
- ReactDOM.createPortal를 이용한 Prtal Component 만들기
- useRef를 사용해 해당 컴포넌트내에서 정의 된 resource를 사용({ref}.current 사용)
- useImperativeHandle를 통해 컴포넌트 resource를 정의
(HooksRef.js / Modal.js)

### Prevent Functional Component from re-rendering with React memo
- shouldComponentupdate를 사용할 수 없는 functional component의 경우 React Hooks의 memo를 이용해 변화된 props가 없는 경우 re-rendering을 막을 수 있다.
(ModalTemplate.js)