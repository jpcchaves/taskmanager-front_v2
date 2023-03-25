import {Icon} from '@chakra-ui/react';
import {MdHome, MdOutlineShoppingCart, MdPerson} from 'react-icons/md';

// Admin Imports
import MainDashboard from 'views/admin/default';
import NFTMarketplace from 'views/admin/marketplace';
import Profile from 'views/admin/profile';

// Auth Imports

const routes = [
    {
        name: 'Tarefas',
        layout: '/tk',
        path: '/tarefas',
        icon: <Icon as={MdHome} width='20px' height='20px' color='inherit'/>,
        component: <MainDashboard/>
    },
    {
        name: 'Dashboard',
        layout: '/tk',
        path: '/dashboard',
        icon: <Icon as={MdOutlineShoppingCart} width='20px' height='20px' color='inherit'/>,
        component: <NFTMarketplace/>,
        secondary: true
    },
    {
        name: 'Perfil',
        layout: '/tk',
        path: '/profile',
        icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit'/>,
        component: <Profile/>
    },
];

export default routes;
