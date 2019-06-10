import actions from './actions';
import constants from '../constants';
import { getRows, getResources } from './helpers/rows-helper';
import { createMachine } from '@/models/Machine';

export const { ROWS, COLUMNS } = constants;

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
  { material: constants.copper.material, profit: 2 },
  { material: constants.iron.material, profit: 1 },
  { material: constants.gold.material, profit: 5 },
  { material: constants.carbon.material, profit: 3 },
  { material: constants.aluminum.material, profit: 2 },
  { material: constants.circuit.material, profit: 30 },
  { material: constants.processingUnit.material, profit: 100 },
  { material: constants.robot.material, profit: 500 },
  { material: constants.copperWire.material, profit: 10 },
  { material: constants.gear.material, profit: 20 },
  { material: constants.processed_gold.material, profit: 7 },
  { material: constants.processed_iron.material, profit: 3 },
  { material: constants.processed_copper.material, profit: 4 },
  { material: constants.processed_carbon.material, profit: 5 },
  { material: constants.processed_aluminum.material, profit: 4 },
];

const blueprints = [
  {
    name: constants.circuit.name,
    craftedResource: [{ material: constants.circuit.material, quantity: 1 }],
    profit: materialProfits.find(element => element.material === constants.circuit.material).profit,
    resources: [
      {
        material: constants.copper.material,
        quantity: 2,
        materialName: constants.copper.name,
      },
      {
        material: constants.gold.material,
        quantity: 1,
        materialName: constants.gold.name,
      },
    ],
  },
  {
    name: constants.copperWire.name,
    craftedResource: [{ material: constants.copperWire.material, quantity: 1 }],
    profit: materialProfits.find(elem => elem.material === constants.copperWire.material).profit,
    resources: [
      {
        material: constants.copper.material,
        quantity: 2,
        materialName: constants.copper.name,
      },
    ],
  },
  {
    name: constants.gear.name,
    craftedResource: [{ material: constants.gear.material, quantity: 1 }],
    profit: materialProfits.find(element => element.material === constants.gear.material).profit,
    resources: [
      {
        material: constants.iron.material,
        quantity: 1,
        materialName: constants.iron.name,
      },
    ],
  },
  {
    name: constants.processingUnit.name,
    craftedResource: [{ material: constants.processingUnit.material, quantity: 1 }],
    profit: materialProfits.find(el => el.material === constants.processingUnit.material).profit,
    resources: [
      {
        material: constants.circuit.material,
        quantity: 2,
        materialName: constants.circuit.name,
      },
      {
        material: constants.processed_gold.material,
        quantity: 1,
        materialName: constants.processed_gold.name,
      },
    ],
  },
  {
    name: constants.robot.name,
    craftedResource: [{ material: constants.robot.material, quantity: 1 }],
    profit: materialProfits.find(element => element.material === constants.robot.material).profit,
    resources: [
      {
        material: constants.processed_iron.material,
        quantity: 5,
        materialName: constants.processed_iron.name,
      },
      {
        material: constants.processingUnit.material,
        quantity: 5,
        materialName: constants.processingUnit.name,
      },
      {
        material: constants.gear.material,
        quantity: 5,
        materialName: constants.gear.name,
      },
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
  currentUser: null,
  factoryList: [],
};
