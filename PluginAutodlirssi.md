
---

# Plugin Autodl-Irssi #

---





## Description ##

Plugin for rutorrent which uses irssi to monitor IRC announce channels and download torrents based on user defined filters.


## 3rd party download site ##

http://sourceforge.net/projects/autodl-irssi/



## Installation ##

**Note**  There is a script now designed to make installation a much more simple processes.



### Install script Method ###

  * buntu and Ubuntu clones:

```
cd
wget --no-check-certificate -O autodl-setup http://sourceforge.net/projects/autodl-irssi/files/autodl-setup/download
sudo sh autodl-setup
```


  * ny other OS

Become root:

```
su -
```

Then:
```
wget --no-check-certificate -O autodl-setup http://sourceforge.net/projects/autodl-irssi/files/autodl-setup/download
sh autodl-setup
```


### Manual Install **_(old method)_** ###

This plugin depends on irssi and several perl modules.  Check your distribution for info on installing irssi

**This method works, but be sure to check http://sourceforge.net/projects/autodl-irssi/files/ for the latest version and modify these instructions accordingly.**

#### Perl modules ####

**Debian/Ubuntu**

```
apt-get -y install libarchive-zip-perl libnet-ssleay-perl libhtml-parser-perl libxml-libxml-perl libdigest-sha1-perl libjson-perl libjson-xs-perl libxml-libxslt-perl
```

**Fedora/Centos**
```
yum -y install perl-Archive-Zip perl-Net-SSLeay perl-HTML-Parser perl-XML-LibXML perl-Digest-SHA1 perl-JSON perl-JSON-XS perl-XML-LibXSLT
```

**OpenSUSE**
```
yast -i perl-Archive-Zip perl-Net-SSLeay perl-HTML-Parser perl-XML-LibXML perl-Digest-SHA1 perl-XML-LibXSLT
# This may fail, so you may need to add a 3rd-party repo to install them or use the cpan utility.
yast -i perl-JSON perl-JSON-XS
```

**PCLinuxOS**
```
apt-get -y install perl-Archive-Zip perl-HTML-Parser perl-XML-LibXML perl-Digest-SHA1
use cpan: perl-Net-SSLeay perl-JSON perl-JSON-XS perl-XML-LibXSLT
```

**Mandriva**
```
urpmi perl-Archive-Zip perl-Net-SSLeay perl-HTML-Parser perl-XML-LibXML perl-Digest-SHA1 perl-JSON perl-JSON-XS perl-XML-LibXSLT
```

**Arch Linux**
```
pacman -S perl-archive-zip perl-net-ssleay perl-html-parser perl-xml-libxml perl-digest-sha1 perl-json perl-json-xs perl-xml-libxslt
```

**Gentoo**
```
emerge dev-perl/Archive-Zip 
emerge dev-perl/Net-SSLeay 
emerge dev-perl/HTML-Parser 
emerge dev-perl/libxml-perl 
emerge dev-perl/Digest-SHA1 
emerge dev-perl/JSON 
emerge dev-perl/JSON-XS 
emerge dev-perl/XML-LibXSLT
```

**_Note: On Gentoo, if any packages are masked, use ACCEPT\_KEYWORDS to fix the issue...for instance, when i installed these packages, JSON and JSON-XS wouldn't install unless i used the following_**

```
ACCEPT_KEYWORDS="~amd64" emerge dev-perl/JSON 
ACCEPT_KEYWORDS="~amd64" emerge dev-perl/JSON-XS 
```

_Also, keep in mind that the keywords will be different based on your cpu architecture_

**FreeBSD**
```
pkg_add -r p5-Archive-Zip p5-Net-SSLeay p5-HTML-Parser p5-XML-LibXML p5-Digest-SHA1 p5-JSON p5-JSON-XS p5-XML-LibXSLT
```

**Note** _on FreeBSD, you may need to install the following php packages as well:_

  * php5-sockets
  * php5-json
  * php5-xml

**Other os/Generic method via CPAN**
```
cpan Archive::Zip Net::SSLeay HTML::Entities XML::LibXML Digest::SHA1 JSON JSON::XS XML::LibXSLT
```


#### Installing autodl-irssi ####

For the rtorrent plugin to work, you need to install the irssi script.  After installing the perl dependencies, login as your rtorrent user and do the following:

```
mkdir -p ~/.irssi/scripts/autorun
cd ~/.irssi/scripts
wget https://sourceforge.net/projects/autodl-irssi/files/autodl-irssi-v1.10.zip
unzip -o autodl-irssi-v*.zip
rm autodl-irssi-v*.zip
cp autodl-irssi.pl autorun/
mkdir -p ~/.autodl
touch ~/.autodl/autodl.cfg
```

_(or to install via svn)_


```
mkdir -p ~/.irssi/
cd ~/.irssi/
svn export https://autodl-irssi.svn.sourceforge.net/svnroot/autodl-irssi/trunk/src scripts
mkdir scripts/autorun/
cp scripts/autodl-irssi.pl scripts/autorun/
mkdir -p ~/.autodl
touch ~/.autodl/autodl.cfg
```


#### Install the rutorrent plugin ####

Installing the autodl-irssi-rutorrent plugin is like installing any other plugin

Assuming rutorrent is intalled at /var/www/ issue the following commands:
```
cd /var/www/rutorrent/plugins
sudo svn co https://autodl-irssi.svn.sourceforge.net/svnroot/autodl-irssi/trunk/rutorrent/autodl-irssi
sudo cp autodl-irssi/_conf.php autodl-irssi/conf.php
sudo chown -R www-data:www-data autodl-irssi
```


Edit the conf.php file, adding a port and password.

assuming port 12345 and password as the password it would look like the following:
```
<?php

$autodlPort = 12345;
$autodlPassword = "password";

?>
```
**Note:  As of version 1.10 the gui-server settings can be kept in a separate file in order to keep users who do not have shell access from altering the settings.  if you wish to use this option, save the gui-server** options in

**~/.autodl/autodl2.cfg**

otherwise, edit the  ~/.autodl/autodl.cfg in the rtorrent user's home directory adding the port/password:

```
[options]
gui-server-port = 12345
gui-server-password = password
```

**It's possible to disable exec otions, or limit them to watch directories, or ftp, or any combination.**

Create /etc/autodl.cfg and add this:

```
[options]
allowed = watchdir
```

This will limit users to the "save to watch directory" option.  Other options you can add to the "allowed" line (separated by a comma are:

  * **watchdir**
  * **webui** _(requires uTorrent)_
  * **ftp**
  * **exec**
  * **dyndir** _(requires uTorrent)_

like so:

```
[options]
allowed = watchdir, ftp
```

## Usage ##

autodl-irssi adds the following menu item to the top bar:

![http://img.skitch.com/20101103-kc2udj8anegqatw8ns765xbfjt.png](http://img.skitch.com/20101103-kc2udj8anegqatw8ns765xbfjt.png)

Clicking on this icon brings up the following menu:

![http://img.skitch.com/20101104-n4cn3tpmehs2wgsw9kanu1fs3g.png](http://img.skitch.com/20101104-n4cn3tpmehs2wgsw9kanu1fs3g.png)

### Filters ###

Under this section you can add and edit your filters.  The main filter menu looks like this:
This is all really self explanatory but as you can see, the first tab has the following items:


#### General ####

![http://img.skitch.com/20101103-rtckeunr4fjetr4idxn65mdbh3.png](http://img.skitch.com/20101103-rtckeunr4fjetr4idxn65mdbh3.png)

  * **New** - _Add a new filter_
  * **Remove** - _Remove an existing filter_
  * **Display name** - _Name of the filter_
  * **Match Release** - _Releases you want to match_
  * **Except releases** - _Releases you do not want to match_
  * **Match Sites** - _ist of sites you wish to match against_
  * **Minimum size**- _minimum size_
  * **Maximum size** - _maximum size_

#### TV/Movies ####

![http://img.skitch.com/20101103-f3nay9a6t4a12q3t26nbdksqua.png](http://img.skitch.com/20101103-f3nay9a6t4a12q3t26nbdksqua.png)

  * **TV Show/Movie** - _Name of TV Show_
  * **Seasons** - _Seasons you wish you match, i.e 1,4,7 or 1-5_
  * **Episodes**  _Episodes you wish to match i.e. 2,4,13  2-9_
  * **Resolutions** _Resolutions you wish to match i.e 720p, 1080p_
  * **Encodes** - _Encodes you wish to match i.e DivX, h.264, x264_
  * **Sources** - _Sources you wish to match i.e. HDTV, Web-DL_
  * **Years** - _Years  i.e. 2008, 1975, 1982_


#### Music ####

![http://img.skitch.com/20101103-xi7s36tjt75bn9tepfet2kymx7.png](http://img.skitch.com/20101103-xi7s36tjt75bn9tepfet2kymx7.png)

  * **Years** - _Years, i.e. 1997, 1959, 2010_
  * **Artists** - _Artist or Artists you wish to match_
  * **Albums** - _Album or Albums you wish to match_
  * **Formats** - _Formats, i.e. MP3, FLAC_
  * **Bitrates** - _Bitrate you wish to match i.e. 320, Lossless_
  * **Media** - _Source Media i.e. CD, WEB_
  * **Tags** - _Tags you wish to match, hip-hop, rock, blues_
  * **Scene** - _Whether or not it's scene or not_
  * **Log** - _Log, yes or no or don't care_
  * **Cue** -  _Cue, yes or no or don't care_

#### Advanced ####

![http://img.skitch.com/20101103-idt474xgh2w38m5x962wcqui5.png](http://img.skitch.com/20101103-idt474xgh2w38m5x962wcqui5.png)

  * **Match Categories** - _Categories you want_
  * **Except Categories** - _Categories you do not want_
  * **Match Uploaders** - _Uploaders you wish to match_
  * **Except Uploaders** - _Uploaders you do not wish to match_
  * **Except Sites** - _Sites you do not wish to match for this filter_
  * **Maximum pretime** - _maximum pretime, i.e, 10min, 4s_


#### Upload Method ####

![http://img.skitch.com/20101103-b3kfh9hcpnnb28532jrq66gun4.png](http://img.skitch.com/20101103-b3kfh9hcpnnb28532jrq66gun4.png)


  * **Use global settings** - _use the settings set in "Preferences"_
  * **Save to Watch Folder** - _Specify a specific watch path for this filter_
  * _uTorrent Webui Upload_-_upload to torrent web (don't ask me why =) )*****FTP Upload_-_upload to an FTP server*****Run ProgramRun a script/program for this filter*****Save to Dynamic Folder_-_i.e /home/$USER/$(month)($day)/_

### Announce Channels ###

This is just a gui display of the servers and their announce channels.  Nothin can be edited here.

![http://img.skitch.com/20101103-jxxb29wq9dub5x899rktcj8ba1.png](http://img.skitch.com/20101103-jxxb29wq9dub5x899rktcj8ba1.png)

### Trackers ###

This tab is for setting tracker specific settings.  Follow the on screen instructions for each tracker you wish to use.  This mostly includes saving passkey info and/or cookies.  This is needed in order to actually fetch the torrents.

![http://img.skitch.com/20101103-cqj4ftudfupm5cur83nts364qw.png](http://img.skitch.com/20101103-cqj4ftudfupm5cur83nts364qw.png)


### IRC Servers ###

_**Note:**_ _This is only available in the svn version at the time of writing this wiki_

This is a gui menu which allows you to display and configure the IRC servers you wish to connect to.

#### Left hand side display window and buttons ####

![http://img.skitch.com/20101104-e8k3cu829pwdk87b5hq3mhabxg.png](http://img.skitch.com/20101104-e8k3cu829pwdk87b5hq3mhabxg.png)

In this area you can view IRC servers already configured, add new servers or remove servers.  You can also disable servers by using the check boxes to the left of each entry.



#### IRC Server Section ####

![http://img.skitch.com/20101104-quwp75pkkpgrrju6jncs4ut469.png](http://img.skitch.com/20101104-quwp75pkkpgrrju6jncs4ut469.png)

  * **Server** - _This is where you put the server address, i.e irc.server.com_
  * **Port** -_This is where you specify the port (leaving this blank uses 6667)_
  * **SSL** - _Check this box if you are connecting to an SSL server port_
  * **Nick** - _This is the irc username for this server_
  * **Password** - _This is the nickserv password_
  * **Email** - _This is the email address your user is registered under_

**Note:** - _If you haven't registered your nick, autodl-irssi will attempt to register it using the settings here_

#### IRC Channel Section ####

![http://img.skitch.com/20101104-gr26x56n4mj8n9kt4r1i5k7hqe.png](http://img.skitch.com/20101104-gr26x56n4mj8n9kt4r1i5k7hqe.png)

In this section you can set up the channels you wish autodl-irssi to join and monitor.

  * **Channel Select** - _Marked with #1 in the picture above, this allows you to select channels which are already configured in order to edit settings._
  * **New** - _Creates a new channel entry_
  * **Remove** - _Removes the currently selected channel_
  * **Channel** - _Channel name, i.e  #torrent-announce_
  * **Password** - _If the irc channel requires a password to join, it goes here_
  * **Invite Command** - _If you must enter a specific command to join a channel, it goes here, i.e "/msg SOMEONE something password"_
  * **Invite HTTP URL** - _if your channel requires a websites url, it goes here_
  * **Invite HTTP Header** - _website header_
  * **Invite HTTP Data** - _Invite  website data_

### Preferences ###

This is where you set the general plugin preferences.

#### General ####

![http://img.skitch.com/20101103-jc35qxuh4q6syxn9api4jmasyd.png](http://img.skitch.com/20101103-jc35qxuh4q6syxn9api4jmasyd.png)

  * **Maximum saved releases** - _Number of maximum saved releases_
  * **Save download history** - _whether or not to keep a history of matched items_
  * **Download duplicate releases** -whether or not to download dupes_* **Automatic updates** -_whether or not to auto-update

#### Upload Method ####

![http://img.skitch.com/20101103-c1k3t8rkgd12yfhw9sbdd8i8ft.png](http://img.skitch.com/20101103-c1k3t8rkgd12yfhw9sbdd8i8ft.png)

  * **Save to Watch Folder** - _Save to a watch folder, i.e. /export/home/wonslung/rtorrent/watch_
  * **uTorrent Webui Upload** _Send to torrent web (nevermind this is a rutorrent plugin)_
  * **FTP Upload** _Send to an FTP Server_
  * **Run Program** _Run a script/program_
  * **Save to Dynamic Folder _Save to a dynamic folder, i.e. /home/$USER/$(date)$(time)_**

#### Webui ####

These are the settings for the uTorrent web uploader mentioned earlier.  I'm going to bet you won't be needing these for rutorrent.

![http://img.skitch.com/20101103-f2s2jkt5h7rma46gt7r33kkyyj.png](http://img.skitch.com/20101103-f2s2jkt5h7rma46gt7r33kkyyj.png)

#### FTP ####

These are the settings for the FTP uploader, mentioned earlier.

![http://img.skitch.com/20101103-k59s9qcy62drb89ax1p8mkdk6h.png](http://img.skitch.com/20101103-k59s9qcy62drb89ax1p8mkdk6h.png)

  * **User Name** - _FTP user_
  * **Hostname** - _FTP hostname_
  * **Password** - _FTP Password_
  * **Port** - _FTP Port_

#### Programs ####

Path to utorrent.exe (doubtful we'll be needing this either)

![http://img.skitch.com/20101103-xh71g3wp3xbkbjxk3mtahqp1gb.png](http://img.skitch.com/20101103-xh71g3wp3xbkbjxk3mtahqp1gb.png)

#### Advanced ####

Advanced settings.  Probably shouldn't change anything here unless the author tells you to or you know what you are doing.

![http://img.skitch.com/20101103-ng23gd1etd8f25kicxtwqpws75.png](http://img.skitch.com/20101103-ng23gd1etd8f25kicxtwqpws75.png)

## Sources ##

This information is from the following pages and forum posts:

http://forums.rutorrent.org/index.php?topic=517.0
http://sourceforge.net/apps/phpbb/autodl-irssi/viewtopic.php?f=1&t=3