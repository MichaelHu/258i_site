<?php

RouterConfig::$patterns = array(
	'/tn=index/i' => array(
		'handler' => 'Com258i_IndexHandler',
	), 

	'/tn=markdown/i' => array(
		'handler' => 'Com258i_MarkdownHandler',
	), 

	'/tn=notes/i' => array(
		'handler' => 'Com258i_NotesHandler',
	), 

	'/.*/' => array(
		'handler' => 'Com258i_IndexHandler',
	), 
);
