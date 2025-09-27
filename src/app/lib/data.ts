export type Index = {
  name: string;
  value: number;
  change: number;
  changePercent: number;
};

export type Stock = {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  marketCap: string;
};

export type NewsArticle = {
  id: number;
  title: string;
  source: string;
  time: string;
  url: string;
};

export const indices: Index[] = [
  { name: 'NIFTY 50', value: 23516.00, change: 18.10, changePercent: 0.08 },
  { name: 'SENSEX', value: 77301.14, change: -33.49, changePercent: -0.04 },
];

export const stocks: Stock[] = [
  { symbol: 'RELIANCE', name: 'Reliance Industries', price: 2959.00, change: 50.45, changePercent: 1.73, marketCap: '₹20.02T' },
  { symbol: 'TCS', name: 'Tata Consultancy Services', price: 3816.00, change: -5.90, changePercent: -0.15, marketCap: '₹13.80T' },
  { symbol: 'HDFCBANK', name: 'HDFC Bank', price: 1711.20, change: 41.25, changePercent: 2.47, marketCap: '₹13.01T' },
  { symbol: 'INFY', name: 'Infosys', price: 1526.00, change: -11.95, changePercent: -0.78, marketCap: '₹6.38T' },
  { symbol: 'ICICIBANK', name: 'ICICI Bank', price: 1159.00, change: 3.55, changePercent: 0.31, marketCap: '₹8.16T' },
  { symbol: 'HINDUNILVR', name: 'Hindustan Unilever', price: 2441.90, change: -12.15, changePercent: -0.50, marketCap: '₹5.74T' },
  { symbol: 'KOTAKBANK', name: 'Kotak Mahindra Bank', price: 1777.00, change: -6.40, changePercent: -0.36, marketCap: '₹3.53T' },
  { symbol: 'BAJFINANCE', name: 'Bajaj Finance', price: 7088.00, change: -136.90, changePercent: -1.89, marketCap: '₹4.39T' },
];

export const newsArticles: NewsArticle[] = [
  { id: 1, title: 'Market Watch: Nifty, Sensex trade flat amid global cues; IT stocks drag', source: 'LiveMint', time: '2h ago', url: '#' },
  { id: 2, title: 'Reliance Industries hits all-time high on new energy business prospects', source: 'Economic Times', time: '5h ago', url: '#' },
  { id: 3, title: 'SEBI tightens norms for IPOs, mutual funds to protect retail investors', source: 'Reuters', time: '1d ago', url: '#' },
  { id: 4, title: 'Banking sector outlook positive, HDFC and ICICI Bank top picks', source: 'Bloomberg', time: '1d ago', url: '#' },
];
