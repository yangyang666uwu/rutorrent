
---

# Detailed description of error messages #

---


  * **Error: torrent is doesn't passed to rTorrent.**

> The error may occur in attempt to add a torrent for download. It means ruTorrent could not process the link to the torrent-file of the torrent-file itself correctly. There could be severeal possible reasons: the torrent tracker requires an authorization or the torrent-file was spoiled during dowload.

  * **PHP module PCRE is not installed. ruTorrent will not work.**

> The error is specific for some of BSD-based systems where the modile PCRE is not installed with php by default. The solution of this problem is obvious - install the necessary module.

  * **Web server can't access rTorrent's session directory for read. ruTorrent will not work.**

> Yes, it needs, but doesn't have. It could be whether web-server user does not have enough rights or a cutdown php instructions set (see the variabe open\_basedir in php.ini). Possible (but actually not the best) solution - move the session directory (don't forget to alter rTorrent configuration file appropriately) to the rTorrent installation directory and assign it necessary access rights (chmod -R 0777). Very likely it will make rTorrent work (and add a vulnerability to the system).

  * **rTorrent's user can't access settings directory for read/write/execute. ruTorrent will not work.**
  * **rTorrent's user can't access file ./test.sh for read/execute. ruTorrent will not work.**
  * **rTorrent's user can't access torrents directory for read/execute. You can't add torrents through ruTorrent.**
  * **Web server can't access settings directory for read/write/execute. ruTorrent can't save own settings.**
  * **Web server can't access torrents directory for read/write/execute. You can't add torrents through ruTorrent.**

> This group of errors most likely relate to incorrect ruTorrent installation. Say the achive has been unpacked not under a web-server user account.

  * **Bad link to rTorrent. Check if it is really running. Check $scgi\_port and $scgi\_host settings in config.php and scgi\_port in rTorrent configuration file.**

> Ususally it means rTorrent is terminated or has not been started. If despite this error is shown you can see the list of torrents in ruTorrent - there is something wrong in ruTorrent configuration file, as it mentioned in the error message.

  * **rTorrent is compiled with incorrect version of xmlrpc-c library, without i8 support. Version must be >= 1.11. Some functionality will be unavailable.**

> The message explains itself. Old versions of xmlrpc-c do not support long integers. So numbers greater than 2G will be shown as negative. And dialog window @Settings@ will not work properly. Note - **it is not enough** to have just the library xmlrpc-c vesion >=1.11 in the system. It is necessary to have rTorrent **compiled** with it.

  * **xxx plugin: Plugin will not work. Web-server can't access to external program (program name)**

> The mentioned program is required for this plug-in working but is unavailable under web-server user's account. Or this program does not exist at all (and it should be installed), or the path to the program was not included in the environment variable PATH of web-server user (in this case PATH variable should be revised or the plug-in configuration file should be called, usually there is a way to define a path to the program).
> Another case if the program exists the system but web-server is executed in chroot environment and the program is unavailable to it.
> This could happen also with various programs when rTorrent's user doesn't have write access to /path/to/rutorrent/share. (reported by  crockabiscuit)

  * **ххх plugin: rTorrent's user can't access php interpreter. Plug-in will not work.**

> Reasons for this are usually similar to ones described for the previous error message except for the problem is not with web-server user but with rTorrent user.
> Note - if PHP is working in the system, it does not always mean  that the interpreter exists in the system too. The package php-cli is necessary. Web-server may use e. g. php-fcgi which does not contain an interpreter.