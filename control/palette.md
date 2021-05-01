# Palette

``` control
type: showBuffer
options: 
  - palette
  - palette_0
  - palette_1
  - palette_2
  - palette_3
```

``` control
type: paletteSelect
```

## dissolver

The palette dissolver creates smooth transitions for the `palette` buffer.

---
``` control
title: Palette Dissolver
path: loopin/render/palette/float
hide: path
type: group
sub: 
  hide: path
subs:
  dissolveSpeed:
    type: clockSpeed
    title: Speed

  dissolveGrit:
    title: Grit
    colour: cyan
    type: float
    min: 1
    max: 128
    pow: 2
    digits: 0
```

## palette_0

``` control
type: paletteEnable
trigger: palette_0
```

``` control
path: loopin/pixels/palette_0
type: palettePixels3x3
title: Palette 0
```

## palette_1

``` control
type: paletteEnable
trigger: palette_1
```

``` control
path: loopin/pixels/palette_1
type: palettePixels
title: Palette 1
```

## palette_2

``` control
type: paletteEnable
trigger: palette_2
```


``` control
path: loopin/pixels/palette_2
type: palettePixels
title: Palette 2
```

## palette_3

``` control
type: paletteEnable
trigger: palette_3
```

``` control
path: loopin/pixels/palette_3
type: palettePixels
title: Palette 3
```
