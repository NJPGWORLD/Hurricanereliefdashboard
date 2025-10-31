import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

export function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Caribbean time (using America/Jamaica timezone - AST/Atlantic Standard Time)
  const caribbeanTime = time.toLocaleTimeString('en-US', {
    timeZone: 'America/Jamaica',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  return (
    <div className="flex flex-col items-center gap-1 text-xs sm:text-sm text-gray-600">
      <div className="flex items-center gap-1.5">
        <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        <span>
          {time.toLocaleDateString('en-US', { 
            weekday: 'short', 
            month: 'short', 
            day: 'numeric',
            year: 'numeric'
          })}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-xs">
          <span className="text-gray-500">Caribbean:</span> {caribbeanTime} AST
        </span>
        <span className="text-gray-300">|</span>
        <span className="text-xs">
          <span className="text-gray-500">Local:</span> {time.toLocaleTimeString('en-US')}
        </span>
      </div>
    </div>
  );
}
