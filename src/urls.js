export function urlMainApp() {
  return '/api/faculty_profile/';
}

export function urlCmsIntegration() {
  return `${urlMainApp()}cms/`;
}

export function urlWebSocketServer() {
  return `ws://localhost:60025/ws/faculty_profile/cms/`;
}
