<h1 class="hey" id="id">AAAA</h1>

<?php
if (!isset($_SERVER['PHP_AUTH_USER'])) {
  header('WWW-Authenticate: Basic realm="My Realm"');
  header('HTTP/1.0 401 Unauthorized');
  echo 'Text to send if user hits Cancel button';
  exit;
} else {
  echo "<p>Hello {$_SERVER['PHP_AUTH_USER']}.</p>";
  echo "<p>You entered {$_SERVER['PHP_AUTH_PW']} as your password.</p>";
}
?>

<html lang="en">
<head>
  <title><?=$title;?></title>
  <meta name="keywords" content="<?=$keywords;?>"/>
</head>
</html>
