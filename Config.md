
---

# Configuration #

---




## Introduction ##

How to configure rutorrent, and what each option is for.

## Basics ##

Since 3.0, ruTorrent keeps all config info for the webui (excluding plugins) in the conf/ directory

(for example, if you installed rutorrent to /var/www/rutorrent the config files would be in

```
/var/www/rutorrent/conf
```

The base install comes with 3 config files:

  1. config.php
  1. plugins.ini
  1. access.ini

For a single user system (or a system without authentication)  It's fine to keep these files in the conf/ directory.  For multiple user systems, or systems using web auth, create a subdirectory for each user in conf/users/ with the webauth username
(note:  This name may or may not be the same as the user actually running rtorrent)

for example, if you wanted 3 users named tom dick and harry and you had rutorrent installed to /var/www/rutorrent you might do something like this:

```
mkdir /var/www/rutorrent/conf/users/tom
mkdir /var/www/rutorrent/conf/users/dick
mkdir /var/www/rutorrent/conf/users/harry
cp /var/www/rutorrent/conf/config.php /var/www/rutorrent/conf/users/tom/
cp /var/www/rutorrent/conf/config.php /var/www/rutorrent/conf/users/dick/
cp /var/www/rutorrent/conf/config.php /var/www/rutorrent/conf/users/harry/
```

If you want to set up different plugin settings for each user, simply create a directory named plugins under the users conf/users directory, and create another directory with the specific plugin name, then copy the original conf.php file for that plugin to the new directory.  For example, if you wish to have different settings for the rss plugin for the user "tom" you'd do something like this:

```
mkdir -p /var/www/rutorrent/conf/users/tom/plugins/rss
cp /var/www/rutorrent/plugins/rss/conf.php /var/www/rutorrent/conf/users/tom/plugins/rss
```

then edit the conf.php file with the user specific settings.


### config.php ###

This file is the probably the most important config file in the rutorrent base install.  It controls many options.  By default, it looks like this:


```
<?php
	// configuration parameters

	// for snoopy client
	@define('HTTP_USER_AGENT', 'Mozilla/5.0 (Windows; U; Windows NT 5.1; pl; rv:1.9) Gecko/2008052906 Firefox/3.0', true);
	@define('HTTP_TIME_OUT', 30, true);	// in seconds
	@define('HTTP_USE_GZIP', true, true);

	@define('RPC_TIME_OUT', 5, true);	// in seconds

	@define('LOG_RPC_CALLS', false, true);
	@define('LOG_RPC_FAULTS', true, true);

	// for php	
	@define('PHP_USE_GZIP', false, true);
	@define('PHP_GZIP_LEVEL', 2, true);

	$do_diagnostic = true;
	$log_file = '';		// path to log file (comment or make empty to disable logging)

	$saveUploadedTorrents = true;		// Save uploaded torrents into profile/torrents directory or not
	$overwriteUploadedTorrents = false;     // Overwrite existing uploaded torrents into profile/torrents directory or make unique name

	$topDirectory = '/';			// Upper available directory. Absolute path with trail slash.
	$forbidUserSettings = false;

	$scgi_port = 0;
	$scgi_host = "";

	// For web->rtorrent link through unix domain socket 
	// (scgi_local in rtorrent conf file), change variables 
	// above to something like this:
	//
	// $scgi_port = 0;
	// $scgi_host = "unix:///tmp/rpc.socket";

	$XMLRPCMountPoint = "/RPC2";		// DO NOT DELETE THIS LINE!!! DO NOT COMMENT THIS LINE!!!

	$pathToExternals = array(
		"php" 	=> '',			// Something like /usr/bin/php. If empty, will be found in PATH.
		"curl"	=> '',			// Something like /usr/bin/curl. If empty, will be found in PATH.
		"gzip"	=> '',			// Something like /usr/bin/gzip. If empty, will be found in PATH.
		"id"	=> '',			// Something like /usr/bin/id. If empty, will be found in PATH.
		"stat"	=> '',			// Something like /usr/bin/stat. If empty, will be found in PATH.
	);

	$localhosts = array( 			// list of local interfaces
		"127.0.0.1", 
		"localhost",
	);

	$profilePath = '../share';		// Path to users profiles
	$profileMask = 0777;			// Mask for files and directory creation in users profiles. 
						// Both web-server and rtorrent users must have read-write access to its.
						// For example, if web-server and rtorrent users are in some group then value may be 0770

?>

```



#### For Snoopy Client Options ####

These options should be left alone

#### For PHP options ####


  * `@define('PHP_USE_GZIP', false, true);`

This option enables or disables use of the external gzip binary.  If changed from false to true -  all php generated pages > 2K will be gzipped by the external 'gzip' binary. This
  1. Decreases trafic (bandwidth)
  1. Increases server load (cpu time and memory use)
  1. Can't be used if php is already being compressed (for example, if zlib.output\_compression is on)

  * `@define('PHP_GZIP_LEVEL', 2, true);`

This option controls the compression level of the above 'gzip' option


  * `$do_diagnostic = true;`

If this is false, some diagnostics (permission checking, for example) will be skipped. This is true by default.

  * `$log_file = '/tmp/errors.log';`

Log file path for some errors messages etc. _(if you wish to disable this, simply change it to
```
$log_file = '';
```_

  * `$saveUploadedTorrents = true;`

If true, all .torrent files added via webui will be saved in share/torrents _(or share/users/USERNAME/torrents)_. If false, all .torrent files will be deleted after being added.

  * `$topDirectory = '/';`

Chroot directory for user.  Users have no access to directories below the "Top" directory.  Also used by plugins like _getdir, diskspace ect._


  * `$forbidUserSettings = false;`

If true, allows for single user style configuration, even with webauth

  * `$scgi_port = 5000;`

SCGI port -  This is the scgi port.  For multi-user setups, each user would get a different port number (unless you are using unix based sockets)

  * `$scgi_host = "127.0.0.1";`

SCGI Host - This will almost always be 127.0.0.1 (unless using unix based socket, in which case it would be something like `$scgi_host = "unix:///tmp/rpc.socket";` )


  * `$XMLRPCMountPoint = "/RPC2";`

XMLRPC Mount Point  - This defaults to /RPC2 but can be set to anything inside your webspace.  If you are setting up multiple users, each user would get a different setting here.  This setting is required, don't remove it.

  * External Program Paths
```
$pathToExternals = array(
 "php"  => '',   // Something like /usr/bin/php. If empty, will be founded in PATH.
 "curl" => '',   // Something like /usr/bin/curl. If empty, will be founded in PATH.
 "gzip" => '',   // Something like /usr/bin/gzip. If empty, will be founded in PATH.
 "id" => '',   // Something like /usr/bin/id. If empty, will be founded in PATH.
```

This should be pretty self explanatory.  Set each option with the proper binary path.

For instance, on a FreeBSD system, it might look like this:

```
$pathToExternals = array(
 "php"  => '/usr/local/bin/php',   // Something like /usr/bin/php. If empty, will be founded in PATH.
 "curl" => '/usr/local/bin/curl',   // Something like /usr/bin/curl. If empty, will be founded in PATH.
 "gzip" => '/usr/bin/gzip',   // Something like /usr/bin/gzip. If empty, will be founded in PATH.
 "id" => '/usr/bin/id',   // Something like /usr/bin/id. If empty, will be founded in PATH.
);
```

### Limiting settings (access.ini) ###

If you want to limit a users access to specific settings, copy the access.ini from the base conf/ directory to the specific user directory, then edit it accordingly.

This is what the base file looks like:

```
;; ruTorrent permissions.
;; By default all flags is assumed as "yes".

[settings]
showDownloadsPage = yes
showConnectionPage = yes
showBittorentPage = yes
showAdvancedPage = yes

[tabs]
showPluginsTab = yes

[statusbar]
canChangeULRate = yes
canChangeDLRate = yes

[dialogs]
canChangeTorrentProperties = yes
```

These options are pretty self explanatory.

so, to limit some of these settings for user tom, simply copy the file to tom's direcory and edit the file, changing the "yes" to "no" under the appropriate section.

```
cp /var/www/rutorrent/conf/access.ini /var/www/rutorrent/conf/users/tom/
```


### Limiting Plugins (plugins.ini) ###

You can limit plugins in much the same manner.  It's also possible to have plugins which you allow for one user, but disable for another.  This is handled by way of the plugins.ini file.

The Default plugins.ini file looks like this:

```
;; Plugin's permissions. 
;; If flag not founded in plugin section, it finded in section "default".
;; If not founded in this section - it assumed as "yes". 
;;
;; For setting individual plugin's permissions you must write something like that:
;;
;; [ratio]
;; enabled = yes
;; canChangeToolbar = yes
;; canChangeMenu = yes
;; canChangeOptions = no
;; canChangeTabs = yes
;; canChangeColumns = yes

[default]
enabled = yes
canChangeToolbar = yes
canChangeMenu = yes
canChangeOptions = yes
canChangeTabs = yes
canChangeColumns = yes
canChangeStatusBar = yes
canChangeCategory = yes
```

to disable a plugin, simply create a section with the plugin and changed enabled = yes to enabled = no.  so, to disable the rss plugin for top you'd copy the plugins.ini file to his directory:
```
cp /var/www/rutorrent/conf/plugins.ini /var/www/rutorrent/conf/users/tom/
```

then edit the file, adding something like this:

```
[rss]
enabled = no
```