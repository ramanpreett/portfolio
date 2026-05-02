import { PORTFOLIO_DATA } from "@/lib/data";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground font-medium">
          &copy; {new Date().getFullYear()} {PORTFOLIO_DATA.name}. Designed & Built with ❤️
        </p>
      </div>
    </footer>
  );
}
