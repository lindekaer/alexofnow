export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background mt-auto">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} alexofnow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
