
---

# Plugin Theme #

---




## Description ##

This plugin allows you to change the gui theme to one of several provided themes, or any your create, provided they are placed in the proper directory within the plugin.


## Installation ##

If you are using rutorrent 3.2 downloaded via tarball from the main download page, you can download this plugin via tarball and extract it to your plugins directory.

Assuming your install is at /var/www/rutorrent, you'd do something like this:

```
cd /var/www/rutorrent/plugins/
wget http://rutorrent.googlecode.com/files/theme-3.2.tar.gz
tar xzfv theme-3.2.tar.gz
rm -f theme-3.2.tar.gz
```

If you are using the svn version of rutorrent, you can download this plugin via svn.  Assuming the same install directory of /var/www/rutorrent you'd do the following:


```
cd /var/www/rutorrent/plugins/
svn co http://rutorrent.googlecode.com/svn/trunk/plugins/theme
```

## Configuration ##

You can set a default theme by editing the config file.
In the example following, i've set the default theme to Oblivion

```
<?php

$defaultTheme = "Oblivion"; // May be "", "Oblivion", "Dark", "Blue" or "Acid"

?>
```

_**Note:  This default setting can be changed via the webui.  If it's not set, the default theme will be used**_

### Adding themes ###

If you write a theme, you can add it by simply placing it in the rutorrent/plugins/theme/themes/ directory.  How to write themes is outside of the scope of this document.  For reference, look at the files included in one of the current themes.

## Usage ##

To change the theme from the webui, click the Settings button:

> ![http://rutorrent.googlecode.com/svn/wiki/images/icon06settings.png](http://rutorrent.googlecode.com/svn/wiki/images/icon06settings.png)

Next, select the "Theme" dialog as shown here:

![http://img.skitch.com/20101116-tk1hfpe8qaijsan8im4riyjn74.png](http://img.skitch.com/20101116-tk1hfpe8qaijsan8im4riyjn74.png)

Then select one of the themes from the dropdown menu:

![http://img.skitch.com/20101116-dcjyb3x1mpur4x42ejgpbwt6q2.png](http://img.skitch.com/20101116-dcjyb3x1mpur4x42ejgpbwt6q2.png)