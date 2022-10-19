<template>
  <div class="news-item">
    <span class="text">{{ value.text }}</span>
    <a
      v-if="value.url"
      class="go-link"
      :href="value.url"
      target="_blank"
      rel="noopener noreferrer"
      title="Open news link"
      v-text="'>'"
    />
    <span class="date">{{ value.date }}</span>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
.news-item {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr;
  grid-auto-columns: auto;
  align-items: center;
  position: relative;
}

.news-item .text {
  user-select: none;
  font-size: 14px;
  font-weight: bold;
}

.news-item .date {
  color: #0008;
  user-select: none;
  font-size: 16px;
  position: absolute;
  left: 10px;
  bottom: 0;
}

.news-item .go-link {
  --arrow-slant: 30deg;
  --arrow-hightness: 12px;
  --arrow-thiccness: 4px;
  --gap-offset: 3px;
  border-left: 1px solid #0002;
  display: inline-grid;
  width: 32px;
  height: 100%;
  place-content: center;
  text-decoration: none;
  position: relative;
  padding: 0;
  justify-self: start;
  user-select: none;
  color: #0008;
}

.news-item .go-link:hover {
  background: #0001;
}
.news-item .go-link:active {
  background: #0002;
  color: #fff;
}
</style>