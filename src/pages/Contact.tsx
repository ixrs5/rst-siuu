import { Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <div className="animate-fade-in-up">
          <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-r from-primary to-accent neon-glow animate-float"></div>
          
          <h1 className="text-5xl font-playfair font-bold text-primary mb-8 neon-text">
            Hey Tuhi!
          </h1>
          
          <div className="pookie-card text-left mb-8">
            <p className="text-lg font-poppins text-foreground leading-relaxed mb-6">
              Hi, I'm <span className="font-bold text-primary neon-text">Siyam</span> — I made this Pookie site with 
              all my love for you!
            </p>
            
            <p className="text-lg font-poppins text-foreground leading-relaxed mb-6">
              This little corner of the internet is designed just for you, filled with all 
              your study materials in the most beautiful way possible. I hope it brings a 
              smile to your face every time you use it!
            </p>
            
            <p className="text-lg font-poppins text-foreground leading-relaxed">
              Study hard, dream big, and remember that someone believes in you completely!
            </p>
          </div>
          
          <div className="pookie-card">
            <h2 className="text-2xl font-playfair font-bold text-primary mb-6 text-center neon-text">
              Let's Connect
            </h2>
            
            <a
              href="https://instagram.com/rejoan.siyam"
              target="_blank"
              rel="noopener noreferrer"
              className="pookie-button inline-flex items-center gap-3 text-lg group neon-button"
            >
              <Instagram size={24} className="group-hover:animate-pookie-bounce" />
              <span>@rejoan.siyam</span>
            </a>
          </div>
          
          <div className="neon-divider mt-8"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;