<?php

@define('USE_UNZIP', true, true);

@define('USE_UNRAR', true, true);

// Path to unzip binary (e.g. /usr/bin/unzip).
// Set to '' to search in $PATH.
$pathToExternals['unzip'] = '';

// Path to unrar binary (e.g. /usr/bin/unrar).
// Set to '' to search in $PATH.
$pathToExternals['unrar'] = '';

// Set to true to remove autounpack task parameters after
// finish, otherwise it will be shown in the 'Tasks' tab.
$cleanupAutoTasks = false;
