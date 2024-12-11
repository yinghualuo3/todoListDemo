/*
 * @Author: Liny 1343948723@qq.com
 * @Date: 2024-12-10 17:06:58
 * @LastEditors: Liny 1343948723@qq.com
 * @LastEditTime: 2024-12-11 11:07:47
 * @FilePath: /testProject/src/pages/components/ListByOfDo/index.tsx
 * @Description: ContextList组件
 */
import { CloseOutlined } from '@ant-design/icons';
import { Checkbox, List } from 'antd';
import cx from 'classnames';
import { memo } from 'react';
import { useTodoContext } from '..';

const ContextList = () => {
    // const { listsData, onChangeCheck, onDel } = props;
    const { listsData, onChangeCheck, onDel } = useTodoContext();

    return (
        <List
            className='mt-8'
            locale={{ emptyText: '暂无待办事项' }}
            dataSource={listsData}
            renderItem={(item) => (
                <List.Item
                    className='hover:bg-blue-50 rounded-md'
                    actions={[
                        <CloseOutlined onClick={() => onDel(item.id)} />
                    ]}
                >
                    <Checkbox className={cx('', { 'line-through text-gray-400 ': item.completed })} checked={item.completed} onChange={() => onChangeCheck(item.id)}>
                        {item.text}
                    </Checkbox>
                </List.Item>
            )}
        />
    )

}

export default memo(ContextList);