let myFavorites = [];

const postFav = (req, res) => {
  const character = req.body;

  myFavorites.push(character);
  console.log(character);

  return res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;
  myFavorites = myFavorites.filter((favorite) => favorite.id !== +id);

  return res.tatus(200).json(myFavorites);
};

module.exports = {
  postFav,
  deleteFav,
};
