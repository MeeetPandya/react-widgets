import React, { useState, useEffect } from 'react';

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondDeg = (seconds / 60) * 360;
  const minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
  const hourDeg = (hours / 12) * 360 + (minutes / 60) * 30;

  return (
    <div className='flex border flex-col justify-center items-center gap-6 rounded-2xl'>
    
    <div className="relative w-64 h-64 bg-white rounded-full shadow-lg border-4 border-gray-200 flex items-center justify-center">

      {/* Hour hand */}
      <div
        className="absolute w-2 bg-black rounded-full"
        style={{
          height: '80px',
          bottom: '50%',
          left: '50%',
          marginLeft: '-1px',
          transform: `rotate(${hourDeg}deg)`,
          transformOrigin: 'bottom center',
        }}
      />

      {/* Minute hand */}
      <div
        className="absolute w-1 bg-black rounded-full"
        style={{
          height: '100px',
          bottom: '50%',
          left: '50%',
          marginLeft: '-0.5px',
          transform: `rotate(${minuteDeg}deg)`,
          transformOrigin: 'bottom center',
        }}
      />

      {/* Second hand */}
      <div
        className="absolute w-1 bg-red-500 rounded-full"
        style={{
          height: '110px',
          bottom: '50%',
          left: '50%',
          marginLeft: '-0.5px',
          transform: `rotate(${secondDeg}deg)`,
          transformOrigin: 'bottom center',
        }}
      />

      {/* Center pivot */}
      <div className="absolute w-4 h-4 bg-black rounded-full z-10" />
    </div>

    <p className='flex justify-center items-center font-serif font-extrabold text-3xl border rounded-2xl p-4 min-w-2/4 '>{hours}:{minutes}:{seconds}</p>
    </div>
  );
};

export default AnalogClock;