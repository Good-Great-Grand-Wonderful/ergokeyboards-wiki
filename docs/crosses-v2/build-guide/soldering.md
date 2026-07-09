---
sidebar_position: 1
title: Soldering
---

# Soldering

## Before You Begin

- Set your soldering iron to the temperature recommended for your solder.
- Components are placed on the side of the PCB where their outline is printed on the silkscreen.
- Throughout this guide, you'll use the same basic technique: tack one pin first, verify alignment, then solder the remaining pins.

---

## Thumb Assembly

![thumb-solder-start](/img/thumb-solder-start.jpg)

**Components needed:**

- 1× Thumb PCB
- 1× Reset switch
- 1× JST battery connector

---

### Reset Switch

1. Flip the PCB to the side with the reset switch (`SW3`).
2. Apply a small amount of solder to any pad of the reset switch footprint on the top side of the board.

![thumb-tack-reset-leg](/img/thumb-tack-reset-leg.jpg)

3. Using tweezers, position the switch on the footprint.
4. Reheat the pre-tinned pad to tack the switch in place.
5. Adjust the switch position while the solder is still molten if needed.
6. Once aligned, solder the remaining legs to secure the switch.

![thumb-solder-reset](/img/thumb-solder-reset.jpg)

### Battery Connector

1. Now ensure the battery connector silkscreen is face-up. (same side as reset switch)

![jst-connector-start](/img/jst-connector-start.jpg)

2. Place the JST connector and align the connector with the silkscreen.

![jst-connector-finish](/img/jst-connector-finish.jpg)

3. Flip the PCB over while securing the battery connector to the PCB.
4. Solder one pin to tack the connector in place.
5. Verify alignment and adjust the placement of the battery connector if necessary.
6. When the battery connector is correctly aligned, solder the remaining pin.

---

## Hotswaps

![solder-sockets-start](/img/solder-sockets-start.jpg)

1. Pre-tin all hotswap pads with a small amount of solder.
2. Place each hotswap socket in the correct orientation.
3. Touch your iron tip to each pad to reflow the solder and secure the socket.
4. Inspect each joint to ensure it looks clean and the socket sits flat against the PCB.

The most complex part of the build is done - congratulations!

---

## Next Steps

1. Repeat and follow the instructions for the second thumb assembly.
2. Solder hotswap sockets to the matrix PCBs. These boards are straight-forward and only require soldering the hotswap sockets. Use the same pre-tin and reflow technique from before.
3. Once both thumb assemblies and both matrix boards are complete, proceed to the [Final Assembly Guide](/crosses-v2/build-guide/final-assembly).
