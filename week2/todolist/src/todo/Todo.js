import React from 'react';
import { useState } from 'react';
import './Todo.css';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [doneTodos, setDoneTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // 폼 제출 시 페이지 리로드 방지
    if (!inputValue.trim()) return; // 입력값이 비어있으면 함수 종료
    const newTodo = {
      id: Math.ceil(Math.random() * 100),
      text: inputValue, // 사용자가 입력한 할 일의 내용도 포함
    };
    setTodos([...todos, newTodo]);
    setInputValue(''); // 입력 필드 초기화
  };

  const handleComplete = (id) => {
    const completedTodo = todos.find(todo => todo.id === id);
    setDoneTodos([...doneTodos, completedTodo]);
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleDelete=(id)=>{
    setDoneTodos(doneTodos.filter(todo=>todo.id!==id));
  }

  return (
    <div style={{backgroundColor: '#eceff4', textAlign: 'center', height: '100vh', display: 'flex', flexDirection: 'column'}} className="App">
      <h2 style={{padding: '40px'}}>UMC Study Plan</h2>
      <hr style={{color: 'black', width: '500px', height: '1px', backgroundColor: 'gray'}} />
      <form onSubmit={handleSubmit} style={{display: 'flex', justifyContent: 'center'}}> {/* form 태그 추가 */}
        <input style={{width: '300px', height: '40px'}} placeholder='스터디 계획을 작성해보세요 !' value={inputValue} onChange={handleInputChange} />
      </form>
      <div style={{justifyContent: 'center', display:'flex'}}>
        <div>
          <div style={{fontWeight: 'bold', paddingTop: 10, paddingRight: 50, textAlign:'center', display: 'flex', flexDirection: 'column'}}>해야 할 일</div>
          <div>
            {todos.map(todo => (
              <div key={todo.id} style={{ display: 'flex', alignItems: 'center', padding:10 }}>
                <div style={{fontWeight: 'bold',flex: 1, textAlign: 'center', paddingRight: 10 }}>{todo.text}</div>
                <button onClick={() => handleComplete(todo.id)}>완료</button>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div style={{fontWeight: 'bold', paddingTop: 10, paddingLeft: 50 ,display: 'flex', flexDirection: 'column'}}>해낸 일</div>
            <div>
              {doneTodos.map(todo=>(
                <div key={todo.id} style={{display:'flex', alignItems:'center', padding:10}}>
                  <div style={{fontWeight: 'bold', flex:1, textAlign:'center', paddingLeft:50, paddingRight:50}}>{todo.text}</div>
                  <button onClick={() => handleDelete(todo.id)}>삭제</button>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  );
}

export default Todo;
