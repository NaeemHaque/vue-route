
import compHome from './components/Home.vue';
import compCustomer from './components/Customer/Customer.vue';
import compCustomerStart from './components/Customer/CustomerStart';
import compCustomerEdit from './components/Customer/CustomerEdit';
import compCustomerDetail from './components/Customer/CustomerDetail';

export const routes = [
    {
        path: '',
        component: compHome
    },
    {
        path: '/customer',
        component: compCustomer,
        children: [
            {
                path: '/',
                component: compCustomerStart
            },
            {
                path: ':id',
                component: compCustomerDetail
            },
            {
                path: ':id/edit',
                component: compCustomerEdit,
                name: 'customerEdit'
            },
        ]
    },
    {
        path: '*',
        component: compHome
    }


]