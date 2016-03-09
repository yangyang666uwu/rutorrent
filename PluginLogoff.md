
---

# Plugin Logoff #

---




&lt;wiki:TOC /&gt;



## Description ##

This plugin allows you to switch users or logoff on systems which use authentication.


### Installation ###

You can install via tarball or svn.

Assuming rutorrent is installed at /var/www/rutorrent/, to install via tarball do the following:

```
cd /var/www/rutorrent/plugins/
wget http://rutorrent-logoff.googlecode.com/files/logoff-1.0.tar.gz
tar -zxf logoff-1.0.tar.gz
```

Assuming the same install path, to install via svn do the following:

```
cd /var/www/rutorrent/plugins/
svn checkout http://rutorrent-logoff.googlecode.com/svn/trunk/ logoff
```

**Important:  Currently this plugin _WILL NOT WORK_ if the directory isn't named "logoff", this may change in the future**



### Usage ###

This plugin adds the following icon to the top bar:

![http://img.skitch.com/20101205-kd9c924tren8maxxfsnkyekiqp.png](http://img.skitch.com/20101205-kd9c924tren8maxxfsnkyekiqp.png)


When clicked, it will bring up the following window:

![http://img.skitch.com/20101205-ewkubyt9y18t4cmji1n6mcdh1s.png](http://img.skitch.com/20101205-ewkubyt9y18t4cmji1n6mcdh1s.png)

If you wish to change user, enter the users name/password in the proper locations and click "Switch User", otherwise click "Log Off" to Log off or "Cancel" to get back to rutorrent as the current user.


**Note: Currently, if you enter bad information, such as the wrong username or password, you will need to kill the page and reload, otherwise you end up in an infinite loop.**


For more information, see the original forum thread here:

http://forums.rutorrent.org/index.php?topic=564.0