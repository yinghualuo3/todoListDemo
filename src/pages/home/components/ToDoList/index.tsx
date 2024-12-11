/*
 * @Author: Liny 1343948723@qq.com
 * @Date: 2024-12-10 15:59:37
 * @LastEditors: Liny 1343948723@qq.com
 * @LastEditTime: 2024-12-11 10:55:25
 * @FilePath: /testProject/src/pages/home/components/ToDoList/index.tsx
 * @Description: ToDoList基础实现
 */
import { useRef, useState } from 'react';
import InputOfToDo from './InputOfToDo';
import ListOfToDo from './ListOfToDo';
import { message } from 'antd';

interface ToDoItem {
    id: number;
    text: string;
    completed: boolean;
}

const ToDoList = () => {
    const nextId = useRef<number>(1);
    const [inputValue, setInputValue] = useState('');
    const [listsData, setListsData] = useState<ToDoItem[]>([]);

    // 添加list任务
    const onAdd = () => {
        if (inputValue.trim() === '') {
            message.warning('请输入任务内容')
            return
        }
        setListsData([{ id: nextId.current, text: inputValue, completed: false }, ...listsData]);
        setInputValue('');
        nextId.current += 1;
    }

    // 切换任务完成状态
    const onChangeCheck = (id: number) => {
        setListsData(listsData.map(item =>
            item.id === id ? { ...item, completed: !item.completed } : item
        ));
    };

    // 删除任务
    const onDel = (id: number) => {
        setListsData(listsData.filter(item => item.id !== id));
    };

    return (
        <div className='w-full'>
            {/* <h3>my ToDoList</h3> */}
            <InputOfToDo inputValue={inputValue} setInputValue={setInputValue} onAdd={onAdd} />
            <ListOfToDo
                listsData={listsData}
                onChangeCheck={onChangeCheck}
                onDel={onDel}
            />
        </div>)
}

export default ToDoList;