
---

# How to download ruTorrent via SVN #

---




## Description ##

You must have [Subversion](http://subversion.tigris.org/) installed. Consult your unix distribution page for details.

If you wish to install rutorrent to /var/www/rutorrent, execute the following commands:
```
cd /var/www/
svn co http://rutorrent.googlecode.com/svn/trunk/rutorrent
```

## Updating or checking out a different revision ##

If you've already checked out ruTorrent from svn, and which to update it to the current revision, cd to the directory ruTorrent is installed and run a "svn update" like in the following example.
_(note: in this example rutorrent has been installed to /var/www/rutorrent. Your webroot may be different)_

```
cd /var/www/rutorrent
svn up
```

If you wish to check out a specific revision, add -r revision\_number.  For example, to check out [revision 870](https://code.google.com/p/rutorrent/source/detail?r=870) you would do something like this:
_(note: this is rarely necessary, but in rare occasions, a new revision will break compatibility.  In these situations, knowing how to check out an earlier revision can be golden)._

```
cd /var/www/rutorrent
svn up -r 870
```


_**(note:  It's very important to remember, when upgrading from one revision to another, you should always stop rtorrent before you upgrade, upgrade, then restart rtorrent.  Failure to stop/start rtorrent when upgrading can lead to plugins not working properly)**_

## Checking out Plugins ##

Checking out plugins is basically the same as checking out the base system. If you already have rutorrent installed, simply change to the **plugins/** directory under rutorrent, and check out your plugin, like in the following example. For example, if you have rutorrent installed to /var/www/rutorrent and would like to check out the rpc plugin:

```
cd /var/www/rutorrent/plugins
svn co http://rutorrent.googlecode.com/svn/trunk/plugins/rpc
```

_(note: for a full list of available plugins please see [Plugins](Plugins.md) page)_.

## Updating Plugins ##

Updating plugins works exactly like updating rutorrent:

```
cd /var/www/rutorrent/plugins/rpc
svn up
```

but you can also update all the plugins by doing something like this:
```
cd /var/www/rutorrent/plugins
svn up *
```


### Wonslung's Method ###

_**(NOTE: If you read this and do not understand it, please stick to the section ABOVE this point)**_


I tend to prefer downloading everything from trunk, and using plugins.ini to disable the plugins i do not plan to use.  **(See [plugins.ini](http://code.google.com/p/rutorrent/wiki/Plugins#plugins.ini) for more details)**

This works something like this:

```
cd /var/www
svn co http://rutorrent.googlecode.com/svn/trunk
rm -rf trunk/rutorrent/plugins/
mv trunk/plugins/ trunk/rutorrent/
mv trunk/rutorrent/ /var/www/
rm -rf /var/www/trunk/
```

This will give you rutorrent installed to /var/www/rutorrent with all plugins.  If you wish to update the svn, you simply do the following:

```
cd /var/www/rutorrent/
svn up
```

and it will update rutorrent core and all of the plugins which come from the rutorrent svn _**but not any 3rd party plugins.  Refer to any documentation from the 3rd party vendor for these plugins.**_

Like i said above, i simply disable any plugins i do not plan to use by editing the plugins.ini file.  You can do this on a per user basis as well.