Ext
		.define(
				'NewsHolder.view.KeywordPanel',
				{
					extend : 'Ext.Panel',
					xtype : 'keywordpanel',
					id : 'keywordPanel',

					requires : [ 'NewsHolder.view.ArticlePanel',
							'Ext.plugin.ListPaging' ],

					config : {
						xtype : 'panel',
						layout : {
							type : 'vbox'
						},
						items : [
								{
									xtype : 'panel',
									layout : {
										type : 'hbox'
									},
									items : [ {
										xtype : 'textfield',
										flex : 1,
										id : 'searchField',
										placeHolder : '검색어를 입력하세요'
									}, {
										xtype : 'button',
										id : 'searchButton',
										ui : 'action',
										iconCls : 'search',
										iconMask : true
									} ]
								},
								{
									xtype : 'list',
									flex : 1,
									id : 'rankList',
									itemTpl : [ '<div>{xindex}. {keyword}  {placing}{value}</div>' ],
									store : 'rankStore',
								},
								{
									xtype : 'list',
									flex : 1,
									id : 'searchList',
									cls : 'newsList',
									itemTpl : [
											'<div class="articleListCSS">',
											'<tpl if="titleImage!=&quot;none&quot;">',
											'<div><img class="articleListImage" src="{titleImage}"/></div>',
											'</tpl>',
											'<div class="articleListTitle">{title}</div>',
											'<div class="articleListSummary">{summary}</div>',
											'</div>' ],
									hidden : true,
									store : 'searchResultStore',
									plugins : [ {
										xclass : 'Ext.plugin.ListPaging',
										loadMoreText : '더 보기',
										autoPaging : true
									} ]
								} ]
					}
				});
