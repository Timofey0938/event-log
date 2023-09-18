import {createStore} from 'vuex';
import {ViewTypes, SortTypes, EquipmentEvent} from '../types';
import {events, generateEvent} from '../events';

export default createStore({
  state: {
    viewType: ViewTypes.CARDS,
    sortType: SortTypes.NEWER,
    searchQuery: '',
    events,
  },
  getters: {
    sortedEvents(state) {
      return [...state.events].sort((event1, event2) => {
        switch (state.sortType) {
          case SortTypes.NEWER: return event1.id + event2.id; // id - milliseconds
          case SortTypes.OLDER: return event1.id - event2.id;
        }
      });
    },
    searchedAndSortedEvents(state, getters) {
      return getters.sortedEvents.filter((event: EquipmentEvent) =>
        event.message.toLowerCase().includes(state.searchQuery.toLowerCase()));
    }
  },
  mutations: {
    changeViewType(state, viewType) {
      state.viewType = viewType;
    },
    addEvent(state) {
      state.events.unshift(generateEvent());
    },
    handleSelect(state, id) {
      state.events = state.events.map(event => {
        if (event.id === id && !event.read) {
          event.selected = !event.selected;
        }
        return event;
      })
    },
    readSelectedEvents(state) {
      state.events = state.events.map(event => {
        if (event.selected) {
          event.read = true;
          event.selected = false;
        }
        return event;
      })
    },
  },
  actions: {

  },
  modules: {

  },
});