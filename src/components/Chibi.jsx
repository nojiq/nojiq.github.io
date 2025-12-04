import { useMemo, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import './Chibi.css';

const palette = {
  0: 'transparent',
  1: '#04020a',
  2: '#1e0e3f',
  3: '#4534ac',
  4: '#36d1ff',
  5: '#f7e9c5',
  6: '#ff3864',
};

const spriteBase = [
  '0000002222000000',
  '0000224334220000',
  '0002444554442000',
  '0024445555444200',
  '0244445555444420',
  '0244444444444420',
  '0244442222444420',
  '0022222222222200',
  '0022244444222200',
  '0222444444444220',
  '2244446666444422',
  '2444466666644442',
  '2444466666644442',
  '0224444444442200',
  '0002242224420000',
  '0000002222000000',
];

const spriteWave = [
  '0000002222000000',
  '0000224334220000',
  '0002444554442000',
  '0024445555444200',
  '0244445555444420',
  '0244444444444420',
  '0244442222444420',
  '0022222222222200',
  '0022244444222200',
  '0222444444444220',
  '2244446666444422',
  '2444466666644442',
  '2444466666644442',
  '0224444444442200',
  '0002242266440000',
  '0000002266000000',
];

const spriteHappy = [
  '0000002222000000',
  '0000224334220000',
  '0002444554442000',
  '0024444555444200',
  '0244455555544420',
  '0244454445444420',
  '0244442222444420',
  '0022222222222200',
  '0022244444222200',
  '0222444444444220',
  '2244446666444422',
  '2444466666644442',
  '2444466666644442',
  '0224444444442200',
  '0002242224420000',
  '0000002222000000',
];

const moods = [
  { key: 'idle', sprite: spriteBase, label: 'Idle stance' },
  { key: 'wave', sprite: spriteWave, label: 'Wave hello' },
  { key: 'happy', sprite: spriteHappy, label: 'Battle ready' },
];

function useTiltSpring() {
  const tx = useMotionValue(0);
  const ty = useMotionValue(0);

  const rotateX = useSpring(useTransform(ty, [-24, 24], [10, -10]), {
    stiffness: 80,
    damping: 12,
  });
  const rotateY = useSpring(useTransform(tx, [-24, 24], [-10, 10]), {
    stiffness: 80,
    damping: 12,
  });
  const translateX = useSpring(tx, { stiffness: 90, damping: 14 });
  const translateY = useSpring(ty, { stiffness: 90, damping: 14 });

  return {
    rotateX,
    rotateY,
    translateX,
    translateY,
    setTilt: (x, y) => {
      tx.set(x);
      ty.set(y);
    },
    resetTilt: () => {
      tx.set(0);
      ty.set(0);
    },
  };
}

function Sprite({ sprite }) {
  const pixels = useMemo(() => {
    const rows = sprite.length;
    const cols = sprite[0].length;
    return sprite.flatMap((row, rowIndex) =>
      row.split('').map((cell, colIndex) => ({
        id: `${rowIndex}-${colIndex}`,
        color: palette[cell],
      })),
    );
  }, [sprite]);

  return (
    <div className="chibi-grid" role="img" aria-label="Neoziq pixel companion">
      {pixels.map((pixel) => (
        <span
          key={pixel.id}
          className="chibi-pixel"
          style={{ backgroundColor: pixel.color }}
        />
      ))}
    </div>
  );
}

export default function Chibi() {
  const [index, setIndex] = useState(0);
  const { rotateX, rotateY, translateX, translateY, setTilt, resetTilt } = useTiltSpring();
  const { sprite, label } = moods[index];

  const handleCycle = () => {
    setIndex((prev) => (prev + 1) % moods.length);
  };

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    const tiltX = ((offsetX / rect.width) - 0.5) * 40;
    const tiltY = ((offsetY / rect.height) - 0.5) * 40;
    setTilt(tiltX, tiltY);
  };

  return (
    <motion.div
      className="chibi-wrapper"
      onClick={handleCycle}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      style={{ rotateX, rotateY, x: translateX, y: translateY }}
      transition={{ type: 'spring', stiffness: 90, damping: 12 }}
    >
      <motion.div
        className="chibi-glow"
        animate={{
          opacity: [0.25, 0.45, 0.25],
          filter: ['hue-rotate(0deg)', 'hue-rotate(45deg)', 'hue-rotate(0deg)'],
        }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
      />
      <Sprite sprite={sprite} />
      <div className="chibi-label">[{label}] ƒ?" tap to switch stance</div>
    </motion.div>
  );
}
