import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import Article from './Article/index'
import PropTypes from 'prop-types'
import accordion from '../decorators/accordion'
import {connect} from 'react-redux'

class ArticleList extends Component {
    componentDidMount() {
        const ref = this.refs[this.props.articles[0].id]
//        console.log('---', ref, findDOMNode(ref))
    }


    render() {
        const {articles, toggleOpenItem, isItemOpened} = this.props

        const elements = articles.map(article => <li key={article.id}>
            <Article article = {article}
                     isOpen = {isItemOpened(article.id)}
                     toggleOpen = {toggleOpenItem(article.id)}
                     ref = {article.id}
            />
        </li>)

        return (
            <ul ref={this.getContainerRef}>
                {elements}
            </ul>
        )
    }

    getContainerRef = ref => {
        this.list = ref
    }
}

ArticleList.propTypes = {
    articles: PropTypes.array,
    //from accordion decorator
    toggleOpenItem: PropTypes.func.isRequired,
    isItemOpened: PropTypes.func.isRequired
}

export default connect((state) => {
    const {selected, dateRange: {from, to}} = state.filters;
    const filteredArticles = state.articles.filter((article) => {
      const date = Date.parse(article.date);
      return (!selected.length || selected.includes(article.id)) && (!from || !to || date >= Date.parse(from) && date <= Date.parse(to));
    })
    console.log(filteredArticles);
    return {
        //articles: state.articles
        articles: filteredArticles
    }
})(accordion(ArticleList))