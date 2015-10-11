<?php

$url = $_GET["url"];
$headers = getallheaders($url, 1);
$location = $headers["Location"];

if (gettype($location) === "array") {
	echo json_encode($location);
} else if (gettype($location) === "string") {
	$output = [$location];
	echo json_encode($output);
} else {
	$output = ["End of the breadcrumb trail"];
	echo json_encode($output);
}

?>
