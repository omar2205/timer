class CountdownTimer {
  targetDate: Date
  intervalId: number | null
  listeners: Array<(timeLeft: number) => void>

  constructor(targetDate: Date) {
    this.targetDate = targetDate
    this.intervalId = null
    this.listeners = []
  }

  start() {
    if (this.intervalId !== null) return

    this.intervalId = setInterval(() => {
      const timeLeft = this.targetDate.getTime() - Date.now()
      this.listeners.forEach((l) => l(timeLeft))

      // clear after we reach 0
      // if (timeLeft <= 0) this.stop()
    }, 1000)
  }

  stop() {
    if (this.intervalId === null) return

    clearInterval(this.intervalId)
    this.intervalId = null
  }

  addListener(listener: (timeLeft: number) => void) {
    this.listeners.push(listener)
  }

  removeListener(listener: (timeLeft: number) => void) {
    const idx = this.listeners.indexOf(listener)

    if (idx !== -1) this.listeners.splice(idx, 1)
  }
}

export { CountdownTimer }
