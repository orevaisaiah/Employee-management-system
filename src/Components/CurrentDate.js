import React from 'react';
import moment from 'moment';

const CurrentDate = () => {
    const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  
    return (
        <div>
        <h1 className="current-date"> {moment({date}).format(' Do MMMM YYYY')} </h1>
        </div>
    )
}

export default CurrentDate
