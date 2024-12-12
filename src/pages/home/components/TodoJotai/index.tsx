/*
 * @Author: Liny 1343948723@qq.com
 * @Date: 2024-12-11 15:00:57
 * @LastEditors: Liny 1343948723@qq.com
 * @LastEditTime: 2024-12-12 10:29:55
 * @FilePath: /todoListDemo/src/pages/home/components/TodoJotai/index.tsx
 * @Description: Jotai容器组件
 */
import JotaiInput from './JotaiInput';
import JotaiList from './JotaiList';
const TodoJotai = () => {

    return (
        <div className='w-full'>
            {/* 若组件内部通过useTodoAtoms获取 则此处不用传入props  */}
            <JotaiInput />
            <JotaiList />
        </div>)
}

export default TodoJotai;