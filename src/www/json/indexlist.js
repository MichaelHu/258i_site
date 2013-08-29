(function(){
    
    var orders = [
        'Apple & Iphone & Safari'
        ,'PHP Programming'
        ,'Web Tools'
        ,'C/C++ Programming'
        ,'Lighttpd Related'
        ,'Windows Programming'
        ,'W3C Related'
        ,'Web Programming Tools'
        ,'Web Programming'
        ,'Perl Programming'
        ,'Python Programming'
        ,'MySQL Related'
        ,'Apache Related'
        ,'Character Encoding'
        ,'Regular Expression'
        ,'Review Board'
        ,'VIM Related'
        ,'Effects with JS & CSS'
        ,'Java Related'
        ,'Forum'
        ,'Design Patterns'
        ,'Batch File Programming'
        ,'Other'
    ];

	var config=[
        
{
type:'Web Tools',
// 需进行URI转义
href:encodeURI('javascript:(function(){var h3s=document.getElementById(\"ires\").getElementsByTagName(\"h3\"),h3,links,link,p,tip;for(var i=0;i<h3s.length;i++){h3=h3s[i];p=h3.parentNode;p.style.position=\"relative\";links=h3.getElementsByTagName(\"a\");for(var j=0;j<links.length;j++){link=links[j];tip=document.createElement(\"div\");with(tip.style){width=\"50px\";height=\"26px\";top=\"0\";left=\"-55px\";backgroundColor=\"yellow\";position=\"absolute\";zIndex=\"1000\";borderRadius=\"4px\";border=\"1px solid green\";textAlign=\"center\"}tip.innerHTML=[\'<a target=\"_blank\" href=\"\',/google[^\\/]+\\/url\\?.+&url=([^&]+)/i.test(link.href)?decodeURIComponent(RegExp.$1):link.href,\'\" style=\"\',\"display:block;\",\"width:100%;\",\"height:100%;\",\"text-decoration:none;\",\"color:green;\",\"font:normal 12px/26px normal;\",\'\">\\u8D70\\u4F60</a>\'].join(\"\");p.appendChild(tip)}}})();'),
target:'_blank',
title:'[!走你] Google Results Filter',
time:'[2013-04-19]'
},
	
{
type:'Web Tools',
// 需进行URI转义
href:encodeURI('javascript:(function(){var a=document.createElement(\"script\");a.src=\"http://258i.com/webtools/google-results/main.js\";a.charset=\"utf-8\";document.getElementsByTagName(\"head\")[0].appendChild(a)})();'),
target:'_blank',
title:'[!走你] Google Results Filter ( for ie 6)',
time:'[2013-04-19]'
},
	
{
type:'W3C Related',
href:'http://www.w3schools.com/media/media_mimeref.asp',
target:'_blank',
title:'MIME Reference',
time:'[2010-09-14]'
},
	
{
type:'W3C Related',
href:'web/rfc/rfc2616_HTTP1.1.txt',
target:'_blank',
title:'RFC2616(HTTP1.1 Related)',
time:'[2008-09-27]'
},
	
{
type:'W3C Related',
href:'http://www.w3.org/Protocols/rfc2109/rfc2109',
target:'_blank',
title:'RFC2109(Cookie Related)',
time:'[2009-04-29]'
},

{
type:'W3C Related',
href:'http://www.w3schools.com/wap/wml_reference.asp',
target:'_blank',
title:'WML Reference (W3C)',
time:'[2010-06-24]'
},

{
type:'W3C Related',
href:'http://www.w3schools.com/xhtml/default.asp',
target:'_blank',
title:'XHTML Reference (W3C)',
time:'[2010-06-24]'
},

{
type:'W3C Related',
href:'http://xhtml.com/en/xhtml/reference/',
target:'_blank',
title:'XHTML Reference',
time:'[2010-06-24]'
},

{
type:'W3C Related',
href:'http://www.w3.org/TR/cssom-view/#the-elementview',
target:'_blank',
title:'CSSOM View Module (W3C)',
time:'[2009-03-12]'
},

{
type:'W3C Related',
href:'http://www.w3.org',
target:'_blank',
title:'W3C Home Page',
time:'[2009-03-12]'
},

{
type:'W3C Related',
href:'http://www.w3schools.com/jsref',
target:'_blank',
title:'W3C Javascript Reference',
time:'[2008-09-28]'
},
	
{
type:'W3C Related',
href:'http://www.w3schools.com/css/',
target:'_blank',
title:'W3C CSS Reference',
time:'[2008-10-08]'
},
	
{
type:'W3C Related',
href:'http://www.w3schools.com/tags/default.asp',
target:'_blank',
title:'W3C HTML Reference',
time:'[2008-09-28]'
},
	

{
type:'Effects with JS & CSS',
href:'http://css-tricks.com/examples/Circulate/',
target:'_blank',
title:'Circulate with JQuery',
time:'[2010-05-16]'
},
	
{
type:'Effects with JS & CSS',
href:'http://preloaders.net/',
target:'_blank',
title:'Ajax Preloaders',
time:'[2010-04-19]'
},
	
{
type:'Effects with JS & CSS',
href:'http://www.ajaxload.info/#preview',
target:'_blank',
title:'Ajax Loading GIF Generator',
time:'[2010-04-12]'
},
	

        {
type:'VIM Related',
href:'http://vim-taglist.sourceforge.net/manual.html',
target:'_blank',
title:'Taglist Manual',
time:'[2010-06-02]'
},
	
{
type:'VIM Related',
href:'http://vimdoc.sourceforge.net/htmldoc/help.html',
target:'_blank',
title:'VIM Manual',
time:'[2010-06-02]'
},
	

        {
type:'Web Programming Tools',
href:'http://www.scalora.org/projects/uriencoder/',
target:'_blank',
title:'Data URI Encoder',
time:'[2010-09-20]'
},

        {
type:'Web Programming Tools',
href:'http://tohtml.com/',
target:'_blank',
title:'Online Syntax Highlighting',
time:'[2010-08-15]'
},

{
type:'Web Programming Tools',
href:'web/getproperties.php',
target:'_blank',
title:'Get Properties',
time:'[2008-08-26]'
},
	
{
type:'Web Programming Tools',
href:'http://kangax.github.com/html-minifier/',
target:'_blank',
title:'HTML Minifier (ver. 0.42)',
time:'[2010-04-05]'
},

{
type:'Web Programming Tools',
href:'http://developer.yahoo.com/yui/grids/builder/',
target:'_blank',
title:'YUI: CSS Grid Builder',
time:'[2010-03-18]'
},

{
type:'Web Programming Tools',
href:'web/runjs.php',
target:'_blank',
title:'Run JS Snippets',
time:'[2008-08-30]'
},
	
{
type:'Web Programming Tools',
href:'web/getcode.php',
target:'_blank',
title:'Get Code',
time:'[2008-08-31]'
},
	

{
type:'Apple & Iphone & Safari',
title:'Apple Developer Center',
href:'http://developer.apple.com/',
target:'_blank',
time:'[2010-08-17]'
},
	
{
type:'Apple & Iphone & Safari',
title:'iOS Developer Library',
href:'https://developer.apple.com/library/ios/navigation/index.html',
target:'_blank',
time:'[2013-04-16]'
},
	
{
type:'Apple & Iphone & Safari',
title:'Safari CSS Reference',
href:'https://developer.apple.com/safari/library/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-SW1',
target:'_blank',
time:'[2010-08-17]'
},
	
{
type:'Apple & Iphone & Safari',
title:'Safari HTML Reference',
href:'https://developer.apple.com/safari/library/documentation/AppleApplications/Reference/SafariHTMLRef/Introduction.html#//apple_ref/doc/uid/TP40002049',
target:'_blank',
time:'[2010-08-17]'
},
	
{
type:'Apple & Iphone & Safari',
title:'Webkit DOM Reference',
href:'http://developer.apple.com/safari/library/documentation/AppleApplications/Reference/WebKitDOMRef/index.html#//apple_ref/doc/uid/TP40006089',
target:'_blank',
time:'[2010-08-28]'
},
	
{
type:'Apple & Iphone & Safari',
title:'Webkit DOMWindow',
href:'http://developer.apple.com/safari/library/documentation/AppleApplications/Reference/WebKitDOMRef/DOMWindow_idl/Classes/DOMWindow/index.html',
target:'_blank',
time:'[2010-08-28]'
},

{
type:'Apple & Iphone & Safari',
title:'Webkit DOMWindow Additions Class Ref',
href:'http://developer.apple.com/safari/library/documentation/DataManagement/Reference/DOMWindowAdditionsReference/DOMWindowAdditions/DOMWindowAdditions.html#//apple_ref/doc/uid/TP40009352-CH9-DontLinkElementID_1',
target:'_blank',
time:'[2010-08-29]'
},

{
type:'Apple & Iphone & Safari',
title:'Safari Web Content Guide[HOW TO]',
href:'http://developer.apple.com/safari/library/documentation/AppleApplications/Reference/SafariWebContent/HandlingEvents/HandlingEvents.html#//apple_ref/doc/uid/TP40006511-SW16',
target:'_blank',
time:'[2010-08-29]'
},
	
            


{
type:'Web Programming',
href:'http://258i.com/web/xstorage/test.html',
target:'_blank',
title:'Cross-Domain localStorage',
time:'[2010-09-12]'
},

{
type:'Web Programming',
href:'http://www.demo2do.com/prototype/reference/',
target:'_blank',
title:'prototype.js解读',
time:'[2009-02-10]'
},

{
type:'Web Programming',
href:'http://msdn.microsoft.com/en-us/library/ms535874(VS.85).aspx',
target:'_blank',
title:'XMLHttpRequest (MSDN)',
time:'[2009-03-12]'
},

{
type:'Web Programming',
href:'web/emptydivheight.html',
target:'_blank',
title:'Empty Height',
time:''
},
	
{
type:'Web Programming',
href:'web/browsergeometry.php',
target:'_blank',
title:'Browser Geometry',
time:''
},
	
{
type:'Web Programming',
href:'web/doctypes.php',
target:'_blank',
title:'Doctypes',
time:'[2008-08-28]'
},
	
{
type:'Web Programming',
href:'web/charset.html',
target:'_blank',
title:'Charset',
time:'[2008-09-27]'
},
	
{
type:'Web Programming',
href:'web/calendar.html',
target:'_blank',
title:'My Calendar',
time:'[2008-11-16]'
},
	
{
type:'Web Programming',
href:'web/dimensions.html',
target:'_blank',
title:'Dimensions',
time:'[2008-10-26]'
},
	
{
type:'Web Programming',
href:'http://docs.google.com/Doc?docid=0AY9ZDF5b54GVZGY3cXBrZzJfOTdncGc4YjZneA&hl=en',
target:'_blank',
title:'How To Create an IE-Only Stylesheet',
time:'[2010-04-05]'
},
	
{
type:'Web Programming',
href:'web/jslib/',
target:'_self',
title:'JS Lib',
time:''
},
	
{
type:'Web Programming',
href:'web/radioonchange.html',
target:'_blank',
title:'IE radio onchange',
time:'[2008-12-03]'
},

{
type:'Web Programming',
href:'http://www.w3.org/2008/webapps/wiki/KeyCode_and_charCode',
target:'_blank',
title:'KeyCode and charCode',
time:'[2009-03-18]'
},

{
type:'Web Programming',
href:'http://msdn.microsoft.com/en-us/library/ms533050(vs.85).aspx',
target:'_blank',
title:'IE HTML/DHTML Reference (MSDN)',
time:'[2009-03-18]'
},

{
type:'Web Programming',
href:'https://developer.mozilla.org/En',
target:'_blank',
title:'Mozilla Developer Center',
time:'[2009-03-27]'
},

{
type:'Web Programming',
href:'http://www.web-caching.com/',
target:'_blank',
title:'Web Caching Related',
time:'[2009-05-02]'
},

{
type:'Web Programming',
href:'http://my.safaribooksonline.com/home',
target:'_blank',
title:'Safari Books Online',
time:'[2009-05-02]'
},

{
type:'Web Programming',
href:'web/onreadystatechange%20of%20script%20object%20under%20IE.html',
target:'_blank',
title:'IE\'s onreadystatechange Event',
time:'[2009-05-07]'
},

{
type:'Web Programming',
href:'web/associative_listbox.html',
target:'_blank',
title:'Associative ListBox',
time:'[2009-05-21]'
},

{
type:'Web Programming',
href:'http://blog.morrisjohns.com/illumination_on_javascript_prototypes.html',
target:'_blank',
title:'Illumination on JavaScript Prototypes',
time:'[2010-05-09]'
},


{
type:'PHP Programming',
href:'http://www.w3schools.com/php/php_ref_array.asp',
target:'_blank',
title:'W3C PHP Reference',
time:'[2008-10-03]'
},
	
{
type:'PHP Programming',
href:'http://www.php-open.com/',
target:'_blank',
title:'PHP开源大全',
time:'[2010-06-26]'
},
	
{
type:'PHP Programming',
// href:'http://cn.php.net/manual/en/langref.php',
href:'http://www.php.net/manual/en/',
target:'_blank',
title:'PHP Manual',
time:'[2008-10-01]'
},

{
type:'PHP Programming',
href:'http://www.phpunit.de/manual/current/en/automating-tests.html',
target:'_blank',
title:'PHPUnit Manual',
time:'[2009-04-27]'
},

{
type:'PHP Programming',
href:'http://www.ibm.com/developerworks/cn/opensource/os-php-dbmistake/index.html',
target:'_blank',
title:'五个常见 PHP 数据库问题',
time:'[2010-03-20]'
},

{
type:'PHP Programming',
href:'http://www.smarty.net/',
target:'_blank',
title:'Smarty: template engine',
time:'[2010-05-18]'
},

{
type:'PHP Programming',
href:'web/smarty3_rc3_readme.html',
target:'_blank',
title:'Smarty 3.0 RC3 ReadMe',
time:'[2010-11-03]'
},

        

{
type:'C/C++ Programming',
href:'http://www.cplusplus.com/reference/',
target:'_blank',
title:'C++ Reference (C & C++)',
time:'[2009-08-15]'
},

{
type:'C/C++ Programming',
href:'http://docs.huihoo.com/boost/1-33-1/libs/regex/doc/install.html',
target:'_blank',
title:'Boost Regex 安装',
time:'[2009-09-26]'
},

{
type:'C/C++ Programming',
href:'http://msdn.microsoft.com/en-us/library/60k1461a.aspx',
target:'_blank',
title:'MSDN VS C++',
time:'[2010-02-07]'
},

{
type:'C/C++ Programming',
href:'http://www.bedaux.net/cpp2html/',
target:'_blank',
title:'C++ 2 HTML',
time:'[2010-03-13]'
},

{
type:'C/C++ Programming',
href:'http://www.cppreference.com/',
target:'_blank',
title:'C++ Reference',
time:'[2008-10-09]'
},


{
type:'Other',
href:'bdnews.php',
target:'_blank',
title:'Baidu News',
time:''
},

{
type:'Other',
href:'log.txt',
target:'_blank',
title:'View Log',
time:'[2008-10-02]'
},

{
type:'Other',
href:'/web/jobs.php',
target:'_blank',
title:'JOBS INFO',
time:'[2011-04-17]'
},


{
type:'Java Related',
href:'http://java.sun.com/j2se/1.5.0/docs/',
target:'_blank',
title:'J2SE 1.5 Reference',
time:'[2010-05-12]'
},

{
type:'Java Related',
href:'http://wenson.javaeye.com/blog/65292',
target:'_blank',
title:'JDK Linux下安装',
time:'[2010-05-12]'
},

{
type:'Java Related',
href:'http://www.docjar.com/',
target:'_blank',
title:'DocJar',
time:'[2010-05-13]'
},


        
{
type:'Character Encoding',
href:'http://www.utf8-chartable.de/',
target:'_blank',
title:'Unicode & UTF8',
time:'[2010-07-01]'
},

{
type:'Character Encoding',
href:'http://ff.163.com/newflyff/gbk-list/',
target:'_blank',
title:'GBK',
time:'[2010-07-01]'
},

           

{
type:'MySQL Related',
href:'http://dev.mysql.com/doc/',
target:'_blank',
title:'MySQL Manual',
time:'[2010-03-20]'
},

{
type:'MySQL Related',
href:'http://dev.mysql.com/doc/refman/5.0/en/multiple-unix-servers.html',
target:'_blank',
title:'Running Multiple Servers on Unix',
time:'[2010-03-20]'
},


{
type:'Lighttpd Related',
href:'http://redmine.lighttpd.net/wiki/lighttpd/Docs',
target:'_blank',
title:'Lighttpd Online Docs',
time:'[2011-11-30]'
},

{
type:'Apache Related',
href:'http://httpd.apache.org/docs/2.2/',
target:'_blank',
title:'Apache HTTP Server Version 2.2 Documentation',
time:'[2009-04-27]'
},

{
type:'Apache Related',
href:'http://tomcat.apache.org/tomcat-5.5-doc/index.html',
target:'_blank',
title:'The Apache Tomcat 5.5 Servlet/JSP Container',
time:'[2010-05-16]'
},

{
type:'Apache Related',
href:'http://tomcat.apache.org/tomcat-5.5-doc/architecture/startup/serverStartup.txt',
target:'_blank',
title:'Tomcat 5 Startup Sequence',
time:'[2010-05-22]'
},

{
type:'Apache Related',
href:'http://ant.apache.org/manual/index.html',
target:'_blank',
title:'Apache Ant Manual',
time:'[2010-05-22]'
},

{
type:'Apache Related',
href:'http://logging.apache.org/log4j/1.2/manual.html',
target:'_blank',
title:'Apache Logging Service log4j',
time:'[2010-06-01]'
},

{
type:'Apache Related',
href:'http://httpd.apache.org/docs/2.2/platform/windows.html',
target:'_blank',
title:'Apache on Windows Platform',
time:'[2010-08-27]'
},

{
type:'Apache Related',
href:'http://httpd.apache.org/docs/2.2/urlmapping.html',
target:'_blank',
title:'Mapping URLs to Filesystem Locations',
time:'[2010-09-03]'
},

{
type:'Apache Related',
href:'http://httpd.apache.org/mod_fcgid/',
target:'_blank',
title:'Apache mod_fcgid',
time:'[2011-07-04]'
},

    



{
type:'Forum',
href:'http://hi.baidu.com/baby_xiaomi',
target:'_blank',
title:'Baby Laopo',
time:'[2010-03-03]'
},

{
type:'Forum',
href:'forum/index.php',
target:'_blank',
title:'Forum',
time:'[2008-10-07]'
},
	


{
type:'Review Board',
href:'http://www.reviewboard.org/docs/manual/dev/admin/installation/linux/',
target:'_blank',
title:'Review Board Installation',
time:'[2011-04-02]'
},
	


{
type:'Regular Expression',
href:'http://www.troubleshooters.com/codecorn/littperl/perlreg.htm',
target:'_blank',
title:'Perl Regular Expressions',
time:'[2008-10-08]'
},


{
type:'Perl Programming',
href:'http://perldoc.perl.org/index-language.html',
target:'_blank',
title:'Perl Language Reference',
time:'[2009-04-15]'
},


{
type:'Python Programming',
href:'http://docs.python.org/reference/',
target:'_blank',
title:'Python Language Reference',
time:'[2010-05-23]'
},


{
type:'Design Patterns',
href:'http://baike.baidu.com/view/31.htm',
target:'_blank',
title:'MVC(Model-View-Controller)',
time:'[2009-04-29]'
},

        
{
type:'Batch File Programming',
href:'http://www.askapache.com/windows/advanced-batch-scripting.html',
target:'_blank',
title:'Advanced Windows Batch File Scripting',
time:'[2010-12-02]'
},




{
type:'Windows Programming',
href:'http://msdn.microsoft.com/en-us/library/aa383749(VS.85).aspx',
target:'_blank',
title:'Windows32 API Ref',
time:'[2009-02-20]'
},

{
type:'Windows Programming',
href:'http://msdn.microsoft.com/en-us/library/aa367088(v=VS.85).aspx',
target:'_blank',
title:'MIDL Language Reference',
time:'[2010-06-01]'
},

{
type:'Windows Programming',
href:'http://www.vckbase.com/vckbase/columnist/yangfeng/',
target:'_blank',
title:'COM组件设计与应用',
time:'[2009-02-20]'
},

{
type:'Windows Programming',
href:'http://www.wintellect.com/books.aspx',
target:'_blank',
title:'Windows核心编程（C & C++）',
time:'[2009-08-30]'
},

{
type:'Windows Programming',
href:'http://www.functionx.com/win32/index.htm',
target:'_blank',
title:'Win32 Programming',
time:'[2009-12-06]'
},

{
type:'Windows Programming',
href:'http://msdn.microsoft.com/en-us/library/ty9hx077%28v=VS.90%29.aspx',
target:'_blank',
title:'Visual C++ Reference',
time:'[2010-04-04]'
},

{
type:'Windows Programming',
href:'http://msdn.microsoft.com/en-us/library/ee663263(VS.85).aspx',
target:'_blank',
title:'Component Development',
time:'[2010-03-14]'
}
		
	];

    Mc.Template.buildList(config, orders);
    console.log('test');

})();
