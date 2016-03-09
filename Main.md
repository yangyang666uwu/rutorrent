
---

# Description #

---




## Introduction ##

ruTorrent is a web frontend for [rtorrent](http://libtorrent.rakshasa.no/) designed to emulate the look and feel of [µTorrent WebUI](http://www.utorrent.com/documentation/webui) so it's appearance is quite similar to the "parent".  The name "RuTorrent" is the combination of µTorrent and rTorrent.

The original version of ruTorrent was based on an older version of µTorrent Webui but has been completely rewritten as of 3.0.

## Requirements ##

  * [rTorrent](http://libtorrent.rakshasa.no/) 0.8.2 or later, compiled with [xmlrpc-c](http://xmlrpc-c.sourceforge.net/) support. If you don't know where to get it for your system, you are suggested to visit [rTorrent official site](http://libtorrent.rakshasa.no).
  * Web-server with [php 5.0](http://php.net/)
  * Browser as a local client:
    * IE 7.0, IE 8.0, Firefox 2.x, Firefox 3.x - for optimal compatibility.
    * IE 6.0 - not supported.
    * Konqueror 3.5.9 - OK, except charts on tabs Speed and Traffic.
    * Opera 9.x/10.x - works fine.
    * Safari 3.x - works, but pictures may not be displayed when https-protocol is used. Probably this is a browser issue. Try to adjust a server not to make keep-alive connections.
    * Google Chrome 4.1.249.1045 - the same as Safari. (_some users have reported issues with reloading in chrome, see issue 243_).

> Other browsers have not been tested yet.

## Setup and Configuration ##

For detailed setup and configuration information, see [Installation](Installation.md) [Web Server Setup](WebSERVER.md) and [Config](Config.md).  Any questions should be asked in the [support forums](http://forums.rutorrent.org). If you have an issue or a bug, [open a ticket](http://code.google.com/p/rutorrent/issues/entry).

## Not implemented ##

  * Authentication -  Currently rutorrent does not have any sort of authentication.  For authentication, use whatever your webserver supports.

## Some non-obvious points ##

  * Only enable the "Receive messages from tracker" option in the Settings panel for rTorrent v.0.8.5 or later. Otherwise it can lead to a crash because of incorrect processing of tracker's messages, containing non-UTF-8 characters, by rTorrent.
  * rTorrent Settings, changed by the user through the "Settings" panel in ruTorrent, are valid until rTorrent restart. After which all settings will be set according to the rTorrent config file ( .rotrrent.rc ).
  * If numbers greater than 2Gb are shown as negative, rTorrent should be recompiled with a xmlrpc-c version 1.11 or later.
  * If the port which rTorrent is listening for requests is changed, it is necessary to make appropriate changes in the ruTorrent configuration file ( _see [Config](Config.md) for more details_ ) - set the same port number in rutorrent/conf/config.php for the variable `$scgi_port`.
  * As stated above, Authentication should be provided by web-server only and does not depend on ruTorrent. If authentication is necessary, make sure the webroot and the scgi mount point are both protected (_if you mount the scgi directory in a subdirectory of the webroot, and enable authentication on the webroot, this is sufficent_) If either the [The RPC](PluginsRPC.md) or [HttpRPC](PluginHTTPRPC.md) plugin is used, the scgi mountpoint (for example, /RPC2 ) folder protection is not necessary.
  * If you are running a multi-user setup, each user should have a different scgi mountpoint.  You can name these mountpoints anything you like, provided you change the configuration settings accordingly, for more info see [Config](Config.md) and [web-servers](WebSERVER.md).

## Browsers' specialties ##

  * For proper page rendering of the context menus, make sure javascript is enabled in [Firefox](http://www.mozilla.com/en-US/firefox/firefox.html) and [Opera](http://www.opera.com/)
  * F1 shows included hot-keys.  This works flawlessly only in Firefox.
  * Some Browser Add-ons cause problems. (For example the Firefox Add-on [All-in-One-Gestures](http://pagesperso-orange.fr/marc.boullet/ext/extensions-en.html) prevents the context menus from loading properly, and so on.)

## [Rutorrent](http://forums.rutorrent.org) Forums ##

If you have any questions, please post them in the [forums](http://forums.rutorrent.org). If you have an issue, or have found a bug, please report it on the [Issues Page](http://code.google.com/p/rutorrent/issues/list).