# Layers


``` control
type: correctInput
```

- [mixer](#layer_mixer)
- [simple](#layer_simple)
- [perlin](#layer_perlin)
- [audio](#layer_audio)


# Layer :: mixer

``` control
type: layerBoilerplate
subs:
  - type: layerPreview
    trigger: mixer
  - type: layerOutput
    trigger: mixer
```
---

Mixer

---
``` control
type: mixerChannelA
```
``` control
type: mixerChannelB
```
---
``` control
type: mixerMix
```


# Layer :: simple

``` control
type: layerBoilerplate
subs:
  - type: layerPreview
    trigger: simple
  - type: layerOutput
    trigger: simple
  - type: layerMixerA
    trigger: simple
  - type: layerMixerB
    trigger: simple
```
---

The `simple` layer is a minimal pattern designed for shader experimentation. 

---
``` control
type: sliders
path: loopin/render/simple/float
subs:
  simplePhase: {}
```

# Layer :: perlin

``` control
type: layerBoilerplate
subs:
  - type: layerPreview
    trigger: perlin
  - type: layerOutput
    trigger: perlin
  - type: layerMixerA
    trigger: perlin
  - type: layerMixerB
    trigger: perlin
```

---

``` control
type: noiseScale
path: loopin/render/perlin/vec4/perlinScale
```

# Layer :: audio

``` control
type: layerBoilerplate
subs:
  - type: layerPreview
    trigger: audio
  - type: layerOutput
    trigger: audio
  - type: layerMixerA
    trigger: audio
  - type: layerMixerB
    trigger: audio
```

---


``` control
type: audioInputConfig
```




