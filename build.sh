# Excuting already cloned version
# get latest code 
git pull
# move to folder
cd movie-cloud/server
# clean and build /build folder
npm run build
# move to build folder
cd build
# stop existing deployment
pm2 stop all
# deployment
pm2 start index.js -f