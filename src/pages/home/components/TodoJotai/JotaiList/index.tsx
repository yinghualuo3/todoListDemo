import { CloseOutlined } from '@ant-design/icons';
import { Checkbox, List } from 'antd';
import cx from 'classnames';
import { memo } from 'react';
import useTodoAtoms from '../useTodoAtoms';

// 超过一定高度滚动条展示?勾选后checkbox置灰?

interface IProps {
    listsData: any[],
    onChangeCheck: (id: number) => void,
    onDel: (id: number) => void
}

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