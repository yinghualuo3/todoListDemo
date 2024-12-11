/*
 * @Author: Liny 1343948723@qq.com
 * @Date: 2024-12-11 15:45:50
 * @LastEditors: Liny 1343948723@qq.com
 * @LastEditTime: 2024-12-11 16:57:43
 * @FilePath: /todoListDemo/src/pages/home/components/TodoJotai/useTodoAtoms.tsx
 * @Description: useTodoAtoms 抽成hook 用于管理todo相关的状态
 */
import { useAtom } from "jotai";
import { inputValueAtom, listsDataAtom, nextIdAtom } from "../../../../atoms/todo";
import { message } from "antd";

const useTodoAtoms = () => {
    const [inputValue, setInputValue] = useAtom(inputValueAtom); // useAtom用法类似useState 但是可以跨组件共享 属于全局状态变量
    const [listsData, setListsData] = useAtom(listsDataAtom);
    const [nextId, setNextId] = useAtom(nextIdAtom);

    const onAdd = () => {
        if (inputValue.trim() === '') {
            message.warning('请输入任务内容')
            return
        }
        // setListsData([{ id: nextId.current, text: inputValue, completed: false }, ...listsData]);
        setListsData((pre) => {
            return [{ id: nextId, text: inputValue, completed: false }, ...pre]
        })
        setInputValue('');
        setNextId((pre) => pre + 1);
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
        listsData,
        setListsData,
        nextId,
        setNextId,
        onAdd,
        onChangeCheck,
        onDel
    }

}

export default useTodoAtoms;