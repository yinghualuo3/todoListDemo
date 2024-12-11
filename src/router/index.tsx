/*
 * @Author: Liny 1343948723@qq.com
 * @Date: 2024-12-09 17:12:55
 * @LastEditors: Liny 1343948723@qq.com
 * @LastEditTime: 2024-12-11 17:11:06
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