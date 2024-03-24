import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";
import BaseLayout from "@/layouts/baseLayout";

import Login from "@/pages/auth/login";

import UnknowError from "@/pages/errors/UnknowError";
import NotFound from "@/pages/errors/NotFound";

import Dashboard from "@/pages/dashboard";

import ExcelTable from "@/pages/custom/Tables/ExcelTable";

import { FileUnknownOutlined } from '@ant-design/icons';


const privateRoutes = [
    {
        path: '/',
        element: <ProtectedRoute />,
        errorElement: <UnknowError />,
        children: [
            {
                element: <BaseLayout />,
                children: [
                    {
                        path: 'dashboard',
                        exact: true,
                        element: <Dashboard />,
                    },
                    {
                        path: 'custom-components',
                        children: [
                            {
                                path: 'tables',
                                children: [
                                    {
                                        path: 'excel',
                                        exact: true,
                                        element: <ExcelTable />
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        key: '3',
                        icon: <FileUnknownOutlined />,
                        label: 'Nothing',
                        path: 'nothing',
                    },
                ]
            },

        ]
    },
    { path: "/login", element: <Login /> },
    { path: "*", element: <NotFound /> }
];

export {
    privateRoutes
}