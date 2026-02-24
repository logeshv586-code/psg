export const LOCAL_API_URL = "http://localhost:8000";
export const SERVER_API_URL = "http://209.159.154.228:8000";

/**
 * Returns the active API base URL.
 * It will try the local URL first. If it's reachable, it uses that.
 * Otherwise, it falls back to the server URL.
 */
export const getActiveApiUrl = async (): Promise<string> => {
    try {
        // Attempt a quick health check or just assume it's there if fetch to localhost doesn't instantly fail.
        // We set a very short timeout. Using AbortController for fetch timeout.
        const controller = new AbortController();
        const id = setTimeout(() => controller.abort(), 1000); // 1 second timeout for local check

        const response = await fetch(`${LOCAL_API_URL}/health`, {
            method: 'GET',
            signal: controller.signal,
        });

        clearTimeout(id);

        if (response.ok) {
            return LOCAL_API_URL;
        }
    } catch (error) {
        console.warn("Local API not accessible, falling back to server API.");
    }

    return SERVER_API_URL;
};
