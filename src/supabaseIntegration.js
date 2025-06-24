// supabaseIntegration.js
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://euacsizavhfubndcswwn.supabase.co'; 
const SUPABASE_ANON_KEY = 'sbp_f66bccc33d010705cf2bccf44177af617958ac32';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export const saveEncryptedDataToSupabase = async (encryptedData) => {
  const { data, error } = await supabase
    .from('user_data')
    .insert([{ encrypted_data: encryptedData, created_at: new Date().toISOString() }]);

  if (error) {
    console.error("Ошибка сохранения данных:", error.message);
    return false;
  }

  return true;
};

export const getOffersFromSupabase = async () => {
  const { data, error } = await supabase
    .from('offers')
    .select('*');

  if (error) {
    console.error("Ошибка получения офферов:", error.message);
    return [];
  }

  return data;
};