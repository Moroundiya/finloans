import { homeLoan, carLoan, educationLoan } from './imagesImport';

const services = [
    {
        id: 1,
        imgURL: `${homeLoan}`,
        serviceTitle: 'Home Loan',
        amount: '$3000-$10000',
        serviceList1: 'Borrow - $350 over 3 months',
        serviceList2: 'Interest rate - 292% pa fixed',
        serviceList3: 'Total amount payable - $525.12',
        serviceList4: 'Representative - 1,286% APR'
    }, 
        
    {
        id: 2,
        imgURL: `${carLoan}`,
        serviceTitle: 'Car Loan',
        amount: '$3000-$10000',
        serviceList1: 'Borrow - $350 over 3 months',
        serviceList2: 'Interest rate - 292% pa fixed',
        serviceList3: 'Total amount payable - $525.12',
        serviceList4: 'Representative - 1,286% APR'
    },

    {
        id: 3,
        imgURL: `${educationLoan}`,
        serviceTitle: 'Education Loan',
        amount: '$3000-$10000',
        serviceList1: 'Borrow - $350 over 3 months',
        serviceList2: 'Interest rate - 292% pa fixed',
        serviceList3: 'Total amount payable - $525.12',
        serviceList4: 'Representative - 1,286% APR'
    }
]

export default services;