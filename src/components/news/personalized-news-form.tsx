'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { getPersonalizedNews } from '@/app/actions';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Bot, Loader2 } from 'lucide-react';

const initialState = {
  message: null,
  newsFeed: null,
  errors: {},
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      Generate Feed
    </Button>
  );
}

const PersonalizedNewsForm = () => {
  const [state, formAction] = useFormState(getPersonalizedNews, initialState);

  return (
    <Card>
      <form action={formAction}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot className="text-accent" />
            AI-Powered News
          </CardTitle>
          <CardDescription>
            Enter your interests to get a personalized stock news feed.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="interests">Your Interests</Label>
            <Textarea
              id="interests"
              name="interests"
              placeholder="e.g., Tesla, AI, renewable energy"
              defaultValue="EV, AI, Indian IT Sector"
            />
            {state.errors?.interests && (
              <p className="text-sm font-medium text-destructive">{state.errors.interests[0]}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="searchHistory">Recent Searches (optional)</Label>
            <Textarea
              id="searchHistory"
              name="searchHistory"
              placeholder="e.g., top performing tech stocks, market trends"
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-4">
          <SubmitButton />
          {state.message === 'success' && state.newsFeed && (
            <div className="space-y-2 text-sm p-4 bg-muted/50 rounded-lg border w-full">
                <h4 className="font-semibold">Your Personalized Feed:</h4>
                <p className="whitespace-pre-wrap">{state.newsFeed}</p>
            </div>
          )}
          {state.message && state.message !== 'success' && (
             <p className="text-sm font-medium text-destructive">{state.message}</p>
          )}
        </CardFooter>
      </form>
    </Card>
  );
};

export default PersonalizedNewsForm;
