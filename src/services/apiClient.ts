const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'

interface RequestOptions extends RequestInit {
  params?: Record<string, string>
}

export const apiClient = async (endpoint: string, options: RequestOptions = {}) => {
  const token = localStorage.getItem('digitvilla_token')
  
  const headers = new Headers(options.headers || {})
  headers.set('Content-Type', 'application/json')
  if (token) {
    headers.set('Authorization', `Bearer ${token}`)
  }

  const url = new URL(`${API_BASE_URL}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`)
  
  if (options.params) {
    Object.keys(options.params).forEach(key => url.searchParams.append(key, options.params![key]))
  }

  console.log(`[API Request] ${options.method || 'GET'} ${url.toString()}`)

  try {
    const response = await fetch(url.toString(), {
      ...options,
      headers
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.message || `API error: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('API client error:', error)
    throw error
  }
}
