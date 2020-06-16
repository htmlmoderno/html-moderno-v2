export default function mobile () {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera

  if (isWin(userAgent)) return 'winphone'
  if (isAndroid(userAgent)) return 'android'
  if (isIOS(userAgent)) return 'ios'

  return false
}

export function isIOS (userAgent) {
  return (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream)
}

export function isAndroid (userAgent) {
  return /android/i.test(userAgent)
}

export function isWin (userAgent) {
  return /windows phone/i.test(userAgent)
}
