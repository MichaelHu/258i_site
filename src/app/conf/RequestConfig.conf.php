<?php

/*
 * 逻辑选择参数配置
 * default: 默认值，当前上下文获取不到的时候，使用默认值
 * source: 参数来源，例子如下：
 *         requestParams|tn 表示来自请求参数, request->requestParams['tn']
 *         cookie|baiduid 表示来自Cookie, request->cookie['baiduid']
 *         requestData|fname 表示来自请求数据, request->requestData['fname']
 * pattern: 正则表达式，用于参数有效性检查
 */
RequestConfig::$logicParams = array(

    // 模板参数，必选
	'tn' => array(
		'default'=>'index', 
		'source'=>'requestParams|tn',
		'pattern'=>'/^(?:index|markdown|notes)$/',
	),

    // tn=markdown
    'tn:markdown' => array(
        'act' => array(
            'default'=>'get_article', 
            'source'=>'requestParams|act',
            'pattern'=>'/^(?:list_articles|get_article)$/',
        ),

        'title' => array(
            'default'=>'', 
            'source'=>'requestParams|title',
            'pattern'=>'/^.+$/',
        ),

        'tag' => array(
            'default'=>'', 
            'source'=>'requestParams|tag',
            'pattern'=>'/^.+$/',
        ),
    ),

    // tn=notes
    'tn:notes' => array(
        'act' => array(
            'default'=>'getNotesWithLineNo', 
            'source'=>'requestParams|act',
            'pattern'=>'/^(?:'
                . 'getNotesWithLineNo'
                . '|' . 'getNotesWithArticleID'
                . '|' . 'getArticleAbstracts'
                . '|' . 'searchNotes'
                . ')$/i',
        ),

        'key_words' => array(
            'default'=>'', 
            'source'=>'requestParams|key_words',
            'pattern'=>'/^.+$/',
        ),

        'from' => array(
            'default'=>'0', 
            'source'=>'requestParams|from',
            'pattern'=>'/^\d+$/',
        ),

        'count' => array(
            'default'=>'50', 
            'source'=>'requestParams|count',
            'pattern'=>'/^\d+$/',
        ),

        'from_article_id' => array(
            'default'=>'1', 
            'source'=>'requestParams|from_article_id',
            'pattern'=>'/^\d+$/',
        ),

        'article_id' => array(
            'default'=>'1', 
            'source'=>'requestParams|article_id',
            'pattern'=>'/^\d+$/',
        ),

        'line' => array(
            'default'=>'1', 
            'source'=>'requestParams|line',
            'pattern'=>'/^\d+$/',
        ),

        'direction' => array(
            'default'=>'1', 
            'source'=>'requestParams|direction',
            'pattern'=>'/^-?\d+$/',
        ),

        'context_num' => array(
            'default'=>'25', 
            'source'=>'requestParams|context_num',
            'pattern'=>'/^\d+$/',
        ),
    ),

);


