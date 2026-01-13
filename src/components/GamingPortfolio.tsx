import { Gamepad } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const GamingPortfolio = () => {
  return (
    <section id="gaming-portfolio" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto fade-in">
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Gamepad className="h-6 w-6 text-accent" />
            Gaming Portfolio
          </h3>

          <Card className="project-card border-l-4 border-l-accent">
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4">
                A dedicated gaming portfolio showcasing personal interest in games, titles played, and long-term engagement with interactive entertainment and familiarity with gaming ecosystems.
              </p>

              <a
                href="https://anirudhgkulkarni.github.io/gaming_portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent text-background px-4 py-2 rounded-md font-medium hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent"
                aria-label="View Live Gaming Portfolio (opens in new tab)"
              >
                View Gaming Portfolio
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GamingPortfolio;
