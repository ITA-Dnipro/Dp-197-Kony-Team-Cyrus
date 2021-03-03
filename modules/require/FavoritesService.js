define(["FavoritesFabricImpl"], function (fabricImpl) {
  
  return {
    addFavoriteArticle: fabricImpl.addArticle,
    getFavoriteArticles: fabricImpl.getArticles,
    removeFavoriteArticle: fabricImpl.removeArticle
  };
});