<template>
  <div class="app">
    <header-block />
    <event-card-list v-if="$store.state.viewType === ViewTypes.CARDS" />
    <event-table v-if="$store.state.viewType === ViewTypes.TABLE" />
  </div>
</template>

<script lang="ts">
import HeaderBlock from './components/HeaderBlock.vue';
import EventCardList from './components/EventCardList.vue';
import EventTable from './components/EventTable.vue';
import {ViewTypes} from './types';

export default {
  components: {
    HeaderBlock, EventCardList, EventTable,
  },
  data() {
    return {
      ViewTypes,
      interval: 0,
    };
  },
  methods: {
    handleKeyDown(event: KeyboardEvent) {
      if (event.code === 'Space') {
        this.$store.commit('readSelectedEvents');
      }
    },
  },
  mounted() {
    const self = this;   
    this.interval = setInterval(() => {
      self.$store.commit('addEvent');
    }, 3000);
    document.addEventListener('keydown', event => this.handleKeyDown(event));
  },
  unmounted() {
    clearInterval(this.interval);
    document.removeEventListener('keydown', event => this.handleKeyDown(event));
  }
};
</script>
