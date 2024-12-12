/*
 * @Author: Liny 1343948723@qq.com
 * @Date: 2024-12-11 15:07:28
 * @LastEditors: Liny 1343948723@qq.com
 * @LastEditTime: 2024-12-12 10:24:33
 * @FilePath: /todoListDemo/src/pages/home/components/TodoJotai/JotaiList/index.tsx
 * @Description: JotaiList组件
 */

import { CloseOutlined } from '@ant-design/icons';
import { Checkbox, List } from 'antd';
import cx from 'classnames';
import { memo } from 'react';
import useTodoAtoms from '../useTodoAtoms';

const JotaiList = () => {
    const { listsData, onChangeCheck, onDel } = useTodoAtoms()

    return (
        <List
            className='mt-8 rounded-md'
            locale={{ emptyText: '暂无待办事项' }}
            dataSource={listsData}
            renderItem={(item) => (
                <List.Item
                className='hover:bg-blue-50 rounded-md'
                    
                    actions={[
                        <CloseOutlined onClick={() => onDel(item.id)} />
                    ]}
                >
                    <Checkbox className={cx('', { 'line-through text-gray-400': item.completed })} checked={item.completed} onChange={() => onChangeCheck(item.id)}>
                        {item.text}
                    </Checkbox>
                </List.Item>
            )}
        />
    )

}

export default memo(JotaiList);