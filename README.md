# hfour-cleveland

# Requirements


# Dev Environ Setup

## Raspberry Pi 4


``` sh 
sudo raspi-config
```
- 1 Set hostname to taste
  - S5 Boot Autologin `Enable`
- 2 D5 Enable/Disable screen blanking `No`
- 3 P2 SSH `Yes`


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


- loopin-native 