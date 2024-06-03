'use client';

import { useApiContext } from '@/context/ApiContext';
import { News } from '@/domain';
import Api from '@/services/Api.service';
import { useState } from 'react';

type Response<T> = {
  loading: boolean;
  error: string | null;
  data: T;
};

interface UseApiReturnType {
  getNews: () => Promise<void>;
  getShow: (id: string) => Promise<void>;
  test: () => Promise<boolean>;
  news: Response<News[]>;
  show: Response<News>;
}

const useApi = (): UseApiReturnType => {
  const { apiUrl } = useApiContext();
  const api = new Api(apiUrl);

  const [news, setNews] = useState<Response<News[]>>(
    {} as Response<News[]>,
  );
  const [show, setShow] = useState<Response<News>>({} as Response<News>);

  const getNews = async () => {
    setHeadline({ loading: true, error: null, data: {} as News[] });
    try {
      const data = await api.news();

      setHeadline((prevState) => ({ ...prevState, data: data }));
    } catch (err) {
      setHeadline((prevState) => ({
        ...prevState,
        error: (err as Error).message,
      }));
    } finally {
      setHeadline((prevState) => ({ ...prevState, loading: false }));
    }
  };

  const getShow = async (id: string) => {
    setShow({ loading: true, error: null, data: {} as News });
    try {
      const data = await api.show(id);

      setShow((prevState) => ({ ...prevState, data: data }));
    } catch (err) {
      setShow((prevState) => ({ ...prevState, error: (err as Error).message }));
    } finally {
      setShow((prevState) => ({ ...prevState, loading: false }));
    }
  };

  const test = async () => {
    try {
      await api.test();
      return true;
    } catch {
      return false;
    }
  };

  return {
    getNews,
    getShow,
    test,
    news,
    show,
  };
};

export default useApi;
