import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import {connect} from 'react-redux'
import {changeSelectFilter} from '../../AC/index'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array
    };

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <Select options = {options} value = {this.props.selectFilter}
                    onChange = {this.handleSelectionChange}
                    multi = {true}
            />
        )
    }

    handleSelectionChange = selection => {
        const { changeSelectFilter } = this.props;
        const selectedArticles = selection.map((article) => article.value);
        changeSelectFilter(selectedArticles);
    }
}
const mapStateToProps = (state) => {
    return {
        selectFilter: state.filters.selected,
        articles: state.articles
    }
}
export default connect(mapStateToProps, { changeSelectFilter })(SelectFilter)