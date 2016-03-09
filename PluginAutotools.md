
---

# Plugin Auto Tools #

---




&lt;wiki:TOC /&gt;



## Description ##

The plug-in provides some possibilities on automation.
Following functions are realized for now:
  * **Auto Label** automatic creation of labels at addition of new torrent through the web interface.
  * **Auto Move** automatic transferring of torrent data files to other directory on downloading completion.
  * **Auto Watch** automatic adding torrents to rtorrent via nested set of watch directories.

## Auto Label ##
Label will be created automatically, if:<br />
  * Label is created by template, that can be set in Autotools options page.
  * Label is created if label input field in add torrent dialogue is empty.

Template variables:<br />
  * **{DIR}**: If there is a variable **"directory =/usr/p2p/downloads"** in **rtorrent.rc** <br />
> And new torrent is saved as **/usr/p2p/downloads/Video/DVD/movie.avi**, <br />
> This variable will be **"Video/DVD"**.

  * **{TRACKER}**: This variable will be set to tracker name.

  * **{NOW}**: This variable will be set to the current date using **strftime()** function. <br />
> Default format is **"%Y-%m-%d"**. It is possible to set custom format using <br />
> syntax: **"{NOW[:**

&lt;format&gt;

]}"**, for example:**"{NOW:%Y-%m-%d %H:%M}"


## Auto Move ##
The downloaded torrent data files are transferred to the directory, which is set in configuration, with the same directory structure relative to directory specified in variable **"directory"** of **"rtorrent.rc"** file and then started for seeding.

For example:
> If there is a variable **"directory =/usr/p2p/downloads"** in **rtorrent.rc** <br />
> And **"/media/p2p"** is set as the directory for ready downloads, <br />
> The files downloaded to **"/usr/p2p/downloads/Video/Movie/`*`.avi"** will be moved to<br /> **"/media/p2p/Video/Movie/`*`.avi"** on downloading completion.

There was an idea to use this plug-in in case when the directory for ready downloads was a mounted resource such as an other disk or SMB share with common access.

After file transfer the plug-in searches for file **".mailto"** in directories, from **"/media/p2p/Video/Movie/"** downto **"/media/p2p/"**. If this file is found, e-mail will be sent according to information from this file. Sample file is:
```
TO : user@domain.ru
FROM : Torrent Downloader<admin@domain.ru>
SUBJECT : Torrent "{TORRENT}" is finished!
Hello, User!

  Requested torrent

  "{TORRENT}"

  was successifully downloaded.
```

## Auto Watch ##
**.torrent** files are placed in nested subdirectories of a desired structure on
some base directory. This base directory can be set in the plugin settings.

This works very much like normal watch directories in rtorrent, except in a nested
hierarchy. Torrents added in this way, will be downloaded to a corresponding directory
in the path of whatever dir you've set in **"rtorrent.rc"**

With this, you can create a system of watch directories to drop **.torrent** files into.



### Some features ###

  * The plug-in handle correctly a situation with one data directory for several torrents - files will be moved according to torrent file list, instead of simple directory moving.
  * If there are files with the same names, as for completed torrent, in the directory for ready downloads, they will be overwritten.
  * The plug-in is integrated with **rTorrent** at web interface loading. The plug-in will not reintegrate with **rTorrent** after **rTorrent** restart until web interface reloading. To avoid it, you may add a specific line to **rTorrent** configuration file (see [How to start plugins with rtorrent](Plugins#Starting_plugins_with_rtorrent.md) for details)
  * For comfortable directory choice on the host for completed downloads it is recommended to install the service plug-in [\_getdir](Plugin_GetDir.md). There will be a possibility of navigation on host file system.