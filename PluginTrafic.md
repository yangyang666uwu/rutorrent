
---

# Plugin Trafic #

---




&lt;wiki:TOC /&gt;



## Description ##
The Trafic plugin is a subsystem for monitoring rtorrent traffic totals.  It tracks both system wide and per-tracker totals.  The plugin can display totals in three formats, hourly, daily, and mouthly.  Statistics can be cleaned out at any time by clicking the "Clear" button on the interface (see screenshot).


![![](http://rutorrent.googlecode.com/svn/wiki/images/PluginTrafic/trafic_small.jpg)](http://rutorrent.googlecode.com/svn/wiki/images/PluginTrafic/trafic_big.jpg)

## Requirements ##
  * Web-server with php 5.1.

## How does it work ##

When rutorrent is loaded for the first time (with the trafic plugin) it sends a command to the rTorrent scheduler, which begins to provide the application with information about it's current traffic statistics. _**(Once again, it's important to understand that traffic statistics do not begin registering until he first load of the plugin.  If rtorrent is running, but rutorrent hasn't been loaded, the Trafic Plugin is not keeping track)**_

To avoid this issue, we can use the initplugins.php method to load all plugins at rtorrent start _**(see [How to start plugins with rtorrent](Plugins#Starting_plugins_with_rtorrent.md) )**_


## Some non-obvious points ##
  * The time ticks shown on the chart correspond to the server's time settings.  If time settings on the client differ from those of the server, this plugin may not function as intended.  If this happens, the recommended solution is to sync both client and server with the correct time zone information and clear the traffic statistics.
  * Clicking "Clear" while "All Trackers" is selected will erase all Traffic stats. Clicking "Clear" when a specific tracker is selected will only erase Traffic data for that tracker.
  * Traffic is counted for all trackers in the zeroth group of every torrent.  All other groups will be ignored.
  * Traffic data on the charts may not match up with the tracker's internal statistics because the plugin can only keep track of data provided by rTorrent.  It doesn't know what information has been sent to the tracker.


## Additional plug-in configuration ##

You can adjust the update interval (in minutes) by editing the config file.

The config file is  `plugins/trafic/conf.php`.

Look for `$updateInterval` and change it accordingly.