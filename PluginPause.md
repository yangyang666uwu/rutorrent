
---

# Pause WebUI #

---



## Description ##

Plugin to pause the refresh timer, and add a button to manually refresh the page.


## Download  from ##

This project has it's own googlecode page at http://code.google.com/p/rutorrent-pausewebui/

It was originally available via the rutorrent forums in the following post: http://forums.rutorrent.org/index.php?topic=530.0


### Installation ###

download, unzip and add to the rutorrent plugins directory.

Installing via svn is also an option.  Assuming your rutorrent root directory is /var/www/rutorrent/ issue the following commands:

```

cd /var/www/rutorrent/plugins/
svn co http://rutorrent-pausewebui.googlecode.com/svn/trunk/ pausewebui

```


## Usage ##

This plugin is very simple (but elegant).

It adds 2 buttons to your menubar as shown here:

![http://img.skitch.com/20101106-1b9gg2ra9qr8dq51g65j411kx7.png](http://img.skitch.com/20101106-1b9gg2ra9qr8dq51g65j411kx7.png)

Upon clicking the "pause" button, rutorrent will stop refreshing automatically.  You can manually refresh the ui by clicking the "refresh button" _This is the button to the right of the pause button in the picture above_

After clicking the "pause" button, it will change to a "play" button as shown here:

![http://img.skitch.com/20101106-j88wdxkxgyjiybpqe1au39te4c.png](http://img.skitch.com/20101106-j88wdxkxgyjiybpqe1au39te4c.png)


According to the plugins author, this plugin will also stop rutorrent from refreshing automatically when the tab isn't in use via the web browser, saving bandwidth, cpu cylces and memory.