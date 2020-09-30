const getDetails = async vanId => {
  const url = !vanId
    ? 'https://odc-search-staging.herokuapp.com/rentals/'
    : 'https://odc-search-staging.herokuapp.com/rentals/' + vanId;

  const res = await fetch(url);
  const obj = await res.json();

  const infoArr = obj.data;
  const info = obj?.data?.attributes;
  const dataIncluded = obj?.included;
  const arrayImgs = Object.values(dataIncluded);
  const filterImg = arrayImgs.filter(img => img.type === 'images').map(x => x.attributes.url);
  const twoImages = filterImg.splice(0, 1).map(elem => elem);

  const ownerInfo = dataIncluded.filter(elem => elem.type === 'users').map(x => x.attributes);

  const { avatar_url: avatar, first_name: first, last_name: last } = [ownerInfo];

  const newObj = {
    id: infoArr.id,
    location: info.location.city + ', ' + info.location.state,
    vehicule: info.name,
    type: info.display_vehicle_type,
    price: info.price_per_day,
    arrayImages: twoImages,
    avatar,
    name: first + ' ' + last,
  };
  return newObj;
};

export default getDetails;
