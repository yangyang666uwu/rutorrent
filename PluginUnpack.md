
---

# Plugin Unpack #

---




&lt;wiki:TOC /&gt;



## Description ##

This plugin is designed to manually or automatically unrar/unzip torrent data.

## Manual Unpack ##

To manually unpack a torrent, right click on the seeding torrent and select unpack, like shown in this screenshot:

![http://rutorrent.googlecode.com/svn/wiki/images/PluginUnpack/snip01.png](http://rutorrent.googlecode.com/svn/wiki/images/PluginUnpack/snip01.png)

You can also launch a manual unpack from the "files" tab as shown here:

![http://rutorrent.googlecode.com/svn/wiki/images/PluginUnpack/snip02.png](http://rutorrent.googlecode.com/svn/wiki/images/PluginUnpack/snip02.png)

This will open the "Unpack" Dialog window, as shown here:

![http://rutorrent.googlecode.com/svn/wiki/images/PluginUnpack/snip03.png](http://rutorrent.googlecode.com/svn/wiki/images/PluginUnpack/snip03.png)

If you wish to unpack the data to the directory it is in, simply click "OK" , otherwise, enter a directory in the space provided
_(note:  having [the \_getdir plugin](Plugin_getdir.md) can be very helpful, otherwise you have to manually type the directory here)_

![http://rutorrent.googlecode.com/svn/wiki/images/PluginUnpack/snip05.png](http://rutorrent.googlecode.com/svn/wiki/images/PluginUnpack/snip05.png)

Once you click "OK", your file should unpack, showing something like this in the Logger

![http://rutorrent.googlecode.com/svn/wiki/images/PluginUnpack/snip04.png](http://rutorrent.googlecode.com/svn/wiki/images/PluginUnpack/snip04.png)


## Automatic Unpack ##

To automatically unpack torrents, you need to open settings

![http://rutorrent.googlecode.com/svn/wiki/images/PluginUnpack/settingsb.png](http://rutorrent.googlecode.com/svn/wiki/images/PluginUnpack/settingsb.png)

Then select "unpack" from the list on the left.  Notice "enable autounpacking", Check this box.


![http://rutorrent.googlecode.com/svn/wiki/images/PluginUnpack/auto01.png](http://rutorrent.googlecode.com/svn/wiki/images/PluginUnpack/auto01.png)


Next, enter the patch you'd like files unpacked to.

![http://rutorrent.googlecode.com/svn/wiki/images/PluginUnpack/auto02.png](http://rutorrent.googlecode.com/svn/wiki/images/PluginUnpack/auto02.png)

Notice you have 2 other options: "Torrent Label" and "Torrent Name"  these create directories for the unpacked items.   If you select both, you'll end up with a directory structure like this:

![http://rutorrent.googlecode.com/svn/wiki/images/PluginUnpack/struct.png](http://rutorrent.googlecode.com/svn/wiki/images/PluginUnpack/struct.png)


When you're done setting it up, it should look something like this:

![http://rutorrent.googlecode.com/svn/wiki/images/PluginUnpack/auto03.png](http://rutorrent.googlecode.com/svn/wiki/images/PluginUnpack/auto03.png)

Click ok to save.
