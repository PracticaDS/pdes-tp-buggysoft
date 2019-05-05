import actions from './actions';
import { getRows } from './helpers/rows-helper';

export const ROWS = 12;
export const COLUMNS = 12;

const {
  place, select, remove, move, rotate,
} = actions;

export const state = {
  earnings: 1000,
  tickDelay: 1000,
  running: true,
  currentMachine: {},
  action: 'place',
  actionOriginCell: null,
  cellActions: {
    place,
    remove,
    move,
    rotate,
    select,
  },
  machines: [
    {
      name: 'Starter',
      cost: 100,
      speed: 1,
      icon: 'in.png',
      orientation: 'up',
      tick: () => {
        console.log('Tick Starter');
      },
    },
    {
      name: 'Seller',
      cost: 75,
      speed: 1,
      icon: 'seller.png',
      orientation: 'up',
      tick: () => {
        console.log('Tick Seller');
      },
    },
    {
      name: 'Crafter',
      cost: 200,
      speed: 1,
      icon: 'crafter.png',
      orientation: 'up',
      tick: () => {
        console.log('Tick Crafter');
      },
    },
    {
      name: 'Transporter',
      cost: 100,
      speed: 1,
      icon: 'transporter.png',
      orientation: 'down',
      tick: () => {
        console.log('Tick Transporter');
      },
    },
    {
      name: 'Furnace',
      cost: 100,
      speed: 1,
      icon: 'furnace.png',
      orientation: 'up',
      tick: () => {
        console.log('Tick Furnace');
      },
    },
  ],
  rows: getRows(ROWS, COLUMNS),
};
