import React, { useState } from 'react';

function SearchBar() {

    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');
    const [sortOption, setSortOption] = useState('');

    return (
        <div>
            <input type="text" placeholder='Search'/>
            <input type="text" placeholder='Location'/>
            <input type="submit" />
        </div>
    );
}

export default SearchBar;
