/*
 * @Author: Liny 1343948723@qq.com
 * @Date: 2024-12-11 15:08:15
 * @LastEditors: Liny 1343948723@qq.com
 * @LastEditTime: 2024-12-12 10:24:10
 * @FilePath: /todoListDemo/src/pages/home/components/TodoJotai/JotaiInput/index.tsx
 * @Description: JotaiInput组件
 */
import { Button, Input, Space } from 'antd';
import { memo } from 'react';
import useTodoAtoms from '../useTodoAtoms';

const JotaiInput = () => {
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