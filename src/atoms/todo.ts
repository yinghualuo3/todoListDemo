import { atom } from 'jotai'

interface ToDoItem {
    id: number;
    text: string;
    completed: boolean;
}

// 创建atoms
export const inputValueAtom = atom<string>('');
export const nextIdAtom = atom<number>(1);
export const listsDataAtom = atom<ToDoItem[]>([]);
