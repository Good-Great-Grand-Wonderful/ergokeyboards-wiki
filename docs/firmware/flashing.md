---
sidebar_position: 1
title: Flashing
---

# Flashing the Firmware

:::info
If you purchased a build you do NOT need to flash firmware as it comes loaded and tested on the device out of the box.
:::

For the default experience with ZMK Studio support, you will need to flash the firmware to both halves of the keyboard. To proceed, you will need a:

- USB-C cable
- Computer
- The `.uf2` files for your Crosses V2 variant

Find the latest release for pre-built firmware [on the releases page](https://github.com/Good-Great-Grand-Wonderful/crosses-v2/releases).

1. Plug in the right side of the keyboard into your computer via USB.
2. Double-tap the reset button to enter bootloader mode. A storage drive named `CROSSES_V2` should appear.
3. Drag and drop `crosses_v2_<size>_right.uf2` onto the root of the `CROSSES_V2` drive.
4. Once the copying has completed, the `CROSSES_V2` drive will disconnect. The keyboard half will reboot automatically (sometimes with a benign error).
5. Repeat steps 1–4 for the left side of the keyboard, using the corresponding `.uf2` file.

:::danger
Flash the correct `.uf2` file to each side—they are **not** interchangeable.
:::

Once both halves are flashed, you're ready to [connect your keyboard](/firmware/connecting).
