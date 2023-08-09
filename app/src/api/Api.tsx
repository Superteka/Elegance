const getApi = async (apiUrl: string): Promise<any> => {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Falha na requisição da API');
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Erro ao obter os dados da API:', error);
    return null;
  }
};

const url = 'https://63069afec0d0f2b8011f9944.mockapi.io/produtos';

const Api = async (): Promise<any> => {
  try {
    const data = await getApi(url);
    return data;
  } catch (error) {
    console.error('Erro ao obter os dados da API:', error);
    return null;
  }
};

export default Api;
