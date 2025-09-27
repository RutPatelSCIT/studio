import Header from '@/components/layout/header';
import MarketIndices from '@/components/stocks/market-indices';
import StockTable from '@/components/stocks/stock-table';
import NewsList from '@/components/news/news-list';
import Watchlist from '@/components/stocks/watchlist';
import PersonalizedNewsForm from '@/components/news/personalized-news-form';
import { WatchlistProvider } from '@/app/context/watchlist-context';

export default function Home() {
  return (
    <WatchlistProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 container mx-auto p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 space-y-8 lg:space-y-0">
            <div className="lg:col-span-2 space-y-8">
              <MarketIndices />
              <StockTable />
              <NewsList />
            </div>
            <aside className="lg:col-span-1 space-y-8">
              <Watchlist />
              <PersonalizedNewsForm />
            </aside>
          </div>
        </main>
      </div>
    </WatchlistProvider>
  );
}
