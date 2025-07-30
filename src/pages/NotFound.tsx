import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center pt-24">
      <div className="text-center animate-fade-in-up">
        <div className="text-8xl mb-8 animate-float">🎀</div>
        <h1 className="text-6xl font-comfortaa font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8 font-quicksand">
          Oops! This page doesn't exist in Pookie land 💕
        </p>
        <Link to="/" className="pookie-button inline-flex items-center gap-2">
          <span>🏠</span>
          Return to Videos
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
