import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { newsArticles } from '@/app/lib/data';
import { Newspaper } from 'lucide-react';

const NewsList = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Newspaper />
          Market News
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {newsArticles.map((article, index) => (
            <li key={article.id}>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="block hover:bg-muted/50 p-2 rounded-md -m-2">
                <h3 className="font-semibold">{article.title}</h3>
                <div className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                  <span>{article.source}</span>
                  <span className="text-xs">&bull;</span>
                  <span>{article.time}</span>
                </div>
              </a>
              {index < newsArticles.length - 1 && <Separator className="mt-4" />}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default NewsList;
