type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

/*
 * Reference for apiCall service with typing from SmartKidzee https://github.com/orgs/community/discussions/162011
 */
export async function apiCall<T>(
  url: string,
  method: HttpMethod,
  data?: object,
): Promise<T> {
  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    //only add data for methods that use it
    body: data ? JSON.stringify(data) : undefined,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json() as T;
}
