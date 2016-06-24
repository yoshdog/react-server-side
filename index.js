import Express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

const app = Express()
const port = 3000

app.get("/", (req, res) => {
  const element = <div>Hello</div>
  res.send(ReactDOMServer.renderToString(element))
})

app.listen(port, () => {
  console.log(`Serving on ${port}`)
})
