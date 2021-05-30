<?php

/**
 * put this file to the docroot of your web server
 */

// 线下开发开启MC_OFFLINE
define('MC_OFFLINE', 1);

if(!defined('MC_OFFLINE')){
    require_once('/home/hdm0571qh2dsm7095i7p1/others/phpui/init.php');
}
else{
    require_once('/Users/hudamin/projects/git/258i_site/src/app/init.php');
}
Router::dispatch();

