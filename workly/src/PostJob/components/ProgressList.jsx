import React from 'react';
import jobStyles from '../../scss/postjob.scss';
import commonStyles from '../../scss/common.scss';

const ProgressList = ({ active }) => {

    const allLevels = [
        "TYPE OF JOB",
        "DETAILS",
        "TESTS / BADGES",
        "CUSTOM TESTS",
        "LOCATION",
        "AUTO ACTIONS",
        "CUSTOM QUESTIONS",
        "PAYMENTS"
    ]
    return (
        <div className={jobStyles.progressList}>
            <h3 className={commonStyles.headingLeftBorder}>POST A NEW JOB</h3>
            <ul>
                {
                    allLevels.map((level, i) => (
                        <li className={i < active ? jobStyles.done : i == active ? jobStyles.active : ''}>{level}</li>
                    ))
                }
            </ul>
        </div>
    )
}




export { ProgressList };