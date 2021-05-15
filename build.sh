# Excuting already cloned version
# get latest code 
git pull
# clean and build /build folder
npm run build
# stop existing deployment
pm2 stop all
# move to build folder
cd build
# deployment
pm2 start index.js -f
# view logs
pm2 logs all