<template>
  <div class="news-ticker">
    <div class="ticker-display">
      <div class="news-label">NEWS</div>
      <NewsTickerItem v-if = currentNewsItem :key="currentNewsItem.id" :value="currentNewsItem" />
    </div>
    <div class="all-news-popup">
      <transition-group>
        <NewsTickerItem
          v-for="item in NewsPosts"
          :key="item.id"
          :value="item"
        />
      </transition-group>
    </div>
  </div>
</template>

<script>
import NewsTickerItem from "./NewsTickerItem";
import { clearInterval } from "timers";
import firebaseApp from "../../firebase";
import { getFirestore } from "firebase/firestore";
import { query, collection, getDocs } from "firebase/firestore"

const db = getFirestore(firebaseApp);
//let id = 1;
export default {
  components: {
    NewsTickerItem,
  },
  /**data() {
    return {
      currentNewsIndex: 0,
      intervalId: null,
      allNewsItems: [
        {
          id: id++,
          text: "Men With Higher IQ More Likely to Bet on Horse Racing",
          date: "13/10/2022",
          url: "https://neurosciencenews.com/iq-horse-betting-21631/",
        },
        {
          id: id++,
          text: "MRT station will affect heritage of former Bukit Timah Turf Club but area's value can be retained: Report",
          date: "14/10/2022",
          url: "https://www.straitstimes.com/singapore/transport/mrt-station-will-affect-heritage-of-former-bukit-timah-turf-club-but-areas-value-can-be-retained-report",
        },
        {
          id: id++,
          text: "Singapore Turf Club to reopen to live spectators for the first time in 2 years",
          date: "25/4/2022",
          url: "https://www.channelnewsasia.com/singapore/singapore-turf-club-reopen-live-horse-racing-spectators-covid-19-2645301",
        },
        {
          id: id++,
          text: "Horse racing: Sumomomomomomomomo, the horse 'that makes race commentators cry' earns maiden win in Japan",
          date: "2/11/2021",
          url: "https://www.straitstimes.com/sport/horse-racing-sumomomomomomomomo-the-horse-that-makes-race-commentators-cry-earns-maiden-win-in",
        },
      ],
    };
  },**/

  data() {
    return {
      currentNewsIndex: 0,
      intervalId: null,
      NewsPosts: []
    }
  }, 
  created() {
    this.getNewsPosts()
  },
  methods: {
    async getNewsPosts() {
      const querySnap = await getDocs(query(collection(db, 'NewsPosts')));
      querySnap.forEach((doc) => {
        this.NewsPosts.push(doc.data())
      })
    },
    startTickerTimer() {
      this.stopTickerTimer();
      this.intervalId = setInterval(this.timerTick, 10000);
    },
    stopTickerTimer() {
      if (this.intervalId) clearInterval(this.intervalId);
      this.intervalId = null;
    },
    timerTick() {
      this.currentNewsIndex =
        (this.currentNewsIndex + 1) % this.NewsPosts.length;
    },
  },
  
  computed: {
    currentNewsItem() {
      return this.NewsPosts[this.currentNewsIndex];
    },
  },
  mounted() {
    this.currentNewsIndex = 0;
    this.startTickerTimer();
  },

  /**methods: {
    startTickerTimer() {
      this.stopTickerTimer();
      this.intervalId = setInterval(this.timerTick, 10000);
    },
    stopTickerTimer() {
      if (this.intervalId) clearInterval(this.intervalId);
      this.intervalId = null;
    },
    timerTick() {
      this.currentNewsIndex =
        (this.currentNewsIndex + 1) % this.allNewsItems.length;
    },
  },**/
};
</script>

<style>
.news-ticker {
  background: #ccc2;
  padding: 5px 5px;
}
.news-label {
  writing-mode: horizontal-tb;
  text-orientation: upright;
  user-select: none;
  font-weight: bold;
  border-right: 1px solid #0002;
  padding-right: 15px;
  padding-left: 5px;
}
.ticker-display {
  display: grid;
  grid-template-columns: auto 1fr;
}
.all-news-popup {
  display: none;
}
</style>
