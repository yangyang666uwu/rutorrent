
---

# Plugin Login Mgr #

---




## Description ##

This plugin is used to login to 3rd party torrent sites.  It's designed to be used in cased where cookies fail.  It is a support plugin used for [RSS](PluginRSS.md) and [ExtSearch](PluginExtsearch.md)

_**NOTE:  This plugin saves passwords in plain text.**_

## Installation ##

If you are using the tarball install of rutorrent 3.2, you can download this plugin from the same download page.

Assuming you've installed rutorrent to /var/www/rutorrent you could use the following commands:


```
cd /var/www/rutorrent/plugins/
wget http://rutorrent.googlecode.com/files/loginmgr-3.2.tar.gz
tar xzfv loginmgr-3.2.tar.gz
rm -f loginmgr-3.2.tar.gz
```

If you are using the svn version of rutorrent, you can also install this plugin via SVN.  Assumine the same /var/www/rutorrent/ install directory, you could use the following commands:

```
cd /var/www/rutorrent/plugins/
svn co http://rutorrent.googlecode.com/svn/trunk/plugins/loginmgr
```

## Usage ##

At the time of the writting of this wiki, this plugin is being used for the following sites:

  * HDDream
  * RUTracker
  * WhatCD
  * BTN
  * ILoveTorrents
  * PlayTheNet
  * TorrentDamage
  * FtN


The configuration is all done via the WebUI.  Click the Settings button:


![http://rutorrent.googlecode.com/svn/wiki/images/icon06settings.png](http://rutorrent.googlecode.com/svn/wiki/images/icon06settings.png)


Then, on the left side select "Accounts"  Which should bring up the menu shown here:


![http://img.skitch.com/20101116-eg2msiyireex4k659uj1d6i87h.png](http://img.skitch.com/20101116-eg2msiyireex4k659uj1d6i87h.png)


  1. **_Accounts tab, This opens the gui settings for LoginMgr_**
  1. **_Login:  Enter the username for the site here_**
  1. **_Password:  Enter the password for the site here_**
  1. **_Enabled Checkbox:  Enabled/Disable LoginMgr for each site_**