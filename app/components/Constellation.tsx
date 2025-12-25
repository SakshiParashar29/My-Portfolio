"use client";

export default function Constellation() {
  return (
    <div className="constellation-bg">
      {Array.from({ length: 100 }).map((_, i) => (
        <span
          key={i}
          className="star"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}

      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <line x1="25%" y1="40%" x2="40%" y2="30%" stroke="white" opacity="0.15" />
        <line x1="40%" y1="30%" x2="55%" y2="45%" stroke="white" opacity="0.15" />
        <line x1="55%" y1="45%" x2="70%" y2="35%" stroke="white" opacity="0.15" />
      </svg>
    </div>
  );
}
