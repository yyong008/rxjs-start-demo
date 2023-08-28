import { fromEvent, switchMap, catchError } from 'rxjs'
import { addApi$, decApi$, initApi$ } from './api/request'


export function handle() {
  const resultDiv = document.getElementById('result');
  
  const setResultDivContent = (response) => {
    if(response && response.code === 0) {
      resultDiv.textContent = response.data
    } else {
      alert("更新数据失败")
    }
    
  }

  initApi$.subscribe({
    next: (response) => {
      setResultDivContent(response?.response)
    },
    error: () => { },
    complete: () => {
      console.log("completed!")
    }
  })

  const addClick$ = fromEvent(document.querySelector('#add'), 'click')

  addClick$.pipe(
    switchMap(() => addApi$),
    catchError(error => {
      console.error('An error occurred:', error);
      return [];
    })
  ).subscribe({
    next: (response) => {
      setResultDivContent(response?.response)
    },
    error: () => { },
    complete: () => {
      console.log("completed!")
    }
  })

  const decClick$ = fromEvent(document.querySelector('#dec'), 'click')

  decClick$.pipe(
    switchMap(() => decApi$),
    catchError(error => {
      console.error('An error occurred:', error);
      return [];
    })
  ).subscribe({
    next: (response) => {
      setResultDivContent(response?.response)
    },
    error: () => { },
    complete: () => {
      console.log("completed!")
    }
  })
}

