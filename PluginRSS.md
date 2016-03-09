
---

# RSS Plugin #

---




## Description ##

This plugin is designed to fetch torrents via rss download links.  It has 2 main parts, one for entering feeds, the other for setting up filters.  For more information about rss, see http://en.wikipedia.org/wiki/RSS.

## Usage ##

### Adding a feed ###
To add a feed, right click the RSS icon on the left hand side of the screen
and select "Add Rss Feed" as shown in the next two images.
(_note: prior to [r890](https://code.google.com/p/rutorrent/source/detail?r=890) you can also use the feed icon on the top menu bar, in [r890](https://code.google.com/p/rutorrent/source/detail?r=890) this was changed to open the rss manager_).

![http://rutorrent.googlecode.com/svn/wiki/images/PluginRSS/rssnew.png](http://rutorrent.googlecode.com/svn/wiki/images/PluginRSS/rssnew.png)

![http://rutorrent.googlecode.com/svn/wiki/images/PluginRSS/rss03.png](http://rutorrent.googlecode.com/svn/wiki/images/PluginRSS/rss03.png)

This should bring up a new window, as shown in the next image:

![http://rutorrent.googlecode.com/svn/wiki/images/PluginRSS/rss02.png](http://rutorrent.googlecode.com/svn/wiki/images/PluginRSS/rss02.png)

You need to add your RSS feed where it says "Feed URL" and give it a name where it says "Custom Alias"  (_note:  It's important that you always use a DOWNLOAD feed.  If you use a web feed, you will end up with errors.  Also, it's important to note that some feeds require cookies to use. These feeds will require you to use the "cookies" plugin [PluginCookies](PluginCookies.md)_).

![http://rutorrent.googlecode.com/svn/wiki/images/PluginRSS/rss04.png](http://rutorrent.googlecode.com/svn/wiki/images/PluginRSS/rss04.png)

If you added the feed correctly, you should end up with something like this:

![http://rutorrent.googlecode.com/svn/wiki/images/PluginRSS/rss05.png](http://rutorrent.googlecode.com/svn/wiki/images/PluginRSS/rss05.png)

With this, you have everything you need to manually download torrents via rss feed.  To manually download items from this feed, right click on the item and select LOAD, as shown in this screenshot:

![http://rutorrent.googlecode.com/svn/wiki/images/PluginRSS/rss06.png](http://rutorrent.googlecode.com/svn/wiki/images/PluginRSS/rss06.png)

This should bring up an "add torrent" window like this:

![http://rutorrent.googlecode.com/svn/wiki/images/PluginRSS/rss07.png](http://rutorrent.googlecode.com/svn/wiki/images/PluginRSS/rss07.png)

if you click ok, it will add it and download it to your default dir, otherwise you can fill out the window options like this:

![http://rutorrent.googlecode.com/svn/wiki/images/PluginRSS/rss08.png](http://rutorrent.googlecode.com/svn/wiki/images/PluginRSS/rss08.png)

(if you select "Don't start the download automatically"  the torrent will be added in the program "stopped").
If all went well, you should have a downloading torrent as shown here:

![http://rutorrent.googlecode.com/svn/wiki/images/PluginRSS/rss09.png](http://rutorrent.googlecode.com/svn/wiki/images/PluginRSS/rss09.png)

### Automatic Downloading via RSS Manager ###

Manually adding torrents via a feed is somewhat convenient but lets face it, if you are going to add rss feed, you probably want to automate downloading.  Now that you know how to add feeds, it's time to create filters.

#### RSS Manager ####

To Open the rss manager, right click on the RSS icon from the left side of the menu, and select "Rss Manager" (_note: as of [r890](https://code.google.com/p/rutorrent/source/detail?r=890) you can use the rss icon from the top bar to bring up the rss manager_).

![http://rutorrent.googlecode.com/svn/wiki/images/PluginRSS/rssman00.png](http://rutorrent.googlecode.com/svn/wiki/images/PluginRSS/rssman00.png)

The filter manager has SEVERAL options/settings so rather than give you a step by step, i'm going to post a pic explaining what each option does.

![http://rutorrent.googlecode.com/svn/wiki/images/PluginRSS/rssman01.png](http://rutorrent.googlecode.com/svn/wiki/images/PluginRSS/rssman01.png)

  1. Add: This adds a new filter rule.
  1. Filter: This is where you put the filter regex.
  1. Exclude: This is where you put the exclude regex.
  1. Check Fields:  This is where you decide what the filter should match against
    * Title Field: This is the title of the RSS entry.
    * Description field: This is the description data for the rss item.
    * Link Field: This is the http link for the rss item.
> > (The default is to use only the "Title Field", if you use the others, make sure you know what you are doing, otherwise it could lead to unwanted matches).
  1. Directory: This is the save path for the torrent data, having [\_getdir](Plugin_getdir.md) plugin helps here.
  1. Match Interval: This is the rate at which the filter will download new torrents (the default is always).
  1. Label: This is the label for rutorrent, used mainly to sort the list of seeding torrents (note: if you use auto-tools, and leave this blank, it will automatically label the torrent based on normal auto-tools rules).
  1. Ratio Group:  This is the ratio group you want the matched torrents to be in. (Plugin [ratio](PluginRatio.md) must be installed).
  1. Channel:   This is the download/upload channel you want the matched torrents in. (Plugin [throttle](PluginThrottle.md) must be installed).
  1. Download options:  These define behavior for matched torrents, don't add the torrent's name to path or don't start download automatically (torrent added to list in "stopped" format).

So to add a filter, just click the ADD button (1). This will create an empty filter rule, give it a name, and enter your regex filter in the Filter section (2). (For more info on regex, see http://www.regular-expressions.info. Also, regex filters in rutorrent need to be enclosed in /  /i tags, you could use other tags, but this is the standard, case insensitive tag). An example of a filter might be:
```
/Lost.S06E.*/i
```

If you wish to exclude items from your filter, you could code this into the standard filter, but it's much more simple to use the "EXCLUDE" option (3). The syntax for this field is the same as the "Filter" field, a standard exclude might look like this:
```
/(DVDR|Complete|DVDRip|BDrip|Bluray)/i
```

For (4) the default is often the desired case, the other 2 options are used much less often.  The description field is the RSS description, or category.  The link field is the actual HTTP link.  Using these check boxes allows you to match text in these areas.

For (5) you set the download path.  This can come in great handy when using plugin [AutoTools](PluginAutotools.md).

Most of the other options have already been explained or are self explanatory.  If you have any questions, be sure to ask in the forums at http://forums.rutorrent.org.

Here is what an RSS filter might look like:

![http://rutorrent.googlecode.com/svn/wiki/images/PluginRSS/rssman03.png](http://rutorrent.googlecode.com/svn/wiki/images/PluginRSS/rssman03.png)

You can add as many filters as you like.  To disable a filter, you can click the check box next to the filter's name.

#### Plugin Settings ####

You might want to edit the config file for RSS.  If you wish to make a general setting for all users, just edit plugins/rss/conf.php and change it.

You can have different settings for each user by creating a plugins/rss/ dir in the conf/users/USERNAME dir and copying the conf.php file to this dir. (This works for all plugins which have settings).

```
$updateInterval = 30;   // in minutes
```
to whatever you like.

### Renaming a Feed ###

To rename a feed, right click on the feed and select "edit feed".

![http://rutorrent.googlecode.com/svn/wiki/images/PluginRSS/rssedit.png](http://rutorrent.googlecode.com/svn/wiki/images/PluginRSS/rssedit.png)

This should open a window with the feed name and path, allowing you to rename the feed.

![http://rutorrent.googlecode.com/svn/wiki/images/PluginRSS/rename.png](http://rutorrent.googlecode.com/svn/wiki/images/PluginRSS/rename.png)

### Using feeds that require HTTP authentication ###

For feeds that require HTTP authentication, simply use this format for the feed URL:
```
http://username:password@sometorrentsite.com/rss.php
```

### Using feeds that require cookies ###

To use feeds that require cookies, you must find the cookie for the site, and grab UID and pass from it.
  * IE users will find their cookies in `%UserProfile%\Cookies`.
  * Firefox users will find their cookies in Tools -> Options -> Privacy -> Show Cookies
  * Opera users will find their cookies in Tools -> Advanced -> Cookies
  * Users of other browsers will have to consult their browser's documentation.
Once you have the necessary information, use this format for the feed URL:
```
http://sometorrentsite.com/rss.php:COOKIE:name1=value;name2=value;
```
Another way to inform ruTorrent about required cookies is provided via plug-in [Cookies](PluginCookies.md).


### Autostart rss ###

rss will automatically start when you load the webui, but if for some reason your server reboots, you might wish to have it start automatically. See [How to start plugins with rtorrent](Plugins#Starting_plugins_with_rtorrent.md) for details.