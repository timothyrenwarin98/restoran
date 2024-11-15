// script.js
document.getElementById('reservasiForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dikirim secara default
    
    // Ambil nilai dari form
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const tanggal = document.getElementById('tanggal').value;
    const waktu = document.getElementById('waktu').value;
    const jumlah = document.getElementById('jumlah').value;
  
    // Cek apakah semua input valid
    if (nama && email && tanggal && waktu && jumlah) {
      const message = `Reservasi berhasil!\nNama: ${nama}\nEmail: ${email}\nTanggal: ${tanggal}\nWaktu: ${waktu}\nJumlah Orang: ${jumlah}`;
      document.getElementById('message').innerHTML = `<p style="color: green;">${message}</p>`;
    } else {
      document.getElementById('message').innerHTML = `<p style="color: red;">Semua field harus diisi.</p>`;
    }
  
    // Mengosongkan form setelah pengiriman
    document.getElementById('reservasiForm').reset();
  });
  