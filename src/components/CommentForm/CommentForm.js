import React from 'react';
import './style.css';

class CommentForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      nameValid: true,
      text: '',
      //держи минимальный стейт. Эти поля ты можешь определить из предыдущих прямо в render()
      textValid: true
    }
  }
  handleNameChange = e => {
    if (e.target.value.length > 20) return;
    if (e.target.value.length < 5) {
      this.setState({
        nameValid: false
      })
    } else {
      this.setState({
        nameValid: true
      })
    }
    this.setState({
      name: e.target.value
    })
  };
  handleTextChange = e => {
    if (e.target.value.length > 20) return;
    if (e.target.value.length < 5) {
      this.setState({
        textValid: false
      })
    } else {
      this.setState({
        textValid: true
      })
    }
    this.setState({
      text: e.target.value
    })
  };
  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    const nameClass = this.state.nameValid ? '' : 'error';
    const textClass = this.state.textValid ? '' : 'error';
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
