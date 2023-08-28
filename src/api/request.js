import { ajax } from 'rxjs/ajax';

export const initApi$ = ajax({
  method: 'get',
  url: 'http://localhost:3000/init',
})

export const addApi$ = ajax({
  method: 'get',
  url: 'http://localhost:3000/add',
})

export const decApi$ = ajax({
  method: 'get',
  url: 'http://localhost:3000/dec',
})