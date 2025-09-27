import { CandlestickChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Header = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <CandlestickChart className="h-7 w-7 text-primary" />
          <h1 className="text-xl font-bold tracking-tight text-foreground">
            ApnaStocks Simplified
          </h1>
        </div>
        <Avatar>
          <AvatarImage src="https://picsum.photos/seed/user/40/40" alt="User avatar" data-ai-hint="person face" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Header;
