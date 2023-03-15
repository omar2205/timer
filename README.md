# Countdown Timer

<p align="center"><img src="https://user-images.githubusercontent.com/1373867/225465263-da230e4e-de08-4f78-b800-901e49e12dee.png" /></p>
<p align="center"><sup>https://timer-blue.vercel.app/?date=16-mar-23&time=00:55&addbox=1&bg=ff0000aa&font=monospace</sup></p>

This project is for displaying a countdown timer that can be used in overlays. You can customize the date, time, background color, text color and font of the timer.

## Usage

To use the countdown timer, you need to add the following URL as an overlay source:

`https://yourdomain.com/?[options]`

The options are:

| Option | Description                                                      | Example     | Default             |
| ------ | ---------------------------------------------------------------- | ----------- | ------------------- |
| date?  | The date of the event in YYYY-MMM-DD format.                     | 2023-Mar-15 | None (optional)     |
| time   | The time of the event in HH:MM format (24-hour clock).           | 22:30       | Starts 5 mins timer |
| bg     | The background color of the timer's box in hex code (without #). | eee         | eee                 |
| fg     | The text color of the timer in hex code (without #).             | 111         | 111                 |
| font   | The font name of the timer.                                      | helvetica   | helvetica           |
| addbox | add a box around the timer                                       | 1           | 0 (optional)        |

For example, if you want to display a countdown timer for your birthday on March 15th, 2023 at 10:30 PM with a white background and black text in Arial font, you would use this URL:

`https://yourdomain.com/?date=2023-Mar-15&time=22:30&bg=fff&fg=000&font=arial`

<hr />

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.
