<template>
  <div class="card-list" ref="cardList">
    <card
      v-for="equipmentEvent in $store.getters.searchedAndSortedEvents.slice(first, first + rows * columns)"
      :key="equipmentEvent.id"
      :equipment-event="equipmentEvent"
      :cardWidth="cardWidth"
    />
  </div>
  <Paginator
    :first="first" :rows="rows * columns"
    :totalRecords="$store.getters.searchedAndSortedEvents.length"
    @page="changePage"
  />
</template>

<script lang="ts">
import {PageState} from 'primevue/paginator';
import Card from './Card.vue';

export default {
  components: {
    Card,
  },
  data() {
    return {
      first: 0,
      rows: 2,
      columns: 2,
      cardWidth: '400px',
    };
  },
  methods: {
    changePage: function (pageState: PageState) {
      this.first = pageState.first;
    },
    handleResize: function () {
      const width = (this.$refs.cardList as any).clientWidth;
      console.log('width', width);
      if (width > 650) {
        this.columns = 2;
        this.cardWidth = Math.floor((width - 40) / 2) + 'px';
      } else {
        this.columns = 1;
        this.cardWidth = width + 'px';
      }
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>

<style scoped>
.card-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 30px 0 10px;
}
</style>
