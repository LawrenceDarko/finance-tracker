import { RiDashboardLine } from "react-icons/ri";
import { BiMoney } from "react-icons/bi";
import { AiOutlineTransaction } from "react-icons/ai";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";
import { BiDollar } from "react-icons/bi";
import { AiOutlineFlag } from "react-icons/ai";
import { BsBarChartFill } from "react-icons/bs";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { MdMonetizationOn } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import { BalanceItemData, IUpcomingBillsData } from "@/types/types";

export const sidebarLinks = [
    {
        label: 'Dashboard',
        route: '/',
        icon: RiDashboardLine
    },
    {
        label: 'Balances',
        route: '/balances',
        icon: BiMoney
    },
    {
        label: 'Transactions',
        route: '/transactions',
        icon: AiOutlineTransaction
    },
    {
        label: 'Bills',
        route: '/bills',
        icon: LiaMoneyBillWaveAltSolid
    },
    {
        label: 'Expenses',
        route: '/expenses',
        icon: BiDollar
    },
    {
        label: 'Goals',
        route: '/goals',
        icon: AiOutlineFlag
    },
    {
        label: 'My Assets',
        route: '/my-assets',
        icon: BsBarChartFill
    },
    {
        label: 'Market & Insights',
        route: '/market-insights',
        icon: FaMoneyCheckAlt
    },
    {
        label: 'Budget Targets',
        route: '/budget-targets',
        icon: MdMonetizationOn
    },
    {
        label: 'Settings',
        route: '/settings',
        icon: AiOutlineSetting
    }
];

export const SampleData: BalanceItemData[] = [
    { cardType: 'Credit Card', cardLogoSrc: '/icons/Mastercard.svg', accountNumber: '3388 4556 8860 ****', totalAmount: '$2,500', bankName: 'Bank A' },
    { cardType: 'Debit Card', cardLogoSrc: '/icons/Visacard.svg', accountNumber: '5566 7788 9900 ****', totalAmount: '$1,200', bankName: 'Bank B' },
    { cardType: 'Prepaid Card', cardLogoSrc: '/icons/Mastercard.svg', accountNumber: '1122 3344 5566 ****', totalAmount: '$500', bankName: 'Bank C' },
    { cardType: 'Savings Account', cardLogoSrc: '/icons/Mastercard.svg', accountNumber: '9900 8877 6655 ****', totalAmount: '$10,000', bankName: 'Bank D' },
    { cardType: 'Investment Portfolio', cardLogoSrc: '/icons/Visacard.svg', accountNumber: '2233 4455 6677 ****', totalAmount: '$50,000', bankName: 'Bank E' },
    { cardType: 'Insurance Account', cardLogoSrc: '/icons/Mastercard.svg', accountNumber: '7766 5544 3322 ****', totalAmount: '$3,000', bankName: 'Bank F' },
    { cardType: 'Cryptocurrency Wallet', cardLogoSrc: '/icons/bitcoin.svg', accountNumber: '1A2b3C4d5E ****', totalAmount: '$8,000', bankName: 'Bank G' },
    { cardType: 'Student Loan', cardLogoSrc: '/icons/Visacard.svg', accountNumber: '9988 7766 5544 ****', totalAmount: '$15,000', bankName: 'Bank H' },
    { cardType: 'Mortgage Loan', cardLogoSrc: '/icons/Mastercard.svg', accountNumber: '3322 5544 6677 ****', totalAmount: '$200,000', bankName: 'Bank I' },
    { cardType: 'Personal Line of Credit', cardLogoSrc: '/icons/Visacard.svg', accountNumber: '6677 8899 0011 ****', totalAmount: '$5,000', bankName: 'Bank J' },
];

export const upcomingBillsData: IUpcomingBillsData[] = [
    { name: 'Bitcoin', date: new Date(), logo: "/icons/bitcoin.svg", description: "Monthly Subscription", lastCharged: "2024-03-30", amount: 49.99 },
    { name: 'Adobe Subscription', date: new Date(), logo: "/icons/Adobe.svg", description: "Internet Service", lastCharged: "2024-04-15", amount: 69.99 },
    { name: 'Netflix Subscription', date: new Date(), logo: "/icons/Mastercard.svg", description: "Phone Bill", lastCharged: "2024-03-25", amount: 45.00 },
    { name: 'Electricity Bill', date: new Date(), logo: "/icons/Adobe.svg", description: "Software License Renewal", lastCharged: "2024-04-05", amount: 99.99 },
    { name: 'Water Bill', date: new Date(), logo: "/icons/Adobe.svg", description: "Gym Membership", lastCharged: "2024-03-28", amount: 29.99 }
];

export const merchantListData = [
    {
        id: "MTT-1234567",
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "123-456-7890",
        status: "prospective",
    },
    {
        id: "MTT-2345678",
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phone: "987-654-3210",
        status: "rejected",
    },
    {
        id: "MTT-3456789",
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        phone: "555-123-4567",
        status: "prospective",
    },
    {
        id: "MTT-4567890",
        name: "Bob Williams",
        email: "bob.williams@example.com",
        phone: "222-987-6543",
        status: "rejected",
    },
    {
        id: "MTT-5678901",
        name: "Eva Brown",
        email: "eva.brown@example.com",
        phone: "333-555-8888",
        status: "prospective",
    },
    {
        id: "MTT-6789012",
        name: "Charlie Davis",
        email: "charlie.davis@example.com",
        phone: "777-888-9999",
        status: "rejected",
    },
    {
        id: "MTT-7890123",
        name: "Grace Miller",
        email: "grace.miller@example.com",
        phone: "111-222-3333",
        status: "prospective",
    },
    {
        id: "MTT-8901234",
        name: "David Taylor",
        email: "david.taylor@example.com",
        phone: "444-666-7777",
        status: "rejected",
    },
    {
        id: "MTT-9012345",
        name: "Sophia Wilson",
        email: "sophia.wilson@example.com",
        phone: "999-111-4444",
        status: "prospective",
    },
    {
        id: "MTT-0123456",
        name: "Henry Anderson",
        email: "henry.anderson@example.com",
        phone: "666-333-5555",
        status: "rejected",
    },
    {
        id: "MTT-8921234",
        name: "David Taylor",
        email: "david.taylor@example.com",
        phone: "444-666-7777",
        status: "rejected",
    },
    {
        id: "MTT-8901434",
        name: "David Taylor",
        email: "david.taylor@example.com",
        phone: "444-666-7777",
        status: "rejected",
    },
];