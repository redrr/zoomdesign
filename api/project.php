<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header('Content-Type: application/json; charset=utf-8');
require_once "db.php";
switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET': {
        if (isset($_GET["id"])) {
            $result = $db->query("select * from PROJECT where ID = ".$_GET["id"]);
            if ($result->num_rows > 0) {
                // output data of each row
                $arr = array();
                while($row = $result->fetch_assoc()) {
                    $arr = array('id' => $row["ID"],'hun_name' => $row["HUN_NAME"],'en_name' => $row["EN_NAME"], 'desc' => $row["DESCRIPTION"], 'img' => $row["IMG"]);
                }
                echo json_encode($arr);
            } else {
                echo "";
            }
        } else {
            $result = $db->query("select * from PROJECT");
            if ($result->num_rows > 0) {
                // output data of each row
                $arr = array();
                while($row = $result->fetch_assoc()) {
                    array_push($arr, array('id' => $row["ID"],'hun_name' => $row["HUN_NAME"],'en_name' => $row["EN_NAME"], 'desc' => $row["DESCRIPTION"], 'img' => $row["IMG"]));
                }
                echo json_encode($arr);
            } else {
                echo "";
            }
        }
        break;
    }
    case 'POST': {
        $json = file_get_contents('php://input');
        $data = json_decode($json);
        file_put_contents("uploads/projects/".$data->file_name, file_get_contents($data->image));
        $ins_sql = "INSERT INTO `PROJECT`(`ID`, `HUN_NAME`, `EN_NAME`, `DESCRIPTION`, `IMG`) VALUES (null, '".$data->hun_name."', '".$data->en_name."', '".$data->description."', '".$data->file_name."')";
        echo $db->query($ins_sql);
        break;
    }
    case 'DELETE': {
        $del_sql = "DELETE FROM `PROJECT` WHERE ID = ".$_REQUEST["id"];
        if ($db->query($del_sql)) {
            echo unlink("uploads/projects/".$_REQUEST["file_name"]);
        }
        break;
    }
    default: echo "DEF";
}
