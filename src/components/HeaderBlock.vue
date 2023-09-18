<template>
  <header>
    <SelectButton
      class="select-button"
      v-model="$store.state.viewType"
      :options="viewTypeOptions"
      aria-labelledby="basic"
    />
    <div class="actions">
      <Dropdown
        class="sort"
        v-model="$store.state.sortType"
        :options="sortTypeOptions"
      />
      <InputText
        class="search"
        v-model="$store.state.searchQuery"
        placeholder="Поиск"
      />
    </div>
  </header>
</template>

<script lang="ts">
import {ViewTypes, SortTypes} from '../types';

export default {
  data() {
    return {
      viewTypeOptions: Object.values(ViewTypes),
      sortTypeOptions: Object.values(SortTypes),
    };
  },
};
</script>

<style scoped>
header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 30px 20px 30px;

  .select-button {
    margin-top: 20px;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;

    .sort {
      margin: 20px 10px 0 0;
    }

    .search {
      margin-top: 20px;
    }
  }
}
</style>
