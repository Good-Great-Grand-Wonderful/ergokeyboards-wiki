# Crosses V2 Documentation

Documentation site for the Crosses V2 split keyboard, migrating the GitHub wiki to a Docusaurus site hosted on Cloudflare Workers.

## Language

**Crosses V2**:
The product — a split keyboard powered by ZMK firmware, sold built or as a kit.
_Avoid_: Crosses/Bridges V2 (except once in the introduction), crosses-v2 (repo names only)

**Bridges**:
A variant of the Crosses V2 distinguished by its case mounting-hole positions.
_Avoid_: Treating Bridges as a separate product

**Size**:
One of the three key counts a Crosses V2 comes in: 36, 42, or 54 keys. Each size has its own firmware template and `.uf2` files.

**Primary side**:
The right half of the keyboard — the half that talks to the computer. A computer connection to only the left half is not supported.
_Avoid_: Listener side, master side

**Thumb assembly**:
The unit built around the thumb PCB: reset switch, battery connector, trackball carrier.

**Matrix**:
The main key-grid PCB and its case, one per keyboard half.

**Carrier**:
The two-part mount (carrier mount + carrier top) that holds the trackball and its three static bearings.

**Trackball tuning app**:
The web app (Chrome/Edge, USB to the primary side) for setting each trackball's mode and sensitivity; changes apply live and persist on the keyboard.
_Avoid_: Trackball config tool, configurator

**Mode**:
What a trackball does — Cursor (pointer movement) or Scroll (wheel movement, direction invertible).

**Sensitivity**:
How far the pointer moves per ball rotation, measured in CPI, set per ball in the tuning app.
_Avoid_: DPI, speed

## Relationships

- A **Crosses V2** has exactly two halves; the right half is the **Primary side**
- Each half is a **Thumb assembly** joined to a **Matrix**
- The **Carrier** mounts onto the **Thumb assembly**
- **Bridges** and Crosses variants differ only where physically relevant (mounting holes); each comes in three **Sizes**
- Each half has one trackball; each ball has its own **Mode** and **Sensitivity**, set via the **Trackball tuning app**
- The **Trackball tuning app** owns the USB connection — ZMK Studio is Bluetooth-only for this reason

## Example dialogue

> **Dev:** "Do the Bridges docs need their own build guide?"
> **Domain expert:** "No — a **Bridges** is a **Crosses V2** with different case mounting holes. One guide covers both; call out the hole difference at the final-assembly step."

## Flagged ambiguities

- "Crosses/Bridges V2" was used product-wide in the wiki — resolved: the product is **Crosses V2**; **Bridges** is a variant, named only where the difference matters.
