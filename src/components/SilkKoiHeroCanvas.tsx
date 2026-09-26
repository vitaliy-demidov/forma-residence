import React, { useEffect, useRef } from 'react';

export const SilkKoiHeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let time = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let animationFrameId: number;
    let isRunning = true;

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 2 graceful golden koi fish silhouettes
    const kois = [
      { x: width * 0.25, y: height * 0.35, speed: 0.75, angle: 0.5, length: 75, color: 'rgba(197, 160, 105, 0.26)' },
      { x: width * 0.75, y: height * 0.65, speed: 0.6, angle: 2.3, length: 95, color: 'rgba(185, 138, 75, 0.2)' }
    ];

    const draw = () => {
      if (!isRunning) return;
      time += 0.012;
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Flowing silk drapery lines (representing 1:2 fabric folds)
      const waveCount = 8;
      for (let i = 0; i < waveCount; i++) {
        ctx.beginPath();
        const baseX = (width / (waveCount + 1)) * (i + 1);
        ctx.moveTo(baseX, 0);

        for (let y = 0; y <= height; y += 30) {
          const distToMouse = Math.hypot(baseX - mouseX, y - mouseY);
          const mouseRepel = Math.max(0, 40 - distToMouse * 0.1);
          const waveOffset =
            Math.sin(y * 0.007 + time + i * 0.8) * 22 +
            Math.cos(y * 0.012 - time * 0.7) * 10 +
            (baseX < mouseX ? -mouseRepel : mouseRepel);
          ctx.lineTo(baseX + waveOffset, y);
        }

        ctx.strokeStyle = i % 2 === 0 ? 'rgba(197, 160, 105, 0.15)' : 'rgba(247, 244, 239, 0.04)';
        ctx.lineWidth = i === 3 ? 1.8 : 1;
        ctx.stroke();
      }

      // Gentle swimming Koi silhouettes
      kois.forEach((koi, idx) => {
        koi.x += Math.cos(koi.angle) * koi.speed;
        koi.y += Math.sin(koi.angle) * koi.speed;
        koi.angle += Math.sin(time * 0.4 + idx) * 0.006;

        if (koi.x < -120) koi.x = width + 120;
        if (koi.x > width + 120) koi.x = -120;
        if (koi.y < -120) koi.y = height + 120;
        if (koi.y > height + 120) koi.y = -120;

        ctx.save();
        ctx.translate(koi.x, koi.y);
        ctx.rotate(koi.angle);

        // Koi fish body
        ctx.beginPath();
        ctx.ellipse(0, 0, koi.length * 0.45, koi.length * 0.15, 0, 0, Math.PI * 2);
        ctx.fillStyle = koi.color;
        ctx.fill();

        // Elegant flowing tail with kinematic S-wave
        const tailWiggle = Math.sin(time * 3.5 + idx) * 7;
        ctx.beginPath();
        ctx.moveTo(-koi.length * 0.35, 0);
        ctx.quadraticCurveTo(-koi.length * 0.65, tailWiggle * 0.5, -koi.length * 0.85, tailWiggle);
        ctx.lineTo(-koi.length * 0.75, -tailWiggle * 0.5);
        ctx.closePath();
        ctx.fillStyle = koi.color;
        ctx.fill();

        // Subtle fin highlights
        ctx.beginPath();
        ctx.ellipse(koi.length * 0.05, koi.length * 0.12, koi.length * 0.12, koi.length * 0.05, 0.4, 0, Math.PI * 2);
        ctx.ellipse(koi.length * 0.05, -koi.length * 0.12, koi.length * 0.12, koi.length * 0.05, -0.4, 0, Math.PI * 2);
        ctx.fillStyle = koi.color;
        ctx.fill();

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleVisibilityChange = () => {
      isRunning = !document.hidden;
      if (isRunning) {
        animationFrameId = requestAnimationFrame(draw);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-75"
    />
  );
};
