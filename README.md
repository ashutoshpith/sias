# sias

sias commands

[![cli](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/sias.svg)](https://npmjs.org/package/sias)
[![Downloads/week](https://img.shields.io/npm/dw/sias.svg)](https://npmjs.org/package/sias)
[![License](https://img.shields.io/npm/l/sias.svg)](https://github.com/ashutoshpith/sias/blob/master/package.json)

<!-- toc -->

- [sias](#sias)
- [Usage](#usage)
- [Commands](#commands)
- [sias](#sias)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g sias
$ sias COMMAND
running command...
$ sias (-v|--version|version)
sias/1.0.2 linux-x64 node-v12.16.1
$ sias --help [COMMAND]
USAGE
  $ sias COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`sias config:get`](#sias-configget)
- [`sias config:set`](#sias-configset)
- [`sias file:get`](#sias-fileget)
- [`sias file:set`](#sias-fileset)
- [`sias git:commit [INPUT]`](#sias-gitcommit-input)
- [`sias git:p`](#sias-gitp)
- [`sias git:pull [INPUT]`](#sias-gitpull-input)
- [`sias git:push`](#sias-gitpush)
- [`sias goodbye`](#sias-goodbye)
- [`sias hello [FILE]`](#sias-hello-file)
- [`sias help [COMMAND]`](#sias-help-command)
- [`sias ip [IPVERSION]`](#sias-ip-ipversion)
- [`sias kaomoji SEARCH`](#sias-kaomoji-search)
- [`sias localhost`](#sias-localhost)
- [`sias mongodb:check`](#sias-mongodbcheck)
- [`sias mysql:check`](#sias-mysqlcheck)
- [`sias os:info`](#sias-osinfo)
- [`sias ssh:rsa`](#sias-sshrsa)
- [`sias startServer`](#sias-startserver)

## `sias config:get`

```
USAGE
  $ sias config:get
```

_See code: [src/commands/config/get.ts](https://github.com/ashutoshpith/sias/blob/v1.0.2/src/commands/config/get.ts)_

## `sias config:set`

```
USAGE
  $ sias config:set
```

_See code: [src/commands/config/set.ts](https://github.com/ashutoshpith/sias/blob/v1.0.2/src/commands/config/set.ts)_

## `sias file:get`

description file read json/csv

```
USAGE
  $ sias file:get

OPTIONS
  -h, --help                 desc -> for help
  -i, --inputfile=inputfile  desc -> enter file name to read
  -n, --name=name            desc -> enter name of file
```

_See code: [src/commands/file/get.ts](https://github.com/ashutoshpith/sias/blob/v1.0.2/src/commands/file/get.ts)_

## `sias file:set`

```
USAGE
  $ sias file:set
```

_See code: [src/commands/file/set.ts](https://github.com/ashutoshpith/sias/blob/v1.0.2/src/commands/file/set.ts)_

## `sias git:commit [INPUT]`

```
USAGE
  $ sias git:commit [INPUT]

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/git/commit.ts](https://github.com/ashutoshpith/sias/blob/v1.0.2/src/commands/git/commit.ts)_

## `sias git:p`

git push with promt commit message

```
USAGE
  $ sias git:p

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/git/p.ts](https://github.com/ashutoshpith/sias/blob/v1.0.2/src/commands/git/p.ts)_

## `sias git:pull [INPUT]`

```
USAGE
  $ sias git:pull [INPUT]

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/git/pull.ts](https://github.com/ashutoshpith/sias/blob/v1.0.2/src/commands/git/pull.ts)_

## `sias git:push`

```
USAGE
  $ sias git:push
```

_See code: [src/commands/git/push.ts](https://github.com/ashutoshpith/sias/blob/v1.0.2/src/commands/git/push.ts)_

## `sias goodbye`

```
USAGE
  $ sias goodbye
```

_See code: [src/commands/goodbye.ts](https://github.com/ashutoshpith/sias/blob/v1.0.2/src/commands/goodbye.ts)_

## `sias hello [FILE]`

describe the command here

```
USAGE
  $ sias hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ sias hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/ashutoshpith/sias/blob/v1.0.2/src/commands/hello.ts)_

## `sias help [COMMAND]`

display help for sias

```
USAGE
  $ sias help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_

## `sias ip [IPVERSION]`

Get details of ip

```
USAGE
  $ sias ip [IPVERSION]

ARGUMENTS
  IPVERSION  (v4|v6|v4sync|v6sync) [default: v4] ip version specify to get details

OPTIONS
  -h, --help  desc -> for help
```

_See code: [src/commands/ip.ts](https://github.com/ashutoshpith/sias/blob/v1.0.2/src/commands/ip.ts)_

## `sias kaomoji SEARCH`

emoji play

```
USAGE
  $ sias kaomoji SEARCH

ARGUMENTS
  SEARCH  [default: happy] kaomoji to search

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/kaomoji.ts](https://github.com/ashutoshpith/sias/blob/v1.0.2/src/commands/kaomoji.ts)_

## `sias localhost`

```
USAGE
  $ sias localhost

OPTIONS
  -a, --app=app    desc -> enter browser name in which to open
                   ex -> -a=firefox || -a=chrome

  -h, --help       desc -> for help

  -p, --port=port  desc -> enter port number to open
```

_See code: [src/commands/localhost.ts](https://github.com/ashutoshpith/sias/blob/v1.0.2/src/commands/localhost.ts)_

## `sias mongodb:check`

```
USAGE
  $ sias mongodb:check
```

_See code: [src/commands/mongodb/check.ts](https://github.com/ashutoshpith/sias/blob/v1.0.2/src/commands/mongodb/check.ts)_

## `sias mysql:check`

```
USAGE
  $ sias mysql:check

OPTIONS
  -d, --db=db        [default: crm]
  -h, --host=host    [default: localhost]
  -p, --pass=pass    [default: zudo]
  -q, --help         show CLI help
  -t, --table=table
  -u, --user=user    [default: zudo]
```

_See code: [src/commands/mysql/check.ts](https://github.com/ashutoshpith/sias/blob/v1.0.2/src/commands/mysql/check.ts)_

## `sias os:info`

```
USAGE
  $ sias os:info
```

_See code: [src/commands/os/info.ts](https://github.com/ashutoshpith/sias/blob/v1.0.2/src/commands/os/info.ts)_

## `sias ssh:rsa`

```
USAGE
  $ sias ssh:rsa

OPTIONS
  -e, --emai=emai  [default: ashutoshpith@gmail.com]
  -h, --help       show CLI help
```

_See code: [src/commands/ssh/rsa.ts](https://github.com/ashutoshpith/sias/blob/v1.0.2/src/commands/ssh/rsa.ts)_

## `sias startServer`

```
USAGE
  $ sias startServer
```

_See code: [src/commands/startServer.ts](https://github.com/ashutoshpith/sias/blob/v1.0.2/src/commands/startServer.ts)_

<!-- commandsstop -->

# sias
