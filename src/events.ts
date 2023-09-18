import moment from 'moment';
import {Equipment, EquipmentEvent, Importance, InCharge} from './types';

export const eventLabels: Record<string, string> = {
  datetime: 'Дата и время',
  importance: 'Важность',
  equipment: 'Оборудование',
  message: 'Сообщение',
  inCharge: 'Ответственный',
};

const importanceOptions: Importance[] = ['Критическая', 'Высокая', 'Средняя', 'Низкая'];
const equipmentOptions: Equipment[] = ['Меркурий', 'Венера', 'Марс', 'Юпитер'];
const messageOptions: string[] = [
  'Повышена температура',
  'Понижена температура',
  'Открыт люк',
  'Не работает вентилятор',
  'Задержка запуска',
];
const inChargeOptions: InCharge[] = ['Цветков А. А.', 'Капустин Н. Н.', 'Пчелкин Н. Е.'];

export const generateEvent = () => {
  const randomNumbers = Array.from(String(Math.random()).slice(2, 6)).map(c => Number(c));

  const event: EquipmentEvent = {
    id: Date.now(),
    datetime: moment(Date.now()).format('DD.MM.YY, hh:mm:ss'),
    importance: importanceOptions[randomNumbers[0] % importanceOptions.length],
    equipment: equipmentOptions[randomNumbers[0] % equipmentOptions.length],
    message: messageOptions[randomNumbers[0] % messageOptions.length],
    inCharge: inChargeOptions[randomNumbers[0] % inChargeOptions.length],
    selected: false,
    read: false,
  };

  Object.defineProperty(event, 'id', {
    enumerable: false,
  });

  Object.defineProperty(event, 'selected', {
    enumerable: false,
  });

  Object.defineProperty(event, 'read', {
    enumerable: false,
  });

  return event;
};

export const events: EquipmentEvent[] = [generateEvent()];
