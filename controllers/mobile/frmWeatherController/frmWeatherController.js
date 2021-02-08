define(["NewsService"], function(newsService) { 
  return {
    onInitialize: function() {
      //this.view.postShow = this.onFormShowed.bind(this);  
      this.view.tabBtnHome.onClick = this.onButtonGoToHome.bind(this);
      this.view.tabBtnSearchImg.onClick = this.onButtonGoToSearchImg.bind(this);
      this.view.tabBtnNews.onClick = this.onButtonGoToNews.bind(this);
      this.view.btnProfile.onClick = this.onGoToProfile.bind(this);
      this.view.btnGoBack.onClick = function () {
        var previousFormId = kony.application.getPreviousForm().id;
        if (previousFormId === "frmNews") {
          this.onButtonGoToNews();
        } else {
          var navigation = new kony.mvc.Navigation(previousFormId);
          navigation.navigate();
        }
      }.bind(this);

    },

    onNavigate: function(data) {
      this.view.lstDates.setData(data);
    },

    onButtonGoToHome: function() {
      var navigation = new kony.mvc.Navigation("frmMain");
      navigation.navigate();
    },

    onButtonGoToNews: function() {
      newsService.getNews( 
        function(arr) {
          var navigation = new kony.mvc.Navigation("frmNews");
          navigation.navigate(arr);
        },
        function() {
          alert("Error while retrieving news list.");
        }
      );
    },

    onButtonGoToSearchImg: function() {
      var navigation = new kony.mvc.Navigation("frmSearchImg");
      navigation.navigate();
    },

    onGoToProfile: function() {
      var navigation = new kony.mvc.Navigation("frmCollectionImg");
      navigation.navigate();
    },

  };

});