// services/api.ts
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { headers } from 'next/headers';

const BASE_URL: string = process.env.NEXT_PUBLIC_BACKEND_BASE_URL || '';

const apiConfig: AxiosRequestConfig = {
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
};

const api: AxiosInstance = axios.create(apiConfig);

// Interceptor starts here
// Request interceptor
api.interceptors.request.use(
    (config) => {
        // Add your request interceptor logic here
        config.withCredentials = true;
        const authToken = localStorage?.getItem('settlement_token');
        // console.log("AUTH TOKEN: ", authToken)
        if (authToken && !config.headers['Authorization']) {
            // config.headers['settlement_token'] = authToken;
            config.headers['Authorization'] = `Bearer ${authToken}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error) => {
        // Add your response interceptor logic here
        if (error) {
            // console.log("Redirect URL:", error.response.data.data.redirectUrl);
            // return router.push(error.response.data.data.redirectUrl)
            console.log("ERROR: ", error);
        }
        return Promise.reject(error);
    }
);

// Interceptor ends here


const ApiService = {
    getUsers: () => api.get('/users'),
    getUserById: (userId: string) => api.get(`/users/${userId}`),

    // add Merchant
    addMerchantGeneralInfo: (data: any) => api.post('/merchants', data),
    addMerchantContactInfo: (data: any) => api.post('/merchants/contact', data),
    addMerchantSettlementInfo: (data: any) => api.post('/merchants/account', data),
    addMerchantDocumentInfo: (data: any) => api.post('/documents', {documents: data}, {headers: {'Content-Type': 'multipart/form-data'}}),
    addMerchantFees: (data: any) => api.post('/merchants/fees', data),

    // Get Merchant Information by Id
    getMerchantGeneralInfoById: (merchantId: string) => api.get(`/merchants/${merchantId}`),
    getMerchantContactInfoById: (merchantId: string) => api.get(`/merchants/contact/${merchantId}`),
    getMerchantSettlementInfoById: (merchantId: string) => api.get(`/merchants/account/${merchantId}`),
    getMerchantFeesById: (merchantId: string) => api.get(`/merchants/fees/${merchantId}`),
    getMerchantDocumentInfoById: (merchantId: string) => api.get(`/documents/${merchantId}`),

    // get Transaction
    getTransactions: () => api.get('/transactions'),
    getTransactionById: (transactionId: string) => api.get(`/transaction/${transactionId}`),

    // get Merchant
    getMerchants: () => api.get('/merchants'),
    getMerchantById: (merchantId: string) => api.get(`/merchants/get-merchant-details/${merchantId}`),
    getDefaultFees: () => api.get('/services'),

    // get referrers
    getReferrers: () => api.get('/referrers'),

    // get all Banks and Branches
    getBanksAndBranches: () => api.get('/banks/fetch-banks'),

    // update Merchant
    updateMerchant: (merchantId: string, data: any) => api.patch(`/merchants/${merchantId}`, data),
    updateMerchantGeneralInfo: (merchantId: string, data: any) => api.patch(`/merchants/${merchantId}`, data),
    updateMerchantContactInfo: (merchantId: string, data: any) => api.patch(`/merchants/contact/update/${merchantId}`, data),
    updateMerchantSettlementInfo: (merchantId: string, data: any) => api.patch(`/merchants/account/update/${merchantId}`, data),
    updateMerchantFees: (merchantId: string, data: any) => api.patch(`/merchants/fees/update/${merchantId}`, data),
    updateMerchantDocumentInfo: (merchantId: string, data: any) => api.patch(`/documents/update-merchant-documents/${merchantId}`, data, {headers: {'Content-Type': 'multipart/form-data'}}),
    updateMerchantStatus: (merchantId: string) => api.patch(`/merchants/status/${merchantId}`),

    sendRejectMessage: (data: any) => api.post('/merchants/reject-reason', data),
    getRejectMessages: (merchantId: any) => api.get(`/merchants/comments/${merchantId}`),

    // status actions
    verifyMerchant: (merchantId: string) => api.patch(`/merchants/verify/${merchantId}`),
    rejectMerchant: (merchantId: string) => api.patch(`/merchants/reject/${merchantId}`),
    approveMerchant: (merchantId: string) => api.patch(`/merchants/approve/${merchantId}`),
    activateMerchant: (merchantId: string) => api.patch(`/merchants/update-merchant-status-to-live/${merchantId}`),
    deactivateMerchant: (merchantId: string) => api.patch(`/merchants/deactivate/${merchantId}`),
};

export default ApiService;
