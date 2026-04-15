import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const weddingDate = new Date('2026-05-07T10:30:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  const TimeBox = ({ value, label }) => (
    <div className="relative">
      <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-2xl p-6 md:p-10 border-4 border-gold shadow-2xl">
        <div className="text-6xl md:text-8xl font-playfair text-gold font-bold mb-3 drop-shadow-lg">
          {String(value).padStart(2, '0')}
        </div>
        <div className="text-xl md:text-2xl text-ivory font-semibold uppercase tracking-widest">
          {label}
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 islamic-pattern opacity-10" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-playfair text-gold mb-4">
            Counting Down to Forever
          </h2>
          <div className="w-48 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
          <p className="text-xl text-ivory">Thursday, 7th May 2026 at 10:30 AM</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <TimeBox value={timeLeft.days} label="Days" />
          <TimeBox value={timeLeft.hours} label="Hours" />
          <TimeBox value={timeLeft.minutes} label="Minutes" />
          <TimeBox value={timeLeft.seconds} label="Seconds" />
        </div>

        <div className="text-center mt-12">
          <p className="text-2xl text-ivory font-light">
            Join us as we begin our journey together
          </p>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
