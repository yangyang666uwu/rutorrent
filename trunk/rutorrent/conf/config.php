<?php

// For snoopy client.
@define('HTTP_USER_AGENT', 'Mozilla/5.0 (Windows NT 6.0; WOW64; rv:12.0) Gecko/20100101 Firefox/12.0', true);

@define('HTTP_TIME_OUT', 30, true); // (in seconds)

@define('HTTP_USE_GZIP', true, true);

// IP string. Set to null for any.
$httpIP = null;

@define('RPC_TIME_OUT', 5, true); // (in seconds)

@define('LOG_RPC_CALLS', false, true);

@define('LOG_RPC_FAULTS', true, true);

// For php.
// Enables or disables use of the external gzip binary. Can't be used if php
// is already being compressed (for example, if zlib.output_compression is on).
@define('PHP_USE_GZIP', false, true);

// Compression level of the above 'gzip' option.
@define('PHP_GZIP_LEVEL', 2, true);

// Rand for scheduler start, +0..X seconds.
$schedule_rand = 10;

// Set to false to skip some diagnostics, for example, permission checking.
$do_diagnostic = true;

// Path to log file. Set to '' to disable logging.
$log_file = '/tmp/errors.log';

// If set to true, all .torrent files added via webui will be saved in share/torrents
// (or share/users/USERNAME/torrents) directory. If set to false, all .torrent files
// will be deleted after being added.
$saveUploadedTorrents = true;

// Set to true to overwrite existing .torrent files in share/torrents
// (or share/users/USERNAME/torrents) directory, set to false to use unique names.
// This setting has no meaning if '$saveUploadedTorrents' is set to false.
$overwriteUploadedTorrents = false;

// Absolute path (with trailing slash!) to top available directory.
$topDirectory = '/';

// Set to true to enable single user style configuration (even with webauth).
$forbidUserSettings = false;

// '$scgi_port' and '$scgi_host' must match 'scgi_port' setting in rTorrent
// configuration file.
$scgi_port = 5000;
$scgi_host = "127.0.0.1";

// For webserver->rTorrent connection via unix domain socket, change '$scgi_port'
// and '$scgi_host' variables to something like this ('$scgi_host' must match
// 'scgi_local' setting in rTorrent configuration file):
//$scgi_port = 0;
//$scgi_host = "unix:///tmp/rpc.socket";

// DO NOT DELETE THIS LINE!!! DO NOT COMMENT THIS LINE!!!
$XMLRPCMountPoint = "/RPC2";

// Path to external binaries (e.g. /usr/bin/php). Set to '' to search in $PATH.
$pathToExternals = array(
    "php"	=> '',
    "curl"	=> '',
    "gzip"	=> '',
    "id"	=> '',
    "stat"	=> '',
);

// List of local interfaces.
$localhosts = array(
    "127.0.0.1",
    "localhost",
);

// Path to user profiles.
$profilePath = '../share';

// Permission mask for files and directories in user profiles. Both webserver user
// and rtorrent user must have read-write access. For example, if webserver user
// and rtorrent user are in the same group, the value may be 0770.
$profileMask = 0777;

// Absolute path (with trailing slash!) to temporary directory. Set to null to autodetect.
$tempDirectory = null;
