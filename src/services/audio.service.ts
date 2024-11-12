import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  private audio = new Audio();
  private isPlaying = false;

  constructor() {}

  playTrack(url: string) {
    this.audio.src = url;
    this.audio.load();
    this.audio.play();
    this.isPlaying = true;
  }

  pauseTrack() {
    this.audio.pause();
    this.isPlaying = false;
  }

  resumeTrack() {
    this.audio.play();
    this.isPlaying = true;
  }

  stopTrack() {
    this.audio.pause();
    this.audio.currentTime = 0;
    this.isPlaying = false;
  }

  isTrackPlaying(): boolean {
    return this.isPlaying;
  }

  // Métodos adicionales para manejar el progreso, el volumen, etc.
}
