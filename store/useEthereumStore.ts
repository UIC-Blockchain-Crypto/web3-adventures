import { create } from 'zustand';

interface EthereumState {
    account: string | null;
    network: string | null;
    isConnected: boolean;
    setAccount: (account: string) => void;
    setNetwork: (network: string) => void;
    setIsConnected: (isConnected: boolean) => void;
}

const useEthereumStore = create<EthereumState>((set) => ({
    account: null,
    network: null,
    isConnected: false,
    setAccount: (account) => set({ account }),
    setNetwork: (network) => set({ network }),
    setIsConnected: (isConnected) => set({ isConnected }),
}));

export default useEthereumStore;
