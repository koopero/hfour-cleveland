*EXPERIMENTAL: This project remains under active development. Features and documentation are incomplete.*

# Cleveland Lighting Controller

DIY kit for controlling LED strips using a Raspberry Pi.

# Pipeline

- `mixer` : Combines layers with A-B mixer.
  - `simple` : Customizable shader
  - `perlin` : Simplex noise shader
- `correct` : Correct gamma and gain
- `lamps` : Scale output for LEDs

# Instructions

## Changing LED configuration

- Modify `misc/blitface.test.yaml` section `output` with config from [blitface docs](https://www.npmjs.com/package/blitface)
- Test LED configuration by running `blitface misc/blitface.test.yaml`.
- Copy `output` section into `loopin.local.yaml`.
- Modify `preset/buffers.yaml` to reflect new geometry.

## Setup Dev Env on Raspberry Pi 4

- Run `raspi-config` and set:
  - `hostname` to *yourhosthanme*
  - 2 D5 Enable/Disable screen blanking `No`
  - 3 P2 SSH `Yes`
- Log in to terminal with ssh.

``` sh
# Install latest node.js
# https://github.com/nodesource/distributions/blob/master/README.md
curl -fsSL https://deb.nodesource.com/setup_15.x | sudo bash -
sudo apt install -y gcc g++ make nodejs

# Install yarn, package manager for node.js
curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn

# Clone 
git clone --recursive https://github.com/koopero/loopin-dev
cd loopin-dev

./script/yarn-link.sh

cd loopin-native
sudo npm link

sudo loopin-native --deps
sudo chown -R pi build
loopin-native --verbose --test
```
