
---

# Plugin Throttle #

---




&lt;wiki:TOC /&gt;



## Description ##

In rTorrent version 0.8.5 and later it is possible to set limits of speed for groups of torrents.
Throttle plug-in gives a convenient control over this possibility.
After this plug-in is installed a new option "Channels" will appear in the Settings dialog.
Speed limits for some (by default - 10) channels can be set here. Assignment of channel number for a particular torrent or for a group of torrents can be made in it's contextual menu.
Note - "0"-value, conventionally for rTorrent, means "no limits", but not "stop torrent". So the lowest possible limit is 1 Kbps.

![http://rutorrent.googlecode.com/svn/wiki/images/PluginThrottle/throttle.jpg](http://rutorrent.googlecode.com/svn/wiki/images/PluginThrottle/throttle.jpg)

## How does it work ##

When ruTorrent starts with installed Thtottle plug-in first time it makes channels with defined speed limits.
As these channels will be created after first ruTorrent start only, the speed limits will not work after rTorrent start until first after that start of ruTorrent.
To avoid this you need to add a special string to the rTorrent configuration file (see [How to start plugins with rtorrent](Plugins#Starting_plugins_with_rtorrent.md) for details).

## Some non-obvious points ##

  * Speed limits in regard to groups of torrents only works when there are global speed limits for whole system (it is the feature of rTorrent). To get over this disadvantage, ruTorrent, during it's loading, checks if parameters upload\_rate and download\_rate are set to zero. If it is so, ruTorrent change "0" to a very\_big\_number.
  * The channel of torrent can be changed only when the torrent is stopped. If the torrent is active, the plug-in will stop it, change the channel and start again.

## Additional tuning ##

Sould be done in the file `plugins/throttle/conf.php`.
  * `MAX_THROTTLE` - maximum number of channels. You can make it bigger or smaller.