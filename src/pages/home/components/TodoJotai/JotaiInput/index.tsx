import { Button, Input, Space } from 'antd';
import { memo } from 'react';
import useTodoAtoms from '../useTodoAtoms';

interface IProps {
    inputValue: string;
    setInputValue: (value: string) => void;
    onAdd: () => void;
}

const JotaiInput = () => {
    // const { inputValue, setInputValue, onAdd } = props;
    const { inputValue, setInputValue, onAdd } = useTodoAtoms();

    const onKeyDown = (e: any) => {
        if (e.keyCode === 13) {
            setInputValue(e.target.value);
            onAdd();
        }
    };

    return (
        <Space.Compact className='my-8 w-full'>
            <Input allowClear placeholder="请输入内容" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={onKeyDown} />
            <Button type="primary" onClick={onAdd} >提交</Button>
        </Space.Compact>
    )
}

export default memo(JotaiInput);