import React from 'react'
import Remarkable from 'remarkable'

const Comment = React.createClass({
  rawMarkup: function() {
    const md = new Remarkable();
    const rawMarkup = md.render(this.props.children.toString());
    return { __html: rawMarkup };
  },
  render: function() {
    return(
      <div className="comment">
        <h4 className="comment-author">
          {this.props.author}
        </h4>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    )
  }
})

const CommentsList = React.createClass({
  render: function() {
    const commentNodes = this.props.data.map((comment, id) => {
      return (
        <Comment author={comment.author} key={id}>
          {comment.text}
        </Comment>
      )
    })
    return(
      <div className="comments-list">
        {commentNodes}
      </div>
    )
  }
})

const CommentsForm = React.createClass({
  render: () => {
    return(
      <form className="commentForm" action="/comments" method="post">
        <input type="text" placeholder="Your name" name="author"/>
        <input type="text" placeholder="Say something..." name="text" />
        <input type="submit" value="Post" />
      </form>
    )
  }
})

const CommentsComponent = React.createClass({
  render: function() {
    return(
      <div className="comments">
        <CommentsList data={this.props.data} />
        <CommentsForm />
      </div>
    )
  }
})

module.exports = CommentsComponent
