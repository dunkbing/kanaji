export default function Footer() {
  return (
    <footer className="w-full bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50 border-t p-4">
      <div className="container max-w-screen-lg mx-auto text-center text-sm text-muted-foreground">
        <p>
          Created by{' '}
          <a
            href="https://db99.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:text-primary transition-colors"
          >
            dunkbing
          </a>
        </p>
      </div>
    </footer>
  );
}
