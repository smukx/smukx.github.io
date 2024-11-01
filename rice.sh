#!/usr/bin/env bash

read -p "Select Your Distros Debian/Arch [D/A]" yn
case $yn D




Debian(){
	sudo apt update
	sudo apt install kitty polybar picom i3 i3lock feh NetworkManager 
	cp config /$HOME/.config i3
	
}

