import axios from "axios";
import { settings, statistics, user, userLogin, WordBody } from "../types/types";

const axiosClient = axios.create({
  baseURL: 'https://react-learnwords-rslangg.herokuapp.com',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

const token = null;

function setParamsOfAggregatedWords(group = '', page = '', wordsPerPage = '', filter = '') {
  return `?group=${group}&page=${page}&wordsPerPage=${wordsPerPage}&filter=${filter}`
}

export async function getAllWords(group: number, page: number) {
  const response = await axiosClient.get(`/words?group=${group}&page=${page}`)
  return response.data
}

export async function getWordById(id: string) {
  return axiosClient.get(`/words/${id}`)
}

export async function createUser(data: user) {
  return axiosClient.post('/users', JSON.stringify(data));
}

export async function getUserById(id: string) {
  return axiosClient.get(`/users/${id}`, {
    withCredentials: true,
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  })
}

export async function updateUserById(id: string, data: user) {
  return axiosClient.put(`/users/${id}`, JSON.stringify(data), {
    withCredentials: true,
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  })
}

export async function deleteUserById(id: string) {
  return axiosClient.delete(`/users/${id}`, {
    withCredentials: true,
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  })
}

export async function getUserTokens(id: string, tokens: string) {
  return axiosClient.get(`/users/${id}/${tokens}`, {
    withCredentials: true,
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  })
}

export async function getAllUserWords(id: string) {
  return axiosClient.get(`/users/${id}/words`, {
    withCredentials: true,
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  })
}

export async function setUserWord(userId: string, wordId: string, body: WordBody) {
  return axiosClient.post(`/users/${userId}/words/${wordId}`, JSON.stringify(body), {
    withCredentials: true,
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  })
}

export async function getUserWordById(userId: string, wordId: string) {
  return axiosClient.get(`/users/${userId}/words/${wordId}`, {
    withCredentials: true,
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  })
}

export async function deleteUserWord(userId: string, wordId: string) {
  return axiosClient.delete(`/users/${userId}/words/${wordId}`, {
    withCredentials: true,
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  })
}

export async function updateUserWord(userId: string, wordId: string, body: WordBody) {
  return axiosClient.put(`/users/${userId}/words/${wordId}`, JSON.stringify(body), {
    withCredentials: true,
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  })
}

export async function getUserAggregatedWords(id: string) {
  return axiosClient.get(`/users/${id}/aggregatedWords${setParamsOfAggregatedWords()}`, {
    withCredentials: true,
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  })
}

export async function getUserAgregatedWordById(userId: string, wordId: string) {
  return axiosClient.get(`/users/${userId}/aggregatedWords/${wordId}`, {
    withCredentials: true,
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  })
}

export async function getUserStatistic(userId: string) {
  return axiosClient.get(`/users/${userId}/statistics`, {
    withCredentials: true,
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  })
}

export async function updateUserStatistics(userId: string, data: statistics) {
  return axiosClient.put(`/users/${userId}/statistics`, JSON.stringify(data), {
    withCredentials: true,
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  })
}

export async function getUserSettings(userId: string) {
  return axiosClient.get(`/users/${userId}/settings`, {
    withCredentials: true,
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  })
}

export async function updateUserSettings(userId: string, data: settings) {
  return axiosClient.put(`/users/${userId}/settings`, JSON.stringify(data), {
    withCredentials: true,
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  })
}

export function signIn(data: userLogin) {
  return axiosClient.put(`/signin`, JSON.stringify(data), {
    withCredentials: true,
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  })
}
