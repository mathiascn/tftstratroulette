<?php
session_start();
include_once 'content/inc/db.php';
$db = new db();

function validate_login($username,$password) {
    global $db;
    if (empty($username)) return '{"response":"failure"}';
    if (empty($password)) return '{"response":"failure"}';
    $user = $db->query('SELECT * FROM users WHERE email=?',$username)->fetchArray();
    if (empty($user)) return '{"response":"failure"}';
    if (password_verify($password, $user['password'])) {
        $_SESSION['user'] = $user;
        return '{"response":"success"}';
    } 
    return '{"response":"failure"}';
}


if (isset($_POST['username']) && isset($_POST['password'])) {
    echo validate_login($_POST['username'],$_POST['password']);
}


function update_session() {
    if (!isset($_SESSION['user'])) return '{"response":"failure"}';
    $username = $_SESSION['user']['username'];
    $email = $_SESSION['user']['email'];
    $admin = $_SESSION['user']['admin'];
    return "{\"response\":\"success\",\"username\":\"$username\",\"email\":\"$email\",\"admin\":\"$admin\"}";
}
if (isset($_POST['session'])) {
    $session_data = update_session();
    echo $session_data;
}


function get_adminpage() {
    global $db;
    if (!isset($_SESSION)) return '{"response":"failure"}';
    if ($_SESSION['user']['admin'] != 1) return '{"response":"failure"}';
    $obj = json_decode('{"response":"success"}',true);
    $strats['rows'] = $db->query("SELECT * FROM strats ORDER BY id DESC")->fetchAll();
    $obj = json_encode(array_merge($obj,$strats));
    return $obj;
}

if (isset($_POST['adminpage'])) {
    echo get_adminpage();
}

function get_strats($dif) {
    global $db;
    $dif = abs($dif);
    if ($dif >= 3 || $dif < 0) return;
    $strats['rows'] = $db->query('SELECT * FROM strats ORDER BY RAND() LIMIT ?',$dif+1)->fetchAll();
    if (empty($strats)) return '{"response":"failure"}';
    $obj = json_decode('{"response":"success"}',true);
    return json_encode(array_merge($obj,$strats));
}
if (isset($_POST['dif'])) {
    echo get_strats($_POST['dif']);
}

if (isset($_POST['logout'])) {
    session_destroy();
}

function insert_strats($strats) {
    global $db;
    if (!isset($_SESSION)) return;
    if ($_SESSION['user']['admin']!== 1) return;
    $obj = json_decode($strats,true);
    foreach ($obj as $value) {
        $db->query('INSERT INTO strats (time,description,contributor) VALUES (UNIX_TIMESTAMP(),?,"tftstrat")',$value);
    }
}

if (isset($_POST['insert_strats'])) {
    insert_strats($_POST['insert_strats']);
}