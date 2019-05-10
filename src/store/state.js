import actions from './actions';
import { getRows } from './helpers/rows-helper';
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
  rows: getRows(ROWS, COLUMNS),
  rowsToCommit: getRows(ROWS, COLUMNS),
};
