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
  { material: constants.processingUnit, profit: 100 },
  { material: constants.robot, profit: 500 },
  { material: constants.copperWire, profit: 10 },
  { material: constants.gear, profit: 20 },
  { material: constants.processed_gold, profit: 7 },
  { material: constants.processed_iron, profit: 3 },
  { material: constants.processed_copper, profit: 4 },
  { material: constants.processed_carbon, profit: 5 },
  { material: constants.processed_aluminum, profit: 4 },
];

const blueprints = [
  {
    name: 'Circuito',
    craftedResource: [{ material: constants.circuit, quantity: 1 }],
    resources: [{ material: constants.copper, quantity: 2 },
      { material: constants.gold, quantity: 1 }],
  },
  {
    name: 'Cable de Cobre',
    craftedResource: [{ material: constants.copperWire, quantity: 1 }],
    resources: [{ material: constants.copper, quantity: 2 }],
  },
  {
    name: 'Engranaje',
    craftedResource: [{ material: constants.gear, quantity: 1 }],
    resources: [{ material: constants.iron, quantity: 1 }],
  },
  {
    name: 'Unidad de procesamiento',
    craftedResource: [{ material: constants.processingUnit, quantity: 1 }],
    resources: [{ material: constants.circuit, quantity: 2 },
      { material: constants.processed_gold, quantity: 1 }],
  },
  {
    name: 'Robot',
    craftedResource: [{ material: constants.robot, quantity: 1 }],
    resources: [
      { material: constants.processed_iron, quantity: 5 },
      { material: constants.processed_aluminum, quantity: 5 },
      { material: constants.processingUnit, quantity: 1 },
      { material: constants.gear, quantity: 5 },
      { material: constants.copperWire, quantity: 5 },
    ],
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
