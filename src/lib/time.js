const fillZero = num => {
  if (num < 10) return `0${num}`
  return num
}

export const numToTimeFormat = _num => {
  if (_num === 0) return '00:00'

  if (!_num) return ''

  const num = Math.floor(_num)
  const min = Math.floor(num / 60)
  const sec = num - min * 60
  return `${fillZero(min)}:${fillZero(sec)}`
}

export const timestampToDateFormat = timestamp => {
  if (!timestamp) return ''

  const _d = new Date(timestamp)
  const month = _d.getUTCMonth() + 1
  const day = _d.getUTCDate()
  const year = _d.getUTCFullYear()

  return `${year}-${month}-${day}`
}

// module.exports = {numToTimeFormat, timestampToDateFormat}
