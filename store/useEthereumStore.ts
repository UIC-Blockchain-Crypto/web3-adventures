import { create } from 'zustand';

const useEthereumStore = create((set) => ({
    account: null,
    network: null,
    isConnected: false,
    setAccount: (account) => set({ account }),
    setNetwork: (network) => set({ network }),
    setIsConnected: (isConnected) => set({ isConnected }),
}));

export default useEthereumStore;
