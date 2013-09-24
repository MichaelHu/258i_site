<!DOCTYPE html>
<html manifest="./manifest/cache.manifest">
<head>
	<title>Michael's Space!</title>
	<meta http-equiv="X-UA-Compatible" content="IE=7">
	<meta http-equiv="content-type" content="text/html; charset=utf-8">
	<link rel="shortcut icon" href="./favicon.ico">

{%literal%}
    <style type="text/css">

body
, div
, span
, ol
, ul
, li
, p
, h1
, h2
, h3
, textarea/*important*/ {
    margin:0; padding:0; border:0;
}

ol
, ul
, li {
    list-style-image: none; list-style-position: outside; list-style-type: none;
}

#wrapper {margin: 5px auto;}

#container, #footer{width:980px; margin:5px auto 0;}

#header {
    height:105px;
    border-bottom:2px solid #bbb;
}

#header_cont{
    width:980px;
    margin:0 auto;
}

#header_avatar{
    float:left;
    width:80px;
    height:80px;
    padding:10px;
    background:url(http://www.gravatar.com/avatar/695eb617d04fdfd1c43149e9c76ce178?s=80&d=mm&r=g) 10px 10px no-repeat;
}

#header_info{
    margin-left:100px;
    padding-top:10px;
    height:80px;
}

#header_info a{
    float:left;
    margin-right:10px;
    padding:5px;
    font:normal 16px/30px Arial;
}

#header_info .works{
    height:50px;
}

#header_info .demos{
    height:30px;
}

#header_info .works a{
    background:#0071B5;
    font-size:18px;
    line-height:30px;
}

#header_info .demos a{
    background:#5FAD94;
    font-size:14px;
    line-height:20px;
}

#header_info a:link
,#header_info a:visited
,#header_info a:hover{
    color:#fff;
    text-decoration:none;
}

.header-info-line{
}


#footer {
    margin-top:30px;
    padding-top: 10px;

    text-align: right;
    font-size: 12px;
    color:#666;
}

#nav, #content{margin:0 auto;}

#footer a:hover
,#footer a:link
,#footer a:active
,#footer a:visited {
    color: #666; 
    text-decoration: none;
}

#content{width:960px; text-align:left;}

#content h3{
    float:left;

    width:920px;
    margin-top:20px;
    padding-left:10px;

    border-left:5px solid #c9f3d4;
    border-bottom:1px dotted #BBB;

    font:italic 20px/30px Arial;
}

#content ul {float:left;width:950px; margin:0; padding-top:10px; overflow:hidden;}
#content li {float:left; width:455px; display:inline; padding-left:15px;}
#content ul span.title{float:left; font:normal 14px/22px arial;}
#content ul span.time{float:right; font:italic 12px/22px arial; color:#BABCCC; margin-right:30px;}

#content a{line-height:24px;}
#content a:link
,#content a:hover
,#content a:active
,#content a:visited{color:#000; text-decoration:none;}

    </style>
{%/literal%}

</head>
<body>
	<div id="wrapper">


        <div id="header">
            <div id="header_cont">
                <div id="header_avatar"></div>
                <div id="header_info">
                    <div class="header-info-line works">
<a href="https://github.com/MichaelHu/rocket" target="_blank">Rocket</a>
<a href="https://github.com/MichaelHu/mcphp" target="_blank">McPHP</a>
                    </div>

                    <div class="header-info-line demos">
<a href="/template/hellorocket/hellorocket.html" target="_blank">hellorocket</a>
<a href="/template/slider/slider.html" target="_blank">slider</a>
<a href="/template/howtorocket/howtorocket.html" target="_blank">howtorocket</a>
<a href="/template/mynotes/mynotes.html" target="_blank">mynotes</a>
                    </div>
                </div>
            </div>
        </div>

		<div id="container">
            <div id="nav" style="display:none;">
            </div>
			<div id="count"><span></span></div>
			<div id="content">

{%foreach $list_data as $key => $value%}
    <h3>{%$key%}</h3>
    <ul>
    {%foreach $value as $item%}
        <li><span class="title"><a href="{%$item->url%}" target="_blank">{%$item->title%}</a></span><span class="time">{%$item->time%}</span></li>
    {%/foreach%}
    </ul>
{%/foreach%}

				<div style="clear:both"></div>
			</div>
		</div>

        <div id="footer">
			<span style="font-family:arial;">&copy;</span> 2006-2013 Michael Hu 版权所有<br/>
		        Email: hdm258i@gmail.com<br/>
			<a class="none" href="http://www.miibeian.gov.cn">浙ICP备06045871号</a>
		</div>
    </div>
    
</body>
</html>


