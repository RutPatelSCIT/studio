import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { indices } from '@/app/lib/data';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const MarketIndices = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {indices.map((index) => (
          <Card key={index.name}>
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium text-muted-foreground">{index.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{index.value.toFixed(2)}</div>
              <div className={cn(
                  "flex items-center text-sm",
                  index.change >= 0 ? "text-green-600" : "text-red-600"
                )}>
                {index.change >= 0 ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
                <span>{index.change.toFixed(2)} ({index.changePercent.toFixed(2)}%)</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default MarketIndices;
