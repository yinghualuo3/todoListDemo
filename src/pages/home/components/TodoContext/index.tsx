/*
 * @Author: Liny 1343948723@qq.com
 * @Date: 2024-12-11 00:19:41
 * @LastEditors: Liny 1343948723@qq.com
 * @LastEditTime: 2024-12-11 11:22:57
 * @FilePath: /testProject/src/pages/toDoListOfContext/index.tsx
 * @Description: TodoProvider容器组件
 */
import { createContext, useContext, useRef, useState } from 'react';
import { message } from 'antd';
import ContextInput from './ContextInput';
import ContextList from './ContextList';

interface ToDoItem {
    id: number;
    text: string;
    completed: boolean;
}

// 定义context所需的数据类型
export interface TodoContextIProps {
    inputValue: string;
    setInputValue: (value: string) => void;
    onAdd: () => void;
    listsData: ToDoItem[];
    onChangeCheck: (id: number) => void;
    onDel: (id: number) => void;
}

// 创建 TodoContext 和 Provider
// 调用createContext时通过范型传入类型(限制初始值类型)
export const TodoContext = createContext<TodoContextIProps | undefined>(undefined);


const TodoProvider = () => {
    const nextId = useRef<number>(1);
    const [inputValue, setInputValue] = useState('');
    const [listsData, setListsData] = useState<ToDoItem[]>([]);

    const onAdd = () => {
        inputValue.trim() === '' && message.warning('请输入任务内容')
        if (inputValue.trim() !== '') {
            console.log(inputValue);
            setListsData([{ id: nextId.current, text: inputValue, completed: false }, ...listsData]);
            setInputValue('');
            nextId.current += 1;
        }
    }

    const onChangeCheck = (id: number) => {
        setListsData(listsData.map(item =>
            item.id === id ? { ...item, completed: !item.completed } : item
        ));
    };

    const onDel = (id: number) => {
        setListsData(listsData.filter(item => item.id !== id));
    };

    // 在顶层组件传递数据的位置限制传递的数据必须满足类型TodoContextIProps 必须用Provider包裹
    return (
        <TodoContext.Provider value={{ inputValue, setInputValue, onAdd, listsData, onChangeCheck, onDel }}>
            <ContextInput />
            <ContextList />
        </TodoContext.Provider>
    )
}

export default TodoProvider;

export const useTodoContext = () => {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error('');
    }

    return context;
}