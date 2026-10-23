import { Api } from '../constants/api';

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export async function makeRequest(
  method: HttpMethod = 'GET',
  service: string = '',
  endpoint: string = '',
  token: string | null = null,
  queryParams: Record<string, any> | null = null,
  environment: 'client' | 'server' = 'client',
  bodyRequest: any = null,
  isFormData: boolean = false
) {
  let url = endpoint.startsWith('http') ? endpoint : Api.baseurl(endpoint);

  if (queryParams && Object.keys(queryParams).length > 0) {
    const searchParams = new URLSearchParams();
    Object.entries(queryParams).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        searchParams.append(key, String(value));
      }
    });
    const qs = searchParams.toString();
    if (qs) {
      url += (url.includes('?') ? '&' : '?') + qs;
    }
  }

  const headers: Record<string, string> = {};

  if (!isFormData) {
    headers['Content-Type'] = 'application/json';
  }

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const options: RequestInit = {
    method,
    headers,
  };

  if (bodyRequest && method !== 'GET') {
    if (isFormData) {
      options.body = bodyRequest;
    } else {
      options.body = JSON.stringify(bodyRequest);
    }
  }

  try {
    const res = await fetch(url, options);
    const contentType = res.headers.get('content-type');
    
    let data;
    if (contentType && contentType.includes('application/json')) {
      data = await res.json();
    } else {
      data = await res.text();
    }

    if (!res.ok) {
      return {
        success: 0,
        message: data?.message || res.statusText || 'Request failed',
        data: null,
      };
    }

    return {
      success: 1,
      message: data?.message || 'Success',
      data: data?.data ?? data,
    };
  } catch (error: any) {
    return {
      success: 0,
      message: error?.message || 'Network error occurred',
      data: null,
    };
  }
}
