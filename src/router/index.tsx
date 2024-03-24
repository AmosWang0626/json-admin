import { createBrowserRouter } from 'react-router-dom';
import Index from '../pages/index';
import HomeIndex from '../pages/home';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Index,
  },
  {
    path: '/home',
    Component: HomeIndex,
  }
]);

export default router;
