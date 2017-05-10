import React from 'react';
import Comment from './Comment';

class Comments extends React.Component {
    constructor() {
        super();
        this.state = {
          isComments: false
        };
    }

    toggleComments = () => {
        this.setState({
            isComments: !this.state.isComments
        })
    };

    getCommentsList = () => {
        const {comments = []} = this.props;
        return comments.map(comment => {
            //в идеале Comment тоже в отдельный компонент вынести
            return (
                <li key={comment.id} className="comment">
                    <Comment comment={comment}/>
                </li>
            )
        });
    };

    render() {
        const comments = this.getCommentsList();
        if(comments.length) {
          return (
              <div className="comments">
                  <div className="comments__topper">
                      <button onClick={this.toggleComments} type="button">
                        {this.state.isComments ? 'Close comments' : 'Open comments'}
                      </button>
                  </div>
                {this.state.isComments ? this.getCommentsList() : null}
              </div>
            );
        } else {
            return <p>No comments yet.</p>;
        }

    }
}

export default Comments;
