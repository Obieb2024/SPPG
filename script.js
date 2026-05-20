// =========================================================================
// 1. PASTE URL WEB APP DARI GOOGLE APPS SCRIPT DI SINI
// =========================================================================
const scriptURL = 'https://script.google.com/macros/s/AKfycbx58UDXIxOuF2MSapdNQ3YAzZvv_oWEkIwKkNYhrgt_zytCW3Uy2zWKhzpKRO92OgYfyw/exec';

// =========================================================================
// 2. DATA WILAYAH & SPPG
// =========================================================================
const dataSppg = {
    "BINONG": {
        "BINONG": ["SPPG Subang Binong Binong"],
        "CICADAS": ["SPPG Subang Binong Cicadas", "SPPG Subang Binong Cicadas 2"],
        "CITRAJAYA": ["SPPG Subang Binong Citrajaya"],
        "KARANGWANGI": ["SPPG Subang Binong Karangwangi"],
        "MULYASARI": ["SPPG Subang Binong Mulyasari"]
    },
    "BLANAKAN": {
        "BLANAKAN": ["SPPG Subang Blanakan Blanakan 1", "SPPG Subang Blanakan Blanakan 2"],
        "JAYAMUKTI": ["SPPG Subang Blanakan Jayamukti"],
        "MUARA": ["SPPG Subang Blanakan Muara"],
        "RAWAMENENG": ["SPPG Subang Blanakan Rawameneng"]
    },
    "CIASEM": {
        "CIASEM BARU": ["SPPG Subang Ciasem Ciasem Baru 2", "SPPG Subang Ciasem Ciasem Baru 3"]
    },
    "SUBANG": {
        "PASIRKAREUMBI": ["SPPG Subang Subang Pasirikareumbi 1", "SPPG Subang Subang Pasirikareumbi 3"],
        "SOKLAT": ["SPPG Subang Subang Soklat", "SPPG Subang Subang Soklat 2"],
        "SUKAMELANG": ["SPPG Subang Subang Sukamelang 1", "SPPG Subang Subang Sukamelang 2", "SPPG Subang Subang Sukamelang 3", "SPPG Subang Subang Sukamelang 4"]
    },
    "SUKASARI": {
        "ANGGASARI": ["SPPG Subang Sukasari Anggasari"],
        "BATANGSARI": ["SPPG Subang Sukasari Batangsari", "SPPG Subang Sukasari Batangsari 2"],
        "MANDALAWANGI": ["SPPG Subang Sukasari Mandalawangi"],
        "SUKAREJA": ["SPPG Subang Sukasari Sukareja"]
    },
    "TAMBAKDAHAN": {
        "KERTAJAYA": ["SPPG Subang Tambakdahan Kertajaya"]
    }
};

// =========================================================================
// 3. LOGIKA DROPDOWN OTOMATIS
// =========================================================================
const selectKecamatan = document.getElementById('kecamatan');
const selectKelurahan = document.getElementById('kelurahan');
const selectNamaSppg = document.getElementById('nama_sppg');

window.onload = function () {
    Object.keys(dataSppg).forEach(kecamatan => {
        let option = document.createElement('option');
        option.value = kecamatan;
        option.textContent = kecamatan;
        selectKecamatan.appendChild(option);
    });
};

selectKecamatan.addEventListener('change', function () {
    selectKelurahan.innerHTML = '<option value="">-- Pilih Kelurahan/Desa --</option>';
    selectNamaSppg.innerHTML = '<option value="">-- Pilih Nama SPPG --</option>';
    selectNamaSppg.disabled = true;

    if (this.value) {
        selectKelurahan.disabled = false;
        Object.keys(dataSppg[this.value]).forEach(kelurahan => {
            let option = document.createElement('option');
            option.value = kelurahan;
            option.textContent = kelurahan;
            selectKelurahan.appendChild(option);
        });
    } else {
        selectKelurahan.disabled = true;
    }
});

selectKelurahan.addEventListener('change', function () {
    selectNamaSppg.innerHTML = '<option value="">-- Pilih Nama SPPG --</option>';

    if (this.value) {
        selectNamaSppg.disabled = false;
        dataSppg[selectKecamatan.value][this.value].forEach(sppg => {
            let option = document.createElement('option');
            option.value = sppg;
            option.textContent = sppg;
            selectNamaSppg.appendChild(option);
        });
    } else {
        selectNamaSppg.disabled = true;
    }
});

// =========================================================================
// 4. PREVIEW FILE & TOGGLE VISIBILITAS STATUS
// =========================================================================
const statusRadios = document.querySelectorAll('input[name="status"]');
const groupBuktiBermasalah = document.getElementById('group_bukti_bermasalah');
const inputBuktiPendukung = document.getElementById('bukti_pendukung');

// Array untuk menyimpan berkas yang dipilih secara dinamis
let filesFotoDepan = [];
let filesFotoOperasional = [];
let filesBuktiPendukung = [];

function updateStatusVisibility() {
    const selectedStatus = document.querySelector('input[name="status"]:checked');
    if (selectedStatus && selectedStatus.value === 'BERMASALAH') {
        groupBuktiBermasalah.classList.remove('hidden');
    } else {
        groupBuktiBermasalah.classList.add('hidden');
        inputBuktiPendukung.value = '';
        filesBuktiPendukung.length = 0; // Bersihkan array bukti
        const previewContainer = document.getElementById('preview_bukti_pendukung');
        previewContainer.innerHTML = '';
    }
}

statusRadios.forEach(radio => {
    radio.addEventListener('change', updateStatusVisibility);
});

// Jalankan saat halaman pertama kali dibuka untuk menyesuaikan status awal
updateStatusVisibility();

// Fungsi pembantu untuk memproses preview gambar dan tombol hapus
function setupFilePicker(inputId, containerId, filesArray, isMultiple) {
    const input = document.getElementById(inputId);
    const container = document.getElementById(containerId);

    input.addEventListener('change', function () {
        const newFiles = Array.from(this.files);
        if (newFiles.length === 0) return;

        if (isMultiple) {
            // Gabungkan file baru ke list yang sudah ada
            filesArray.push(...newFiles);
        } else {
            // Jika single, overwrite list
            filesArray.length = 0;
            filesArray.push(newFiles[0]);
        }

        // Reset input value agar user bisa memilih file yang sama lagi jika diinginkan
        this.value = '';

        renderPreviews(container, filesArray, inputId);
    });
}

function renderPreviews(container, filesArray, inputId) {
    container.innerHTML = ''; // Reset container

    filesArray.forEach((file, index) => {
        // Wrapper item preview
        const wrapper = document.createElement('div');
        wrapper.className = 'preview-wrapper';

        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'preview-delete-btn';
        deleteBtn.type = 'button';
        deleteBtn.innerHTML = '&times;';
        deleteBtn.title = 'Hapus';
        deleteBtn.addEventListener('click', function () {
            filesArray.splice(index, 1); // Hapus dari array
            renderPreviews(container, filesArray, inputId); // Render ulang
        });

        // Image or Document preview
        if (file.type.startsWith('image/')) {
            const img = document.createElement('img');
            const reader = new FileReader();
            reader.onload = function (e) {
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
            wrapper.appendChild(img);
        } else {
            const fileDiv = document.createElement('div');
            fileDiv.className = 'file-icon-preview';
            fileDiv.innerHTML = `📄 <span style="font-size: 11px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 100px;">${file.name}</span>`;
            wrapper.appendChild(fileDiv);
        }

        wrapper.appendChild(deleteBtn);
        container.appendChild(wrapper);
    });
}

// Inisialisasi picker dan preview untuk semua input file gambar
setupFilePicker('foto_depan', 'preview_foto_depan', filesFotoDepan, false);
setupFilePicker('foto_operasional', 'preview_foto_operasional', filesFotoOperasional, true);
setupFilePicker('bukti_pendukung', 'preview_bukti_pendukung', filesBuktiPendukung, true);
// =========================================================================
// 5. FUNGSI PEMBANTU PROSES FILE (KOMPRESI & BASE64)
// =========================================================================

// Mengompresi gambar menggunakan HTML Canvas agar ukuran payload kecil dan unggahan cepat
async function compressImage(file, maxWidth = 1024, quality = 0.7) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = new Image();
            img.onload = function () {
                const canvas = document.createElement('canvas');
                let width = img.width;
                let height = img.height;

                if (width > maxWidth) {
                    height = Math.round((height * maxWidth) / width);
                    width = maxWidth;
                }

                canvas.width = width;
                canvas.height = height;

                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);

                const base64 = canvas.toDataURL(file.type, quality);
                const base64Data = base64.split(',')[1];
                resolve({
                    base64Data: base64Data,
                    mimeType: file.type,
                    fileName: file.name
                });
            };
            img.onerror = () => reject(new Error('Gagal memuat gambar untuk dikompresi.'));
            img.src = e.target.result;
        };
        reader.onerror = () => reject(new Error('Gagal membaca file gambar.'));
        reader.readAsDataURL(file);
    });
}

// Mengubah file mentah (seperti PDF) ke Base64 tanpa kompresi
async function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = function (e) {
            const base64 = e.target.result;
            const base64Data = base64.split(',')[1];
            resolve({
                base64Data: base64Data,
                mimeType: file.type,
                fileName: file.name
            });
        };
        reader.onerror = () => reject(new Error('Gagal membaca file untuk diubah ke Base64.'));
        reader.readAsDataURL(file);
    });
}

// Menentukan fungsi proses berdasarkan tipe file
async function processFile(file) {
    if (!file) return null;
    if (file.type.startsWith('image/')) {
        try {
            return await compressImage(file);
        } catch (e) {
            console.warn('Kompresi gambar gagal, menggunakan metode fallback Base64 biasa:', e);
            return await fileToBase64(file);
        }
    } else {
        return await fileToBase64(file);
    }
}

// =========================================================================
// 6. LOGIKA PENGIRIMAN DATA FORM & UPLOAD DIRECT KE GDRIVE
// =========================================================================
const form = document.getElementById('sppgForm');
const btnSubmit = document.querySelector('.btn-submit');

form.addEventListener('submit', async function (e) {
    e.preventDefault();

    btnSubmit.textContent = 'Memproses File & Mengirim...';
    btnSubmit.disabled = true;

    // Validasi file secara manual
    if (filesFotoDepan.length === 0) {
        alert('Mohon pilih Foto Tampak Depan SPPG.');
        btnSubmit.textContent = 'Simpan Data';
        btnSubmit.disabled = false;
        return;
    }
    if (filesFotoOperasional.length === 0) {
        alert('Mohon pilih Foto Operasional SPPG.');
        btnSubmit.textContent = 'Simpan Data';
        btnSubmit.disabled = false;
        return;
    }
    const statusVal = document.querySelector('input[name="status"]:checked').value;
    if (statusVal === 'BERMASALAH' && filesBuktiPendukung.length === 0) {
        alert('Mohon unggah lampiran Bukti Pendukung untuk kategori Bermasalah.');
        btnSubmit.textContent = 'Simpan Data';
        btnSubmit.disabled = false;
        return;
    }

    const fileDepan = filesFotoDepan[0];
    const filesOps = filesFotoOperasional;
    const filesBukti = filesBuktiPendukung;

    try {
        // Proses kompresi & Base64 secara paralel
        const [fileDepanProcessed, filesOpsProcessed, filesBuktiProcessed] = await Promise.all([
            processFile(fileDepan),
            Promise.all(filesOps.map(file => processFile(file))),
            Promise.all(filesBukti.map(file => processFile(file)))
        ]);

        // Menyusun payload data dalam format JSON
        const payload = {
            kecamatan: document.getElementById('kecamatan').value,
            kelurahan: document.getElementById('kelurahan').value,
            nama_sppg: document.getElementById('nama_sppg').value,
            status: statusVal,
            keterangan: document.getElementById('keterangan').value,
            keterangan_tambahan: document.getElementById('keterangan_tambahan').value || '',
            foto_depan: fileDepanProcessed,
            foto_operasional: filesOpsProcessed, // Mengirim array
            bukti_pendukung: filesBuktiProcessed // Mengirim array
        };

        // Mengirimkan payload JSON
        await fetch(scriptURL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'text/plain;charset=utf-8'
            },
            body: JSON.stringify(payload)
        });

        alert('Data dan Foto Berhasil Disimpan!');

        form.reset();

        // Reset array berkas
        filesFotoDepan.length = 0;
        filesFotoOperasional.length = 0;
        filesBuktiPendukung.length = 0;

        // Reset preview gambar
        document.getElementById('preview_foto_depan').innerHTML = '';
        document.getElementById('preview_foto_operasional').innerHTML = '';
        document.getElementById('preview_bukti_pendukung').innerHTML = '';

        // Reset dropdown wilayah
        selectKelurahan.innerHTML = '<option value="">-- Pilih Kelurahan/Desa --</option>';
        selectKelurahan.disabled = true;
        selectNamaSppg.innerHTML = '<option value="">-- Pilih Nama SPPG --</option>';
        selectNamaSppg.disabled = true;

        updateStatusVisibility();

    } catch (error) {
        alert('Terjadi kesalahan saat menyimpan data teks dan file: ' + error.message);
    } finally {
        btnSubmit.textContent = 'Simpan Data';
        btnSubmit.disabled = false;
    }
});