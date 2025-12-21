import { API_BASE_URL } from './config';

export async function apiRequest(path, options = {}) {
  const url = `${API_BASE_URL}${path}`;

  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  });

  const data = await res.json().catch(() => null);

  if (!res.ok) {
    const message = data?.message || 'Request failed';
    throw new Error(message);
  }

  return data;
}

export async function apiAuthRequest(path, token, options = {}) {
  const url = `${API_BASE_URL}${path}`;

  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      ...(options.headers || {}),
    },
    ...options,
  });

  const data = await res.json().catch(() => null);

  if (!res.ok) {
    const message = data?.message || 'Request failed';
    throw new Error(message);
  }

  return data;
}