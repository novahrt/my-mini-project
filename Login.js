const loginForm = document.getElementById("login-form");
        const namaInput = document.getElementById("nama");
        const namaError = document.getElementById("nama-error");
        const emailInput = document.getElementById("email");
        const emailError = document.getElementById("email-error");
        const passwordInput = document.getElementById("password");
        const passwordError = document.getElementById("password-error");
        const loginButton = document.getElementById("login-button");
    
        const passwordToggle = document.getElementById("password-toggle");
    
        // Function untuk menampilkan/menyembunyikan password
        let passwordVisible = false;
        passwordToggle.addEventListener("click", function () {
            togglePasswordVisibility();
        });
    
        function togglePasswordVisibility() {
            passwordVisible = !passwordVisible;
            if (passwordVisible) {
                passwordInput.type = "text";
                passwordToggle.classList.remove("fa-eye");
                passwordToggle.classList.add("fa-eye-slash");
            } else {
                passwordInput.type = "password";
                passwordToggle.classList.remove("fa-eye-slash");
                passwordToggle.classList.add("fa-eye");
            }
        }
    
        loginForm.addEventListener("submit", function (e) {
            namaError.textContent = "";
            emailError.textContent = "";
            passwordError.textContent = "";
    
            if (namaInput.value.trim() === '') {
                e.preventDefault();
                namaError.textContent = "Harap isi Nama.";
            }
    
            if (emailInput.value.trim() === '') {
                e.preventDefault();
                emailError.textContent = "Harap isi Email.";
            } else if (!emailInput.value.includes('@')) {
                e.preventDefault();
                emailError.textContent = "Format Email tidak valid";
            }
    
            if (passwordInput.value.trim() === '') {
                e.preventDefault();
                passwordError.textContent = "Harap isi Password.";
            } else if (passwordInput.value.length < 8 || !/^(?=.*[A-Za-z])(?=.*\d)/.test(passwordInput.value)) {
                e.preventDefault();
                passwordError.textContent = "Password harus memiliki 8 karakter berupa huruf dan angka.";
            } else {
                // Redirect ke halaman dashboard.html saat login sukses
                window.location.href = "Dashboard.html";
            }
        });
    
        // Tambahan: Periksa jika semua data telah diisi saat tombol login ditekan
        loginButton.addEventListener("click", function () {
            if (
                namaInput.value.trim() !== '' &&
                emailInput.value.trim() !== '' &&
                passwordInput.value.trim() !== ''
            ) {
                // Arahkan ke halaman dashboard jika semua data telah diisi
                window.location.href = "Dashboard.html";
            } else {
                // Tampilkan peringatan jika ada data yang belum diisi
                alert("Harap isi semua data.");
            }
        });