const yelpBaseUrl = 'https://api.yelp.com/v3';
const apiKey = "d9XldaN1VGT29qPYcWxuKBrU_eawnBEHPR7808B0eRNJyLyASfxeUcjjJAT4BULya6kNg47PHm37VZ9YyuhlwcJNP_A8Q-A5lKo8KTvnYEYmPcdH5cSBzQFAX-1VZnYx";
export const searchBusinesses = async (searchTerm, location, sortBy) => {
    const businessEndpoint = '/businesses/search';
    const queryParams = [];
    if (searchTerm) {
        queryParams.push(`term=${searchTerm}`);
    }
    if (location) {
        queryParams.push(`location=${location}`);
    }
    if (sortBy) {
        queryParams.push(`sort_by=${sortBy}`);
    }
    const url = `${yelpBaseUrl}${businessEndpoint}?${encodeURI(queryParams.join('&'))}`;
    console.log(url);
    try {
        const response = await fetch('https://cors-anywhere.herokuapp.com/' + url, {
            method: "GET",
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${apiKey}`
            }
        });
        if (response.ok) {
            const jsonResponse = await response.json();
            const businesses = jsonResponse.businesses;
            return businesses;
        }
    } catch (e) {
        console.log(e);
    }

};
