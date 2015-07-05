<?php

$url = $_GET["url"];
$headers = get_headers($url, 1);
$location = $headers["Location"];

if ($location) {
	echo json_encode($location);
} else {
	$output = ["End of the breadcrumbs trail"];
	echo json_encode($output);
}

?>
