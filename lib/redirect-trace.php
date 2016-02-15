<?php
/**
 * Redirect-Trace API
 */
$url = $_GET["url"];
$location = $headers["Location"];
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
function http_parse_headers($header) {
    $retVal = array();
    $fields = explode("\r\n", preg_replace('/\x0D\x0A[\x09\x20]+/', ' ', $header));
    foreach( $fields as $field ) {
        if( preg_match('/([^:]+): (.+)/m', $field, $match) ) {
            $match[1] = preg_replace('/(?< =^|&#91;\x09\x20\x2D&#93;)./e', 'strtoupper("")', strtolower(trim($match&#91;1&#93;)));
            if( isset($retVal&#91;$match&#91;1&#93;&#93;) ) {
                $retVal&#91;$match&#91;1&#93;&#93; = array($retVal&#91;$match&#91;1&#93;&#93;, $match&#91;2&#93;);
            } else {
                $retVal&#91;$match&#91;1&#93;&#93; = trim($match&#91;2&#93;);
            }
        }
    }
    return $retVal;
}
