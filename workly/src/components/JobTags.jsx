import React from 'react';
import searchStyles from '../scss/search.scss';

const JobTags = ({ tags }) => {

    return (
        <ul>
            {
                tags.map((tag) => (
                    <li className={searchStyles.tag}>{tag}</li>
                ))
            }
        </ul>
    )
}




export { JobTags };