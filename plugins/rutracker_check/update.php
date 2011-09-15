<?php

if( !chdir( dirname( __FILE__) ) )
	exit();

if( count( $argv ) > 1 )
	$_SERVER['REMOTE_USER'] = $argv[1];

require_once( "check.php" );

$req =  new rXMLRPCRequest(
		new rXMLRPCCommand("d.multicall",array("seeding",
			getCmd("d.get_hash="),
			getCmd("d.get_custom=")."chk-state",
			getCmd("d.get_custom=")."chk-time",
			getCmd("cat").'="$'.getCmd("t.multicall=").getCmd("d.get_hash=").",".getCmd("t.get_url")."=,".getCmd("cat=#").'"'
		))
	);
if($req->success())
{
	for($i = 0; $i<count($req->val); $i+=4)
	{
		if(strpos( $req->val[$i+3], ".rutracker.org/" )!==false)
			if(!ruTrackerChecker::run($req->val[$i],$req->val[$i+1],$req->val[$i+2]))
				break;
	}
}

?>