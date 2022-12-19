<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header('Content-Type: application/json; charset=utf-8');
require_once "db.php";
switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET': {
        $result = $db->query("select * from BANNER");
        if ($result->num_rows > 0) {
            // output data of each row
            $arr = array();
            while($row = $result->fetch_assoc()) {
                array_push($arr, array('id' => $row["ID"], 'name' => $row["NAME"], 'desc' => $row["DESCRIPTION"]));
            }
            echo json_encode($arr);
        } else {
            echo "";
        }
        break;
    }
    case 'POST': {
        $json = file_get_contents('php://input');
        $data = json_decode($json);
        file_put_contents("uploads/banners/".$data->name, file_get_contents($data->image));
        file_put_contents("uploads/banners/mobile/".$data->name, file_get_contents($data->mobile_image));
        $ins_sql = "INSERT INTO `BANNER`(`ID`, `NAME`, `DESCRIPTION`) VALUES (null, '".$data->name."', '".$data->description."')";
        echo $db->query($ins_sql);
        break;
    }
    case 'DELETE': {
        $del_sql = "DELETE FROM `BANNER` WHERE ID = ".$_REQUEST["id"];
        if ($db->query($del_sql)) {
            if (unlink("uploads/banners/".$_REQUEST["file_name"])) {
                unlink("uploads/banners/mobile/".$_REQUEST["file_name"]);
            }
        }
        break;
    }
    default: echo "DEF";
}
