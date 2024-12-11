import { useAtom } from "jotai";
import { inputValueAtom, listsDataAtom, nextIdAtom } from "../../../../atoms/todo";
import { message } from "antd";

const useTodoAtoms = () => {
    const [inputValue, setInputValue] = useAtom(inputValueAtom);
    const [listsData, setListsData] = useAtom(listsDataAtom);
    const [nextId, setNextId] = useAtom(nextIdAtom);

    const onAdd = () => {
        inputValue.trim() === '' && message.warning('请输入任务内容')
        if (inputValue.trim() !== '') {
            console.log(inputValue);
            // setListsData([{ id: nextId.current, text: inputValue, completed: false }, ...listsData]);
            setListsData((pre) => {
                return [{ id: nextId, text: inputValue, completed: false }, ...pre]
            })
            setInputValue('');
            // nextId.current += 1;
            setNextId((pre) => pre + 1);
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