#! /bin/bash
git pull
npm run build
pm2 serve build/ 1681 --name "headsortails" --spa
