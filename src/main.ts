import {createApp} from 'vue';
import PrimeVue from 'primevue/config';
import App from './App.vue';
import store from './store';
import SelectButton from 'primevue/selectbutton';
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';
import Card from 'primevue/card';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Paginator from 'primevue/paginator';

import 'primevue/resources/themes/lara-light-indigo/theme.css';
import 'vue-resize/dist/vue-resize.css'
import './style.css';

const app = createApp(App);
app.use(store);
app.use(PrimeVue);
app.component('SelectButton', SelectButton);
app.component('Dropdown', Dropdown);
app.component('InputText', InputText);
app.component('Card', Card);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('Paginator', Paginator);
app.mount('#app');
