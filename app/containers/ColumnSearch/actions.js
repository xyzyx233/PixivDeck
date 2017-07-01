// @flow
import type { Action } from './actionTypes.js'
import {
  ADD_COLUMN,
  ADD_COLUMN_SUCCESS,
  FETCH,
  FETCH_FAILRE,
  FETCH_NEXT,
  FETCH_NEXT_FAILRE,
  SET_NEXT_URL,
  FETCH_SUCCESS,
  FETCH_NEXT_SUCCESS,
  SET_MIN_BOOKBOOK,
} from './constants'
import type { Response } from 'services/api'
import type { ColumnId } from './reducer'

export function addColumn(id: ColumnId): Action {
  return {
    type: ADD_COLUMN,
    id,
  }
}

export function addColumnSuccess(id: ColumnId): Action {
  return {
    type: ADD_COLUMN_SUCCESS,
    id,
  }
}

export function fetch(id: ColumnId): Action {
  return {
    type: FETCH,
    id,
  }
}

export function fetchFailre(id: ColumnId): Action {
  return {
    type: FETCH_FAILRE,
    id,
  }
}

export function fetchNext(id: ColumnId): Action {
  return {
    type: FETCH_NEXT,
    id,
  }
}

export function fetchNextFailre(id: ColumnId): Action {
  return {
    type: FETCH_NEXT_FAILRE,
    id,
  }
}

export function setNextUrl(id: ColumnId, nextUrl: string): Action {
  return {
    type: SET_NEXT_URL,
    id,
    nextUrl,
  }
}

export function fetchSuccess(
  id: ColumnId,
  response: Response,
  ids: Array<string>
): Action {
  return {
    type: FETCH_SUCCESS,
    id,
    response,
    ids,
  }
}

export function fetchNextSuccess(
  id: ColumnId,
  response: Response,
  ids: Array<string>
): Action {
  return {
    type: FETCH_NEXT_SUCCESS,
    id,
    response,
    ids,
  }
}

export function setMinBookbook(id: ColumnId, minBookmarks: number): Action {
  return {
    type: SET_MIN_BOOKBOOK,
    id,
    minBookmarks,
  }
}