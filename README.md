# electron_nanjs

Electron Application for testing nanjs.

## Windows: Build Instruction

1. install nodejs for windows
   * https://nodejs.org/ja/download/
   * add "c:\Program Files\nodejs" to PATH environment variable.

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
   * add "c:\Users\<username>\.windows-build-tools\python27" to PATH environment variable.
   * close administrator powershell.

6. install packages
   ````
   PS> npm install
   ````

7. install electron-rebuild
   ````
   PS> npm install --save-dev electron-rebuild
   ````
   * https://teratail.com/questions/19029

8. copy [electron version]
   ````
   PS> electron --version
   ````

9. rebuild some node packages for electron
   ````
   PS> ./node_modules/.bin/electron-rebuild -v [electron version]
   ````
   * you need to rebuild every npm install/update.

10. run app
    ````
    PS> electron .
    ````
    * have fun!
    * if you want debugger, "electron --inspect 9229 ." and open "chrome://inspect" by chrome browser.

## Mac: Build Instruction

later

