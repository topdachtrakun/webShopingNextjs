# ใช้ Node.js ล่าสุดเป็น Base Image
FROM node:latest

# สร้างและเปลี่ยนเป็นไดเรกทอรีของแอพ
WORKDIR /usr/src/app

# คัดลอกไฟล์ package.json และ package-lock.json ไปยังโฟลเดอร์ที่ทำงาน
COPY package*.json ./

# ติดตั้ง dependencies ของโปรเจค
RUN npm install

# คัดลอกโค้ดทั้งหมดไปยัง Image
COPY . .

# เริ่มต้นแอพ
CMD [ "npm", "start" ]
