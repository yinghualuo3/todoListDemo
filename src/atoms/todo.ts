/*
 * @Author: Liny 1343948723@qq.com
 * @Date: 2024-12-11 15:05:10
 * @LastEditors: Liny 1343948723@qq.com
 * @LastEditTime: 2024-12-12 10:24:51
 * @FilePath: /todoListDemo/src/atoms/todo.ts
 * @Description: todoList对应atoms
 */
import { atom } from 'jotai'

interface ToDoItem {
    id: string;
    text: string;
    completed: boolean;
}

// 创建atoms
export const inputValueAtom = atom<string>('');
export const listsDataAtom = atom<ToDoItem[]>([]);
