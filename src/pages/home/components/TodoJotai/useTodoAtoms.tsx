/*
 * @Author: Liny 1343948723@qq.com
 * @Date: 2024-12-11 15:45:50
 * @LastEditors: Liny 1343948723@qq.com
 * @LastEditTime: 2024-12-12 10:28:11
 * @FilePath: /todoListDemo/src/pages/home/components/TodoJotai/useTodoAtoms.tsx
 * @Description: useTodoAtoms 抽成hook 用于管理todo相关的状态
 */
import { useAtom } from "jotai";
import { inputValueAtom, listsDataAtom } from "../../../../atoms/todo";
import { message } from "antd";
import { v4 as uuidv4 } from 'uuid';

const useTodoAtoms = () => {
    const [inputValue, setInputValue] = useAtom(inputValueAtom); // useAtom用法类似useState 但是可以跨组件共享 属于全局状态变量
    const [listsData, setListsData] = useAtom(listsDataAtom);


    const onAdd = () => {
        if (inputValue.trim() === '') {
            message.warning('请输入任务内容')
            return
        }
        const newId = uuidv4();
        setListsData((pre) => {
            return [{ id: newId, text: inputValue, completed: false }, ...pre]
        })
        setInputValue('');
    }

    const onChangeCheck = (id: string) => {
        setListsData(listsData.map(item =>
            item.id === id ? { ...item, completed: !item.completed } : item
        ));
    };

    const onDel = (id: string) => {
        setListsData(listsData.filter(item => item.id !== id));
    };

    return {
        inputValue,
        setInputValue,
        listsData,
        setListsData,
        onAdd,
        onChangeCheck,
        onDel
    }
}

export default useTodoAtoms;