# Cleveland Lighting Controller

## master

``` control
path: loopin/clock/speed
type: clockSpeed
```

## preview

``` control
type: showBuffer
```

## simple

``` control
type: sliders
path: loopin/render/simple/float
subs:
  simplePhase: {}
```

## perlin
``` control
type: noiseScale
path: loopin/render/perlin/vec4/perlinScale
```

## audio

``` control
type: showBuffer
options: 
  - audio_input
  - lamps
```

``` control
path: loopin/waveform/audio_input
subs:
  enable:
    type: toggle

  gain: 
    type: float
    max: 200
  
  squelch: 
    type: float

  duration:
    type: float
    min: 0
    max: 10
    pow: 2.2

  test: 
    type: float
```



## mixer

``` control
type: mixerChannels
````

``` control
type: mixerMix
````

``` control
type: float
path: loopin/render/mixer/float/mixerCurve
````

## correct

``` control
type: correctVector
path: loopin/uniform/vec4/correctRGBSmax
title: Gain
```

``` control
type: correctVector
title: Curve
path: loopin/uniform/vec4/correctRGBSpow
```

## palettes

``` control
type: showBuffer
options: 
  - palette
  - palette_0
```

``` control
path: loopin/render/palette/texture/src/buffer
options:
  - palette_0
  - palette_1
```

``` control
path: loopin/pixels/palette_0
type: palettePixels
title: Palette 0
```

``` control
path: loopin/pixels/palette_1
type: palettePixels
title: Palette 1
```

``` control
path: loopin/pixels/palette_2
type: palettePixels
title: Palette 2
```

``` control
path: loopin/pixels/palette_3
type: palettePixels
title: Palette 3
```


## lamps

``` control
type: lampsSrc
```
