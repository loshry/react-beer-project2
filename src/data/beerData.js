const url = "https://api.punkapi.com/v2/beers";

 export const findBeers = async () => {
    const res = await fetch(url);
    const data = await res.json();
    // clean the data!
    const newData = data.map((beer) => cleanData(beer));
    return newData;
  };


  export const findAbv = async () => {
    const res = await fetch(url + "?abv_gt=6");
    const data = await res.json();
    const newData = data.map((beer) => cleanData(beer));
    return newData;
  }

  export const findClassic = async () => {
    const res = await fetch(url + "?abv_gt=3.9&abv_lt=5.1");
    const data = await res.json();
    const newData = data.map((beer) => cleanData(beer));
    return newData;
  }

  export const findPh = async () => {
    let newData = await findBeers();
    newData = newData.filter((beer) => {
        return beer.ph < 4;
    });
    return newData;
  }

  export const findBeerByName = async (beerName) => {
    const res = await fetch(url+"?beer_name="+ beerName);
    const data = await res.json();
    // clean the data!
    const newData = data.map((beer) => cleanData(beer));
    return newData;
  };

  const cleanData = (data) => {
    return {
      id: data.id,
      name: data.name,
      image: data.image_url,
      tagline: data.tagline,
      description: data.description,
      abv: data.abv,
      ph: data.ph,
    };
  };
