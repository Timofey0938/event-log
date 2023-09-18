<template>
  <DataTable :value="$store.getters.searchedAndSortedEvents" paginator :rows="5">
    <Column v-for="col of columns" :key="col.header" :field="col.field" :header="col.header"></Column> 
  </DataTable>
</template>

<script lang="ts">
import {eventLabels} from '../events';

export default {
  data: function() {
    return {
      columns: this.$store.state.events.length !== 0
        ? Object.keys(this.$store.state.events[0]).map(key => {
          return {
            field: key,
            header: eventLabels[key],
          };
        }) : [],
    };
  },
};
</script>
