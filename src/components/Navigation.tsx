import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent neon-glow"></div>
            <h1 className="text-xl md:text-2xl font-playfair font-bold text-primary neon-text">
              Study Hub
            </h1>
          </div>
          
          <div className="flex items-center gap-2 md:gap-6">
            <Link
              to="/"
              className={`font-poppins font-medium px-2 md:px-4 py-1 md:py-2 text-sm md:text-base rounded-full transition-all duration-300 ${
                location.pathname === '/'
                  ? 'bg-primary text-primary-foreground shadow-[var(--shadow-soft)]'
                  : 'text-foreground hover:text-primary hover:bg-secondary/50'
              }`}
            >
              Videos
            </Link>
            <Link
              to="/contact"
              className={`font-poppins font-medium px-2 md:px-4 py-1 md:py-2 text-sm md:text-base rounded-full transition-all duration-300 ${
                location.pathname === '/contact'
                  ? 'bg-primary text-primary-foreground shadow-[var(--shadow-soft)]'
                  : 'text-foreground hover:text-primary hover:bg-secondary/50'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;