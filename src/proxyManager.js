// proxyManager.js
const PROXY_LIST = [
  { ip: "192.168.1.101", port: 8080, username: "proxy_user", password: "secret123" },
  { ip: "192.168.1.102", port: 8080, username: "proxy_user", password: "secret456" },
];

export function getRandomProxy() {
  return PROXY_LIST[Math.floor(Math.random() * PROXY_LIST.length)];
}

export function testProxy(proxy) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.random() > 0.3); // 70% успеха
    }, 500);
  });
}