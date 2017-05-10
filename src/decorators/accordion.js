import React from 'react';

export default (OriginalComponent) => class decoratedComponent extends React.Component {
  state = {
    openArticleId: null
  }
  render() {
    return <OriginalComponent {...this.props} {...this.state} toggleOpen={this.toggleArticle} />
  }
  toggleArticle = id => ev => {
    this.setState({
      openArticleId: id === this.state.openArticleId ? null : id
    })
  }
}