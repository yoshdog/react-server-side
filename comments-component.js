import React from 'react'
import Remarkable from 'remarkable'

class Comment extends React.Component {
  rawMarkup() {
    const md = new Remarkable();
    const rawMarkup = md.render(this.props.children.toString());
    return { __html: rawMarkup };
  }

  render() {
    return(
      <div className="comment">
        <h4 className="comment-author">
          {this.props.author}
        </h4>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    )
  }
}

class CommentsList extends React.Component {
  render() {
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
}

class CommentsForm extends React.Component {
  render() {
    return(
      <form className="commentForm" action="/comments" method="post">
        <input type="text" placeholder="Your name" name="author"/>
        <input type="text" placeholder="Say something..." name="text" />
        <input type="submit" value="Post" />
      </form>
    )
  }
}

class CommentsComponent extends React.Component {
  render() {
    return(
      <div className="comments">
        <CommentsList data={this.props.data} />
        <CommentsForm />
      </div>
    )
  }
}

module.exports = CommentsComponent
