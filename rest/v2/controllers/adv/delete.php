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
  // get data
  $adv->adv_aid = $_GET['advid'];
  checkId($adv->adv_aid);
  

  $query = checkDelete($adv);

  returnSuccess($adv, "adv", $query);
}

// return 404 error if endpoint not available
checkEndpoint();