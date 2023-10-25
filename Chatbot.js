// Dapatkan elemen-elemen HTML yang diperlukan
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const chat = document.getElementById('chat');

// Tambahkan event listener untuk tombol Kirim
sendButton.addEventListener('click', function() {
    const userMessage = userInput.value.trim().toLowerCase();

    // Menambahkan pesan pengguna ke tampilan chat
    addMessage('User: ' + userMessage, 'user');

    // Hanya tanggapi pertanyaan seputar keuangan
    if (userMessage.includes('keuangan')) {
        if (userMessage.includes('rencana keuangan')) {
            respondToFinancialPlanning();
        } else if (userMessage.includes('investasi')) {
            respondToInvesting();
        } else {
            respondToUnavailable();
        }
    } else if (userMessage.includes('investasi')) {
        respondToInvesting();
    } else {
        respondToUnavailable();
    }

    // Membersihkan input pengguna setelah mengirim
    userInput.value = '';
});

// Fungsi untuk menambahkan pesan ke tampilan chat
function addMessage(message, userType) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    if (userType === 'user') {
        messageElement.classList.add('user-text');
    } else {
        messageElement.classList.add('bot-text');
    }
    // Menambahkan pesan di bawah pesan-pesan sebelumnya
    chat.appendChild(messageElement);
}

// Fungsi-fungsi untuk menanggapi pertanyaan
function respondToFinancialPlanning() {
const financialPlanningSteps = [
'Anda ingin tahu cara membuat rencana keuangan. Berikut adalah langkah-langkahnya:',
'1. Tentukan tujuan keuangan anda',
'2. Analisis dan kelola pengeluaran anda',
'3. Pertimbangkan untuk mencari pendapatan tambahan, seperti freelance atau investasi',
'4. Siapkan dana darurat',
'5. Evaluasi dan kelola utang anda. Namun, lebih baik tidak memiliki utang.',
'6. Mulailah untuk investasi',
'7. Lindungi aset anda dengan asuransi',
'8. Buatlah perencanaan pensiun',
'9. Evaluasi rencana keuangan yang sudah anda buat setidaknya setahun sekali',
'10. Konsultasikan dengan Ahli Keuangan'
];

addMessage('Bot: ' + financialPlanningSteps.join('\n'), 'bot');
}


function respondToInvesting() {
const investingSteps = [
'Anda ingin tahu cara berinvestasi. Berikut adalah beberapa langkah awal:',
'1. Tentukan tujuan investasi',
'2. Buatlah perencanaan keuangan sebelum berinvestasi',
'3. Memahami konsep dasar investasi',
'4. Tentukan resiko dari investasi yang anda pilih',
'5. Mulai berinvestasi',
'6. Lakukan investasi secara konsisten dan disiplin'
];

addMessage('Bot: ' + investingSteps.join('\n'), 'bot');
}


function respondToUnavailable() {
    addMessage('Bot: Maaf, pertanyaan Anda tidak tersedia atau Anda hanya bisa menanyakan masalah keuangan.', 'bot');
}