export default async function fetchJson<T>(url: string, options: RequestInit = {}): Promise<T> {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP 에러: ${response.status}`);
        }
        return response.json();
    } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') {
            throw error;
        }
        throw new Error(`데이터 파싱 에러: ${error instanceof Error ? error.message : '알 수 없는 에러'}`);
    }
}