import {createGlobalStyle} from 'styled-components';
import logo from './logo.svg';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './TodoList';
import TodoCreate from './components/TodoCreate';
// createGlobalStyle()함수로 생성한 전역스타일 컴포넌트를 애플리케이션의 최상위 컴포넌트에
//추가하면 하위 모든 컴포넌트에 해당 스타일이 일괄 적용된다.
const GlobalStyle = createGlobalStyle` 
  body{
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle/>
     
     
      <TodoTemplate>안녕하세요
       
       <TodoHead />
       <TodoList />
       <TodoCreate />
       </TodoTemplate>
    
      {/* TodoTemplate이라는 컴포넌트 사이의 모든 요소들이 해당컴포넌트의 props.children으로 자동 전달된다 */}

   
    </>
  );
}

export default App;
