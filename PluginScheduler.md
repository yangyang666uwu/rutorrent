
---

# Plugin Scheduler #

---




&lt;wiki:TOC /&gt;



## Description ##

You can enable the scheduler and click the cells to define any of six rTorrent behavior types at each particular hour of 168 week hours.

![http://rutorrent.googlecode.com/svn/wiki/images/PluginScheduler/scheduler.jpg](http://rutorrent.googlecode.com/svn/wiki/images/PluginScheduler/scheduler.jpg)

  * Unlimited - use predefined UL/DL limits. Default - a VeryBigNumber.
  * Turn Off - stop all torrents.
  * Seeding Only - stop all torrents, then start all torrents stopped by the plug-in using predefined UL speed limit (Default - a VeryBigNumber).
  * Limited1, Limited2, Limited3 - use speed limits defined in fields below. "0"-value, conventionally for rTorrent, means "no limits", but not "stop torrent".

## How does it work ##

When ruTorrent starts with installed Scheduler plug-in first time it sends a command to the rTorrent scheduler, which begins to call a dedicated script periodically. This script in its turn does all the work.

Once again - the poll begins only after first start of the ruTorrent. I.e. there will be no any useful action between start of rTorrent and then first start of ruTorrent. To avoid this, a special string should be added to the rTorrent configuration file (see [How to start plugins with rtorrent](Plugins#Starting_plugins_with_rtorrent.md) for details).

## Additional plug-in adjustment ##

Should be done in the file `plugins/scheduler/conf.php`.
  * `SCH_DEF_DL` - the constant defiles DL speed limit which is used in the Unlimited mode. Default - a VeryBigNumber.
  * `SCH_DEF_UL` - the constant defiles UL speed limit which is used in the Unlimited mode. Default - a VeryBigNumber.
  * `$updateInterval` - the variable sets the time interval between calls of the script by rTorrent scheduler (in minutes). Default - 1 hour.