import React from 'react';

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
        const commentsList = comments.map(comment => {
            return (
                <li key={comment.id} className="comment">
                    <div className="comment__user">{comment.user}</div>
                    <div className="comment__text">{comment.text}</div>
                </li>
            )
        });
        return this.state.isComments && commentsList;
    };

    render() {
        return (
            <div className="comments">
                <div className="comments__topper">
                    <button onClick={this.toggleComments} type="button">
                        {this.state.isComments ? 'Close comments' : 'Open comments'}
                    </button>
                </div>
                {this.getCommentsList()}
            </div>
          );
    }
}

export default Comments;
