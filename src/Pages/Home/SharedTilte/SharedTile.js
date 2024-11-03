import React from 'react';

const SharedTile = ({title, subTitle}) => {
    return (
        <div>
            <div className='text-start my-6'>
            <p className='text-yellow-600'>{subTitle}</p>
            <p className='uppercase mb-6 text-3xl font-bold'>{title}</p>
            </div>
        </div>
    );
};

export default SharedTile;