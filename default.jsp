<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%><%
String callback = request.getParameter("callback");%><%
if(callback != null) { 
response.setContentType("text/javascript");%>
<%=callback%>
({"addresses": [ 
	    {
	        "id": 0,
	        "name": "RSS 추가",
	        "image_url":"http://upload.wikimedia.org/wikipedia/commons/3/3a/Torchlight_viewmag_plus.png",
	    },
	    {
	        "id": 1,
	        "name": "키워드 모음",
	        "image_url":"http://cdn.techsling.com/wp-content/uploads/2011/12/Keyword-icon.png",
	    },
	    {
	    	"id": 2,
	        "name": "스크랩 모음",
	        "image_url":"http://aux.iconpedia.net/uploads/1472970583.png",
	    },
        {
            "id": 3,
            "name": "경향신문",
            "url": "www.khan.co.kr/rss/rssdata/total_news.xml",
            "image_url":"http://www.tstore.co.kr/images/IF1423549615420111214150946/0000270186/thumbnail/0000270186_180_180_0_68.PNG",
        },
        {
            "id": 4,
            "name": "조선일보",
            "url": "www.chosun.com/site/data/rss/rss.xml",
            "image_url":"http://img.samsungapps.com/product/2010/1210/000000053967/IconImage_20101210070101067_NEW_WEB_ICON_155_155.png",
        },
        {
            "id": 5,
            "name": "한겨레 신문",
            "url": "www.hani.co.kr/rss/",
            "image_url":"http://a2.mzstatic.com/us/r1000/095/Purple/45/eb/13/mzm.lhivprcy.png",
        },
        {
            "id": 6,
            "name": "중앙일보",
            "url": "rss.joinsmsn.com/joins_news_list.xml",
            "image_url":"http://a0.twimg.com/profile_images/1190254540/Icon_512x512_.jpg",
        },
        {
            "id": 7,
            "name": "동아일보",
            "url": "rss.donga.com/total.xml",
            "image_url":"http://www.chilnet.co.kr/logo/1238825353.jpg",
        },
    ]
})
<%} %>

