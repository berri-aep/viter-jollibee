<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$adv = new Adv($conn);
// get should not be present

// check data
checkPayload($data);
// get data
$adv->adv_is_active = 1;
$adv->adv_image = checkIndex($data, "adv_image");
$adv->adv_title = checkIndex($data, "adv_title");
$adv->adv_created = date("Y-m-d H:i:s");
$adv->adv_datetime = date("Y-m-d H:i:s");

//checks newly added data if it already exists
// isNameExist($adv, $adv->adv_name);

$query = checkCreate($adv);

returnSuccess($adv, "adv", $query);
