<?php

$url = $_GET["url"];
$headers = get_headers($url, 1);
$location = $headers["Location"];
echo json_encode($location);

?>
