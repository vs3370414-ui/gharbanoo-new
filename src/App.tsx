import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Privacy } from './pages/Privacy';
import { DeleteAccount } from './pages/DeleteAccount';
const router = createBrowserRouter([{ path: '/', element: <Layout />, children: [{ index: true, element: <Home /> }, { path: 'privacy', element: <Privacy /> }, { path: 'delete-account', element: <DeleteAccount /> }] }]);
export default function App() { return <RouterProvider router={router} />; }
