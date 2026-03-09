import requests
import json

def test_streaming():
    url = "http://localhost:8000/chat"
    payload = {"query": "Tell me about Prime Source Global"}
    
    print(f"Testing streaming from {url}...")
    try:
        response = requests.post(url, json=payload, stream=True)
        response.raise_for_status()
        
        print("Response received. Chunks:")
        for line in response.iter_lines():
            if line:
                decoded_line = line.decode('utf-8')
                if decoded_line.startswith('data: '):
                    data_str = decoded_line[6:]
                    if data_str == '[DONE]':
                        print("\n[DONE]")
                        break
                    data = json.loads(data_str)
                    if 'token' in data:
                        print(data['token'], end='', flush=True)
                    elif 'sources' in data:
                        print(f"\nSources: {len(data['sources'])}")
                    elif 'error' in data:
                        print(f"\nError: {data['error']}")
    except Exception as e:
        print(f"\nRequest failed: {e}")

if __name__ == "__main__":
    test_streaming()
