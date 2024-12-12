/*
 * @Author: Liny 1343948723@qq.com
 * @Date: 2024-12-12 14:43:43
 * @LastEditors: Liny 1343948723@qq.com
 * @LastEditTime: 2024-12-12 14:56:48
 * @FilePath: /todoListDemo/src/pages/home/components/TodoContext/useContent.tsx
 * @Description: useContent
 */
import { message } from "antd";
import { useRef, useState } from "react";
import { ToDoItem, TodoContextIProps } from ".";

export const useValues = (): TodoContextIProps => {
    const nextId = useRef<number>(1);
    const [inputValue, setInputValue] = useState('');
    const [listsData, setListsData] = useState<ToDoItem[]>([]);

    const onAdd = () => {
        if (inputValue.trim() === '') {
            message.warning('请输入任务内容')
            return
        }
        setListsData([{ id: nextId.current, text: inputValue, completed: false }, ...listsData]);
        setInputValue('');
        nextId.current += 1;
    }

    const onChangeCheck = (id: number) => {
        setListsData(listsData.map(item =>
            item.id === id ? { ...item, completed: !item.completed } : item
        ));
    };

    const onDel = (id: number) => {
        setListsData(listsData.filter(item => item.id !== id));
    };

    return {
        inputValue,
        setInputValue,
        onAdd,
        listsData,
        onChangeCheck,
        onDel,
    };
}