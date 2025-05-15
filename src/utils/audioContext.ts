// Create an audio context to handle advanced audio features if needed in the future
let audioContext: AudioContext | null = null;

export const getAudioContext = (): AudioContext => {
  if (!audioContext) {
    audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  return audioContext;
};

export const initializeAudio = async (audioElement: HTMLAudioElement): Promise<void> => {
  const context = getAudioContext();
  
  // Resume audio context if it's suspended (needed for Chrome and other browsers)
  if (context.state === 'suspended') {
    await context.resume();
  }
};

export const fadeInVolume = (audioElement: HTMLAudioElement, duration: number = 2000): void => {
  audioElement.volume = 0;
  
  const startTime = performance.now();
  const targetVolume = 1.0;
  
  const fadeInterval = setInterval(() => {
    const elapsed = performance.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    audioElement.volume = progress * targetVolume;
    
    if (progress >= 1) {
      clearInterval(fadeInterval);
    }
  }, 16); // ~60fps
};