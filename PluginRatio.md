
---

# Plugin Ratio #

---




&lt;wiki:TOC /&gt;



## Description ##

Since version 0.8.5 rTorrent has a capability to set ratio limits for groups of torrents. The plug-in allows to manage it conveniently.
When the plug-in is installed a new section "Ratio groups" appears in the Settings dialog.
Here user can define limits of ratio for some (by default - 8) groups.
Assignation of group to one or several torrents is performed by selecting an appropriate option in the context menu of torrents.

Perameters of groups are:
  * Min, % - minimal ratio required to perform a defined Action.
  * Max, % - maximal ratio required to perform a defined Action. It may be omitted.
  * UL, Mb - minimal amount of data to be uploaded before perform a defined Action.
  * Action - what should be done when a condition is satisfied. It may be Stop the torrent, Remove it or Stop the torrent and clean up the ratio group.

All these conditions may be phrased as "Seed this torrent until it's ratio reach Min and with that uploaded not less than UL megabytes. Stop seeding any way if the ratio has reached Max".

![http://rutorrent.googlecode.com/svn/wiki/images/PluginRatio/ratio.jpg](http://rutorrent.googlecode.com/svn/wiki/images/PluginRatio/ratio.jpg)

## How does it work ##

When ruTorrent starts first time with plug-in Ratio installed, it creates groups with required parameters. As groups are created only after first ruTorrent's start, in the time between start of rTorrent and then first start of ruTorrent defined ratio limits will not work. To avoid this, some special strings should be added to the rTorrent configuration file (see [How to start plugins with rtorrent](Plugins#Starting_plugins_with_rtorrent.md) for details).

## Additional plug-in adjustment ##

Should be done in the file `plugins/ratio/conf.php`.
  * `MAX_RATIO` - the constant defiles maximum number of groups. You can change this value to bigger as well as to lesser.