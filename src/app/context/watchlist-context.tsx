'use client';

import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';
import { type Stock } from '@/app/lib/data';

interface WatchlistContextType {
  watchlist: string[];
  addToWatchlist: (stockSymbol: string) => void;
  removeFromWatchlist: (stockSymbol:string) => void;
  isInWatchlist: (stockSymbol: string) => boolean;
}

const WatchlistContext = createContext<WatchlistContextType | undefined>(undefined);

export const WatchlistProvider = ({ children }: { children: ReactNode }) => {
  const [watchlist, setWatchlist] = useState<string[]>(['RELIANCE', 'HDFCBANK']);
  const { toast } = useToast();

  const addToWatchlist = useCallback((stockSymbol: string) => {
    setWatchlist((prev) => {
      if (prev.includes(stockSymbol)) {
        return prev;
      }
      toast({
        title: "Added to Watchlist",
        description: `${stockSymbol} has been added to your watchlist.`,
      });
      return [...prev, stockSymbol];
    });
  }, [toast]);

  const removeFromWatchlist = useCallback((stockSymbol: string) => {
    setWatchlist((prev) => {
       if (!prev.includes(stockSymbol)) {
        return prev;
      }
      toast({
        title: "Removed from Watchlist",
        description: `${stockSymbol} has been removed from your watchlist.`,
      });
      return prev.filter(symbol => symbol !== stockSymbol);
    });
  }, [toast]);
  
  const isInWatchlist = useCallback((stockSymbol: string) => {
    return watchlist.includes(stockSymbol);
  }, [watchlist]);

  return (
    <WatchlistContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist, isInWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
};

export const useWatchlist = () => {
  const context = useContext(WatchlistContext);
  if (context === undefined) {
    throw new Error('useWatchlist must be used within a WatchlistProvider');
  }
  return context;
};
