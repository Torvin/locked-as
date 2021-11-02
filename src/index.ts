import dayjs from 'dayjs'
import './index.scss'
import Levels from './levels'
import { LevelTransition } from './types'

let timer: number | undefined
function update() {
  window.clearInterval(timer)
  writeConfig()

  for (const el of document.getElementById('region')?.children ?? []) {
    const val = el.getAttribute('data-val')
    el.setAttribute('aria-checked', String(val === config.region))
  }

  for (const el of document.getElementById('level')?.children ?? []) {
    const val = parseInt(el.getAttribute('data-val') ?? '')
    el.setAttribute('aria-checked', String(val >= config.level))
  }

  let total = 0
  let lastTransition: LevelTransition | undefined

  let contTotal = 0
  let lastContTransition: LevelTransition | undefined

  for (const transition of Levels) {
    const [ts, _lvl, rgn] = transition
    if (rgn && rgn !== config.region) { continue }

    if (!isCurrent(lastContTransition) && isCurrent(transition) && transition[0] !== lastContTransition?.[0]) {
      contTotal = 0
      lastContTransition = undefined
    }

    total += add(lastTransition, ts)
    contTotal += add(lastContTransition, ts)

    lastTransition = transition
    lastContTransition = transition
  }

  const hasCur = isCurrent(lastContTransition)
  setText('curDesc', hasCur ? 'in this lockdown' : 'in last lockdown')
  updateTimes()

  if (hasCur) {
    timer = window.setInterval(updateTimes, 100)
  } else {
    timer = undefined
  }

  function updateTimes() {
    updateTime('curTime', contTotal + add(lastContTransition))
    updateTime('totalTime', total + add(lastTransition))
  }
}

function isCurrent(transition: LevelTransition | undefined): transition is LevelTransition {
  if (!transition) { return false }
  const [_ts, lvl] = transition
  return (lvl >= config.level)
}

function add(transition: LevelTransition | undefined, till?: dayjs.ConfigType) {
  if (!isCurrent(transition)) { return 0 }
  const [ts] = transition
  return dayjs(till).diff(ts)
}

function updateTime(id: string, ms: number) {
  setText(id, `${fx(ms / (24 * 60 * 60 * 1000), false)}d ${fx(ms / (60 * 60 * 1000) % 24)}:${fx(ms / (60 * 1000) % 60)}:${fx(ms / 1000 % 60)}.${fx(ms / 100 % 10, false)}`)

  function fx(n: number, zeroPad: boolean = true) {
    const res = Math.floor(n).toFixed()
    return !zeroPad || res.length > 1 ? res : '0' + res
  }
}

function setText(id: string, text: string) {
  const el = document.getElementById(id)
  if (!el) { return }
  el.textContent = text
}

function readConfig<T extends {}>(defaults: T): T {
  const config = JSON.parse(localStorage.getItem('config')!) ?? {}
  const result: Record<string, any> = {}

  for (const [key, value] of Object.entries(defaults)) {
    result[key] = config[key] ?? value
  }

  return result as T
}

function writeConfig() {
  localStorage.setItem('config', JSON.stringify(config))
}

const config = readConfig({ region: 'AKL', level: 3 })

document.getElementById('level')?.addEventListener('click', e => {
  if (!(e.target instanceof Element)) { return }
  const val = parseInt(e.target.getAttribute('data-val') ?? '')

  if (isFinite(val)) {
    config.level = val
    update()
  }
})

document.getElementById('region')?.addEventListener('click', e => {
  if (!(e.target instanceof Element)) { return }
  const val = e.target.getAttribute('data-val')

  if (val !== null) {
    config.region = val
    update()
  }
})

document.getElementById('music')?.addEventListener('click', e => {
  if (!(e.currentTarget instanceof Element)) { return }

  const on = e.currentTarget.getAttribute('aria-checked') === 'true'

  const audio = document.getElementById('audio')
  if (!(audio instanceof HTMLAudioElement)) { return }

  if (on) {
    audio.pause()
  } else {
    audio.play()
  }
  e.currentTarget.setAttribute('aria-checked', String(!on))
})

update()
