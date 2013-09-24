<!DOCTYPE html>
<!--html manifest="./manifest/cache.manifest"-->
<html>
<head>
	<title>Michael's Space!</title>
	<meta http-equiv="X-UA-Compatible" content="IE=7">
	<meta http-equiv="content-type" content="text/html; charset=utf-8">
	<link rel="shortcut icon" href="./favicon.ico">
    <link rel="stylesheet" type="text/css" href="./css/common.css">

{%literal%}
    <style type="text/css">

/*only for this page*/
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


