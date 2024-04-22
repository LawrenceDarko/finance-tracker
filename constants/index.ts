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
