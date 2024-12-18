<?php

// Read active
function checkFilterActive($object)
{
    $query = $object->filterActive();
    checkQuery($query, "Empty records. (filter active)");
    return $query;
}

// Read active search
function checkFilterActiveSearch($object)
{
    $query = $object->filterActiveSearch();
    checkQuery($query, "Empty records. (filter active search)");
    return $query;
}

// Read active adv
function readAllActiveAdv($object)
{
    $query = $object->readAllActiveAdv();
    checkQuery($query, "Empty records. (read all active advertisement)");
    return $query;
}
