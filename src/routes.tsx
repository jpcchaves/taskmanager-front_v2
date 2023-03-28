import {Icon} from '@chakra-ui/react';
import {MdHome, MdOutlineShoppingCart, MdPerson} from 'react-icons/md';

// Admin Imports
import MainDashboard from './modules/admin/default';
import Profile from './modules/admin/profile';
import TasksView from "./modules/admin/tasks";

// Auth Imports

const routes = [
    {
        name: 'Tarefas',
        layout: '/',
        path: '/tarefas',
        icon: <Icon as={MdHome} width='20px' height='20px' color='inherit'/>,
        component: <TasksView/>
    },
    {
        name: 'Dashboard',
        layout: '/',
        path: '/dashboard',
        icon: <Icon as={MdOutlineShoppingCart} width='20px' height='20px' color='inherit'/>,
        component: <MainDashboard/>,
        secondary: true
    },
    {
        name: 'Perfil',
        layout: '/',
        path: '/perfil',
        icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit'/>,
        component: <Profile/>
    },
];

export default routes;
