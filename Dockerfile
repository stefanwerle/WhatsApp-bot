# Folosește Node.js 18
FROM node:18

# Setează directorul de lucru
WORKDIR /app

# Copiază doar package.json și package-lock.json pentru instalare mai rapidă
COPY package*.json ./

# Instalează dependențele
RUN npm install

# Copiază restul fișierelor
COPY . .

# Expune portul 3000 (sau cel pe care îl folosești)
EXPOSE 3000

# Comanda care pornește aplicația
CMD ["node", "index.js"]

