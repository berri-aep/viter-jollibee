<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$adv = new Adv($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("advid", $_GET)) {
  $adv->adv_aid = $_GET['advid'];
  checkId($adv->adv_aid);
  $query = checkReadById($adv);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($adv);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();