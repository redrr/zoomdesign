<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header('Content-Type: application/json; charset=utf-8');
require_once "db.php";
switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET': {
        $sql ="select * from BANNER";
        if (isset($_REQUEST["id"])) {
            $sql = $sql." WHERE ID = ".$_REQUEST["id"];
        }
        $result = $db->query($sql);
        if ($result->num_rows > 0) {
            // output data of each row
            $arr = array();
            while($row = $result->fetch_assoc()) {
                array_push($arr, array('id' => $row["ID"], 'name' => $row["NAME"], 'mobile' => $row["MOBILE"], 'desc' => $row["DESCRIPTION"]));
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
    case 'PATCH': {
        $json = file_get_contents('php://input');
        $data = json_decode($json);
        $col_sql = "UPDATE `BANNER` SET";
        $_add = false;
        if (isset($data->name) && isset($data->old_name) && isset($data->image) && isset($data->mobile_image)) {
            if (unlink("uploads/banners/".$data->old_name)) {
                if (unlink("uploads/banners/mobile/".$data->old_name)){
                    $col_sql = $col_sql . " `NAME` = '".$data->name."'";
                    file_put_contents("uploads/banners/".$data->name, file_get_contents($data->image));
                    file_put_contents("uploads/banners/mobile/".$data->name, file_get_contents($data->mobile_image));
                    $_add = true;
                }
            }
        }
        if (isset($data->description)) {
            $col_sql = $col_sql." `DESCRIPTION` = '".$data->description."'";
            $_add = true;
        }
        $val_sql = " WHERE `ID` = '".$data->_id."'";
        if ($_add) {
            $ins_sql = $col_sql.$val_sql;
            echo $db->query($ins_sql);
        } else {
            echo "";
        }
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
