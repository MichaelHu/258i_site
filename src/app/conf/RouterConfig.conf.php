<?php

RouterConfig::$patterns = array(
	'/tn=index/i' => array(
		'handler' => 'Com258i_IndexHandler',
	), 

	'/.*/' => array(
		'handler' => 'Com258i_IndexHandler',
	), 
);
