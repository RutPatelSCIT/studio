'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, X } from 'lucide-react';
import { useWatchlist } from '@/app/context/watchlist-context';
import { stocks } from '@/app/lib/data';
import { cn } from '@/lib/utils';

const Watchlist = () => {
  const { watchlist, removeFromWatchlist } = useWatchlist();
  const watchedStocks = stocks.filter((stock) => watchlist.includes(stock.symbol));

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Star className="text-yellow-400" />
          My Watchlist
        </CardTitle>
      </CardHeader>
      <CardContent>
        {watchedStocks.length > 0 ? (
          <ul className="space-y-4">
            {watchedStocks.map((stock) => (
              <li key={stock.symbol} className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-semibold">{stock.symbol}</p>
                  <p className="text-sm text-muted-foreground">₹{stock.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className={cn(
                      'text-sm font-medium',
                      stock.change >= 0 ? 'text-green-600' : 'text-red-600'
                    )}
                  >
                    {stock.change > 0 ? '+' : ''}
                    {stock.changePercent.toFixed(2)}%
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => removeFromWatchlist(stock.symbol)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center text-muted-foreground py-4">
            <p>Your watchlist is empty.</p>
            <p className="text-sm">Add stocks from the list to track them here.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Watchlist;
