# electron_nanjs

Electron Application for testing nanjs.

## Windows: Build Instruction

1. install nodejs for windows
   * https://nodejs.org/ja/download/
   * add "c:\Program Files\nodejs" and "c:\Users\\\<username\>\\AppData\Roaming\npm" to PATH environment variable.

2. start powershell
   * press [Win] key and type "power[enter]"

3. start administrator powershell
   ````
   PS> Start-Process powershell -Verb runas
   ````
4. install electron
   ````
   PS(admin)> npm install -g electron
   ````

5. install windows-build-tools for electron-rebuild
   ````
   PS(admin)> npm install -g --production windows-build-tools
   ````
   * add "c:\Users\\\<username\>\\.windows-build-tools\python27" to PATH environment variable.
   * close administrator powershell.

6. install packages
   ````
   PS> cd <your cloned electron_nanjs directory>
   PS> npm install
   ````

7. install electron-rebuild
   ````
   PS> npm install --save-dev electron-rebuild
   ````
   * https://teratail.com/questions/19029

8. copy \<electron version\>
   ````
   PS> electron --version
   ````

9. rebuild some node packages for electron
   ````
   PS> ./node_modules/.bin/electron-rebuild -v <electron version>
   ````
   * you need to rebuild every npm install/update.

10. run app
    ````
    PS> electron .
    ````
    * have fun!
    * if you want debugger, "electron --inspect 9229 ." and open "chrome://inspect" in chrome browser.

## Mac: Build Instruction

1. install nvm
   * nvm = Node Version Manager
   * skip install description. please read official document or google.
     * https://github.com/creationix/nvm#install-script
     * https://qiita.com/sansaisoba/items/242a8ba95bf70ba179d3

2. install nodejs via nvm
   ````
   > nvm install --lts
   > nvm use --lts
   > node -v
   > npm -v
   ````

3. install electron
   ````
   > npm install -g electron
   ````

4. install packages
   ````
   > cd <your cloned electron_nanjs directory>
   > npm install
   ````

5. install electron-rebuild
   ````
   > npm install --save-dev electron-rebuild
   ````

6. copy \<electron version\>
   ````
   > electron --version
   ````

7. rebuild some node packages for electron
   ````
   > ./node_modules/.bin/electron-rebuild -v <electron version>
   ````
   * you need rebuild after npm install/update every time.
   * if fail, try install Xcode.
     * https://itunes.apple.com/jp/app/xcode/id497799835?mt=12

8. run app
   ````
   > electron .
   ````
   * have fun!
   * if you want debugger, "electron --inspect 9229 ." and open "chrome://inspect" in chrome browser.

