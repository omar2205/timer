<script lang="ts">
  import { onMount } from 'svelte'
  import { CountdownTimer } from '$lib/CountdownTimer'

  let counter: string = 'counting...'
  let timer: CountdownTimer
  let box = false

  onMount(() => {
    const now = new Date()
    const url = new URL(location as unknown as string)
    const {
      date = now.toLocaleDateString(),
      time = '',
      bg = 'eee',
      fg = '111',
      font = 'helvetica',
      addbox = 0,
    } = Object.fromEntries(url.searchParams)

    box = addbox === '1'

    const root = document.documentElement
    root.style.setProperty('--bg-color', `#${bg}`)
    root.style.setProperty('--fg-color', `#${fg}`)
    root.style.setProperty('--text-font', font)

    // Start with 5 mins timer if the user didn't provide a time
    if (!time)
      timer = new CountdownTimer(new Date(new Date().getTime() + 5 * 60 * 1000))
    else timer = new CountdownTimer(new Date(`${date} ${time}`))

    timer.addListener((timeLeft) => {
      // Convert milliseconds into days, hours, minutes and seconds
      const days = Math.floor(Math.abs(timeLeft / (1000 * 60 * 60 * 24)))
      const hours = Math.floor(
        Math.abs(timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      )
      const minutes = Math.floor(
        Math.abs(timeLeft % (1000 * 60 * 60)) / (1000 * 60),
      )
      const seconds = Math.floor(Math.abs(timeLeft % (1000 * 60)) / 1000)

      // Format each unit with leading zeros if needed
      const formatUnit = (unit: number) => unit.toString().padStart(2, '0')

      // Build an array of non-zero units and their labels
      const units: Array<[number, string]> = []

      if (days > 0) {
        units.push([days, 'days'])
      }
      if (hours > 0) {
        units.push([hours, 'hours'])
      }
      /* remove units after they are done
			if (minutes > 0) {
				units.push([minutes, 'mins']);
			}
      */
      units.push([minutes, 'mins'])
      /* remove units after they are done
			if (seconds > 0) {
				units.push([seconds, 'secs']);
			}
      */
      units.push([seconds, 'secs'])

      // Join each unit with its label using colons
      let formattedTime = units
        .map(([unit, label]) => `${formatUnit(unit)} ${label}`)
        .join(' : ')

      if (timeLeft < 0) formattedTime = '+ ' + formattedTime
      counter = formattedTime
    })
    timer.start()

    return () => {
      timer.stop()
    }
  })
</script>

<h1 class:box>{counter}</h1>

<style>
  h1 {
    width: fit-content;
    margin: 0 auto;
    padding: 0.5rem 1rem;
    border-radius: 6px;
  }

  h1.box {
    background-color: rgb(18 18 18 / 20%);
    background-color: var(--bg-color);
  }
</style>
