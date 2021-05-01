# LED Output

``` control
type: correctInput
```

``` control
type: lampsSrc
```


## Colour Correction

Set colour correction input to `gradient`.

``` control
type: correctInput
options:
  - gradient
```
---
Tune `Gain` for white balance and brightness.

---

``` control
type: correctVector
path: loopin/uniform/vec4/correctRGBSmax
title: Gain
channels: rgb
```

---
Tune `Curve` for grey point.

---
``` control
type: correctVector
title: Curve
path: loopin/uniform/vec4/correctRGBSpow
```

---
Reset colour correction input to source.
``` control
type: correctInput
```
---




