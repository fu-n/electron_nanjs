# electron_nanjs

Electron Application for testing nanjs.

## Windows: Build Instruction

* 1. install nodejs for windows
  * https://nodejs.org/ja/download/
  * add "c:\Program Files\nodejs" to PATH environment variable.

* 2. press [Win] key and type "power[enter]"
  * start powershell.

* 3. Start-Process powershell -Verb runas
  * start powershell with administrator permission from powershell.

* 4. npm install -g electron

* 5. npm install -g --production windows-build-tools
  * add "c:\Users\<username>\.windows-build-tools\python27" to PATH environment variable.
  * close administrator powershell.

* 6. npm install

* 7. npm install --save-dev electron-rebuild
  * rebuild some node packages for electron.
  * https://teratail.com/questions/19029

* 8. electron --version
  * copy <electron version>.

* 9. ./node_modules/.bin/electron-rebuild -v <electron version>

* 10. electron .
  * have fun!
  * if you want debbuger, "electron --inspect 9229 ." and open "chrome://inspect" by chrome browser.

## Mac: Build Instruction

later

