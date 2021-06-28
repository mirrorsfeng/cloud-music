import React, { memo } from 'react';
import PropTypes from "prop-types";

import { 
    ThemeHeaderWrapper,
 } from "./style";

const ThemeHeader = memo((props) => {

    const { title, keywords } = props;
    return (
        <ThemeHeaderWrapper>
            <div className = "left">
                <h3 className = "title">{title}</h3>
                <div className = "keywords">
                    {
                        keywords.map((item,index) => {
                            return (
                                <div className = "item" key = {item}>
                                    <a href="todo">{item}</a>
                                    <span className = "divider">|</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className = "right">
                <a href="todo">更多</a>
                <i className = "icon"></i>
            </div>
        </ThemeHeaderWrapper>
    );
});

    ThemeHeader.prototype = {
        title: PropTypes.string.isRequired,
        keywords: PropTypes.array

    }

    ThemeHeader.defaultProps = {
        keywords: []
    }
export default ThemeHeader;