#! /bin/bash
#
# script name: setup.bash
# script author: munair simpson
# script created: 20200624
# script purpose: spin up node/express with Pixelarity's Linear template

# disable/enable debugging.
debug="false" && echo [$0] set debug mode to "$debug".

# step 1: update the package list and install Yarn. this also installs Node. install unzip and install NPM last.
if $debug ; then sudo apt -y update && sudo apt -y install unzip && sudo apt -y install npm && sudo apt -y install vim ; fi
sudo apt -y update > /dev/null 2>&1 && echo [$0] updated APT packages.
sudo apt -y install unzip > /dev/null 2>&1 && echo [$0] installed unzip APT.
sudo apt -y install npm > /dev/null 2>&1 && echo [$0] installed NPM APT.
sudo apt -y install vim > /dev/null 2>&1 && echo [$0] installed vim APT.

# step 2: install Web3Modal React Example.
if $debug ; then sudo npm install ; fi
sudo npm install > /dev/null 2>&1 && echo [$0] installed Express Generator.

# step 3: verify the installation of APTs.
nodeversion=$(nodejs --version) && echo [$0] verified the installation of nodejs version $nodeversion.
npmversion=$(npm --version) && echo [$0] verified the installation of npm version $npmversion.

# step 4: start React app.
# npm start
