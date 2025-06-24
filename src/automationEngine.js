// automationEngine.js
import { processUserMessage } from './aiModel';
import { saveEncryptedDataToSupabase } from './supabaseIntegration';
import { fetchOffersFromMarketplace, analyzeOfferCompatibility } from './offerParser';
import { getRandomProxy, testProxy } from './proxyManager';

export async function runAutomation(userData) {
  try {
    // 1. Получаем офферы
    const offers = await fetchOffersFromMarketplace("https://partner-marketplace.com"); 

    // 2. Анализируем совместимость
    const compatibleOffers = offers.filter(offer => analyzeOfferCompatibility(offer, userData));

    // 3. Выбираем первый подходящий
    const selectedOffer = compatibleOffers[0];
    if (!selectedOffer) throw new Error("Не найдено совместимых офферов");

    // 4. Тестируем прокси
    const proxy = getRandomProxy();
    const isProxyWorking = await testProxy(proxy);
    if (!isProxyWorking) throw new Error("Прокси не работает");

    // 5. Регистрация оффера
    const registrationResult = await registerOffer(selectedOffer, userData, proxy);

    // 6. Сохраняем данные
    const encryptedData = await saveEncryptedDataToSupabase(registrationResult.credentials);

    return {
      success: true,
      offer: selectedOffer,
      credentials: encryptedData,
      proxyUsed: proxy,
    };
  } catch (e) {
    console.error("Ошибка автоматизации:", e.message);
    return {
      success: false,
      error: e.message,
    };
  }
}

async function registerOffer(offer, userData, proxy) {
  // Здесь должна быть логика регистрации через Puppeteer / Playwright
  return {
    login: `user_${Math.random().toString(36).substring(2, 10)}`,
    password: `pass_${Math.random().toString(36).substring(2, 10)}`,
    affiliateLink: `${offer.link}?ref=auto`,
    registeredAt: new Date().toISOString()
  };
}