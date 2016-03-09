## Introduction ##

This plug-in appends specified trackers to the trackers list of all newly added torrents.
By the way, torrents may be added by any way - not just via ruTorrent.

After the plug-in is installed an additional section "Retrackers" will appear in the Settings dialog.

![http://rutorrent.googlecode.com/svn/wiki/images/PluginRetrackers/retrackers.jpg](http://rutorrent.googlecode.com/svn/wiki/images/PluginRetrackers/retrackers.jpg)

Format of the trackers list is the same as for [µTorrent](http://www.utorrent.com/) - different groups of trackers must be separated by an empty line. All listed trackers will be added to existing ones beginning from trackers group 1.
Usually modifications of the the trackers list for private torrents are not welcome. But if you really want it - reset the tick in the dialog window.

## How does it work ##

After first start of ruTorrent with installed Retrackers plug-in, ruTorrent registers it's own hook for the "New torrent added" event. Then as this event occurs a special script changes the list of trackers in the torrent.

Once again - the processing will be started until first start of ruTorrent. I.e. there will not be any useful action between start of rTorrent and then first start of ruTorrent. To avoid this, a special string should be added to the rTorrent configuration file (see below).

To change the list of trackers manually, use plug-in [Edit](PluginEdit.md).