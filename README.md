# boilerplate
Harp/Sass/Jade Boilerplate

| Command     | yarn              | npm              |
| ----------- | ----------------- | ---------------- |
| **install** | `yarn`            | `npm install`    |
| **develop** | `yarn dev`        | `npm run dev`    |
| **compile** | `yarn compile`    | `npm run compile`|
| **deploy**  | `yarn deploy`     | `npm run deploy` |


## Tech

| Package                                                     | Use                            |
| ----------------------------------------------------------- | ------------------------------ |
| [harp](http://harpjs.com)                                   | pre-processor and local server |
| [harp-scripts](http://github.com/leonardodino/harp-scripts) | harp extension w/ browser-sync |
| [surge](surge.sh)                                           | fast & easy deployment         |


## Dependencies
| Dependency | Minimum Version |
| ---------- | --------------- |
| `node`     | `v6`            |
| `bash`     | `v3`*           |

`*` Built-in on MacOS & Modern Linux.

### Windows fallback
> Use harp without harp-scripts by using the following commands:
>
> `npm run win32-start` and `npm run win32-compile`
