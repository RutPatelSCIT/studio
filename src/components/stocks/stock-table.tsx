'use client';

import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { stocks } from '@/app/lib/data';
import { useWatchlist } from '@/app/context/watchlist-context';
import { cn } from '@/lib/utils';

const StockTable = () => {
  const { isInWatchlist, addToWatchlist, removeFromWatchlist } = useWatchlist();

  const handleWatchlistToggle = (symbol: string) => {
    if (isInWatchlist(symbol)) {
      removeFromWatchlist(symbol);
    } else {
      addToWatchlist(symbol);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Market Movers</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Company</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">Change</TableHead>
              <TableHead className="text-right">Market Cap</TableHead>
              <TableHead className="text-center">Watchlist</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {stocks.map((stock) => (
              <TableRow key={stock.symbol}>
                <TableCell>
                  <div className="font-bold">{stock.symbol}</div>
                  <div className="text-sm text-muted-foreground">{stock.name}</div>
                </TableCell>
                <TableCell className="text-right font-medium">₹{stock.price.toFixed(2)}</TableCell>
                <TableCell
                  className={cn(
                    'text-right',
                    stock.change >= 0 ? 'text-green-600' : 'text-red-600'
                  )}
                >
                  {stock.change.toFixed(2)} ({stock.changePercent.toFixed(2)}%)
                </TableCell>
                <TableCell className="text-right">{stock.marketCap}</TableCell>
                <TableCell className="text-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleWatchlistToggle(stock.symbol)}
                    aria-label={`Add ${stock.symbol} to watchlist`}
                  >
                    <Star
                      className={cn(
                        'h-5 w-5',
                        isInWatchlist(stock.symbol)
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-muted-foreground'
                      )}
                    />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default StockTable;
