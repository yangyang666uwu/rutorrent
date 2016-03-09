
---

# Installation #

---




## Introduction ##

Rutorrent can be installed on most unix type operating systems.


## Dependencies ##
  * Unix Like OS
  * [rTorrent](http://libtorrent.rakshasa.no/) (compiled with [xmlrpc](http://xmlrpc-c.sourceforge.net/))
  * [PHP](http://php.net/)
  * (recommended)  [screen](http://www.gnu.org/software/screen/) or [detatch](http://www.freebsdsoftware.org/sysutils/detach.html)
  * [Web Server](WebSERVER.md)

## How to Install ##
  * [Main Install](MainInstall.md)
  * [Plugins Install](Plugins#Installation.md)

### Install Scripts ###

Currently an autodl-setup script is available in sourceforge. Use at your own risk, though:

http://sourceforge.net/projects/autodl-irssi/files/

## How to Upgrade ##

Upgrading rutorrent isn't that difficult if you track the svn version and do so often, but from time to time, things change and require reseting config file. If you are upgrading from 2.x to 3.0 there are a couple guidelines/tips.

### Differences in layout ###

2.x had 2 major config files for the base install. (rutorrent/rs.js and rutorrent/config.php) 3.x is more organized, all php files are in rutorrent/php/ all javascript files are in rutorrent/js/ all config files are in rutorrent/conf (_with the exception of the plugins, each plugin has it's own files_). This change in layout is important when trying to upgrade from 2.x to 3.0. Another new directory, in 3.0 is rutorrent/share/. This directory is for the webserver and rtorrent to write volatile data files. The addition of this dir is a welcome change because:
  * This allows you to keep all other files owned by some non-privileged user such as root (so long as the webuser has READ access, rutorrent will run file)
  * You only need to give the webuser write access to this directory.
  * This directory needs to be read/write accessable to both the webuser AND the rtorrent users.  If you change ownership of share/ to the webuser, rutorrent will handle permission settings (by making directories 777 and files 666). If for some reason these permissions get broked, you can fix them with the following commands from your rutorrent directory (the following example assumes www-data as the webuser and rutorrent install to be /var/www/rutorrent)

```
cd /var/www/rutorrent
chown -R www-data:www-data share/
find share/ -type d -exec chmod 777 {} \;
find share/ -type f -exec chmod 666 {} \;
```

2.x also required you to give write access to many directories in the plugins path (for example, if you used the rss plugin in 2.x you had to give the webuser write access to rutorrent/plugins/rss/cache/).
In 3.0, you do not need to do this, each plugin will save data somewhere under the rutorrent/share/ hierarchy.

### Single user (or no Web Auth) OR Multiuser (Web Auth) ###

3.0 adds multiuser support. It does this via the webserver authentication setup. (If you are using web server auth, then for the purposes of this page, you are using a multi-user setup). Each user can have his own config files. (For more info see [Config](Config.md)).

A single user setup will keep data files in rutorrent/share/settings and torrents in rutorrent/share/torrents/. A multiuser setup will keep data files in rutorrent/share/users/USERNAME/settings/ and torrents in rutorrent/share/users/USERNAME/torrents. You can copy your the important data files from 2.x to these directories (cookies.dat for instance) though it's probably best to let 3.0 create new data files. The stuff most people wish to backup, however, is plugin data.  This is done by creating a directory for the plugin and copying over the data files.

For example, for the rss plugin, for user tom where rutorrent 3.0 has been installed to /var/www/rutorrent (and the old data files are at /var/www/old/) you would do something like this:

```
mkdir -p /var/www/rutorrent/share/users/tom/settings/rss/
cp -r /var/www/old/plugins/rss/cache /var/www/rutorrent/share/users/tom/settings/rss/cache/
chown -R www-data:www-data /var/www/rutorrent/share/
find /var/www/rutorrent/share/ -type d -exec chmod 777 {} \;
find /var/www/rutorrent/share/ -type f -exec chmod 666 {} \;
```

This same principle will work for MOST plugins.

### A note on upgrading ###

It should be noted that when upgrading rutorrent (or a plugin)

To upgrade, the process is to:
  1. stop rtorrent
  1. upgrade
  1. restart rtorrent

If you fail to do this, stop/start rtorrent, you may end up with non-working plugins.