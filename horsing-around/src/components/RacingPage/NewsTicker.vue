<template>
  <div class="news-ticker">
    <div class="ticker-display">
      <div class="news-label">NEWS</div>
      <NewsTickerItem
        v-if="currentNewsItem"
        :key="currentNewsItem.id"
        :value="currentNewsItem"
      />
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
import { query, collection, getDocs } from "firebase/firestore";

const db = getFirestore(firebaseApp);

export default {
  components: {
    NewsTickerItem,
  },

  data() {
    return {
      currentNewsIndex: 0,
      intervalId: null,
      NewsPosts: [],
    };
  },
  created() {
    this.getNewsPosts();
  },
  methods: {
    async getNewsPosts() {
      const querySnap = await getDocs(query(collection(db, "NewsPosts")));
      querySnap.forEach((doc) => {
        this.NewsPosts.push(doc.data());
      });
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
};
</script>

<style>
.news-ticker {
  background: rgba(160, 12, 245, 0.133);
  padding: 5px 5px;
  margin-left: 30px;
  width: 95%
}
.news-label {
  writing-mode: horizontal-tb;
  text-orientation: upright;
  user-select: none;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  border-right: 1px solid #0005;
  padding-right: 10px;
  padding-left: 10px;
}
.ticker-display {
  display: grid;
  grid-template-columns: auto 1fr;
}
.all-news-popup {
  display: none;
}
</style>
