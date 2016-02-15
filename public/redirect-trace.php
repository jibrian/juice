<?php
/**
  * Redirect-Trace API
  */
class RedirectTrace {

	public static function trace($start_url, $redirects = [], $handle = NULL) {
		if (is_null($handle)) {
			$handle = curl_init();
		}

		curl_setopt($handle, CURLOPT_URL, $start_url);
		curl_setopt($handle, CURLOPT_NOBODY  , true);
		curl_exec($handle);

		if(!curl_errno($handle)) {
 			$info = curl_getinfo($handle);

 			if (!empty($info['redirect_url'])) {
 				$redirects[] = [
 					'url' => $info['redirect_url']
 				];
 			}
		}

		if (!empty($info['redirect_url'])) {
			self::trace($info['redirect_url'], $redirects, $handle);
		} else {
			curl_close($handle);
			
			echo json_encode($redirects);
		}
	}
}

RedirectTrace::trace($_GET["url"]);