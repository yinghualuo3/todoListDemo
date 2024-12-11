/*
 * @Author: Liny 1343948723@qq.com
 * @Date: 2024-12-10 17:01:33
 * @LastEditors: Liny 1343948723@qq.com
 * @LastEditTime: 2024-12-11 10:11:52
 * @FilePath: /testProject/src/pages/components/InputOfToDo/index.tsx
 * @Description: InputOfToDo组件
 */
import { Button, Input, Space } from 'antd';
import { memo } from 'react';

interface IProps {
    inputValue: string;
    setInputValue: (value: string) => void;
    onAdd: () => void;
}

const InputOfToDo = (props: IProps) => {
    const { inputValue, setInputValue, onAdd } = props;

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

export default memo(InputOfToDo);