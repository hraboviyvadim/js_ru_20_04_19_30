import React  from 'react'
import PropTypes from 'prop-types'

function Comment({comment}) {
    return (
        <div>
            <p>{comment.text} <b>by {comment.user}</b></p>
        </div>
    )
}
Comment.propTypes = {
  comment: PropTypes.object.isRequired
}

export default Comment