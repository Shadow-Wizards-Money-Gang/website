---
title: Changelog
description: List of every major update for swmg
---

## Version 0.4

Dev team will be taking ~week to focus on other projects and regain sanity! we will welcome feedback but please be understading :)

## TWEAKS/BUGFIXES
- Fixed better combat behaviour being erratic
- Player range starts at a vanilla player's now (at x0.9 of their height).
- Buffed the range of:
    - Axes (2.35 v 2.5 from swords)
    - Daggers (2.2 v 2.35 from axes)
    - Sword (2.5 -> 2.6)
    - Halberds (To spear range)
- Fixed??? zotz teleporting into buildings (unconfirmed)
- Fixed distillery building not being completed sometimes, and some tweaks to them.
- Fixed melee damage boost from strength not working properly. (barehanded)
- Thermoo's burning is less annoying, hopefully (we can't disable it sadly... excluding too many people ask for it as a priority)
- Disabled Solid Mobs, bar a few mobs like, players, horses (or anything WAY larger than you).
- Right click harvest mod added
- Fixed barehanded str players attack damage not working.
- Rat behaviours tweaked
- Fixed rats attacking even when you threw food and didn't hit them.
- fix ghoul scream and readd (after checking they Burn properly with grease)
- Restricted ghouls to only spawn farther from spawn (~2000 blocks)
- Restricted cupcake to only spawn farther from spawn (~2000 combined x+z in any dir).
- Fixed Kapala and skull renderers being weird sometimes
- Arrows shoot by the players themselves will be ignored by high armour now. (excluding it's their own arrows)
- Buildup effects from plague rats are fixed
- Slowed down rats in general, they're still faster considerably faster than us, but not insanely so.
- Nerfed very high damage for lv 9 archers and arcane magic users (still good tho)
- zotz changes
    - always spawn in packs (and follow packs)
    - leader zotz are less of a power drill, and will fall back if hit
    - zotz target priority
        - rats
        - players with little to no armour (not implemented).
        - animals (same as ghouls)
        - players with armour/anything bigger than them
    - zotz panic when on fire and drop the hunt immediately until extinguished
    - the system is ignored if something hits them first, in which they will go after it no matter what
    - zotz deal more dmg to rats; drops some item related to dealing more dmg to rats?
    - zotz heal only from lifesteal, vs just falling back and healing. If they are hurt, they will try to find adequate prey to feed on to heal before attacking again (unless forced by a leader mob)
- armor tier >1 buffs (and less speed loss at str mid-high str levels)

- Fire aspect lasts 1 in-game day from when it's applied after which:
    - ~~You must apply a grease every 24hs to keep it alive.~~
    - ~~After 3 days, the effect will dwindle and dissapear anyways.~~
    - After 12hs it will only ignite for half the time. (but always ignite)
    - Mobs ignore this restriction.
    - If using fire grease and fire aspect, you will deal extra fire damage.

Crossed out things means they were removed or are currently disabled.

## Additions
- grease keybind
- holy water, created in a holy altar by priests. Can be thrown to harm and apply a long lasting depower to undeads (Not yet enabled.)
- Small Spider Scorpions/Spider Scorpions
    - (Just some testing for em, the parents aren't real, they don't spawn, a bit buggy, don't climb yet, don't have spawn egg.).
    - The babies work relatively well, the big ones are braindead for now.

## Version 0.3

## Bugfixes/Tweaks
  - Ghoul screams don't have the power to crash your game
  - Misclaneous stat fixes
  - obsidian can be mined with iron
  - iron is now faster than normal, but is still outpaced by enchanted stone
  - Enchanted Books now need INT to tell type vs OCC
  - Gapple usage is now OCC 6, rather than 9
  - horses no longer respawn, it is up to OCC to breed more
  - Triple Toothed Snake stats fixed to need high OCC and DEX, rather than high FAI and low OCC
  - No more infinite grease icons
  - World Pact behaviours have been fully fixed
  - when ignition is procced on ghouls (and cupcake?) always ignite
  - Misc fixes to Zotz behaviours
  - zotz tweaks:
    - longer delay between sonic attacks, plus sound for charging
    - can only sonic boom if you can hear the sound
    - sonic attack can be parried
    - Zotzypres are blinded by heavy lights and their senses turn dull (when standing in daylight or a bright block they have way less detection range)
    - Less zotz in the overworld but not hyper rare.
    - Min Zotz packs from 3->2 Min zotz and from 5->4 max zotz batches
    - Zotz sonic boom now properly loses dmg (after 3 blocks walls, it deals 0)
    - Zotz sonic boom breaks glass, snow and ice (in a small radius)
  - Fallen Knights drop the 3 spellbooks (1 roll, with a 10% chance each) for archers, warriors and assassins.
  - Fire aspect has been reworked. It doesn't proc fire but increases fire conductivity on grease by 500%, aditionally, increases the time set on fire on mobs, and can be used as a Flint & Steel.
  - Fire bombs can be crafted with a pot recipe early game for alchemists.
  - Fixed hoe breaking when making cuts for grease.

## Aditions 
 - Updated to SWMG PlayerEX to parity with main PlayerEX


## Version 0.2

### Balance
- Water rats nerfed (sad)
- Rats can now swim underwater, will try to catch some air eventually.
- Baby rats have been reduced, plague rats have been reduced.
- World border radius doubled! (750 radius => 1500 radius)
- Ghouls fight has been tweaked and feels like a proper bossfight now. (no more clipping)
- The Skeleton Beast now spawns more often, deals slightly less damage
- Zotz replace fallen knights as a common enemy, with their sonic attack that bypasses armour and teamwork.
- Fallen Knights spawn very rarely on hordes now.
- Fallen Horses despawn if their masters have despawned
- exp farming penalty reduction reduced.
- Resin:
  - Much cheaper to make, trough crafting it takes one sapling and produces one
  - Can slash trees with a hoe, which risks destroying the block depending on how many slashes are around but slowly releases resin.
  - Arrayan trees will not break from this, and produce it much faster.
  - Using a mortar gives two resin per sapling.
- ZOTZ:
  - They can now spawn in the overworld
  - reduced hp to 24
  - Sonic attacks are reduced when there's too many
  - sonic attacks lose a a percentage of power for each block they go though
  - bite more often than sonic attacks, but increased dmg from each bite

### Bugfixes
- Mixture of crashes from all over the mod
- Strength weapons scaling has been readded and fixed, in a way that makes strength good.
- Nerfed knife spam
- Fixed keybind issues
- ghoul types not working in modpack
- many, many other things

### Additions:
- Cooking with [Let's Do] mods will grant a bit of experience.
- Fallen Knights may now drop a list of assorted, melee related combat books.
- Indicators for when you can pray (In your table)
- Fully functional Faith up until lv 9:
  - Create Grease/Holy Rune/Iron Golem
  - Create and upgrade holy scriptures
  - Clean Weather
  - Sanctify Weapon (Gives ~10m of holy grease, can be used to upgrade weapons into holy versions later)
- Magic Whistle (Dropped by Fallen Knights, with a chance, when one with a horse has been slain.)
  - Can be used to revive and call for pets from any part on the world.
  - Can be used to store any pet.
  - May break if the revival is abused.
- Rapiers deal up to 17.5% damage(armour piercing) based on the enemy armour (the lower the more they deal.)
  - This buff now scales based on dex, at 25 dex you will deal 17.5% towards a full iron player.
- Firebombs
- identifying scroll
- Sounds for magic whistle, zotz and rats

- New advancement:

```md
Palm Greaser
click any Sapling with a hoe to get resin, then use it to make more!
```

- World Pacts:
  - New mechanic that allows users who wish for a easier  time the possibility of giving a part of themselves in exchange for power.
  - Makes the game significantly easier at the start.
  - Cannot be rerolled or changed. Ever. New ones may come out later.
  - Pacts
    - Not having a statue placed may lead to some damaging effects...
    - Breaking the statue too much may cause things to worsen.
    - Preternatural: (Caster-type Pact)
        1. (+) (Lv 0) Increases exp gain by 50%.
        2. (-) (Lv 0) You will *always* lose 1 level
        3. (-/+) (lv 9) [Damaged Soul]. Increases casting speed by 20%.
        4. (-/+) (Lv 9) [Damaged Soul]. grants +0.5 per 5 levels of increased stat.
    - Titanic: (Body-type Pact)
        1. (+) (Lv 0) Increase health by 2 points.
        2. (-) (Lv 0) Reduced exp gain by 20%.
        3. (-/+) (Lv 9) [Damaged Soul]. Gain 1 extra HP per 5 bod points.
    - Persevering: (Experience-Type Pact)
        1. (+) (Lv 0) Anti level loss *stacks*. You only lose 1 level every 4 deaths.
        2. (-) (Lv 0) [Damaged Soul] Reduced exp gain by 50%.
        3. (+) (Lv 9) Increased exp gain by 100%.
        4. (-) [Lv 9](Damaged Soul). Lose level stacking.

### Removed

- Santy's sanity
