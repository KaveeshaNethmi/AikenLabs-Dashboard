import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { AuthorizeUser, ProtectRoute } from './middleware/auth'

import Dashboard from './pages/Dashboard'
import Register from './components/userLogin/Register';
import Sidebar from './components/commonComponents/Sidebar'
import Topbar from './components/commonComponents/Topbar'
import Home from './pages/Home';
import Login from './pages/Login';
import Username from './components/userLogin/Username';
import Password from './components/userLogin/Password';
import Profile from './components/userLogin/Profile';
import Recovery from './components/userLogin/Recovery';
import Reset from './components/userLogin/Reset';
import PageNotFound from './components/userLogin/PageNotFound';

const Layout = () => {
	return (
		<div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
			<Sidebar />
			<div className="flex flex-col flex-1">
				<Topbar />
				<div className="flex-1 p-4 min-h-0 overflow-auto">
					<Outlet />
				</div>
			</div>
		</div>
    )
};

const router = createBrowserRouter([
  
      {
        path: '/',
        element: <Username />,
      },
      {
          path: '/login',
          element: <Login />,
      },
      {
          path: '/register',
          element: <Register />,
      },
      {
          path: '/password',
          element: <ProtectRoute><Password /></ProtectRoute>,
      },
      {
          path: '/recovery',
          element: <Recovery />,
      },
      {
          path: '/profile',
          element: <Profile />,
      },
      {
          path: '/reset',
          element: <Reset />,
      },
      {
          path: '*',
          element: <PageNotFound />,
      },
      {
          path: '/dashboard',
          element: <Dashboard />,
      },
 
]);

const App = () => {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
    
};

export default App
