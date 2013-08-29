<?php

// general configurations
if(!defined('MC_OFFLINE')){
    define('MC_ENGINE_ROOT', '/home/hdm0571qh2dsm7095i7p1/others/mcphp2/');
}
else{
    define('MC_ENGINE_ROOT', '/Users/hudamin/projects/git/mcphp/src/');
}

define('MC_ROOT', dirname(__FILE__));
define('MC_TEMPLATE_DIR', MC_ROOT . '/tpl/com258i/');
define('MC_DEFAULT_TN', 'index');
define('MC_TMP_ROOT', MC_ROOT . '/tmp/');

define('MC_LIBS_ROOT', MC_ROOT . '/libs/');
define('MC_CONF_ROOT', MC_ROOT . '/conf/');
define('MC_UTILS_ROOT', MC_ROOT . '/utils/');
define('MC_HANDLERS_ROOT', MC_ROOT . '/handlers/');
define('MC_MODULE_ROOT', MC_ROOT . '/module/');

define('MC_SMARTY_DIR', MC_ENGINE_ROOT . '/third/Smarty-3.1.5/');

// customized configuration goes here
// define('DOC_ROOT', '/Users/hudamin/docs/linux_shell/');

// auto search paths
$GLOBALS['MC_AUTOLOAD_DIRS'] = array(
	MC_LIBS_ROOT,
	MC_CONF_ROOT,
	MC_UTILS_ROOT,
	MC_HANDLERS_ROOT,
	MC_MODULE_ROOT,
);

require_once(MC_ENGINE_ROOT . '/init.php');

