
---

# Edit Plugin #

---




&lt;wiki:TOC /&gt;



## Description ##

This plugin allows you to edit the list of trackers, and change the comment of the current torrent. After installation, a new context menu item will become available when you right click a torrent from the list, "Edit Torrent..."  Selecting this will open the "Torrent Properties" menu.

![http://rutorrent.googlecode.com/svn/wiki/images/PluginEdit/edit.jpg](http://rutorrent.googlecode.com/svn/wiki/images/PluginEdit/edit.jpg)

The list of trackers should be formatted the same way as [µTorrent](http://www.utorrent.com/) - Different groups must be separated by an empty line.  The content of the "Comment" field will be shown in the "General" tab.

## How it works ##

rTorrent, by default, does not provide a method for modifying torrent properties on the fly. In order to work around this limitation, this plugin removes the torrent, modifies it according to the settings defined, then adds it back. Due to this, there may be some non-obvious side effects.
  * If the torrent is modified before downloading has finished, It will need to rehash data.  To prevent this, modify the torrent before starting, or after it has finished.
  * Some properties of the torrent (file priorities, download priorities, ratio, etc.) will be lost after this modification.

To automatically edit the list of trackers for all torrents, see [Retrackers](PluginRetrackers.md)