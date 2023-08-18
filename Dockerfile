# ใช้ Node.js ล่าสุดเป็น Base Image
FROM node:20-alpine

# สร้างและเปลี่ยนเป็นไดเรกทอรีของแอพ
WORKDIR /usr/src/app

# คัดลอกไฟล์ package.json และ package-lock.json ไปยังโฟลเดอร์ที่ทำงาน
COPY package*.json ./

# ติดตั้ง dependencies ของโปรเจค
RUN npm install

EXPOSE 3000

# คัดลอกโค้ดทั้งหมดไปยัง Image
COPY . .

# เริ่มต้นแอพ
CMD ["npm", "run", "dev"]
