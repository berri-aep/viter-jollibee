<?php


class Adv
{
    public $adv_aid;
    public $adv_is_active;
    public $adv_image;
    public $adv_title;
    public $adv_datetime;
    public $adv_created;

    public $connection;
    public $lastInsertedId;
    public $adv_start;
    public $adv_total;
    public $adv_search;

    public $tblAdv;


    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblAdv = "jollibee_advv";
    }


    public function readAll()
    {
        try {

            $sql = "select * from {$this->tblAdv} ";
            $sql .= "order by adv_is_active desc, ";
            $sql .= "adv_title ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function readAllActiveAdv()
    {
        try {
            $sql = "select * from {$this->tblAdv} ";
            $sql .= "where adv_is_active = 1 ";
            $sql .= "order by ";
            $sql .= "adv_created ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }



    public function readLimit()
    {
        try {
            $sql = "select * from {$this->tblAdv} ";
            $sql .= "order by adv_is_active desc, ";
            $sql .= "adv_title ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->adv_start - 1,
                "total" => $this->adv_total,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function search()
    {
        try {

            $sql = "select * from {$this->tblAdv} ";
            $sql .= "where adv_title like :adv_title ";
            $sql .= "order by adv_is_active desc, ";
            $sql .= "adv_title ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "adv_title" => "%{$this->adv_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function filterActive()
    {
        try {

            $sql = "select * from {$this->tblAdv} ";
            $sql .= "where adv_is_active = :adv_is_active ";
            $sql .= "order by adv_is_active desc, ";
            $sql .= "adv_title ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "adv_is_active" => $this->adv_is_active,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function filterActiveSearch()
    {
        try {

            $sql = "select * from {$this->tblAdv} ";
            $sql .= "where adv_is_active = :adv_is_active ";
            $sql .= "and adv_title like :adv_title ";
            $sql .= "order by adv_is_active desc, ";
            $sql .= "adv_title ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "adv_is_active" => $this->adv_is_active,
                "adv_title" => "%{$this->adv_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function readById()
    {
        try {
            $sql = "select * from {$this->tblAdv} ";
            $sql .= "where adv_aid = :adv_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "adv_aid" => $this->adv_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function create()
    {
        try {
            $sql = "insert into {$this->tblAdv} ";
            $sql .= "(adv_is_active, ";
            $sql .= "adv_image, ";
            $sql .= "adv_title, ";
            $sql .= "adv_created, ";
            $sql .= "adv_datetime ) values ( ";
            $sql .= ":adv_is_active, ";
            $sql .= ":adv_image, ";
            $sql .= ":adv_title, ";
            $sql .= ":adv_created, ";
            $sql .= ":adv_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "adv_is_active" => $this->adv_is_active,
                "adv_image" => $this->adv_image,
                "adv_title" => $this->adv_title,
                "adv_datetime" => $this->adv_datetime,
                "adv_created" => $this->adv_created,


            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    // public function checkName()
    // {
    //   try {
    //     $sql = "select adv_name from {$this->tblAdv} ";
    //     $sql .= "where adv_name = :adv_name ";
    //     $query = $this->connection->prepare($sql);
    //     $query->execute([
    //       "adv_name" => "{$this->adv_name}",
    //     ]);
    //   } catch (PDOException $ex) {
    //     $query = false;
    //   }
    //   return $query;
    // }


    public function update()
    {
        try {
            $sql = "update {$this->tblAdv} set ";
            $sql .= "adv_image = :adv_image, ";
            $sql .= "adv_title = :adv_title, ";
            $sql .= "adv_datetime = :adv_datetime ";
            $sql .= "where adv_aid  = :adv_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "adv_image" => $this->adv_image,
                "adv_title" => $this->adv_title,
                "adv_datetime" => $this->adv_datetime,
                "adv_aid" => $this->adv_aid
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function delete()
    {
        try {
            $sql = "delete from {$this->tblAdv} ";
            $sql .= "where adv_aid = :adv_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "adv_aid" => $this->adv_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function active()
    {
        try {
            $sql = "update {$this->tblAdv} set ";
            $sql .= "adv_is_active = :adv_is_active, ";
            $sql .= "adv_datetime = :adv_datetime ";
            $sql .= "where adv_aid  = :adv_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "adv_is_active" => $this->adv_is_active,
                "adv_datetime" => $this->adv_datetime,
                "adv_aid" => $this->adv_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
