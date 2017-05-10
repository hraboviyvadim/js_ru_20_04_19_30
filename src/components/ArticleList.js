import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import accordion from '../decorators/accordion'

class ArticleList extends Component {
    render() {
        const {openArticleId, toggleOpen} = this.props;
        const elements = this.props.articles.map(article => <li key={article.id}>
            <Article article={article}
                     isOpen={article.id === openArticleId}
                     toggleOpen={toggleOpen(article.id)}/>
        </li>)
        return (
            <ul>
                {elements}
            </ul>
        )
    }
}

ArticleList.propTypes = {
    articles: PropTypes.arrayOf(PropTypes.object)
}
export default accordion(ArticleList);