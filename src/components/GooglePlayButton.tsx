import React from 'react';

interface GooglePlayButtonProps {
  className?: string;
  variant?: 'dark' | 'light';
}

export function GooglePlayButton({ className = '', variant = 'dark' }: GooglePlayButtonProps) {
  const isDark = variant === 'dark';
  
  return (
    <a
      href="https://play.google.com/store/apps/details?id=com.gharbanoo.app"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-xl border transition-all active:scale-95 shadow-sm hover:shadow-md ${
        isDark 
          ? 'bg-black text-white hover:bg-zinc-900 border-zinc-800' 
          : 'bg-white text-dark hover:bg-gray-50 border-gray-200'
      } ${className}`}
    >
      {/* Official Google Play Icon in vector SVG */}
      <svg 
        viewBox="0 0 512 512" 
        className="w-6 h-6 shrink-0" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M32.5 31.7c-.5 1-.8 2.2-.8 3.5v441.6c0 1.3.3 2.5.8 3.5l1.1 1.1L257.6 256 33.6 30.6l-1.1 1.1z" 
          fill="#00E5FF" 
        />
        <path 
          d="M394.3 120.3L257.6 256 33.6 30.6c3.4-3.5 9-3.5 15-1.5l345.7 191.2z" 
          fill="#FF3D00" 
        />
        <path 
          d="M34.7 481.4c-1.3-1-2.2-2.5-2.2-4.1l225.1-221.3L394.3 391.7 48.6 482.9c-6.1 3.4-11.4 1.9-13.9-1.5z" 
          fill="#4CAF50" 
        />
        <path 
          d="M503.7 236.4l-109.4-60.5-136.7 136.7 136.7 136.7 109.4-60.5c16.1-9 16.1-23.7 0-32.4z" 
          fill="#FFEB3B" 
        />
      </svg>
      
      <div className="flex flex-col items-start text-left leading-none">
        <span className={`text-[9px] font-bold uppercase tracking-widest ${isDark ? 'text-zinc-400' : 'text-gray-500'}`}>
          GET IT ON
        </span>
        <span className={`text-base font-black tracking-tight mt-0.5 ${isDark ? 'text-white' : 'text-dark'}`}>
          Google Play
        </span>
      </div>
    </a>
  );
}
