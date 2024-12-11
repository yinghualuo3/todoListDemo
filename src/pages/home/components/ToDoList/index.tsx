/*
 * @Author: Liny 1343948723@qq.com
 * @Date: 2024-12-10 15:59:37
 * @LastEditors: Liny 1343948723@qq.com
 * @LastEditTime: 2024-12-11 10:55:25
 * @FilePath: /testProject/src/pages/home/components/ToDoList/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
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