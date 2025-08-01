console.log("Hello, World!");

// Validasi form
function validateForm() {
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const gender = document.getElementById('gender').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !phone || !gender || !message) {
    alert("Semua field harus diisi!");
    return false;
  }
  return true;
}
// Fungsi untuk menampilkan hasil input
// Ini akan mengambil nilai dari form dan menampilkannya di elemen dengan id 'result-form'
// Event submit form
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  if (validateForm()) {
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const gender = document.getElementById('gender').value.trim();
    const message = document.getElementById('message').value.trim();
// Tampilkan hasil input di konsol
    // Tampilkan hasil input
    const result = document.getElementById('result-form');
    if (result) {
      result.textContent = `Hello: ${name}, Phone: ${phone}, Gender: ${gender}, Message: ${message}`;
    }
    // Simpan nama ke localStorage
    // Ini akan menyimpan nama yang diinput ke localStorage untuk digunakan nanti
    // Simpan ke localStorage
    localStorage.setItem('nama', name);

    alert("Form submitted successfully!");
    // document.getElementById('contactForm').reset();
    showWelcomeMessage();
  }
});
// Menampilkan popup sambutan
// Ini akan menampilkan popup yang meminta nama pengguna dan menyimpan nama tersebut
// Event untuk menampilkan popup
// Fungsi sambutan
function showWelcomeMessage() {
  const name = localStorage.getItem('nama') || 'Pengunjung';
  const welcomeMessage = document.getElementById('welcome-speech');
  if (welcomeMessage) welcomeMessage.textContent = `Hi ${name}`;
}

// Panggil sambutan saat halaman dimuat
window.onload = showWelcomeMessage;
// Fungsi untuk menampilkan popup sambutan
function showPopup() {
  const popup = document.getElementById('popup');

  // Function to display a welcome message
// This function prompts the user for their name and updates the welcome speech element
function welcomeMessage() {
    // Prompt the user for their name and display it in the welcome speech element
    const popup = prompt('Please enter your name:');

    // If the user provides a name, update the welcome speech element
    if (popup) {
        // Get the welcome speech element and set its text content to the user's name
        const welcomeElement = document.getElementById('welcome-speech');

        // Update the text content of the welcome speech element with the user's name
        welcomeElement.textContent = popup;
    }
}