import { Options, Vue } from 'vue-class-component';
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import Flicking from '@egjs/flicking';
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

    public mounted() {
        new Flicking('.songs__slider', {
            align: 'prev',
            bound: true,
        })

        new Flicking('.screenshots__slider', {
            align: 'prev',
            bound: true,
        })
    }
}