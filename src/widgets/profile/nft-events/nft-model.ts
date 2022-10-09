import { createEffect, createStore, sample } from 'effector';
import { getUsual } from 'src/shared/api/market';
import { createGate } from 'effector-react';
import { ProductType } from 'src/shared/types';


