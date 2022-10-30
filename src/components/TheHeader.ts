import { Vue } from 'vue-class-component';
import Flicking from "@egjs/flicking";
import screenshotsData from "@/assets/data/ScreenshotsData";
import songsData from "@/assets/data/SongsData";


export default class TheHeader extends Vue {

    private songs: HTMLElement | null = null;
    private screenshots: HTMLElement | null = null;

    public mounted() {
        this.songs = document.getElementById('songs')
        this.screenshots = document.getElementById('screenshots')
    }

    public scrollToSongs() {
        (this.songs as HTMLElement).scrollIntoView({ behavior: "smooth"})
    }

    public scrollToScreenshots() {
        (this.screenshots as HTMLElement).scrollIntoView({ behavior: "smooth"})
    }

}