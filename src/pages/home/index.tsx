import { Tabs, TabsProps } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ToDoList from './components/ToDoList';
import TodoProvider from './components/TodoContext';

const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'todoList基础实现',
      children: <ToDoList />,
    },
    {
        key: '2',
        label: 'useContext实现',
        children: <TodoProvider />,
      },
    {
      key: '3',
      label: 'Jotai实现',
      children: 'Content of Tab Pane 2',
    },
  ];

const Home: React.FC = () => {
    const navigate = useNavigate();

    // const onClick = () => {
    //     navigate('/')
    // }

    return (
        <div className="w-[90vw] h-full px-12">
            {/* <h1>tabBar</h1>
            <h2 className='hover:text-blue-500 cursor-pointer' onClick={onClick}>useContext实现tabBar切换</h2>
            <h2 className='hover:text-blue-500 cursor-pointer' onClick={onClick}>Jotai实现tabBar切换</h2> */}
            {/* <h1>todoList</h1>
            <div className='hover:text-blue-500 cursor-pointer' onClick={() => { navigate('/toDoList') }}>useContext实现</div> */}
            {/* tabbar实现 */}
            <p className='text-2xl font-bold'>TodoListDemo</p>
            <Tabs className='w-[50%] h-full mx-auto' defaultActiveKey="1" items={items}  />
        </div>
    );
};

export default Home;