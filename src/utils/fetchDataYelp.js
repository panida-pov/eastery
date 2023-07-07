const fetchDataYelp = async({searchBusiness, searchLocation, searchOption}) => {
  const url = "https://api.yelp.com/v3/businesses/search";
  try {
    const endpoint = `https://cors-anywhere.herokuapp.com/${url}?location=${searchLocation}&sort_by=${searchOption}&term=${searchBusiness}&limit=24`

    const response = await fetch(endpoint, {
      'method': 'GET',
      'headers': {
        'accept': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
      }
    });

    if (response.ok) {
      const jsonResponse = await response.json();
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          "id": business.id,
          "imageSrc": business.image_url,
          "name": business.name,
          "address": business.location.address1,
          "city": business.location.city,
          "state": business.location.state,
          "zipCode": business.location.zip_code,
          "category": business.categories[0]?.title || '-' ,
          "rating": business.rating,
          "reviewCount": business.review_count,
          "price": business.price,
          "url": business.url,
          "phone": business.phone
        }));
      }
    }
    console.log(Error('Request failed!'));
  } catch (error) {
    console.log(error);
  }
};

export default fetchDataYelp;