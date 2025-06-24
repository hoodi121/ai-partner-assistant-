// authUtils.js
import CryptoJS from 'crypto-js';

const ENCRYPTION_KEY = 'AI_PARTNER_ASSISTANT_SECRET_KEY_2025'; // Вы можете использовать ENV-переменную

export const encryptData = (data) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), ENCRYPTION_KEY).toString();
};

export const decryptData = (cipherText) => {
  try {
    const bytes = CryptoJS.AES.decrypt(cipherText, ENCRYPTION_KEY);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  } catch (e) {
    console.error("Ошибка расшифровки данных", e);
    return null;
  }
};