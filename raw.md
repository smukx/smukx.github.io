sudo apt update
sudo apt install curl
# Installing Ai Pakages 
pip install git+https://github.com/smukx/voxbot
pip uninstall -y torch torchvision torchaudio
pip install --pre torch torchvision torchaudio --index-url https://download.pytorch.org/whl/nightly/cu118
echo 
echo
echo "YOUR PROGRAM IS READY"
echo "WRITTEN BY ~SMUKX"
