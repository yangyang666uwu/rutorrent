
---

# Plugin Track Labels #

---




&lt;wiki:TOC /&gt;



## Description ##

The plug-in adds a set of labels on the category panel. These labels are created automatically on the basis of torrents' trackers.

![http://rutorrent.googlecode.com/svn/wiki/images/PluginTracklabels/tracklabels.jpg](http://rutorrent.googlecode.com/svn/wiki/images/PluginTracklabels/tracklabels.jpg)

## Some non-obvious points ##

  * Labels are created for all trackers of zero-group of the torrent. So some torrent may be present in several categories at once.
  * The method of creating a tracker's name has been "borrowed" from Deluge. It is heuristic and cannot guarantee always correct result. For example if there are two trackers in the zero-group: `http://clients-tracker.depthstrike.com` and `http://core-tracker.depthstrike.com`, the label `depthstrike.com` will be created and the torrent will be counted twice in it.