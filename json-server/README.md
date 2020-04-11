# RSCC-CITC_APP

## json-server
This folder contains all of the necessary files to launch and watch the json-server.

### Launch json-server

To launch the server, issue the following command while in this folder:
##### Windows
```batch
# Windows users, please insert code here
```

##### Linux/ macOS
```bash
json-server --watch db.json
```

### json-server switches
The json-server has several useful switches that can be added to the above commands. Below are 2 of the most useful for this project.
```bash
# Note: The "--" may need replaced with a "/" on Windows
json-server --host <host ip or name>
json-server --host <port>
```

