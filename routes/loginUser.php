<?php
$data = json_decode(file_get_contents("php://input"));

// login empty username or/and password
if (!$data->username || !$data->password) {
$user = $data->username;
$users = mysqli_query($conexiune, "SELECT * FROM admin WHERE username='".$user."' AND password='".$pass."'");
            $usr = mysqli_fetch_assoc($users);
			if (!$usr) {
				http_response_code(200);
				echo json_encode($usr);
?>