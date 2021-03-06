export function urlMainApp() {
  return '/api/faculty_profile/';
}

export function urlCmsIntegration() {
  return `${urlMainApp()}cms/`;
}

export function urlWriteAppendMultipleObjects() {
  return `${urlMainApp()}csv/`;
}

export function urlDownloadCSV() {
	return `${urlWriteAppendMultipleObjects()}download/`;
}

export function urlGetAffordances() {
	return `${urlWriteAppendMultipleObjects()}affordances/`;
}
