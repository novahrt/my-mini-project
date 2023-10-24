const registrationForm = document.getElementById("registration-form");
const nameInput = document.getElementById("name");
const nameError = document.getElementById("name-error");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");
const passwordInput = document.getElementById("password");
const passwordError = document.getElementById("password-error");
const confirmPasswordInput = document.getElementById("confirmPassword");
const confirmPasswordError = document.getElementById("confirmPassword-error");

const passwordToggle = document.querySelectorAll(".password-toggle");
passwordToggle.forEach(toggle => {
    toggle.addEventListener("click", function () {
        togglePasswordVisibility(toggle, toggle.previousElementSibling);
    });
});

function togglePasswordVisibility(toggle, input) {
    if (input.type === "password") {
        input.type = "text";
        toggle.classList.remove("fa-eye");
        toggle.classList.add("fa-eye-slash");
    } else {
        input.type = "password";
        toggle.classList.remove("fa-eye-slash");
        toggle.classList.add("fa-eye");
    }
}

registrationForm.addEventListener("submit", function (e) {
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    if (nameInput.value.trim().length === 0) {
        e.preventDefault();
        nameError.textContent = "Nama tidak valid.";
    } else if (nameInput.value.length > 10 || !/^[A-Za-z]*$/.test(nameInput.value)) {
        e.preventDefault();
        nameError.textContent = "Nama maksimal 10 karakter dan hanya berupa huruf.";
    }

    if (!emailInput.value.includes("@")) {
        e.preventDefault();
        emailError.textContent = "Format Email tidak valid";
    }

    if (passwordInput.value.length < 8 || !/^(?=.*[A-Za-z])(?=.*\d)/.test(passwordInput.value)) {
        e.preventDefault();
        passwordError.textContent = "Password harus memiliki 8 karakter berupa huruf dan angka.";
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
        e.preventDefault();
        confirmPasswordError.textContent = "Konfirmasi Password anda tidak sesuai.";
    }
});

document.getElementById("register-button").addEventListener("click", function () {
    // Validasi apakah semua input telah terisi
    if (
        nameInput.value.trim() !== "" &&
        emailInput.value.trim() !== "" &&
        passwordInput.value.trim() !== "" &&
        confirmPasswordInput.value.trim() !== ""
    ) {
        // Arahkan pengguna ke halaman login jika semua data terisi
        window.location.href = "login.html";
    } else {
        // Tampilkan pesan kesalahan jika ada input yang kosong
        alert("Harap isi semua data.");
    }
});