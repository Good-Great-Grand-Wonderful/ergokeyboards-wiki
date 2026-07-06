---
sidebar_position: 2
title: Final Assembly
---

# Build Guide — Final Assembly

## Before You Begin

- Complete the [Soldering Guide](/build-guide/soldering) for both sides before proceeding.
- Work on a clean, well-lit surface - small parts can escape easily.
- Take your time with cable routing. Pinched wires are the most common source of build issues.

---

## Installing the Heat-Set Inserts

![heatset-inserts](/img/heatset-inserts.jpg)

Using a soldering iron with a heat-set insert tip (or a standard tip at ~220C), press each insert into place until it sits flush with the plastic. Allow the plastic to cool before moving the part.

**Insert locations:**

- 4× per matrix case
- 6× per thumb case
- 2× per trackball carrier top

:::tip
Don't rush and let gravity do the work! Apply gentle, steady pressure and let the heat from the soldering iron allow the insert to seat itself. Forcing the insert too quickly can melt the surrounding plastic or seat the insert at an angle.
:::

---

## Thumb Assembly: Internal Connectors

This section details assembly of several cables and sensors to the thumb unit. Read through all the steps before starting - installation order matters.

**Components needed:**

- Thumb PCB
- Flat flexible cable (or FFC)
- Trackball Sensor Cable
- Battery
- Thumb case
- Matrix case

---

### FFC Cable

![insert-FFC](/img/insert-FFC.jpg)

1. Locate the FFC connector (`J5`) on the thumb PCB.
2. Gently lift the clamshell latch with a plastic spudger or your fingernail.

:::note
The clip flips *up*, not *out*.
:::

3. Insert the FFC with the **blue strip facing up** until it stops.
4. Gently press the latch closed to lock it in place.

![verify-FFC](/img/verify-FFC.jpg)

---

### Trackball Sensor Cable

![insert-6P](/img/insert-6P.jpg)

Connect the six-pin JST cable from the trackball sensor to its matching connector on the thumb PCB. The connector is keyed and can only fit one way.

![thumb-cables-verify](/img/thumb-cables-verify.jpg)

---

## Thumb Assembly: Mounting

**Components needed:**

- 2× M3 x 5mm bolt

![place-PCB](/img/place-PCB.jpg)

1. Carefully lower the thumb PCB into the thumb case while keeping all cables clear of the screw bosses and edges. Take your time and adjust the PCB, wires, or case as necessary to make sure no wires are pinched. The PCB should be flush with the case and not wobble when the wires are clear from the case and PCB.

![thumb-M3x5-install](/img/thumb-M3x5-install.jpg)

2. Install an M3/5mm fastener on the edge of the PCB and *hand-tighten* them. Do not fully tighten them at this point, you may need to adjust them during final assembly.

---

## Trackball Carrier

**Components needed:**

- Carrier mount
- Carrier top
- 2× M3 x 8mm hex bolts
- 2× M3 x 12mm hex bolts
- 3× 5mm static bearing

### Carrier Mount

![carrier-mount-M3x8-install](/img/carrier-mount-M3x8-install.jpg)

1. Place the carrier mount on the thumb assembly. It should be oriented so the notched side faces the MCU and the longer foot faces the key sockets.
2. Securely attach the carrier mount to the thumb assembly using the M3 x 8mm hex bolts.

---

### Static Bearings

![carrier-ceramic-ball-install](/img/carrier-ceramic-ball-install.jpg)

Place the three 5mm static bearings into their cradles on the carrier base. They should sit loosely - the top will hold them in place once assembled.

---

### Carrier Top

![carrier-top-indicator-hint](/img/carrier-top-indicator-hint.jpg)

1. Align the carrier top with the base. Ensure the **opening and notch on both pieces point toward the matrix**.
2. Secure the carrier top from the bottom with two M3 x 12mm fasteners.

![carrier-final-verify](/img/carrier-final-verify.jpg)

---

### Battery Cable

:::danger
Li-Po batteries can be dangerous if mishandled. Never crush, puncture, or short the battery wires. If you see any damage to the battery or its wiring, do not proceed.
:::

![matrix-attach-1-battery-plumbing](/img/matrix-attach-1-battery-plumbing.jpg)

This is the trickiest part of the build. Follow these instructions carefully!

1. Have the corresponding side of the matrix case ready.
2. Guide the battery's JST cable through the cathedral window in the top side of the matrix case.
3. Connect the battery to the JST socket on the bottom of the thumb PCB.

![matrix-attach-1-battery-connect](/img/matrix-attach-1-battery-connect.jpg)

## Final Assembly

**Components needed:**

- 2× M3 x 8mm hex bolts
- 4× M3 x 5mm hex bolts

### Attaching the Thumb Case to the Matrix Case

![matrix-attach-2-fasten-with-cable-care](/img/matrix-attach-2-fasten-with-cable-care.jpg)

1. Route both the FFC and the trackball sensor cable through the window in the matrix case.

:::tip
Make sure the Li-Po battery can lie flush against the case without interfering with the mounting holes! If your battery doesn't lie flush after you've routed the FFC and trackball sensor cable through the square matrix case hole, reroute the cables to allow the battery to lie flat.
:::

2. Position the matrix case over the thumb assembly. Ensure no wires are caught between both housings.
   - Bottom holes are for the Bridges variant
   - Top holes are for the Crosses variant
3. Secure the matrix case to the thumb assembly using the M3 x 8mm hex bolts.

---

### Cable Management

![matrix-attach-3-make-ffc-z](/img/matrix-attach-3-make-ffc-z.jpg)

1. Fold the FFC cable into a gentle "Z" shape. This absorbs the excess length without sharp bends.
2. Arrange the trackball sensor wires so they do not get pinched between the PCB and case.

:::tip
Clearance inside the case is tight! Routing the FFC cable under the battery after folding and using a spudger to push the wires from between the PCB and case can help with making sure everything fits smoothly.
:::

![matrix-attach-4-verify-routing](/img/matrix-attach-4-verify-routing.jpg)

3. Gently lower the matrix PCB as pictured. The PCB should drop into the matrix case without force or resistance and lay flat without wobbling.

:::warning
If you feel any resistance when dropping the matrix PCB into the case or the PCB wobbles while sitting in the case, stop and check for pinched wires. Verify that no wires are crushed, kinked, or shorting against exposed pads. A pinched Li-Po wire is a fire hazard.
:::

---

### Securing the Matrix PCB and finishing up

![one-side-done](/img/one-side-done.jpg)

Once everything is seated cleanly, install the remaining M3 x 5mm fasteners to secure the PCB. Tighten in a cross pattern to ensure even pressure.

Your keyboard half is now fully assembled! Repeat the instructions for the other side.

![bonus-adding-feet](/img/bonus-adding-feet.jpg)

(Optional) Add rubber feet if you aren't mounting your keyboard.

---

## Next Steps

- Install your switches and keycaps.
- Drop the trackball into its carrier.
- [Flash the firmware](/firmware/flashing) and start customizing your keymap!
