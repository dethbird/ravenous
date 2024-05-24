import React from 'react';

import Business from './Business';

function BusinessList(props) {
    const { businesses } = props;

    const list = businesses.map(business => {
        return <Business business={business} />
    });

    return (
        <div>
            {list}
        </div>
    );
}

export default BusinessList;
