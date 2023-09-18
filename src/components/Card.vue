<template>
  <Card
    class="card"
    :class="{
      'unread': !equipmentEvent.read,
      'selected': equipmentEvent.selected,
    }"
    @click="$store.commit('handleSelect', equipmentEvent.id)"
  >
    <template #content>
      <table class="content">
        <tr v-for="key in Object.keys(equipmentEvent)" :key="key">
          <td class="key">{{ eventLabels[key] }}:</td>
          <td class="value">{{ equipmentEvent[key as keyof EquipmentEvent] }}</td>
        </tr>
      </table>
    </template>
  </Card>
</template>

<script lang="ts">
import {PropType} from 'vue';
import {EquipmentEvent} from '../types';
import {eventLabels} from '../events';

export default {
  props: {
    equipmentEvent: {
      type: Object as PropType<EquipmentEvent>,
      required: true,
    },
    cardWidth: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      eventLabels,
    };
  },
};
</script>

<style scoped>
.card {
  min-width: v-bind('cardWidth');
  margin: 0 0 20px 20px;
  padding: 0;
  border: 2px solid white;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #dedee7;
  }

  .content {
    margin: -20px 0;

    .key {
      padding-right: 20px;
    }
  }
}

.unread {
  background-color: #dedee7;

  &:hover {
    background-color: #d0d0e2;
  }
}

.selected {
  background-color: #d0d0e2;
  border: 2px solid #6366F2;
}
</style>
