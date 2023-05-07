import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import GridViewIcon from '@mui/icons-material/GridView';
import WidgetsIcon from '@mui/icons-material/Widgets';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export const sidebarLinks = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/dashboard',
		icon: <HomeIcon />
	},
	{
		key: 'login',
		label: 'Login',
		path: '/',
		icon: <WidgetsIcon />
	},
	{
		key: 'orders',
		label: 'Orders',
		path: '/orders',
		icon: <ShoppingCartOutlinedIcon />
	},
	{
		key: 'profile',
		label: 'Profile',
		path: '/profile',
		icon: < AccountCircleOutlinedIcon/>
	},
	{
		key: 'transactions',
		label: 'Transactions',
		path: '/transactions',
		icon: <ArticleOutlinedIcon />
	},
	{
		key: 'messages',
		label: 'Messages',
		path: '/messages',
		icon: <TextsmsOutlinedIcon />
	}
]

export const sidebarBottomLinks = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <SettingsOutlinedIcon />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HelpOutlineOutlinedIcon />
	}
]
