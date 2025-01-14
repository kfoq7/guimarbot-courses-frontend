export function transformTitleParam(title: string) {
  return title.toLowerCase().replace(/\s/g, '-')
}

export function parseJwt(token: string) {
  var base64Url = token.split('.')[1]
  var base64 = base64Url.replace('-', '+').replace('_', '/')
  return JSON.parse(window.atob(base64))
}
