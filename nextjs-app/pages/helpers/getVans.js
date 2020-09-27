const getVans = async () => {
  const url =
    'https://odc-search-staging.herokuapp.com/rentals?filter[jeep]=camper-van&address=san%20francisco';
  const res = await fetch(url);
  const obj = await res.json();

  const newData = obj.data.map(el => {
    const imageId = el.relationships.primary_image.data.id;
    const newObj = Object.values(obj.included);
    const imageData = newObj.filter(elem => elem.id === imageId).map(x => x.attributes.url);
    return {
      id: el.id,
      imgId: el.relationships.primary_image.data.id,
      location: el.attributes.location.city + ', ' + el.attributes.location.state,
      name: el.attributes.name,
      type: el.attributes.display_vehicle_type,
      price: el.attributes.price_per_day,
      reviews: el.attributes.reviews_num,
      url: imageData,
    };
  });
  return newData;
};
export default getVans;