<?php

// Valid choices:
// false - use internal (may be too slow for large files)
// "transmissioncli" - use 'transmissioncli' (see http://www.transmissionbt.com/)
// "transmissioncreate" - use 'transmissioncreate' (see http://www.transmissionbt.com/)
// "createtorrent" - use 'createtorrent' (see http://www.createtorrent.com)
// "mktorrent" - use 'mktorrent' (see http://mktorrent.sourceforge.net)
// "buildtorrent" - use 'buildtorrent' (see http://claudiusmaximus.goto10.org/cm/torrent.html)
$useExternal = false;

// Path to external program (e.g. /bin/createtorrent).
// Set to '' to search in $PATH.
$pathToCreatetorrent = '';

$recentTrackersMaxCount = 15;
