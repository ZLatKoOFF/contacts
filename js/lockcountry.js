$ip = $_SERVER['REMOTE_ADDR'];
$ipInfo = json_decode(file_get_contents("http://ip-api.com/json/{$ip}?fields=status,message,country,countryCode"), true);

if(isset($ipInfo['country']) && $ipInfo['country'] != 'Kazakhstan') {
  //print('BLOCKED COUNTRY');	
    http_response_code(403);
    die('Forbidden');
}
