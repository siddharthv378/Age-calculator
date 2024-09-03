function calculateAge() {
    const dob = document.getElementById('dob').value;
    const resultElement = document.getElementById('result');

    if (!dob) {
        resultElement.textContent = "Please enter your date of birth.";
        return;
    }

    const birthDate = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // Adjust the age if the birth date hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    resultElement.textContent = `Your age is ${age} years.`;
}
