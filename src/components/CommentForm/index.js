import React from 'react';
import './style.css';

class CommentForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      text: ''
    }
  }
  handleNameChange = e => {
    if (e.target.value.length > 20) return;
    this.setState({
      name: e.target.value
    })
  };
  handleTextChange = e => {
    if (e.target.value.length > 20) return;
    this.setState({
      text: e.target.value
    })
  };
  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    const name = this.state.name;
    const text = this.state.text;
    const nameClass = name.length >= 5 || name.length === 0 ? '' : 'error';
    const textClass = text.length >= 5 || text.length === 0 ? '' : 'error';
    return (
      <form action="#" className="comment-form" onSubmit={this.handleSubmit}>
        <p>Add you own comment:</p>
        <p>Your name: <input className={nameClass} type="text" value={this.state.name} onChange={this.handleNameChange} /></p>
        <p>Your message: <textarea className={textClass} value={this.state.text} onChange={this.handleTextChange}></textarea></p>
        <button type="submit">Submit</button>
      </form>
    )
  }
}
export default CommentForm;
