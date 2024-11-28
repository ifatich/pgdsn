# kitvue - Pegadaian Design System

## Getting started

```
npm install git+https://repo.pegadaian.co.id/client/pegadaian-ui-kit-vue.git
```

# Configuration
Add sass plugin

```
vue add style-resource-loader
```

On your vue config add

```
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: ['bootstrap-vue'],

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: []
    }
  }
})
```

Spesific on line 
```
transpileDependencies: ['bootstrap-vue'],

pluginOptions: {
    'style-resources-loader': {
        preProcessor: 'scss',
        patterns: []
    }
}
```

# Berkontribusi Pada Kitvue

`kitvue` merupakan sebuah library komponen UI yang dapat mendukung pengembagan proyek IT di Pegadaian. Library ini menggunakan basis teknologi framework Vue versi 3.4.7, dan Bootstrap versi 5.3.2.

## Branches

Kami menggunakan dua branch utama dalam pengembangan proyek ini:

- **`master`:** Branch yang berisikan library dengan versi yang stabil dan dapat digunakan untuk di publish menjadi sebuah package di artifactory pegadaian.

- **`dev-update-component`:** Branch yang digunakan sebagai branch pengembangan utama. Semua fitur baru dan perbaikan akan di-review di sini sebelum akan di-merge ke branch `master`.

## Kontribusi

Kami sangat menyambut kontribusi dari developer lain untuk menambahkan komponen baru, memperbaiki styling, atau melakukan bug fixing pada komponen yang ada.

### Langkah-Langkah Kontribusi

1. **Fork dan Clone Repository**
   - Fork repository `kitvue` ke akun GitHub kamu.
   - Clone repository fork kamu:
     ```bash
     git clone https://repo.pegadaian.co.id/client/pegadaian-ui-kit-vue.git

     cd pegadaian-ui-kit-vue
     ```

2. **Checkout Branch `dev-update-component`**
   - Pastikan kamu selalu bekerja dari branch pengembangan, `dev-update-component`:
     ```bash
     git checkout dev-update-component
     ```

3. **Buat Branch Baru dari `dev-update-component`**
   - **Untuk Penambahan Komponen Baru:**
     - Buat branch baru dengan penamaan `dev-add-(nama-komponen)`:
     - Contoh jika kamu melakukan penambahan komponen button : 
       ```bash
       git checkout -b dev-add-button
       ```

   - **Untuk Update atau Bug Fixing Komponen yang Ada:**
     - Buat branch baru dengan penamaan `dev-update-(nama-komponen)`:
     - Contoh jika kamu melakukan penambahan komponen button : 
       ```bash
       git checkout -b dev-update-button
       ```

4. **Mulai Pengembangan**
   - **Penambahan Komponen Baru:**
     - Tambahkan komponen baru sesuai dengan standar kode yang telah disepakati.
     - Pastikan untuk menulis komentar dan menambahkan dokumentasi yang relevan.
  
   - **Update atau Bug Fixing:**
     - Perbaiki bug atau update styling komponen yang ada.
     - Tambahkan komentar untuk memastikan perubahan tersebut.

5. **Commit dan Push**
   - Buat commit yang jelas dan deskriptif:
     ```bash
     git commit -m "Add Button component with primary and secondary variants"
     git push origin dev-add-button
     ```

6. **Buka Merge Request (MR)**
   - Setelah selesai, buka Merge Request ke branch `dev-update-component`.
   - Tambahkan deskripsi mengenai perubahan dan penambahan yang kamu lakukan.

7. **Code Review**
   - Kode kamu akan di-review oleh **Engineer** dan **Designer Team Pegadaian Design**.
   - Jika ada catatan, lakukan perbaikan berdasarkan umpan balik yang diberikan.

8. **Merge ke `dev-update-component`**
   - Setelah review selesai, request akan di-merge ke `dev-update-component`.

# Penting Diperhatikan 
## Penamaan Branch

- **Penambahan Komponen Baru:**
  - Branch name: `dev-add-(nama-komponen)`
  - Contoh: `dev-add-button`, `dev-add-modal`

- **Perbaikan atau Update Komponen yang Ada:**
  - Branch name: `dev-update-(nama-komponen)`
  - Contoh: `dev-update-button`, `dev-update-card`

### Praktik Terbaik

- **Coding Style:** Ikuti pedoman coding style yang ada dalam proyek ini.
- **Test:** Selalu tambahkan atau perbarui unit tests untuk memastikan kode yang kamu tambahkan atau ubah berfungsi dengan baik.
- **Dokumentasi:** Jangan lupa untuk menambahkan atau memperbarui dokumentasi jika kamu menambahkan fitur baru atau mengubah yang sudah ada.
- **Jaga Kualitas:** Semua kode harus melalui proses review dan testing sebelum di-merge ke branch `dev-update-component`.

---

Terima kasih telah berkontribusi ke `kitvue`! Kami sangat menghargai usaha dan waktu yang kamu luangkan untuk membuat proyek ini menjadi lebih baik.
- **Love, Regard and Cheers. Happy Development**
- **♡ Pegadaian Design ♡**