import { News } from '@/domain';
import axios, { AxiosInstance, AxiosResponse } from 'axios';

class Api {
  private client: AxiosInstance;
  private endpoins: {
    root: string;
    news: string;
    show: string;
  };

  constructor(baseURL: string) {
    this.client = axios.create({ baseURL });
    this.endpoins = {
      root: '/',
      news: '/news',
      show: '/news/',
    };
  }

  private async GET<T>(endpoint: string): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.client.get(endpoint);
      return response.data;
    } catch (error) {
      throw new Error(`GET request to ${endpoint} failed: ${error}`);
    }
  }

  public async news(): Promise<News[]> {
    return await this.GET<News[]>(this.endpoins.news);
  }

  public async show(id: string): Promise<News> {
    return await this.GET<News>(`${this.endpoins.show}${id}`);
  }

  public async test(): Promise<boolean> {
    try {
      await this.client.get(this.endpoins.root);
      return true;
    } catch {
      return false;
    }
  }
}

export default Api;
