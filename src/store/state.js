import actions from './actions';
import constants from '../constants';
import { getRows, getResources } from './helpers/rows-helper';
import { createMachine } from '@/models/Machine';

export const ROWS = 12;
export const COLUMNS = 12;

const {
  place, select, remove, move, rotate,
} = actions;

const machines = [
  createMachine({ name: 'Starter' }),
  createMachine({ name: 'Seller' }),
  createMachine({ name: 'Crafter' }),
  createMachine({ name: 'Transporter' }),
  createMachine({ name: 'Furnace' }),
];

const blueprints = [
  {
    name: 'Circuito',
    cost: 10,
    profit: 20,
    resources: [{ material: constants.copper, quantity: 2 },
      { material: constants.gold, quantity: 1 }],
  },
  {
    name: 'Cable de Cobre',
    cost: 10,
    profit: 20,
    resources: [{ material: constants.copper, quantity: 2 }],
  },
  {
    name: 'Engranaje',
    cost: 10,
    profit: 20,
    resources: [{ material: constants.iron, quantity: 1 }],
  },
];

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
  machines,
  blueprints,
  rows: getRows(ROWS, COLUMNS),
  resources: getResources(ROWS, COLUMNS),
  resourcesToCommit: getResources(ROWS, COLUMNS),
};
