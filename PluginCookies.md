
---

# Plugin Cookies #

---




&lt;wiki:TOC /&gt;



## Description ##

Some trackers use cookies for the client authentication. It is transparent to user who uses a browser to work with such servers - browser store these cookies and returns them to the server automatically. The user just needs to enter login/password from time to time. But when rTorrent is used to work with such trackers (e.g. adding a torrent via URL) it might be a problem because rTorrent does not understand cookies. So the the information from cookies should be provided for rTorrent separately.

### Where to get contents of cookies? ###

  * Cookie files in Internet Explorer are located in `%UserProfile%\Cookies`.
  * Firefox users can find cookie files in the menu `Tools -> Options -> Privacy -> Show Cookies`.
  * Opera users can find cookies in the menu `Tools -> Advanced -> Cookies`.
  * Users who use other browsers should refer to User's Manuals of their programs.
Once all necessary information is found, required URL can be represented in the following format:
> `http://some-torrent-site.com/file.torrent:COOKIE:name1=value;name2=value;`

### And put it ###

in the Add Torrent dialog for example. It should be done for each adding URL. It is boring. Thereby this plug-in has been written. It allows user to define a parity host=>cookies just one time and to use URL without any extra additions and searching a browser's cache.

## How does it work ##

After the plug-in is installed an additional section "Cookies" will appear in the Settings dialog. In the input form user can define parities host=>cookies. Each definition should be on a separate line. The name of a host should be separated by a vertical line. Different cookies should be separated by a semicolon. Example:

![http://rutorrent.googlecode.com/svn/wiki/images/PluginCookies/cookies.jpg](http://rutorrent.googlecode.com/svn/wiki/images/PluginCookies/cookies.jpg)

That's all. Now all operations with an URL on the server side will be performed using necessary cookies. But be careful! The name of the host should be exactly the same as used. For example `www.some-torrents.com` and `some-torrents.com` will be considered as two different hosts. So, add a separate string for each instance.