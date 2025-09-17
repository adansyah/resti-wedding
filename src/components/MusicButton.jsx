import { useRef, useState } from "react";

export default function MusicButton() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!playing) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setPlaying(!playing);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio ref={audioRef} loop>
        <source src="audio/11Januari.mp3" type="audio/mp3" />
      </audio>
      <button
        onClick={toggleMusic}
        className="w-14 h-14 flex items-center justify-center rounded-full bg-[#6b4226] text-white shadow-lg"
      >
        {!playing ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-5.197-3.028A1 1 0 008 9.028v5.944a1 1 0 001.555.832l5.197-3.028a1 1 0 000-1.664z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 animate-spin" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6 4h2v12H6V4zm6 0h2v12h-2V4z" />
          </svg>
        )}
      </button>
    </div>
  );
}
