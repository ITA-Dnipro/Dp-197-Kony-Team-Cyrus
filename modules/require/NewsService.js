define(["NewsServiceHttpImpl", "NewsServiceFabricImpl"], function (httpImpl, fabricImpl) {
  
  return {
    getNews: fabricImpl.getNews
  };
});