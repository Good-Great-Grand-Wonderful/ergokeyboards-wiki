---
sidebar_position: 4
title: Trackball Tuning
---

# Tuning Your Trackballs

Each half of the Crosses V2 has its own trackball, and each one can be tuned on its own — no reflashing, no code. It all happens in the [trackball tuning app](https://trackball-config.vincentfranco.com/), right from your browser.

## Connecting

1. Plug the right side of the keyboard into your computer with a USB cable.
2. Open [trackball-config.vincentfranco.com](https://trackball-config.vincentfranco.com/) in Chrome or Edge. (The app talks to the keyboard through the browser's serial API, which other browsers don't support.)
3. Click **Connect** and pick the `Crosses V2` port.

## What You Can Tune

Each ball has two settings:

- **Mode** — what the ball does. **Cursor** moves the pointer; **Scroll** turns the ball into a scroll wheel, with an invert option if scrolling feels backwards to you.
- **Sensitivity** — how far the pointer moves per roll, measured in CPI. Drag the slider until it feels right.

Changes apply as you make them, so just roll the ball and adjust. Settings are saved to the keyboard itself — they survive power cycles and follow the keyboard between computers.

:::note
This is also why ZMK Studio is Bluetooth-only on the Crosses V2: USB is reserved for trackball tuning, so you can adjust your trackballs without any programming.
:::
