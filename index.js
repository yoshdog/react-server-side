import Express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import BodyParser from 'body-parser'
import CommentsComponent from './comments-component'

const app = Express()
app.use(BodyParser.urlencoded({ extended: false }))

const port = 3000

var comments = []

app.get("/", (req, res) => {
  const element = <CommentsComponent data={comments} />
  res.send(ReactDOMServer.renderToString(element))
})

app.post("/comments", (req, res) => {
  const body = req.body
  comments.push({author: body.author, text: body.text})

  const element = <CommentsComponent data={comments} />
  res.send(ReactDOMServer.renderToString(element))
})

app.listen(port, () => {
  console.log(`Serving on ${port}`)
})
