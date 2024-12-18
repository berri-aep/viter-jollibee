<?php
// set http header
require '../../core/header.php';
// use needed functions
require '../../core/functions.php';
require 'functions.php';
// use needed classes
require '../../models/adv/Adv.php';
// check database connection

$conn = null;
$conn = checkDbConnection();
// make instance of classes
$adv = new Adv($conn);
// get $_GET data
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
  //checkApiKey();

  $query = readAllActiveAdv($adv);
  http_response_code(200);
  getQueriedData($query);

  // return 404 error if endpoint not available
  checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
