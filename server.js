import express from 'express'
import cors from 'cors'
import { from } from 'rxjs'

const app = express();

let state = 0;

app.use(cors())

function op(action, timeout = 300, n = 1) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(action === 'add') {
        state += n
        resolve(state)
      } else if (action === 'dec') {
        state -= n
        resolve(state)
      } else {
        resolve(state)
      }
      
    }, timeout)
  })
}

app.get('/init', (req, res) => {
  const subscription = from(op('', 50, 1)).subscribe({
    next: (v) => {
      res.json({
        code: 0,
        message: 'success',
        data: `${v}`
      });
    }
  })

  res.on('close', () => {
    subscription?.unsubscribe()
  })
})

app.get('/add', (req, res) => {
  const subscription = from(op('add', 50, 1)).subscribe({
    next: (v) => {
      res.json({
        code: 0,
        message: 'success',
        data: `${v}`
      });
    }
  })

  res.on('close', () => {
    subscription?.unsubscribe()
  })
})

app.get('/dec', (req, res) => {
  const subscription = from(op('dec', 50, 1)).subscribe({
    next: (v) => {
      res.json({
        code: 0,
        message: 'success',
        data: `${v}`
      });
    }
  })

  res.on('close', () => {
    subscription?.unsubscribe()
  })
})

app.listen(3000, () => {
  console.log('port: http://localhost:3000')
})
