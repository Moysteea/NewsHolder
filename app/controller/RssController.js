/*
 * File: app/controller/RssController.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('NewsHolder.controller.RssController', {
    extend: 'Ext.app.Controller',

    config: {
        models: [
            'RssModel'
        ],
        views: [
            'RssPanel'
        ],

        refs: {
            addButton: '#rssAddButton',
            rssAddress : '#rssAddressText',
            rssItem: '#RssList',
            	
        },

        control: {
            'addButton': {
                tap: 'onRssAddButtonTap'
            },
            'rssItem': {
                itemtap: 'onRssListItemTap'
            }
        }
    },


    onRssAddButtonTap: function(button, e, options) {
        console.log("Rss Add Button tap!");

        var store = Ext.data.StoreManager.lookup('mainStore');
        store.add({ mainRssName : '경향신문',
        	mainRssUrl : 'http://www.khan.co.kr/rss/rssdata/total_news.xml',
        	mainRssImage : 'http://www.tstore.co.kr/images/IF1423549615420111214150946/0000270186/thumbnail/0000270186_180_180_0_68.PNG' });
        store.sync();
    },

    onRssListItemTap: function(dataview, index, target, record, e, options) {
        console.log("rssList Item tap");
    }

});