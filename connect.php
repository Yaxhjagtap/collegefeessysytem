<?php
	$studentName = $_POST['studentName'];
	$applicationNo = $_POST['applicationNo'];
	$class = $_POST['class'];
	$gender = $_POST['gender'];
	$totalFees = $_POST['totalFees'];
	$feesReceived = $_POST['feesReceived'];

	// Database connection
	$conn = new mysqli('localhost','root','','test');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into registration(firstName, lastName, gender, email, password, number) values(?, ?, ?, ?, ?, ?)");
		$stmt->bind_param("ssssii", $studentName, $applicationNo, $class, $gender, $totalFees, $feesReceived);
		$execval = $stmt->execute();
		echo $execval;
		echo "Registration successfully...";
		$stmt->close();
		$conn->close();
	}
?>