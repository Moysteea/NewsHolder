Ext.define('NewsHolder.controller.ScrapController', {
    extend: 'Ext.app.Controller',

    config: {
        models: [
            
        ],
        views: [
            
        ],

        refs: {
          scrapList:"#scrapList",
          article: 'article',
          scrapBackButton : '#scrapBackButton',
          scrapHomeButton : '#homeButton',
          scrapPanel:'#scrapPanel',
          mainPanel:'#main',
          articleScrapButton:"#articleScrapButton"
        },
        
        control: {
            scrapBackButton:{
            	tap:'scrapBackButtonTap'
            },
            scrapList:{
            	onItemDisclosure:"scrapListTapHold",
            	itemtap:"scrapListTap",
            },
        },
        
    },
    /** 스크랩 리스트에서 기사 제목을 탭했을 때 실행 */// /////////////////////////////////////
    scrapListTap:function(list, index, item, record, e){
    	console.log("list item tap");
    	var Maincontroller = this.getApplication().getController("MainController");
    	Maincontroller.getMain().animateActiveItem(
    			this.getArticle(), {
    				type:"slide",
    				direction : "left"
    			});
    	Maincontroller.getArticleList().setData(record.data);
    	this.getScrapBackButton().show();
    	this.getScrapHomeButton().hide();
    	
    	localStorage.flag = index;
    	Ext.getCmp("articleScrapButton").show();
    },
    
    scrapBackButtonTap:function(button, e, options){
    	this.getMainPanel().animateActiveItem(
				4, {
					type : "slide",
					direction : "right"
				});
		this.getApplication().getController('MainController')
				.getTitlebar().setTitle("스크랩 모음");
		this.getScrapHomeButton().show();
		this.getScrapBackButton().hide();
		this.getArticleScrapButton().hide();
    },
    
    refreshScrapList:function(){
    	var scrapStore = Ext.getStore("Scraps");
		scrapStore.load();
		this.getScrapList().setStore(scrapStore);
    },
    
    scrapListTapHold:function(model, node, index, e){
    	console.log("scrapListTapHold!!");
    	Ext.Msg.confirm("알림", "해당 스크랩을 삭제하시겠습니까", function(buttonId, value, opt){
    		if(buttonId=="yes"){
    			console.log(record.internalId);
        		var store = Ext.getStore('Scraps');
        		store.remove(record);
        		store.sync();
    		}
    	}, this);
    },
    
    
});