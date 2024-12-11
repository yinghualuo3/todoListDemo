import { useAtom } from 'jotai';
import { message } from 'antd';
import JotaiInput from './JotaiInput';
import JotaiList from './JotaiList';
import { inputValueAtom, listsDataAtom, nextIdAtom } from '../../../../atoms/todo';
import useTodoAtoms from './useTodoAtoms';

const TodoJotai = () => {
    // const { inputValue, setInputValue, onAdd, onChangeCheck, onDel, listsData } = useTodoAtoms();

    return (
        <div className='w-full'>
            {/* <JotaiInput inputValue={inputValue} setInputValue={setInputValue} onAdd={onAdd} />
            <JotaiList
                listsData={listsData}
                onChangeCheck={onChangeCheck}
                onDel={onDel}
            /> */}
            {/* 若组件内部通过useTodoAtoms获取 则此处不用传入props */}
            <JotaiInput />
            <JotaiList />
        </div>)
}

export default TodoJotai;