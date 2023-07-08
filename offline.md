### Building

Please make sure you have [Node.js](https://nodejs.org/en/download) installed.

Download nate-games. by Going to Code, [Download ZIP](https://github.com/nate-games/nate-games.github.io/archive/refs/heads/main.zip) Or just press the link it will download. Extract the ZIP File. Open your command prompt type 
```CD <path>``` 
make sure you replace the "<path>". Press enter then paste 
``` bash
npm install electron --save-dev
```
Then, Paste
``` bash
npm run start
```
Packaging [Optional]:
WINDOWS ONLY
``` bash
npx electron-packager . nate-games --platform=win32 --arch=x64 --out=./ --app-version=1.0.0 --version-string.ProductName="nate-games" --version-string.CompanyName="nate-games"
```
This will save a folder open it and run `nate-games.exe`. Enjoy!
