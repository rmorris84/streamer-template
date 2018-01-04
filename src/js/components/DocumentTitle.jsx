import React from 'react'
import PropTypes from 'prop-types';

const DocumentTitle = ({ children, title }) => {
    document.title = title;
    return (
        <div>
            {children}
        </div>
    );
};

DocumentTitle.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element
}

export default DocumentTitle;