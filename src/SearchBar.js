import React from 'react';

function SearchBar() {
    return (
        <div>
            <input type="text" placeholder='Search'/>
            <input type="text" placeholder='Location'/>
            <input type="submit" />
        </div>
    );
}

export default SearchBar;
