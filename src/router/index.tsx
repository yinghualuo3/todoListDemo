/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-12-09 17:12:55
 * @LastEditors: Liny 1343948723@qq.com
 * @LastEditTime: 2024-12-11 17:04:02
 * @FilePath: /testProject/src/router/index.tsx
 * @Description: 路由配置页
 */
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Demo from "../pages/demo";

const router = createBrowserRouter([{
    path: '/',
    element: <Home />
},
{
    path: '/demo',
    element: <Demo />
},
{
    path: '*',
    element: <div className="size-screen p-12">404 Not Found</div>
}
])

export default router;