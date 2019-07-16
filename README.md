# uptimestats
A small tool to gather and diagnose Node.js server uptime statistics

### How to use

The module exports only one function `stats()`;

```js
const uptimestats = require('uptimestats');

console.log(uptimestats.stats());
```

This will print the object with statistics:

```json
{
  "nodejsVersion": "v10.16.0",
  "uptime": "0 min",
  "processMemory": "19.54 MB",
  "maxHeapAvailable": "1.41 Gb",
  "v8heapTotal": "9.73 MB",
  "v8heapUsed": "3.91 MB",
  "v8cppObjects": "0.01 MB"
}
```
