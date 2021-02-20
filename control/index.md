# Cleveland Lighting Controller

## master

``` control
path: loopin/clock/speed
type: clockSpeed
```

## preview

``` control
type: showBuffer
options: 
  - simple
  - perlin
  - mixer
  - correct
  - palette
```

## simple

``` control
type: sliders
path: loopin/render/simple/float
subs:
  simplePhase: {}
```



## mixer

``` control
type: mixerChannels
````

``` control
type: mixerMix
````
---


## correct

``` control
type: correctVector
path: loopin/uniform/vec3/correctCurve
title: Gain
channels: rgb
```

``` control
type: correctVector
title: Curve
path: loopin/uniform/vec3/correctCurve
channels: rgb
```

```

```


## lamps

``` control
type: lampsSrc
```
