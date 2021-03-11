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



## lamps

``` control
type: lampsSrc
```
