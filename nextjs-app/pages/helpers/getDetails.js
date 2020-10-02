const getDetails = async vanId => {
  const url = !vanId
    ? 'https://odc-search-staging.herokuapp.com/rentals/'
    : 'https://odc-search-staging.herokuapp.com/rentals/' + vanId;

  const res = await fetch(url);

  if (res.status === 404) {
    console.log(res.status + res.statusText);
  }
  const obj = await res.json();
  const infoArr = obj?.data;
  const info = obj?.data?.attributes;
  const dataIncluded = obj?.included;
  if (!dataIncluded) {
    return [];
  }
  const arrayImgs = Object.values(dataIncluded);
  const filterImg = arrayImgs.filter(img => img.type === 'images');
  const twoImages = filterImg.map(elem => {
    if (elem.attributes.url !== '') {
      return elem.attributes.url;
    } else return '';
  });
  const ownerInfo = dataIncluded.filter(elem => elem.type === 'users').map(x => x.attributes);
  const ownerData = Object.values(ownerInfo);
  const price = info.price_per_day.toString().slice(0, 3);
  const newObj = {
    id: infoArr.id,
    location: info.location.city + ', ' + info.location.state,
    vehicule: info.name,
    type: info.display_vehicle_type,
    price: price,
    arrayImgs: twoImages,
    avatar: ownerData[0].avatar_url,
    name: ownerData[0].first_name + ' ' + ownerData[0].last_name,
  };
  return newObj;
};

export default getDetails;
