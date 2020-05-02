# RSCC-CITC_APP

This repository is for JS team #4 to work and collaborate on the CITC app.

### Team Members:
1.  Margaret McKamey (Max)
2.  Gavin Kryschuk (Ripley)
3.  Trent Heston
4.  Brianna Holder

###### Special Notes
cordova platform add ios failed with error 'ios@latest not found'
To fix the issue, I issued the following commands from the project root

``` bash
rm -rf node_modules
npm install
```

After issuing those commands, I issued the following to add ios to the project
``` bash
cordova platform add ios@latest
```

**The '@latest' part is very important. building ios fails in the default version (5.0.0).*