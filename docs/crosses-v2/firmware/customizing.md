---
sidebar_position: 3
title: Customizing Your Keymap
---

# Customizing Your Keymap

## Option A: ZMK Studio (Easiest)

ZMK Studio lets you remap keys in real-time without reflashing - perfect for quick tweaks and experimentation. The pre-built firmware is already ZMK Studio compatible.

:::note
To implement programming-free [trackball modifications](/crosses-v2/trackball-tuning), we've disabled the ability to use USB for ZMK Studio. Connect over Bluetooth instead.
:::

| Platform                                          | How to Connect                    |
| ------------------------------------------------- | --------------------------------- |
| [Web app](https://zmks.phdesign.cc/)              | Bluetooth only (Chrome or Edge)   |
| [Desktop app](https://zmks.phdesign.cc/download)  | Bluetooth only (Linux, macOS, Windows) |

## Option B: Custom Firmware (Advanced)

For deeper customization - combos, macros, behaviors, and more - set up your computer to use the ZMK CLI and GitHub Actions to build your own custom firmware! Follow the [ZMK User Setup Guide](https://zmk.dev/docs/user-setup) to set up your computer and use the appropriate [firmware template](/crosses-v2/reference#firmware-templates) for your Crosses V2 variant in the ZMK CLI instructions to get started.

### Build Process

1. Click **Use this template** on the appropriate repository to create your own copy.
2. Edit `config/crosses.keymap`. Refer to the [ZMK keymap documentation](https://zmk.dev/docs/features/keymaps) or use the [visual keymap editor](https://github.com/nickcoutsos/keymap-editor).
3. Commit and push your changes - GitHub Actions builds the firmware automatically.
4. Go to the **Actions** tab, select the latest workflow run, and download the `firmware` artifact.
5. Flash the new `.uf2` files using [the flashing steps](/crosses-v2/firmware/flashing).
