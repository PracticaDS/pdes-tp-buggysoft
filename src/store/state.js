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

export const materialProfits = [
  { material: constants.copper, profit: 2 },
  { material: constants.iron, profit: 1 },
  { material: constants.gold, profit: 5 },
  { material: constants.carbon, profit: 3 },
  { material: constants.aluminum, profit: 2 },
  { material: constants.circuit, profit: 30 },
  { material: constants.copperWire, profit: 10 },
  { material: constants.gear, profit: 20 },
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
  materialProfits,
  rows: getRows(ROWS, COLUMNS),
  resources: getResources(ROWS, COLUMNS),
  resourcesToCommit: getResources(ROWS, COLUMNS),
  debug: true,
};
