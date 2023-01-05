<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header('Content-Type: application/json; charset=utf-8');
require_once "db.php";
switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET': {
        if (isset($_GET["id"])) {
            $result = $db->query("select * from PROJECT_PART where ID = ".$_GET["id"]);
            if ($result->num_rows > 0) {
                // output data of each row
                $arr = array();
                while($row = $result->fetch_assoc()) {
                    array_push($arr, array('id' => $row["ID"], 'desc' => $row["DESCRIPTION"], 'img' => $row["IMG"]));
                }
                echo json_encode($arr);
            } else {
                echo "";
            }
        } else if (isset($_GET["project_id"])) {
            $result = $db->query("select * from PROJECT_PART where PROJECT_ID = ".$_GET["project_id"]);
            if ($result->num_rows > 0) {
                // output data of each row
                $arr = array();
                while($row = $result->fetch_assoc()) {
                    array_push($arr, array('id' => $row["ID"], 'desc' => $row["DESCRIPTION"], 'img' => $row["IMG"]));
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
        if (!file_exists("uploads/projects/".$data->project_id)) {
            mkdir("uploads/projects/".$data->project_id, 0777, true);
        }
        file_put_contents("uploads/projects/".$data->project_id."/".$data->file_name, file_get_contents($data->image));
        $ins_sql = "INSERT INTO `PROJECT_PART`(`ID`, `PROJECT_ID`, `DESCRIPTION`, `IMG`) VALUES (null, '".$data->project_id."', '".$data->description."', '".$data->file_name."')";
        echo $db->query($ins_sql);
        break;
    }
    case 'PATCH': {
        $json = file_get_contents('php://input');
        $data = json_decode($json);
        $col_sql = "UPDATE `PROJECT_PART` SET";
        $_add = false;
        if (isset($data->project_id) && isset($data->file_name) && isset($data->old_name) && isset($data->image)) {
            if (unlink("uploads/projects/".$data->project_id."/".$data->old_name)) {
                $col_sql = $col_sql . " `IMG` = '".$data->file_name."'";
                if (!file_exists("uploads/projects/".$data->project_id)) {
                    mkdir("uploads/projects/".$data->project_id, 0777, true);
                }
                file_put_contents("uploads/projects/".$data->project_id."/".$data->file_name, file_get_contents($data->image));
                $_add = true;
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
        $del_sql = "DELETE FROM `PROJECT_PART` WHERE ID = ".$_REQUEST["id"];
        if ($db->query($del_sql)) {
            echo unlink("uploads/projects/".$_REQUEST["project_id"]."/".$_REQUEST["file_name"]);
        }
        break;
    }
    default: echo "DEF";
}
