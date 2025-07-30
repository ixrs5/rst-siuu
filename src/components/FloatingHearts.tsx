import { useEffect, useState } from 'react';

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; y: number; delay: number; image: string }>>([]);

  useEffect(() => {
    // 3D emoji images that you will upload to src/assets/
    const emojiImages = ['1.png', '2.png', '3.png', '4.png'];
    const newHearts = Array.from({ length: 4 }, (_, i) => ({
      id: i,
      x: Math.random() * 90 + 5, // Keep away from edges
      y: Math.random() * 90 + 5,
      delay: Math.random() * 4,
      image: emojiImages[i % 4],
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="floating-hearts">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="floating-heart animate-heart-float"
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          <img 
            src={`/src/assets/${heart.image}`}
            alt="Floating emoji"
            className="w-12 h-12 object-contain drop-shadow-lg"
            style={{
              filter: 'drop-shadow(0 0 10px hsl(320 100% 70% / 0.5))'
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;