export enum ViewTypes {
  CARDS = 'Карточки',
  TABLE = 'Таблица',
};

export enum SortTypes {
  NEWER = 'Сначала новые',
  OLDER = 'Сначала старые',
};

export type Importance = 'Критическая' | 'Высокая' | 'Средняя' | 'Низкая';
export type Equipment = 'Меркурий' | 'Венера' | 'Марс' | 'Юпитер';
export type InCharge = 'Цветков А. А.' | 'Капустин Н. Н.' | 'Пчелкин Н. Е.';

export interface EquipmentEvent {
  id: number,
  datetime:  string,
  importance: Importance,
  equipment: Equipment,
  message: string,
  inCharge: InCharge,
  selected: boolean,
  read: boolean,
};