
---

# Webserver Setup #

---




## Basic points ##

  1. ruTorrent is written in javascript and php, so your webserver must be setup for php.
  1. ruTorrent communicates with rtorrent via an SCGI gateway. For this you need:
    * Webserver with Mod\_SCGI or something equivalent.
    * [RPC Plugin](PluginRPC.md)
    * [HTTPRPC Plugin](PluginHTTPRPC.md) (similar to [RPC Plugin](PluginRPC.md), but designed with low bandwidth use in mind).
  1. There are multiple ways to configure a webserver, this page is not meant as a all inclusive guide.

## SCGI setup ##

Most webservers have some sort of scgi module.  For lowest server load, it's best to use a scgi module.  For lowest BANDWIDTH clients, however, it's best to use [HTTPRPC Plugin](PluginHTTPRPC.md) (this is not an option for very slow computers, or embedded systems).

_**Also, a note on authentication.  If you are password protecting your rutorrent directory, make sure to set your scgi mountpoint under that directory, or provide authentication for it as well.**_



### Apache Specific SCGI Config ###

Apache doesn't come wiht mod\_scgi, you need to install it. This is different for each distro, for ubuntu/debian it is:

```
apt-get install libapache2-mod-scgi
```

for freebsd,

```
cd /usr/ports/www/mod_scgi && make install clean
```

(some distros require you to enable this module manually, consult your distro for specific information about loading apache modules).

Once you have mod\_scgi installed and loaded, adding scgi mounts is almost trival.

add something like this for each mount:

```
SCGIMount /RPC2 127.0.0.1:5000
```


#### Mod Proxy SCGI ####

Recently, i have found this module.  In some situations this might be a better fit _(though i have no idea of the performance differences between mod\_scgi and mod\_proxy\_scgi)_  On OpenSolaris, for instance, there is no mod\_scgi package, but mod\_proxy\_scgi comes with the default apache config.


It's very simple to use, just add a directive like:
```
ProxyPass /RPC2 scgi://localhost:5000/
```


### Lighttpd Specific SCGI Config ###
[Lighttpd](http://www.lighttpd.net) comes with mod\_scgi built in, but it is normally not configured by default. To enable it add
```
server.modules += ( "mod_scgi" )
```
to your config (or uncomment/add it to the existing server.modules section

add scgi.server as shown below:
```
scgi.server = (
        "/RPC2" =>
                ( "127.0.0.1" =>
                        (                
                                "host" => "127.0.0.1",
                                "port" => 5000,
                                "check-local" => "disable"
                        )
                )
        )
```

For multiple scgi mounts you'd add something like this:
```
scgi.server = (
                "/RPC1"=>
                (
                        "127.0.0.1" =>
                        (
                                "host" => "127.0.0.1",
                                "port" => 5001,
                                "check-local" => "disable"
                        )
                ),
                "/RPC2"=>
                (
                        "127.0.0.1" =>
                        (
                                "host" => "127.0.0.1",
                                "port" => 5002,
                                "check-local" => "disable"
                        ),
                "/RPC3"=>
                (
                        "127.0.0.1" =>
                        (
                                "host" => "127.0.0.1",
                                "port" => 5003,
                                "check-local" => "disable"
                        ),
                "/RPC4"=>
                (
                        "127.0.0.1" =>
                        (
                                "host" => "127.0.0.1",
                                "port" => 5004,
                                "check-local" => "disable"
                        )
                )
)
```

it's important to note the comma between each section.

### Cherokee Specific SCGI Config ###

Cherokee makes everything really easy if you use [cherokee-admin](http://www.cherokee-project.com/doc/admin.html). To add an scgi mount in cherokee, simply select your virtual server (the default server is fine, or you could create one specifically for rutorrent), select the "behavior" tab as show in this screenshot:

![http://img18.imageshack.us/img18/4320/cherokeescgi1.png](http://img18.imageshack.us/img18/4320/cherokeescgi1.png)

Then select "wizards" and "misc" as shown in this screenshot:

![http://img580.imageshack.us/img580/6915/cherokeescgi2.png](http://img580.imageshack.us/img580/6915/cherokeescgi2.png)

Then select the rtorrent wizard, and set it accordingly, as shown here:

![http://img29.imageshack.us/img29/2991/cherokeescgi3.png](http://img29.imageshack.us/img29/2991/cherokeescgi3.png)

(_note:  you add php to cherokee in almost the exact same way, except instead of "misc/rtorrent" select "languages/php"_).

If you don't use cherokee admin, it might look something like this:

```
vserver!20!rule!500!disabled = 1
vserver!20!rule!500!handler = scgi
vserver!20!rule!500!handler!balancer = round_robin
vserver!20!rule!500!handler!balancer!source!1 = 11
vserver!20!rule!500!match = request
vserver!20!rule!500!match!final = 1
vserver!20!rule!500!match!request = ^/RPC1
```

### Nginx SCGI notes ###

Nginx  0.8.42 and newer has a scgi module.  It's enabled by default when you build nginx.  It's config options are failry simple.

```
location /RPC2 {
  include scgi_params;
  scgi_pass localhost:5000;
}
```

For more info, see [Nginx Scgi docs](http://wiki.nginx.org/HttpScgiModule)

## Php Setup ##

rutorrent depends on php.  I will include some basic php configuation options in the wiki when i have time to write it.  For now, use your distros documentation or google.