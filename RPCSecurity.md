
---

# XMLRPC / SCGI Security #

---





## Introduction ##

rutorrent requires that rtorrent be built with xmlrpc.  If you are using rutorrent over any public network (such as the internet) you will need to provide some mehtod of security.  The details of this will be different, depending on how you set up your server, and depending on which webserver.


### Webserver SCGI ###


If you are using a webserver for SCGI (apache's mod\_scgi for instance)  be sure that this SCGI mount is protected.


### Rutorrent Plugins ###

Another thing you can do is use the [RPC](PluginRPC.md) or [HttpRPC](PluginHTTPRPC.md) plugins.

**_Note:  If you use one of these plguins, do not set up SCGI via the webserver, if you do it defeats the purpose_**


### Brock's Script ###

Brock has created a script which can be used to check the security of your server.  For more information see this thread: http://forums.rutorrent.org/index.php?topic=636.0


### More Info ###

Please see this thread in the forums:


http://forums.rutorrent.org/index.php?topic=641.0