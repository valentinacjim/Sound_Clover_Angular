class Song{
    private name: string;
    private artist: string;
    private duration: number;
    private img: string;
    private audio: string;
    private favorite: boolean;
    private lyrics: string;

    constructor(name: string, artist: string, duration: number, img: string, audio: string, favorite: boolean, lyrics: string){
        this.name = name;
        this.artist = artist;
        this.duration = duration;
        this.img = img;
        this.audio = audio;
        this.favorite = favorite;
        this.lyrics = lyrics;
    }

    getName(): string{
        return this.name;
    }

    getArtist(): string{
        return this.artist;
    }

    getDuration(): number{
        return this.duration;
    }

    getImg(): string{
        return this.img;
    }

    getAudio(): string{
        return this.audio;
    }

    getFavorite(): boolean{
        return this.favorite;
    }

    getLyrics(): string{
        return this.lyrics;
    }

    setFavorite(favorite: boolean): void{
        this.favorite = favorite;
    }

    toggleFavorite(): void{
        this.favorite = !this.favorite;
    }

}