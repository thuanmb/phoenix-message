import { schema } from 'normalizr';

export const widget = new schema.Entity('widget');

export const ADD_WIDGET = 'ADD_WIDGET';
export const UPDATE_WIDGET = 'UPDATE_WIDGET';

export const REQUEST_CREATE_SHARED_MESSAGE = 'REQUEST_CREATE_SHARED_MESSAGE';
export const RECEIVE_CREATE_SHARED_MESSAGE = 'RECEIVE_CREATE_SHARED_MESSAGE';
