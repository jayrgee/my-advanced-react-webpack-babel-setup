import axios from 'axios';

export const fetchConfig = async (defaultConfig = {}) => {
  try {
    const response = await axios.get('config.json');
    const { data } = response;
    return { ...defaultConfig, ...data };
  } catch (error) {
    return defaultConfig;
  }
};

export default fetchConfig;
