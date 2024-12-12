/*
 * @Author: Liny 1343948723@qq.com
 * @Date: 2024-12-11 10:19:41
 * @LastEditors: Liny 1343948723@qq.com
 * @LastEditTime: 2024-12-12 14:58:00
 * @FilePath: /testProject/src/pages/toDoListOfContext/index.tsx
 * @Description: TodoProvider容器组件
 */
import { createContext, useContext } from 'react';
import ContextInput from './ContextInput';
import ContextList from './ContextList';
import { useValues } from './useContent';

export interface ToDoItem {
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
    const values = useValues();

    // 在顶层组件传递数据的位置限制传递的数据必须满足类型TodoContextIProps 必须用Provider包裹
    return (
        // <TodoContext.Provider value={{ inputValue, setInputValue, onAdd, listsData, onChangeCheck, onDel }}>
        <TodoContext.Provider value={values}>
            <ContextInput />
            <ContextList />
        </TodoContext.Provider>
    )
}

export default TodoProvider;


export const useTodoContext = () => {
    const context: TodoContextIProps | undefined = useContext(TodoContext);
    if (!context) {
        throw new Error('useTodoContext must be used within a TodoProvider');
    }

    return context;
}
