document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const studentName = document.getElementById('studentName').value;
    const applicationNo = document.getElementById('applicationNo').value;
    const studentClass = document.getElementById('class').value;
    const gender = document.getElementById('gender').value;
    const totalFees = document.getElementById('totalFees').value;
    const feesReceived = document.getElementById('feesReceived').value;
    const feesPaid = totalFees - feesReceived;

    console.log({
        studentName,
        applicationNo,
        studentClass,
        gender,
        totalFees,
        feesReceived,
        feesPaid
    });

    // Here you would typically send this data to the server
    alert('Registration Successful!');
});
