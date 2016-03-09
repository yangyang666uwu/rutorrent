
---

# Create Plugin #

---




## Description ##

This plugin allows for the creation of new .torrent files from a file or directory full of files.

## Usage ##

To use this plugin, click the "Create a torrent" icon: ![http://rutorrent.googlecode.com/svn/wiki/images/icon08create.png](http://rutorrent.googlecode.com/svn/wiki/images/icon08create.png)

This should open the "Create new Torrent" window as shown below:

![http://rutorrent.googlecode.com/svn/wiki/images/PluginCreate/createbase.png](http://rutorrent.googlecode.com/svn/wiki/images/PluginCreate/createbase.png)

Next, add a file source **_(note: the [\_getdir](Plugin_getdir.md) plugin will make this a much easier process)_**

![http://rutorrent.googlecode.com/svn/wiki/images/PluginCreate/createselectsource.png](http://rutorrent.googlecode.com/svn/wiki/images/PluginCreate/createselectsource.png)

Next, fill in the tracker information **_(note: for public trackers, you may wish to enter more than one tracker here)_**


![http://rutorrent.googlecode.com/svn/wiki/images/PluginCreate/createtracker.png](http://rutorrent.googlecode.com/svn/wiki/images/PluginCreate/createtracker.png)

Optional: Select a "piece size"

![http://rutorrent.googlecode.com/svn/wiki/images/PluginCreate/createpiecesize.png](http://rutorrent.googlecode.com/svn/wiki/images/PluginCreate/createpiecesize.png)

Optional:  Fill in the checkboxed
  1. Start seeding _**this will add the torrent to the download list immediately upon creation**_
  1. Private Torrent _**select this if you are uploading to a private tracker**_

![http://rutorrent.googlecode.com/svn/wiki/images/PluginCreate/createcheckboxes.png](http://rutorrent.googlecode.com/svn/wiki/images/PluginCreate/createcheckboxes.png)


Click "Create ..." This will open the "Create Console window", here you can see the progress, any status information and errors that occur:

![http://rutorrent.googlecode.com/svn/wiki/images/PluginCreate/createrunning.png](http://rutorrent.googlecode.com/svn/wiki/images/PluginCreate/createrunning.png)

When everything is finished and you see "Done." in the status window, you have the option to download the .torrent file directly from rutorrent by clicking the "Save" button:

![http://rutorrent.googlecode.com/svn/wiki/images/PluginCreate/createsave.png](http://rutorrent.googlecode.com/svn/wiki/images/PluginCreate/createsave.png)



## Configuration ##

This plugin has a few config options.  Prior to 3.0, "create plugin" in it's default state couldn't handle large torrents.  If you are on a 64 bit os, this is no longer the case.

You can still use several external programs to create torrents with this plugin.  Currently the plugin supports:

  1. [transmissioncli](http://www.transmissionbt.com/) _**This is the cli install of  transmission, originally added because createtorrent was horribly slow on BSD systems**_
  1. createtorrent _**A linux command line tool for creating torrents**_
  1. [mktorrent](http://mktorrent.sourceforge.net/) _**A light weight, VERY SMALL command line torrent tool for bsd/linux**_
  1. [buildtorrent](http://claudiusmaximus.goto10.org/cm/torrent.html) _**Yet another lightweight command line tool for creating torrents**_

The default config file looks like this:


```
<?php
        // configuration parameters

        define('MAX_CONSOLE_SIZE',25,true);

        $useExternal = false;                   // Valid choices:
                                                // false - use internal realization (may be too slow for large files)
                                                // "transmissioncli" - use program transmissioncli (see http://www.transmissionbt.com/)
                                                // "createtorrent" - use program createtorrent (see http://www.createtorrent.com)
                                                // "mktorrent" - use program createtorrent (see http://mktorrent.sourceforge.net)
                                                // "buildtorrent" - use program buildtorrent (see http://claudiusmaximus.goto10.org/cm/torrent.html)
        $pathToCreatetorrent = '';              // Something like /bin/createtorrent, or /bin/transmissioncli. If empty, program will be founded in PATH.

?>
```

This should be pretty easy to understand, but some people still get this wrong.  If you are using an external program, pick the correct option, and change useExternal accordingly, so for example, for mktorrent, you'd change THIS:

```
        $useExternal = false;
```


TO THIS:

```
        $useExternal = 'mktorrent';
```

and, of course, add the proper PATH in the location provided, so keeping with our previous example, lets say mktorrent is located at /usr/local/bin/mktorrent, you'd change this:



```
 $pathToCreatetorrent = ''; 
```

to this:
```
 $pathToCreatetorrent = '/usr/local/bin/mktorrent'; 
```