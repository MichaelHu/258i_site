<?php

RouterConfig::$patterns = array(
	'/tn=index/i' => array(
		'handler' => 'Com258i_IndexHandler',
	), 

	'/tn=markdown/i' => array(
		'handler' => 'Com258i_MarkdownHandler',
	), 

	'/.*/' => array(
		'handler' => 'Com258i_IndexHandler',
	), 
);
