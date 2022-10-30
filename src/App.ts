import { Options, Vue } from 'vue-class-component';
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import Flicking, { EVENTS } from '@egjs/flicking';
import { ChangedEvent } from '@egjs/flicking/declaration/type/event';
import screenshotsData from "@/assets/data/ScreenshotsData";
import songsData from "@/assets/data/SongsData";

@Options({
    components: {
        TheHeader,
        TheFooter,
    },
})
export default class App extends Vue {

    private screenshotsSliderData = screenshotsData;
    private songsSliderData = songsData;

    private ScreenshotsSlider!: any;

    private currentIndexSlider: number = 0;

    public mounted() {
        new Flicking('.songs__slider', {
            align: 'prev',
            bound: true,
        })

        this.ScreenshotsSlider =  new Flicking('.screenshots__slider', {
            align: 'prev',
            circular: true,
        })

        this.ScreenshotsSlider.on(EVENTS.CHANGED, (e: ChangedEvent) => {
            this.currentIndexSlider = e.index;
        })

    }

    public get imageUrl() {
        return this.screenshotsSliderData[this.currentIndexSlider].url;
    }

    public scrollTop() {
        window.scrollTo({top: 0, left: 0, behavior: "smooth"})
    }
}