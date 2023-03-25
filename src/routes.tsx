import {Icon} from '@chakra-ui/react';
import {MdHome, MdOutlineShoppingCart, MdPerson} from 'react-icons/md';

// Admin Imports
import MainDashboard from 'views/admin/default';
import NFTMarketplace from 'views/admin/marketplace';
import Profile from 'views/admin/profile';
import RTL from 'views/admin/rtl';

// Auth Imports

const routes = [
    {
        name: 'Tarefas',
        layout: '/admin',
        path: '/default',
        icon: <Icon as={MdHome} width='20px' height='20px' color='inherit'/>,
        component: <MainDashboard/>
    },
    {
        name: 'Dashboard',
        layout: '/admin',
        path: '/nft-marketplace',
        icon: <Icon as={MdOutlineShoppingCart} width='20px' height='20px' color='inherit'/>,
        component: <NFTMarketplace/>,
        secondary: true
    },
    {
        name: 'Perfil',
        layout: '/admin',
        path: '/profile',
        icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit'/>,
        component: <Profile/>
    },
    {
        name: 'RTL Admin',
        layout: '/rtl',
        path: '/rtl-default',
        icon: <Icon as={MdHome} width='20px' height='20px' color='inherit'/>,
        component: <RTL/>
    }
];

export default routes;
