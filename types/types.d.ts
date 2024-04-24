export interface ExpenseItem {
    category: string;
    name: string;
    amount: number;
    percentage: number;
}

export interface BalanceItemData {
    cardType: string;
    cardLogoSrc: string;
    accountNumber: string;
    totalAmount: string;
    bankName: string;
}

export interface ITransaction {
    id: number;
    category: string;
    name: string;
    transactionType: 'expense' | 'revenue';
    amount: number;
    date: string;
}

export interface IBarChartProps {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        backgroundColor: string;
    }[];
    title?: string;
}

export interface ITableColumn {
    label: string;
    key: string;
    renderCell?: (rowData: any) => React.ReactNode;
    sortable?: boolean;
    sortFunction?: any;
}

export interface IUpcomingBillsData {
    name: string;
    date: Date;
    logo: string;
    description: string;
    lastCharged: string;
    amount: number;
}