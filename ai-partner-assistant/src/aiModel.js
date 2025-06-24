// aiModel.js
import { encryptData, decryptData } from './authUtils';

const OFFER_DATABASE = [
  { name: "Cashback за регистрацию", platform: "PartnerNet", traffic: "10K", earnings: "$500", status: "active" },
  { name: "Подписка на сервис", platform: "AffiliateHub", traffic: "5K", earnings: "$300", status: "moderation" },
  { name: "Продажа курсов", platform: "EduPromo", traffic: "8K", earnings: "$700", status: "active" },
];

export async function processUserMessage(message, userData) {
  message = message.toLowerCase();

  if (message.includes('найди офферы')) {
    const matchedOffers = OFFER_DATABASE.filter(offer =>
      offer.status === 'active' && offer.traffic >= 5000
    );
    return {
      reply: "Нашел подходящие офферы:",
      offers: matchedOffers,
    };
  }

  if (message.includes('регистрация') || message.includes('зарегистрируйся')) {
    return {
      reply: "Регистрация оффера начата...",
      action: "register_offer",
      offer: OFFER_DATABASE[0],
    };
  }

  if (message.includes('мои данные') || message.includes('информация обо мне')) {
    const decryptedData = decryptData(userData);
    return {
      reply: "Вот ваши сохраненные данные:",
      userData: decryptedData,
    };
  }

  if (message.includes('сохрани мои данные') || message.includes('сохранить информацию')) {
    const sampleUserData = {
      fullName: "Иван Иванов",
      phone: "+79123456789",
      passport: "1234 567890",
      createdAt: new Date().toISOString(),
    };

    const encryptedData = encryptData(sampleUserData);
    return {
      reply: "Данные успешно зашифрованы и готовы к хранению.",
      encryptedData,
    };
  }

  return {
    reply: "Я понимаю ваш запрос, но не могу выполнить его прямо сейчас. Подождите обновления системы или уточните задачу."
  };
}