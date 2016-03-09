
---

# Plugin Show Peers like wTorrent #

---


## Description ##
The plug-in changes the format of values in columns 'Seeds' and 'Peers' in the torrents list.
By default these columns are shown as
```
get_peers_complete (get_peers_not_connected+get_peers_connected)
get_peers_accounted (get_peers_not_connected+get_peers_connected)
```
For trackers which support [scrape](http://en.wikipedia.org/wiki/Tracker_scrape), is makes sense to show more details
```
get_peers_complete (t_get_scrape_complete)
get_peers_accounted (t_get_scrape_incomplete)
```
I.e. the sum of seeds/peers by scrape of all torrent's trackers is shown in brackets.
As shown below:

![http://rutorrent.googlecode.com/svn/wiki/images/PluginPeers/peers_like_wtorrent.jpg](http://rutorrent.googlecode.com/svn/wiki/images/PluginPeers/peers_like_wtorrent.jpg)

Another front-end for rTorrent [wTorrent](http://www.wtorrent-project.org) shows this information similarly.
If you mostly use private trackers this plug-in is useless for you. Scrape is disabled on such trackers and you will have less information than without this plug-in - there always will be zero in brackets.