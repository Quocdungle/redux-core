import { Button, Col, Input, Row, Select, Tag } from 'antd';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from '../../redux/actions';
import { todosRemainingList } from '../../redux/selectors';
import Todo from '../Todo';


export default function TodoList() {

  const [todoName, setTodoName] = useState('')
  const [priority, setPrioriry] = useState('Medium')
  const dispatch = useDispatch();  
  const todoList = useSelector(todosRemainingList);
  const inputRef = useRef()

  const handleAddButtonClick = () => {
    dispatch(addTodo({
      id:uuidv4(),
      name:todoName,
      priority:priority,
      completed: false,
    }))
    setTodoName('')
    setPrioriry('Medium')

    inputRef.current.focus();
  }
  const handleInputName = (e) => {
    setTodoName(e.target.value);
  }
  const handlePriovityChange = (value) => {
    setPrioriry(value)
  }
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {/* <Todo name='Learn React' prioriry='High' />
        <Todo name='Learn Redux' prioriry='Medium' />
        <Todo name='Learn JavaScript' prioriry='Low' /> */}
        {todoList.map(todo => (
          <Todo 
            key={todo.id} 
            name={todo.name} 
            prioriry={todo.priority} 
            completed={todo.completed}
            id = {todo.id}
          />
        ))}

      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleInputName} ref={inputRef}/>
          <Select defaultValue={priority} value={priority} onChange={handlePriovityChange}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
