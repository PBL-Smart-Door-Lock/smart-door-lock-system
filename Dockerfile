# Menggunakan image Node.js versi 22 yang lebih baru (dibutuhkan oleh Vite 7 & Firebase)
FROM node:22-alpine

# Menentukan direktori kerja di dalam container
WORKDIR /app

# Menyalin file konfigurasi package
COPY package*.json ./

# Menginstal dependensi
RUN npm install

# Menyalin seluruh source code ke dalam container
COPY . .

# Mengekspos port default Vite (5173)
EXPOSE 5173

# Menjalankan Vite development server agar bisa diakses dari luar container (--host)
CMD ["npm", "run", "dev", "--", "--host"]
