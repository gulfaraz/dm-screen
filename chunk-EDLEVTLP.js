import{a as Te,b as Me}from"./chunk-V6BNUJ3V.js";import{a as we,b as Ce,c as _e,n as ke,r as Re,s as De,t as xe}from"./chunk-CGPMQJML.js";import{a as Se}from"./chunk-FYL4HHJC.js";import{a as P}from"./chunk-KEW5BDJG.js";import{a as ye,b as ve,c as be,d as G,e as H}from"./chunk-BOEJXWZE.js";import"./chunk-LI565NQW.js";import{$ as k,Aa as J,B as L,Ba as $,C as B,Ca as Q,E as K,F as U,Fa as ee,G as d,Ga as ne,H as o,I as s,J as h,Ka as x,La as T,Ma as te,O as y,Oa as ae,P as g,Pa as ie,Q as u,Qa as re,Ra as oe,Ta as se,Ua as le,V as W,Va as de,Z as v,Za as ce,ba as S,ca as R,da as D,db as ue,ea as q,ia as O,jb as me,k as C,kb as pe,l as m,m as p,nb as V,pb as M,qb as he,ta as j,tb as ge,u as l,ua as Z,v as F,vb as A,wb as fe,x as _,ya as Y,z as E,za as X}from"./chunk-GIEGZ3R7.js";import"./chunk-2MSKOYLP.js";import"./chunk-7KGURMOZ.js";import"./chunk-ZXXZ2JSY.js";import"./chunk-IE5APHAL.js";import"./chunk-EK3DDXU6.js";import"./chunk-PGY34PD4.js";import"./chunk-GYLY2RJE.js";import"./chunk-4WFVMWDK.js";import"./chunk-M2X7KQLB.js";import"./chunk-DVVH2KKN.js";import"./chunk-NV3QH4JK.js";import"./chunk-F5TKO3NK.js";import"./chunk-OZYWYLNK.js";import"./chunk-42C7ZIID.js";import{a as b,b as z,g as w}from"./chunk-2R6CW7ES.js";P({arrowUp:_e,arrowDown:Ce});var Ae=(()=>{let r=class r{constructor(){this.disableMove=!1,this.isFirst=!1,this.isLast=!1,this.moveRule=new F,this.openRule=new F,this.move=(e,n)=>{e.stopPropagation(),this.moveRule.emit(n)}}};r.\u0275fac=function(n){return new(n||r)},r.\u0275cmp=_({type:r,selectors:[["app-rule-card"]],inputs:{rule:"rule",disableMove:"disableMove",isFirst:"isFirst",isLast:"isLast"},outputs:{moveRule:"moveRule",openRule:"openRule"},decls:10,vars:4,consts:[[1,"ion-no-margin",3,"click"],[1,"ion-display-flex","ion-flex-row","ion-align-items-center","ion-justify-content-between"],[1,"text-2xl"],["size","small","color","medium","title","Move Up",3,"click","disabled"],["slot","icon-only","name","arrow-up"],["size","small","color","medium","title","Move Down",3,"click","disabled"],["slot","icon-only","name","arrow-down"],[3,"data"]],template:function(n,t){n&1&&(o(0,"ion-card",0),g("click",function(){return t.openRule.emit()}),o(1,"ion-card-header",1)(2,"ion-card-title",2),v(3),s(),o(4,"ion-buttons")(5,"ion-button",3),g("click",function(f){return t.move(f,"up")}),h(6,"ion-icon",4),s(),o(7,"ion-button",5),g("click",function(f){return t.move(f,"down")}),h(8,"ion-icon",6),s()()(),h(9,"markdown",7),s()),n&2&&(l(3),k(" ",t.rule.title||"Untitled Rule"," "),l(2),d("disabled",t.disableMove||t.isFirst),l(2),d("disabled",t.disableMove||t.isLast),l(2),d("data",t.rule.summary))},dependencies:[te,ae,ie,T,x,M,A],styles:["ion-card[_ngcontent-%COMP%]{--color: var(--ion-color-dark);height:100%;border-radius:12px;cursor:pointer;box-shadow:0 2px 6px #0000001f;border:1px solid var(--ion-color-step-150, #d7d8da);transition:transform .15s ease,box-shadow .15s ease}ion-card[_ngcontent-%COMP%]:hover{transform:translateY(-1px);box-shadow:0 4px 14px #0000002e}ion-card-header[_ngcontent-%COMP%]{padding:20px 20px 0}markdown[_ngcontent-%COMP%]{font-size:initial;display:block;margin:0 20px 20px}"]});let i=r;return i})();var N=[{title:"Conditions",summary:`Blinded - Charmed - Deafened - Exhaustion - Frightened - Grappled - Incapacitated - Invisible - Paralyzed - Petrified - Poisoned - Prone - Restrained - Stunned - Unconscious

Resistance: **0.5x damage**

Vulnerabilities: **2x damage**

Immunities: **no damage**

The source of the condition decides the extent of the condition. i.e. duration and how to end the condition.`,details:`##### Blinded
- disadvantage on attacks, enemy attacks at advantage
- autofail sight checks

##### Charmed
- cannot harm charmer
- charmer has advantage on social checks

##### Deafened
- autofail hearing checks

##### Exhaustion
1. disadvantage on ability checks
2. half speed
3. disadvantage on attacks and saves
4. hitpoint maximum is halved
5. speed 0
6. death

##### Frightened
- disadvantage on ability checks and attacks
- cannot move towards source of fear

##### Grappled
- speed 0
- Athletics vs Athletics/Acrobatics

##### Incapacitated
- cannot take actions and reactions

##### Invisible
- heavily obscured
- can be detected by noise and tracks
- advantage on attacks, enemy attacks at disadvantage

##### Paralyzed
- incapacitated, cannot move or speak
- autofail STR & DEX saves
- enemy attacks at advantage, enemy melee hits are critical

##### Petrified
- 10x weight, stops ageing
- incapacitated, cannot move or speak, unaware of surroundings
- enemy attacks at advantage, resistance to all damage
- autofail STR & DEX saves
- immune to poison and disease (preexisting are **not** neutralized)

##### Poisoned
- disadvantage on attacks and ability checks

##### Prone
- only crawl
- disadvantage on attacks
- enemy melee attacks at advantage, enemy ranged attacks at disadvantage

##### Restrained
- speed 0
- disadvantage on attacks, enemy attacks at advantage
- disadvantage on DEX saves

##### Stunned
- incapacitated, cannot move, speaks falteringly
- autofail STR & DEX saves
- enemy attacks at advantage

##### Unconscious
- incapacitated, cannot move or speak, unaware of surroundings
- drops anything held, falls prone
- autofail STR & DEX saves
- enemy attacks at advantage, enemy melee hits are critical`,id:"a1875877-37b9-4156-841b-1e35b2681a2f",updated:"2026-06-17T22:46:33.800Z"},{title:"Travel",summary:`1 hex = 5 miles = 8 kms & 1 square = 5 feet = 1.5 mts

| Pace | Per Hour | Per Day | Effect |
| --- | --- | --- | --- |
| Fast | 6.5 kms / 4 mi | 50 kms / 30 mi | -5 passive Perception |
| Normal | 5 kms / 3 mi | 40 kms / 24 mi | - |
| Slow | 3 kms / 2 mi | 30 kms / 18 mi | Can Stealth |

Travelling by *horse and cart* does not speed up long travel. It allows you to **travel with cargo**. It allows you to cover more ground at 30-40 mi/day without risking exhaustion.`,details:`Fast travel is possible on **major roads** and not in the **mountains**. **Forests** reduce visibility. **Swamps** hinder movement.

**Travel Time:** Assume that the party travels **twenty-four miles per day over a period of eight hours**. The characters **must rest for eight hours per day**, with the remaining eight hours consisting of **making and breaking camp, preparing meals**, and a little bit of foraging or hunting as the opportunity permits.

#### Activities

Navigate - Track - Forage - Scout - Map - Keep Watch

#### Costs

1 mile = 20 minutes walking

1 km = 15 minutes walking

Difficult Terrain = double cost

Climbing, Swimming and Crawling cost double movement.

Strength is used to jump.

#### Challenge

Decision on **travel route**
1. Route is mutable but an initial plan is required
2. Calculate travel time based on planned route

Each traveller contributes 3 **skill checks** to contribute to the travel
1. Character should be proficient in the skill
2. Skill cannot be repeated - two perception checks are not allowed
3. Player should narrate how the skill helps with the travel
    1. The skill DC will be set based on the narration
    2. DC is decreased if skills meet the roles of - Provisioner Navigator Scout

Dice decide the **outcome**
1. On 3 successes and 0 failures they reach their destination on time with \u201Ca story of love, a story of pain, a story of loss, a story of gain\u201D
2. On 3 successes and 1 failure they reach their destination with 50% extra travel time and one random non-combat encounter
3. On 3 successes and 2 failures they reach their destination with 50% extra travel time and one random combat encounter
4. On each additional failure until 3 successes
   1. Add half day extra travel time
   2. One random combat encounter`,id:"019edb84-f173-7396-bd82-55cf65ff5c60",updated:"2026-06-17T22:32:26.013Z"},{title:"Hide, Cover & Sneak Attack",summary:`**Hide:** Stealth vs Passive Perception

##### Cover

- **Half cover** (+2 AC & DEX saves): low wall, furniture, another creature.
- **Three-quarters cover** (+5 AC & DEX saves): portcullis, arrow slit, tree trunk.
- **Total cover**: cannot be targeted directly by an attack or spell.

##### Sneak Attack
- Once per turn with a **Finesse or Ranged** Weapon
- Need **Advantage** or a **target's enemy is within 5 ft** of the target`,details:`#### Hide: Your enemy does not know your location

* Must be **unseen or heavily obscured**.
* Roll **Stealth** vs **Passive Perception**.
* Attacking usually reveals your position.
* You cannot hide from a creature that can clearly see you.

#### Cover: Obstacle between you and your enemy

* **Half Cover:** +2 AC, +2 Dex saves.
* **3/4 Cover:** +5 AC, +5 Dex saves.
* **Total Cover:** Cannot be targeted directly.
* Creatures can provide cover.

#### Unseen Attacker

* Attacking while unseen grants **Advantage**.
* Target doesn't need to be surprised.
* Hit or miss, your location is usually revealed afterwards.

#### Sneak Attack (Rogue)

* **Once per turn**.
* Must use a **Finesse** or **Ranged** weapon.
* Need **Advantage** on attack **OR** an ally is within 5 ft of the target
* Cannot have **Disadvantage**.
* Add Sneak Attack damage on a hit.

#### Common Scenarios

* Hidden behind crates \u2192 attack with Advantage \u2192 Sneak Attack.
* Ally is fighting target in melee \u2192 Sneak Attack without hiding.
* Shooting from darkness against creatures without Darkvision \u2192 usually Advantage.
* Target behind half cover \u2192 +2 AC but still vulnerable to Sneak Attack.`,id:"019edb85-1bf7-76fe-9792-1b3d07e11845",updated:"2026-06-18T15:20:56.543Z"},{title:"Schools of Magic",summary:`1. Abjuration - blue - protect / counter
2. Conjuration - orange - summon / teleport
3. Divination - white - see / understand
4. Enchantment - yellow - charm / enchant
5. Evocation - red - elements / force
6. Illusion - transparent - trick
7. Necromancy - purple - life / death
8. Transmutation - green - transform

- Arcane \u2192 Wizard / Sorcerer
- Divine \u2192 Cleric / Paladin
- Primal / Nature \u2192 Druid / Ranger
- Pact \u2192 Warlock / Fey / Shadow / Celestial / Fiendish / Elemental
- Psionic \u2192 Mind Flayer / Psychic`,details:`**Abjuration** - blue - protect / counter
1. Resistance (0)
2. Alarm (1)
3. Armor of Agathys (1)
4. Arcane Lock (2)
5. Glyph of Warding (3)
6. Banishment (4)
7. Imprisonment (9)

**Conjuration** - orange - summon / teleport
1. Mage Hand (0)
2. Entangle (1)
3. Fog Cloud (1)
4. Conjure Animals (3)
5. Dimension Door (4)
6. Cloud Kill (5)
7. Teleport (7)
8. Tsunami (8)
9. Wish (9)

**Divination** - white - see / understand
1. Guidance (0)
2. Identify (1)
3. Speak with Animals (1)
4. Detect Thoughts (2)
5. See Invisibility (2)
6. Find Traps (2)
7. Locate Creature (4)
8. Scrying (5)
9. Foresight (9)

**Enchantment** - yellow - charm / enchant
1. Friends (0)
2. Vicious Mockery (0)
3. Charm Person (1)
4. Sleep (1)
5. Hold Person (2)
6. Zone of Truth (2)
7. Modify Memory (5)
8. Power Word Kill (9)

**Evocation** - red - elements / force
1. Fire Bolt (0)
2. Light (0)
3. Cure Wounds (1)
4. Magic Missile (1)
5. Spiritual Weapon (2)
6. Fire Ball (3)
7. Heal (6)
8. Earthquake (8)
9. Telepathy (8)
10. Meteor Swarm (9)

**Illusion** - transparent - trick
1. Minor Illusion (0)
2. Disguise Self (1)
3. Invisibility (2)
4. Magic Mouth (2)
5. Simulacrum (7)
6. Weird (9)

**Necromancy** - purple - life / death
1. Chill Touch (0)
2. Spare the Dying (0)
3. False Life (1)
4. Blindness/Deafness (2)
5. Gentle Repose (2)
6. Create Undead (6)
7. Magic Jar (6)
8. Finger of Death (7)
9. True Resurrection (9)

**Transmutation** - green - transform
1. Mending (0)
2. Prestidigitation (0)
3. Feather Fall (1)
4. Darkvision (2)
5. Knock (2)
6. Awaken (5)
7. Time Stop (9)
8. True Polymorph (9)`,id:"73ea3dae-e6e2-42f1-8f1e-c0e5559132f0",updated:"2026-06-17T22:56:37.382Z"},{title:"Spellcasting",summary:`**Spell Attack:** d20 + Casting Modifier + Proficiency Bonus

**Spell Save DC:** 8 + Casting Modifier + Proficiency Bonus

1. Wizard \u2192 INT
2. Cleric / Druid / Ranger \u2192 WIS
3. Bard / Paladin / Sorcerer / Warlock \u2192 CHA

Caster must be **proficient in the armour** they are wearing. Otherwise, they are considered too physically hampered and distracted for spellcasting.

**Bonus Action:** You can't cast another spell during the same turn, **except for a cantrip** with a casting time of 1 action.

**Ritual Casting**: Normal casting time **+ 10 minutes**. You **must maintain Concentration** while casting.`,details:`#### Spell Components

1. **V (Verbal):** Must be able to speak
2. **S (Somatic):** Need a free hand for gestures
3. **M (Material):** Need listed components or spellcasting focus

#### Concentration Spells
- Only **1 Concentration spell** at a time
- Must roll a **DC 10 CON save** on taking any damage
- Ends if **Incapacitated**

#### Learn Spells

- Learns from a **Spellbook or Spell Scroll** \u2192 Wizard
- Knows **entire class spells** \u2192 Cleric, Druid, Paladin, Ranger
- Learns from class spells on **level up** \u2192 Bard, Sorcerer, Warlock

#### Prepare Spells

- Prep after long rest \u2192 Wizard, Cleric, Druid, Paladin, Ranger
- No prep needed \u2192 Bard, Sorcerer, Warlock

#### Ritual Casting

If the spell is tagged as a ritual spell, the caster can cast the spell without expending a spell slot. The casting time is **10 minutes longer** than the spells normal casting time.

The trade-off it that the spell cannot be used in combat.

You **must maintain Concentration** during this extended casting period.

Wizards can cast any *known* ritual spell.

Warlock must have *specific features* to ritual cast. Like Pact of the Tome or the Book of Ancient Secrets.

Any other spell caster can cast *prepared* ritual spells.`,id:"8b4ee5ae-b227-444a-b863-de26d503e0f1",updated:"2026-06-18T16:13:55.022Z"},{title:"Spell Scrolls",summary:`Parchment which stores a spell to be **used by spellcasters**.
- Different from *Magic Scroll*, which **any class** can use.

**Disintegrates after use** regardless of success or failure.

**Concentration applies** if the spell is a concentration spell.

Spell **must be** on the users spell list
- higher level spells require a spell skill check **DC 10 + spell level**
- Wizard \u2192 INT
- Cleric / Druid / Ranger \u2192 WIS
- Bard / Paladin / Sorcerer / Warlock \u2192 CHA
- if user has a spell slot (used or unused) for the spell level, then no check`,details:`#### Spell Levels

| Rarity | Spell Level | Save DC | Attack Bonus |
| --- | --- | --- | --- |
| Common | Cantrip | 13 | +5 |
| Common | 1 | 13 | +5 |
| Uncommon | 2 | 13 | +5 |
| Uncommon | 3 | 15 | +7 |
| Rare | 4 | 15 | +7 |
| Rare | 5 | 17 | +9 |
| Very Rare | 6 | 17 | +9 |
| Very Rare | 7 | 18 | +10 |
| Very Rare | 8 | 18 | +10 |
| Legendary | 9 | 19 | +11 |

#### Crafting

Typically created by wizards with time, components, gold, and energy.

Wizards can copy spell scrolls into their spell book
- disintegrates after copy (as a final test)

| Rarity | Spell Level | Gold | Crafter Level | Days to Craft |
| --- | --- | --- | --- | --- |
| Common | 0-1 | 50 | 3 | 2 |
| Uncommon | 2-3 | 250 | 3 | 10 |
| Rare | 4-5 | 2500 | 6 | 100 |
| Very Rare | 6-8 | 25000 | 11 | 1000 |
| Legendary | 9 | 250000 | 17 | 10000 |`,id:"e1802e77-9830-4cca-80e2-ae8d4b757e81",updated:"2026-06-18T14:44:33.820Z"},{title:"Druid Circles",summary:`1. Circle of **Dreams** (Feywild) - Fey healer and dream-walker.
2. Circle of the **Land** (History) - Scholar of ancient places and natural magic.
3. Circle of the **Moon** (Wilderness) - Master shapeshifter and wilderness survivor.
4. Circle of the **Shepherd** (Beasts) - Friend and guardian of beasts and spirits.
5. Circle of **Spores** (Undead) - Keeper of decay, fungi, and the cycle of death.
6. Circle of **Stars** (Cosmos) - Reader of fate through the constellations.
7. Circle of **Wildfire** (Destruction) - Agent of destruction, renewal, and rebirth.

**Gods of Nature:** Silvanus / Mielikki / Chauntea / Eldath

**Gods of Fury:** Talos / Auril / Umberlee / Malar`,details:`##### Circle of Dreams (Feywild)
- Balm of the Summer Court \u2014 Heal allies at range and grant temporary hit points.
- Hearth of Moonlight and Shadow \u2014 Create a hidden, protected campsite during rests.
- Hidden Paths \u2014 Teleport yourself or allies short distances.
- Walker in Dreams \u2014 Travel through dreams and Feywild pathways.

##### Circle of the Land (History)
- Bonus Cantrips & Spells \u2014 Gain extra spells tied to a chosen terrain.
- Natural Recovery \u2014 Recover spell slots during a short rest.
- Land's Stride \u2014 Move easily through nonmagical difficult terrain.
- Nature's Ward \u2014 Resist natural and magical environmental hazards.

##### Circle of the Moon (Wilderness)
- Combat Wild Shape \u2014 Transform into beasts as a bonus action.
- Enhanced Forms \u2014 Access stronger beast shapes than other druids.
- Primal Strike \u2014 Beast attacks count as magical.
- Elemental Wild Shape (legacy) \u2014 Transform into elemental creatures.

##### Circle of the Shepherd (Beasts)
- Spirit Totem \u2014 Summon animal spirits that empower allies.
- Mighty Summoner \u2014 Summoned beasts gain extra durability.
- Guardian Spirit \u2014 Summons heal while near your spirit totems.
- Faithful Summons \u2014 Automatically summon defenders in dire need.

##### Circle of Spores (Undead)
- Halo of Spores \u2014 Damage nearby creatures with necrotic spores.
- Symbiotic Entity \u2014 Consume Wild Shape for combat buffs and temporary HP.
- Fungal Infestation \u2014 Reanimate fallen creatures as fungal servants.
- Spreading Spores \u2014 Create persistent clouds of harmful spores.

##### Circle of Stars (Cosmos)
- Star Map \u2014 Gain guidance from a celestial focus.
- Starry Form \u2014 Transform into a constellation granting special powers.
- Cosmic Omen \u2014 Manipulate fate with celestial predictions.
- Full of Stars \u2014 Gain resistance while in Starry Form.

##### Circle of Wildfire (Destruction)
- Wildfire Spirit \u2014 Summon a fiery companion for combat and mobility.
- Enhanced Bond \u2014 Cast spells through your wildfire spirit.
- Cauterizing Flames \u2014 Fire can heal allies or harm enemies.
- Blazing Revival \u2014 Sacrifice your spirit to avoid being knocked unconscious.`,id:"956c2583-b164-46ed-b3a4-42be9d113d9a",updated:"2026-06-17T22:36:51.518Z"},{title:"Vision",summary:`- **Disadvantage** on Perception \u2192 -5 from **Passive Perception**
- **Advantage** on Perception \u2192 +5 to **Passive Perception**

**Lightly Obscured** \u2192 disadvantage on perception - dim light, patchy fog, moderate foliage
- **Dim Light / Shadows** - between areas of bright light and darkness, twilight, dawn, bright full moonlight

**Heavily Obscured** \u2192 Blinded - darkness, opaque fog, dense foliage
- **Darkness** - night time (including most moonlit nights), unlit dungeon, subterranean vault, magical darkness

**Bright Light** \u2192 normal vision - daylight, torch, lantern, fire

Blindsight / Darkvision / Tremorsense / Truesight`,details:`#### Lightly Obscured

*dim light, patchy fog, moderate foliage*

**Disadvantage** on Perception checks that rely on sight

#### Heavily Obscured

*darkness, opaque fog, dense foliage*

**Blinded** condition applies

- A blinded creature can't see and automatically fails any ability check that requires sight.
- Attack rolls against the creature have advantage, and the creature's attack rolls have disadvantage.

#### Bright Light

*daylight (including gloomy days), torch, lantern, fire*

Most creatures see normally

#### Dim Light / Shadows

*between areas of bright light and darkness, twilight, dawn, bright full moonlight*

Creates **Lightly Obscured** areas

- Disadvantage on Perception checks that rely on sight

#### Darkness

*night time (including most moonlit nights), unlit dungeon, subterranean vault, magical darkness*

Creates **Heavily Obscured** areas \u2192 **Blinded** condition applies

- A blinded creature can't see and automatically fails any ability check that requires sight.
- Attack rolls against the creature have advantage, and the creature's attack rolls have disadvantage.

#### Blindsight

*creatures without eyes (oozes), with echolocation or heightened senses (bats, true dragons)*

Perceive surroundings without relying on sight

#### Darkvision

*most creatures that live underground (drow, mind flayers)*

Perceive **Darkness** as **Dim Light** in shades of grey

Perceive **Dim Light** as **Bright Light**

#### Tremorsense

*many burrowing creatures (ankhegs)*

A monster **can detect and pinpoint** the origin of vibrations, provided that the monster and the source of the vibrations are **in contact** with the same ground or substance.

Cannot be used to detect flying or incorporeal creatures.

#### Truesight

*avatars, divine beings, powerful wizards and liches, some abberations (nothic)*

A monster can see in normal and magical darkness, see invisible creatures and objects, automatically detect visual illusions and succeed on saving throws against them, and perceive the original form of a shapechanger or a creature that is transformed by magic. Furthermore, the monster can see into the Ethereal Plane within the same range.`,id:"c0f08ff9-842e-49d0-b320-c09f31a40fe1",updated:"2026-06-17T23:00:32.597Z"},{title:"Races",summary:`- Human \u2192 Adaptable / Skilled / Versatile
- Elf \u2192 Darkvision / Keen Senses / Fey Ancestry / Trance
- Dwarf \u2192 Darkvision / Dwarven Resilience / Stonecunning / Dwarven Toughness
- Halfling \u2192 Lucky / Brave / Halfling Nimbleness
- Gnome \u2192 Darkvision / Gnome Cunning / Curious
- Orc \u2192 Powerful Build / Relentless Endurance / Adrenaline Rush
- Tiefling \u2192 Darkvision / Fiendish Ancestry / Fire Resistance
- Dragonborn \u2192 Draconic Ancestry / Breath Weapon / Damage Resistance
- Goliath \u2192 Large Form / Powerful Build / Mountain Born

Aasimar / Tabaxi / Goblin / Kobold / Firbolg / Genasi / Kenku / Lizardfolk / Yuan-ti / Warforged`,details:`#### Human

* **Versatile** \u2014 Gain an extra skill, feat, or broad adaptability depending on rules version.

#### Elf

* **Darkvision** \u2014 See in darkness as dim light, usually out to 60 ft.
* **Keen Senses** \u2014 Gain proficiency in Perception.
* **Fey Ancestry** \u2014 Advantage against being Charmed; magical sleep usually doesn't affect you.
* **Trance** \u2014 Long rests require only 4 hours of meditation-like rest.

#### Dwarf

* **Darkvision** \u2014 See in darkness as dim light to 60 ft.
* **Dwarven Resilience** \u2014 Advantage on poison saves and resistance to poison damage.
* **Stonecunning** \u2014 Expertise-like knowledge regarding stonework and masonry.
* **Dwarven Toughness** \u2014 Gain extra hit points.

#### Halfling

* **Lucky** \u2014 Reroll a natural 1 on a d20 roll.
* **Brave** \u2014 Advantage on saving throws against fear.
* **Halfling Nimbleness** \u2014 Move through spaces occupied by larger creatures.

#### Gnome

* **Darkvision** \u2014 See in darkness as dim light.
* **Gnome Cunning** \u2014 Advantage on Intelligence, Wisdom, and Charisma saves against magic.
* **Curious** \u2014 Often associated with gadgets, inventions, and clever problem-solving. Tinker/Artificer

#### Orc

* **Powerful Build** \u2014 Count as one size larger for carrying, pushing, and lifting.
* **Adrenaline Rush** \u2014 Bonus-action movement boost with temporary hit points.
* **Relentless Endurance** (legacy half-orc) \u2014 Drop to 1 HP instead of 0 once per long rest.

#### Tiefling

* **Darkvision** \u2014 See in darkness as dim light.
* **Fiendish Legacy** \u2014 Gain innate spells from infernal ancestry.
* **Fire Resistance** \u2014 Take half damage from fire.

#### Dragonborn

* **Draconic Ancestry** \u2014 Choose a dragon type that determines breath weapon and resistance.
* **Breath Weapon** \u2014 Exhale elemental energy in an area.
* **Damage Resistance** \u2014 Resist the damage type of your ancestry.

#### Goliath

* **Large Form** \u2014 Temporarily increase size and physical presence.
* **Powerful Build** \u2014 Enhanced carrying and lifting capacity.
* **Mountain Born** \u2014 Naturally adapted to harsh environments and physical challenges.

#### Aasimar

* **Celestial Resistance** \u2014 Resistance to radiant and necrotic damage.
* **Healing Hands** \u2014 Restore hit points with a touch.
* **Divine Transformation** \u2014 Temporarily gain angelic powers.

#### Tabaxi

* **Darkvision** \u2014 See in darkness as dim light.
* **Feline Agility** \u2014 Double movement speed for a turn.
* **Cat's Talent** \u2014 Gain skill proficiencies reflecting feline instincts.

#### Goblin

* **Darkvision** \u2014 See in darkness as dim light.
* **Fury of the Small** \u2014 Deal extra damage to larger creatures.
* **Nimble Escape** \u2014 Hide or Disengage as a bonus action.

#### Kobold

* **Darkvision** \u2014 See in darkness as dim light.
* **Draconic Cry** \u2014 Grant allies advantage against nearby enemies.
* **Crafty Survivalist** \u2014 Often skilled at traps, ambushes, and teamwork.

#### Firbolg

* **Hidden Step** \u2014 Turn invisible briefly.
* **Speech of Beast and Leaf** \u2014 Communicate with animals and plants.
* **Powerful Build** \u2014 Enhanced carrying capacity.

#### Genasi

* **Elemental Legacy** \u2014 Gain spells and abilities tied to an elemental plane.
* **Elemental Resistance** \u2014 Resist damage associated with your element.
* **Environmental Adaptation** \u2014 Natural affinity for elemental environments.

#### Kenku

* **Expert Duplication** \u2014 Mimic sounds and voices accurately.
* **Kenku Recall** \u2014 Gain advantage or proficiency through practiced observation.
* **Stealthy Nature** \u2014 Frequently skilled at deception and infiltration.

#### Lizardfolk

* **Hungry Jaws** \u2014 Special bite attack with temporary benefits.
* **Natural Armor** \u2014 AC calculation without armor.
* **Hold Breath** \u2014 Stay underwater for extended periods.

#### Yuan-ti

* **Magic Resistance** \u2014 Advantage on saving throws against spells.
* **Poison Resilience** \u2014 Resistance or immunity to poison effects.
* **Serpentine Magic** \u2014 Access to innate magical abilities.

#### Warforged

* **Constructed Resilience** \u2014 Enhanced resistance to disease, poison, and environmental effects.
* **Integrated Protection** \u2014 Armor-like body construction.
* **Sentry's Rest** \u2014 Remain aware while resting.`,id:"4093961e-d410-4458-8105-d1dea5dc0fcf",updated:"2026-06-17T22:56:05.399Z"}];var Fe=(i,r)=>r.id;function Ee(i,r){if(i&1){let a=y();o(0,"ion-col",8)(1,"app-rule-card",15),g("openRule",function(){let n=m(a).$implicit,t=u();return p(t.onOpen(n))})("moveRule",function(n){let t=m(a).$index,c=u();return p(c.onMove(n,t))}),s()()}if(i&2){let a=r.$implicit,e=r.$index,n=r.$count,t=u();l(),d("rule",a)("disableMove",t.searching)("isFirst",e===0)("isLast",e===n-1)}}function Le(i,r){if(i&1&&h(0,"markdown",21),i&2){let a=u(4);d("data",a.rule.summary)}}function Be(i,r){if(i&1&&(L(0,Le,1,1,"markdown",21),h(1,"markdown",22)),i&2){let a=u(3);B(a.rule.summary?0:-1),l(),d("data",a.rule.details)}}function We(i,r){if(i&1){let a=y();o(0,"ion-item")(1,"ion-textarea",23),D("ngModelChange",function(n){m(a);let t=u(3);return R(t.rule.title,n)||(t.rule.title=n),p(n)}),s()(),o(2,"ion-item")(3,"ion-textarea",24),D("ngModelChange",function(n){m(a);let t=u(3);return R(t.rule.summary,n)||(t.rule.summary=n),p(n)}),s()(),o(4,"ion-item",25)(5,"ion-textarea",26),D("ngModelChange",function(n){m(a);let t=u(3);return R(t.rule.details,n)||(t.rule.details=n),p(n)}),s()()}if(i&2){let a=u(3);l(),d("autoGrow",!0)("rows",1),S("ngModel",a.rule.title),l(2),d("autoGrow",!0)("rows",12),S("ngModel",a.rule.summary),l(2),d("autoGrow",!0)("rows",6),S("ngModel",a.rule.details)}}function Oe(i,r){if(i&1){let a=y();o(0,"form",null,1)(2,"app-editable",20),g("save",function(n){m(a);let t=u(2);return p(t.onSave(n))})("delete",function(n){m(a);let t=u(2);return p(t.onDelete(n))}),E(3,Be,2,2,"ng-template",null,2,O)(5,We,6,9,"ng-template",null,3,O),s()()}if(i&2){let a=W(1),e=u(2);l(2),d("editable",e.rule)("form",a)("skipPreview",e.isDefaultRule(e.rule))}}function Ve(i,r){if(i&1){let a=y();o(0,"ion-header")(1,"ion-toolbar")(2,"ion-title",16),v(3),s(),o(4,"ion-buttons",17)(5,"ion-button",18),g("click",function(){m(a),u();let n=W(20);return p(n.dismiss())}),v(6," Close "),s()()()(),o(7,"ion-content",19),L(8,Oe,7,3,"form"),s()}if(i&2){let a=u();l(3),k(" ",(a.rule==null?null:a.rule.title)||"Untitled Rule"," "),l(5),B(a.rule?8:-1)}}P({add:we,searchOutline:ke});var gn=(()=>{let r=class r{constructor(){this.alertController=C(V),this.router=C(Z),this.route=C(j),this.name=ye,this.rules=[],this.rule=null,this.storageKey="rules",this.queryParamKey="id",this.importLabel=ve,this.exportLabel=be,this.searchTerm="",this.addRule=()=>{let e=z(b({},G),{id:crypto.randomUUID(),updated:new Date().toISOString()});this.rules=[...this.rules,e],this.onOpen(e)},this.isDefaultRule=e=>this.isIdenticalRule(G,e),this.isIdenticalRule=({title:e,summary:n,details:t},c)=>e===c.title&&n===c.summary&&t===c.details,this.onSearch=e=>{this.searchTerm=(e.detail.value??"").toString()},this.onOpen=e=>{this.rule=b({},e),this.setRoute(this.rule)},this.setRoute=e=>this.router.navigate([],{queryParams:{[this.queryParamKey]:e?.id??null},replaceUrl:!0}),this.onDismiss=()=>{let e=this.rules.find(({id:n})=>n===this.rule?.id);e&&this.isDefaultRule(e)?this.deleteRule(e):this.rule=null,this.setRoute(null)},this.onSave=e=>{let n=this.rules.findIndex(({id:t})=>t===e.id);n<0||(this.rules=this.rules.with(n,b({},e)),this.save())},this.canDismiss=()=>w(this,null,function*(){if(!this.rule)return!0;let e=this.rules.find(({id:t})=>t===this.rule?.id);return!e||this.isIdenticalRule(e,this.rule)?!0:this.confirmDismiss()}),this.confirmDismiss=()=>w(this,null,function*(){if(!this.rule)return!0;let e=yield this.alertController.create({header:"Save Rule?",message:`You have unsaved changes to the rule: ${this.rule.title||"Untitled Rule"}.`,buttons:[{text:"Discard",role:"destructive"},{text:"Cancel",role:"cancel"},{text:"Save",role:"save"}]});yield e.present();let{role:n}=yield e.onDidDismiss();return n==="save"&&this.onSave(this.rule),n!=="cancel"}),this.onDelete=e=>w(this,null,function*(){if(this.isDefaultRule(e))return this.deleteRule(e);yield(yield this.alertController.create({header:"Delete Rule",subHeader:"This action cannot be undone.",message:`Are you sure you want to delete the rule: ${e.title||"Untitled Rule"}?`,buttons:[{text:"Cancel",role:"cancel"},{text:"Delete",role:"destructive",handler:()=>this.deleteRule(e)}]})).present()}),this.deleteRule=e=>{this.import(this.rules.filter(({id:n})=>n!==e.id)),this.save()},this.save=()=>localStorage.setItem(this.storageKey,JSON.stringify(this.rules)),this.import=e=>{this.rules=e,this.save(),this.rule=null};try{let e=localStorage.getItem(this.storageKey);e&&e.length>2?this.import(JSON.parse(e)):this.import(Array.from(N))}catch{this.import(Array.from(N))}}ngOnInit(){if(!this.ruleId)return;let e=this.rules.find(({id:n})=>n===this.ruleId);e&&this.onOpen(e)}get ruleId(){return this.route.snapshot.queryParamMap.get(this.queryParamKey)}get searching(){return this.searchTerm.trim().length>=(H.minMatchCharLength??1)}get visibleRules(){return this.searching?new Te(this.rules,H).search(this.searchTerm.trim()).map(({item:e})=>e):this.rules}onMove(e,n){let t=e==="up"?n-1:n+1;if(t<0||t>=this.rules.length)return;let c=this.rules.splice(n,1)[0];this.rules.splice(t,0,c),this.save()}};r.\u0275fac=function(n){return new(n||r)},r.\u0275cmp=_({type:r,selectors:[["app-rules"]],features:[q([fe(),V])],decls:23,vars:7,consts:[["ruleModal",""],["ruleForm","ngForm"],["preview",""],["edit",""],[3,"name"],["lines","full"],["name","search-outline","slot","start"],["placeholder","Search rules","aria-label","Search rules",3,"ionInput","clearInput"],["size","12","size-lg","6","size-xl","4"],["button","","detail","false","lines","none",1,"ion-padding-vertical",3,"click"],["name","add","slot","start"],["size","3"],["variant","item",3,"importEvent","label"],["variant","item",3,"json","label"],[3,"didDismiss","isOpen","canDismiss"],[3,"openRule","moveRule","rule","disableMove","isFirst","isLast"],["size","small",1,"text-2xl","font-bold","ion-text-start"],["slot","end"],[3,"click"],[1,"ion-padding-horizontal","ion-padding-bottom"],[3,"save","delete","editable","form","skipPreview"],[1,"ion-display-block","ion-margin-horizontal","ion-padding-bottom","border-bottom",3,"data"],[1,"ion-display-block","ion-margin-horizontal",3,"data"],["label","Title","labelPlacement","stacked","placeholder","Name the rule","name","title",3,"ngModelChange","autoGrow","rows","ngModel"],["label","Summary","labelPlacement","stacked","placeholder","Add a summary for quick lookup","name","summary",3,"ngModelChange","autoGrow","rows","ngModel"],["lines","none"],["label","Details","labelPlacement","stacked","placeholder","Add a detailed description","name","details",3,"ngModelChange","autoGrow","rows","ngModel"]],template:function(n,t){if(n&1){let c=y();o(0,"ion-content"),h(1,"app-guide",4),o(2,"ion-item",5),h(3,"ion-icon",6),o(4,"ion-input",7),g("ionInput",function(I){return m(c),p(t.onSearch(I))}),s()(),o(5,"ion-grid")(6,"ion-row"),K(7,Ee,2,4,"ion-col",8,Fe),s()(),o(9,"ion-row")(10,"ion-col")(11,"ion-item",9),g("click",function(){return m(c),p(t.addRule())}),h(12,"ion-icon",10),o(13,"ion-label"),v(14,"Add Rule"),s()()(),o(15,"ion-col",11)(16,"app-json-importer",12),g("importEvent",function(I){return m(c),p(t.import(I))}),s()(),o(17,"ion-col",11),h(18,"app-json-exporter",13),s()(),o(19,"ion-modal",14,0),g("didDismiss",function(){return m(c),p(t.onDismiss())}),E(21,Ve,9,2,"ng-template"),s(),h(22,"app-footer"),s()}n&2&&(l(),d("name",t.name),l(3),d("clearInput",!0),l(3),U(t.visibleRules),l(9),d("label",t.importLabel),l(2),d("json",t.rules)("label",t.exportLabel),l(),d("isOpen",!!t.rule)("canDismiss",t.canDismiss))},dependencies:[oe,de,he,M,se,ue,re,x,T,ce,ne,le,pe,me,ge,A,Me,Re,Ae,xe,De,Se,ee,Q,Y,X,$,J],styles:["ion-grid[_ngcontent-%COMP%]{--ion-grid-column-padding: 16px}ion-modal[_ngcontent-%COMP%]{--width: 90vw;--max-width: 1100px;--height: 85vh;--max-height: 90vh}ion-title[_ngcontent-%COMP%]{padding-top:10px;padding-bottom:10px}"]});let i=r;return i})();export{gn as RulesComponent};
