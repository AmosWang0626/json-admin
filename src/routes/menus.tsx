import {
    DashboardOutlined, 
    AppstoreAddOutlined, 
    TableOutlined, 
    FileExcelOutlined, 
    FormOutlined
} from '@ant-design/icons';


export default [
    {
        key: 'dashboard',
        icon: <DashboardOutlined />,
        label: 'Dashboard',
        path: '/dashboard'
    },
    {
        key: 'login',
        icon: <FormOutlined />,
        label: 'Login',
        path: '/login',
    },
    {
        key: 'components',
        icon: <AppstoreAddOutlined />,
        label: 'UI Components',
        prefixPath: 'custom-components',
        children: [
            {
                key: 'tables',
                icon: <TableOutlined />,
                label: 'Table',
                prefixPath: 'tables',
                children: [
                    {
                        key: 'excel',
                        icon: <FileExcelOutlined />,
                        label: 'Excel',
                        path: '/excel',
                    },
                ]
            }
        ],
    },
];