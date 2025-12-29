import { useEffect, useState } from 'react';
import '../styles/CursorInteractions.css';

function CursorInteractions() {
  const [sparks, setSparks] = useState([]);
  const [cubes, setCubes] = useState([]);
  const [antigravity, setAntigravity] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      // Click spark effect
      const spark = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      setSparks((prev) => [...prev, spark]);
      setTimeout(() => {
        setSparks((prev) => prev.filter((s) => s.id !== spark.id));
      }, 600);
    };

    const handleMouseMove = (e) => {
      // Antigravity effect - particles that follow cursor
      if (Math.random() > 0.7) {
        const particle = {
          id: Date.now() + Math.random(),
          x: e.clientX + (Math.random() - 0.5) * 50,
          y: e.clientY + (Math.random() - 0.5) * 50,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
        };
        setAntigravity((prev) => [...prev, particle]);
        setTimeout(() => {
          setAntigravity((prev) => prev.filter((p) => p.id !== particle.id));
        }, 2000);
      }

      // Cubes effect - floating cubes near cursor
      if (Math.random() > 0.85) {
        const cube = {
          id: Date.now() + Math.random(),
          x: e.clientX + (Math.random() - 0.5) * 100,
          y: e.clientY + (Math.random() - 0.5) * 100,
          size: 10 + Math.random() * 15,
          rotation: Math.random() * 360,
        };
        setCubes((prev) => [...prev, cube]);
        setTimeout(() => {
          setCubes((prev) => prev.filter((c) => c.id !== cube.id));
        }, 3000);
      }
    };

    window.addEventListener('click', handleClick);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('click', handleClick);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Click Spark Effect */}
      {sparks.map((spark) => (
        <div
          key={spark.id}
          className="click-spark"
          style={{
            left: `${spark.x}px`,
            top: `${spark.y}px`,
          }}
        >
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="spark-particle"
              style={{
                '--angle': `${(i * 360) / 12}deg`,
                '--delay': `${i * 0.05}s`,
              }}
            />
          ))}
        </div>
      ))}

      {/* Cubes Effect */}
      {cubes.map((cube) => (
        <div
          key={cube.id}
          className="floating-cube"
          style={{
            left: `${cube.x}px`,
            top: `${cube.y}px`,
            width: `${cube.size}px`,
            height: `${cube.size}px`,
            '--rotation': `${cube.rotation}deg`,
          }}
        />
      ))}

      {/* Antigravity Particles */}
      {antigravity.map((particle) => (
        <div
          key={particle.id}
          className="antigravity-particle"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
          }}
        />
      ))}
    </>
  );
}

export default CursorInteractions;

