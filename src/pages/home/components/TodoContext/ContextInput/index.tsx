/*
 * @Author: Liny 1343948723@qq.com
 * @Date: 2024-12-10 17:01:33
 * @LastEditors: Liny 1343948723@qq.com
 * @LastEditTime: 2024-12-11 11:01:16
 * @FilePath: /testProject/src/pages/components/ContextInput/index.tsx
 * @Description: ContextInput组件
 */
import { Button, Input, Space } from 'antd';
import { memo } from 'react';
import { useTodoContext } from '..';

const ContextInput = () => {
    // 在底层组件中通过useContext钩子函数获取的数据类型同样设施T
    const { inputValue, setInputValue, onAdd } = useTodoContext();

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

export default memo(ContextInput);