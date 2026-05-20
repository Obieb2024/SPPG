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
        "CIASEM BARU": ["SPPG Subang Ciasem Ciasem Baru", "SPPG Subang Ciasem Ciasem Baru 2", "SPPG Subang Ciasem Ciasem Baru 3"],
        "CIASEM HILIR": ["SPPG Subang Ciasem Ciasem Hilir"],
        "DUKUH": ["SPPG Subang Ciasem Dukuh", "SPPG Subang Ciasem Dukuh 2"],
        "SUKAHAJI": ["SPPG Subang Ciasem Sukahaji"],
        "SUKAMANDIJAYA": ["SPPG Subang Ciasem Sukamandijaya 1", "SPPG Subang Ciasem Sukamandijaya 2", "SPPG Subang Ciasem Sukamandijaya 3", "SPPG Subang Ciasem Sukamandijaya 4", "SPPG Subang Ciasem Sukamandijaya 5"]
    },
    "CIATER": {
        "CISAAT": ["SPPG Subang Ciater Cisaat"],
        "PALASARI": ["SPPG Subang Ciater Palasari 1", "SPPG Subang Ciater Palasari 2"],
        "SANCA": ["SPPG Subang Ciater Sanca"]
    },
    "CIBOGO": {
        "BELENDUNG": ["SPPG Subang Cibogo Belendung 1", "SPPG Subang Cibogo Belendung 2"],
        "CIBOGO": ["SPPG Subang Cibogo Cibogo"]
    },
    "CIJAMBE": {
        "CIJAMBE": ["SPPG Subang Cijambe Cijambe"],
        "CIMENTENG": ["SPPG Subang Cijambe Cimenteng"],
        "CIRANGKONG": ["SPPG Subang Cijambe Cirangkong"],
        "GUNUNGTUA": ["SPPG Subang Cijambe Gunungtua"],
        "TANJUNGWANGI": ["SPPG Subang Cijambe Tanjungwangi", "SPPG Subang Cijambe Tanjungwangi 2"]
    },
    "CIKAUM": {
        "CIKAUM BARAT": ["SPPG Subang Cikaum Cikaum Barat", "SPPG Subang Cikaum Cikaum Barat 2"],
        "CIKAUM TIMUR": ["SPPG Subang Cikaum Cikaum Timur"],
        "SINDANGSARI": ["SPPG Subang Cikaum Sindangsari", "SPPG Subang Cikaum Sindangsari 2"],
        "TANJUNGSARI TIMUR": ["SPPG Subang Cikaum Tanjungsari Timur"]
    },
    "CIPEUNDEUY": {
        "CIPEUNDEUY": ["SPPG Subang Cipeundeuy Cipeundeuy"],
        "KARANGMUKTI": ["SPPG Subang Cipeundeuy Karangmukti"],
        "KOSAR": ["SPPG Subang Cipeundeuy Kosar"],
        "LENGKONG": ["SPPG Subang Cipeundeuy Lengkong"],
        "WANTILAN": ["SPPG Subang Cipeundeuy Wantilan", "SPPG Subang Cipeundeuy Wantilan 2", "SPPG Subang Cipeundeuy Cipeundeuy 2"]
    },
    "CIPUNAGARA": {
        "MANYINGSAL": ["SPPG Subang Cipunagara Manyingsal"],
        "PADAMULYA": ["SPPG Subang Cipunagara Padamulya"],
        "SIDAJAYA": ["SPPG Subang Cipunagara Sidajaya"],
        "SIMPAR": ["SPPG Subang Cipunagara Simpar"],
        "TANJUNG": ["SPPG Subang Cipunagara Tanjung 1", "SPPG Subang Cipunagara Tanjung 2"]
    },
    "CISALAK": {
        "CIGADOG": ["SPPG Subang Cisalak Cigadog"],
        "CISALAK": ["SPPG Subang Cisalak Cisalak"],
        "CUPUNAGARA": ["SPPG Subang Cisalak Cupunagara"],
        "DARMAGA": ["SPPG Subang Cisalak Darmaga", "SPPG Subang Cisalak Darmaga 2"],
        "GARDUSAYANG": ["SPPG Subang Cisalak Gardusayang"],
        "PAKUHAJI": ["SPPG Subang Cisalak Pakuhaji", "SPPG Subang Cisalak Pakuhaji 2", "SPPG Subang Cisalak Pakuhaji 3"]
    },
    "COMPRENG": {
        "COMPRENG": ["SPPG Subang Compreng Compreng"],
        "JATIMULYA": ["SPPG Subang Compreng Jatimulya", "SPPG Subang Compreng Jatimulya 2"],
        "KIARASARI": ["SPPG Subang Compreng Kiarasari", "SPPG Subang Compreng Kiarasari 2"]
    },
    "DAWUAN": {
        "DAWUAN KALER": ["SPPG Subang Dawuan Dawuan Kaler"],
        "DAWUAN KIDUL": ["SPPG Subang Dawuan Dawuan Kidul"],
        "MANYETI": ["SPPG Subang Dawuan Manyeti", "SPPG Subang Dawuan Manyeti 2"]
    },
    "JALANCAGAK": {
        "BUNIHAYU": ["SPPG Subang Jalancagak Bunihayu", "SPPG Subang Jalancagak Bunihayu 2", "SPPG Subang Jalancagak Bunihayu 3"],
        "CURUGRENDENG": ["SPPG Subang Jalancagak Curugrendeng", "SPPG Subang Jalancagak Curugrendeng 2"],
        "JALANCAGAK": ["SPPG Subang Jalancagak Jalancagak", "SPPG Subang Jalancagak Jalancagak 2"],
        "TAMBAKAN": ["SPPG Subang Jalancagak Tambakan", "SPPG Subang Jalancagak Tambakan 2", "SPPG Subang Jalancagak Tambakan 3"],
        "TAMBAKMEKAR": ["SPPG Subang Jalancagak Tambakmekar"]
    },
    "KALIJATI": {
        "KALIANGSANA": ["SPPG Subang Kalijati Kaliangsana"],
        "KALIJATI BARAT": ["SPPG Subang Kalijati Kalijati Barat", "SPPG Subang Kalijati Kalijati Barat 2", "SPPG Subang Kalijati Kalijati Barat 4"],
        "KALIJATI TIMUR": ["SPPG Subang Kalijati Kalijati Timur", "SPPG Subang Kalijati Kalijati Timur 2"],
        "MARENGMANG": ["SPPG Subang Kalijati Marengmang"],
        "TANGGULUN BARAT": ["SPPG Subang Kalijati Tanggulun Barat"]
    },
    "KASOMALANG": {
        "KASOMALANG WETAN": ["SPPG Subang Kasomalang Kasomalang Wetan"],
        "SINDANGSARI": ["SPPG Subang Kasomalang Sindangsari", "SPPG Subang Kasomalang Sindangsari 2", "SPPG Subang Kasomalang Sindangsari 3", "SPPG Subang Kasomalang Sindangsari 4"],
        "TENJOLAYA": ["SPPG Subang Kasomalang Tenjolaya"]
    },
    "LEGONKULON": {
        "BOBOS": ["SPPG Subang Legonkulon Bobos"],
        "LEGONKULON": ["SPPG Subang Legonkulon Legonkulon"]
    },
    "PABUARAN": {
        "KADAWUNG": ["SPPG Subang Pabuaran Kadawung"],
        "PABUARAN": ["SPPG Subang Pabuaran Pabuaran", "SPPG Subang Pabuaran Pabuaran 2", "SPPG Subang Pabuaran Pabuaran 3"],
        "SALAMJAYA": ["SPPG Subang Pabuaran Salamjaya"]
    },
    "PAGADEN": {
        "GAMBARSARI": ["SPPG Subang Pegaden Gambarsari"],
        "GEMBOR": ["SPPG Subang Pagaden Gembor"],
        "KAMARUNG": ["SPPG Subang Pagaden Kamarung", "SPPG Subang Pagaden Kamarung 2"],
        "SUKAMULYA": ["SPPG Subang Pagaden Sukamulya 1", "SPPG Subang Pagaden Sukamulya 2", "SPPG Subang Pagaden Sukamulya 3"]
    },
    "PAGADEN BARAT": {
        "MARGAHAYU": ["SPPG Subang Pagaden Barat Margahayu"],
        "SUMURGINTUNG": ["SPPG Subang Pagaden Barat Sumurgintung"]
    },
    "PAMANUKAN": {
        "MULYASARI": ["SPPG Subang Pamanukan Mulyasari"],
        "PAMANUKAN": ["SPPG Subang Pamanukan Pamanukan"],
        "PAMANUKAN HILIR": ["SPPG Subang Pamanukan Pamanukan Hilir"],
        "RANCASARI": ["SPPG Subang Pamanukan Rancasari", "SPPG Subang Pamanukan Rancasari 2", "SPPG Subang Pamanukan Rancasari 3", "SPPG Subang Pamanukan Rancasari 4"]
    },
    "PATOKBEUSI": {
        "CIBERES": ["SPPG Subang Patokbeusi Ciberes"],
        "GEMPOLSARI": ["SPPG Subang Patokbeusi Gempolsari"],
        "RANCABANGO": ["SPPG Subang Patokbeusi Rancabango", "SPPG Subang Patokbeusi Rancabango 2", "SPPG Subang Patokbeusi Rancabango 3"],
        "RANCAMULYA": ["SPPG Subang Patokbeusi Rancamulya"],
        "TAMBAKJATI": ["SPPG Subang Patokbeusi Tambakjati", "SPPG Subang Patokbeusi Tambakjati 2"],
        "TANJUNGRASA": ["SPPG Subang Patokbeusi Tanjungrasa"],
        "TANJUNGRASA KIDUL": ["SPPG Subang Patokbeusi Tanjungrasa Kidul"]
    },
    "PURWADADI": {
        "BELENDUNG": ["SPPG Subang Purwadadi Belendung"],
        "PANYINGKIRAN": ["SPPG Subang Purwadadi Panyingkiran"],
        "PRAPATAN": ["SPPG Subang Purwadadi Prapatan", "SPPG Subang Purwadadi Prapatan 2"],
        "PURWADADI BARAT": ["SPPG Subang Purwadadi Purwadadi Barat"],
        "WANAKERTA": ["SPPG Subang Purwadadi Wanakerta"]
    },
    "PUSAKAJAYA": {
        "BOJONGJAYA": ["SPPG Subang Pusakajaya Bojongjaya"],
        "CIGUGUR": ["SPPG Subang Pusakajaya Cigugur"],
        "KARANGANYAR": ["SPPG Subang Pusakajaya Karanganyar"],
        "KEBONDANAS": ["SPPG Subang Pusakajaya Kebondanas"],
        "PUSAKAJAYA": ["SPPG Subang Pusakajaya Pusakajaya"]
    },
    "PUSAKANAGARA": {
        "KOTASARI": ["SPPG Subang Pusakanagara Kotasari"],
        "PATIMBAN": ["SPPG Subang Pusakanagara Patimban"],
        "PUSAKARATU": ["SPPG Subang Pusakanagara Pusakaratu", "SPPG Subang Pusakanagara Pusakaratu 2"]
    },
    "SAGALAHERANG": {
        "SAGALAHERANG KALER": ["SPPG Subang Sagalaherang Sagalaherang kaler", "SPPG Subang Sagalaherang Sagalaherang Kaler 2", "SPPG Subang Sagalaherang Sagalaherang Kaler 3", "SPPG Subang Sagalaherang Sagalaherang Kaler 4"],
        "SAGALAHERANG KIDUL": ["SPPG Subang Sagalaherang Sagalaherang Kidul"],
        "SUKAMANDI": ["SPPG Subang Sagalaherang Sukamandi"]
    },
    "SERANGPANJANG": {
        "CIJENGKOL": ["SPPG Subang Serangpanjang Cijengkol"],
        "CIKUJANG": ["SPPG Subang Serangpanjang Cikujang"],
        "PONGGANG": ["SPPG Subang Serangpanjang Ponggang"]
    },
    "SUBANG": {
        "CIGADUNG": ["SPPG Subang Subang Cigadung", "SPPG Subang Subang Cigadung 2"],
        "DANGDEUR": ["SPPG Subang Subang Dangdeur", "SPPG Subang Subang Dangdeur 2", "SPPG Subang Subang Dangdeur 3", "SPPG Subang Subang Dangdeur 4", "SPPG Subang Subang Dangdeur 5", "SPPG Subang Subang Dangdeur 6", "SPPG Subang Subang Dangdeur 7", "SPPG Subang Subang Dangdeur 8", "SPPG Subang Subang Dangdeur 9", "SPPG Subang Subang Dangdeur 10"],
        "KARANGANYAR": ["SPPG Subang Subang Karanganyar", "SPPG Subang Subang Karanganyar 2", "SPPG Subang Subang Karanganyar 3"],
        "PARUNG": ["SPPG Subang Subang Parung"],
        "PASIRKAREUMBI": ["SPPG Subang Subang Pasirikareumbi 1", "SPPG Subang Subang Pasirikareumbi 2", "SPPG Subang Subang Pasirikareumbi 3", "SPPG Subang Subang Pasirikareumbi 4", "SPPG Subang Subang Pasirikareumbi 5"],
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
        "KERTAJAYA": ["SPPG Subang Tambakdahan Kertajaya"],
        "RANCAUDIK": ["SPPG Subang Tambakdahan Rancaudik", "SPPG Subang Tambakdahan Rancaudik 2"],
        "TAMBAKDAHAN": ["SPPG Subang Tambakdahan Tambakdahan", "SPPG Subang Tambakdahan Tambakdahan 2"]
    },
    "TANJUNGSIANG": {
        "BUNIARA": ["SPPG Subang Tanjungsiang Buniara"],
        "GANDASOLI": ["SPPG Subang Tanjungsiang Gandasoli"],
        "SINDANGLAYA": ["SPPG Subang Tanjungsiang Sindanglaya"],
        "SIRAP": ["SPPG Subang Tanjungsiang Sirap"],
        "TANJUNGSIANG": ["SPPG Subang Tanjungsiang Tanjungsiang", "SPPG Subang Tanjungsiang Tanjungsiang 2"]
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
