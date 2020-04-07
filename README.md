# sias

sias commands

[![cli](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/pith.svg)](https://npmjs.org/package/pith)
[![Downloads/week](https://img.shields.io/npm/dw/pith.svg)](https://npmjs.org/package/pith)
[![License](https://img.shields.io/npm/l/pith.svg)](https://github.com/ashutoshpith/pith/blob/master/package.json)

<!-- toc -->
* [sias](#sias)
* [Usage](#usage)
* [Commands](#commands)
* [pith](#pith)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g sias
$ pith COMMAND
running command...
$ pith (-v|--version|version)
sias/1.0.2 linux-x64 node-v12.16.1
$ pith --help [COMMAND]
USAGE
  $ pith COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`pith config:get`](#pith-configget)
* [`pith config:set`](#pith-configset)
* [`pith file:get`](#pith-fileget)
* [`pith file:set`](#pith-fileset)
* [`pith git:commit [INPUT]`](#pith-gitcommit-input)
* [`pith git:p`](#pith-gitp)
* [`pith git:pull [INPUT]`](#pith-gitpull-input)
* [`pith git:push`](#pith-gitpush)
* [`pith goodbye`](#pith-goodbye)
* [`pith hello [FILE]`](#pith-hello-file)
* [`pith help [COMMAND]`](#pith-help-command)
* [`pith ip [IPVERSION]`](#pith-ip-ipversion)
* [`pith kaomoji SEARCH`](#pith-kaomoji-search)
* [`pith localhost`](#pith-localhost)
* [`pith mongodb:check`](#pith-mongodbcheck)
* [`pith mysql:check`](#pith-mysqlcheck)
* [`pith os:info`](#pith-osinfo)
* [`pith ssh:rsa`](#pith-sshrsa)
* [`pith startServer`](#pith-startserver)

## `pith config:get`

```
USAGE
  $ pith config:get
```

_See code: [src/commands/config/get.ts](https://github.com/ashutoshpith/sias/blob/v1.0.2/src/commands/config/get.ts)_

## `pith config:set`

```
USAGE
  $ pith config:set
```

_See code: [src/commands/config/set.ts](https://github.com/ashutoshpith/sias/blob/v1.0.2/src/commands/config/set.ts)_

## `pith file:get`

description file read json/csv

```
USAGE
  $ pith file:get

OPTIONS
  -h, --help                 desc -> for help
  -i, --inputfile=inputfile  desc -> enter file name to read
  -n, --name=name            desc -> enter name of file
```

_See code: [src/commands/file/get.ts](https://github.com/ashutoshpith/sias/blob/v1.0.2/src/commands/file/get.ts)_

## `pith file:set`

```
USAGE
  $ pith file:set
```

_See code: [src/commands/file/set.ts](https://github.com/ashutoshpith/sias/blob/v1.0.2/src/commands/file/set.ts)_

## `pith git:commit [INPUT]`

```
USAGE
  $ pith git:commit [INPUT]

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/git/commit.ts](https://github.com/ashutoshpith/sias/blob/v1.0.2/src/commands/git/commit.ts)_

## `pith git:p`

git push with promt commit message

```
USAGE
  $ pith git:p

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/git/p.ts](https://github.com/ashutoshpith/sias/blob/v1.0.2/src/commands/git/p.ts)_

## `pith git:pull [INPUT]`

```
USAGE
  $ pith git:pull [INPUT]

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/git/pull.ts](https://github.com/ashutoshpith/sias/blob/v1.0.2/src/commands/git/pull.ts)_

## `pith git:push`

```
USAGE
  $ pith git:push
```

_See code: [src/commands/git/push.ts](https://github.com/ashutoshpith/sias/blob/v1.0.2/src/commands/git/push.ts)_

## `pith goodbye`

```
USAGE
  $ pith goodbye
```

_See code: [src/commands/goodbye.ts](https://github.com/ashutoshpith/sias/blob/v1.0.2/src/commands/goodbye.ts)_

## `pith hello [FILE]`

describe the command here

```
USAGE
  $ pith hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ pith hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/ashutoshpith/sias/blob/v1.0.2/src/commands/hello.ts)_

## `pith help [COMMAND]`

display help for pith

```
USAGE
  $ pith help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_

## `pith ip [IPVERSION]`

Get details of ip

```
USAGE
  $ pith ip [IPVERSION]

ARGUMENTS
  IPVERSION  (v4|v6|v4sync|v6sync) [default: v4] ip version specify to get details

OPTIONS
  -h, --help  desc -> for help
```

_See code: [src/commands/ip.ts](https://github.com/ashutoshpith/sias/blob/v1.0.2/src/commands/ip.ts)_

## `pith kaomoji SEARCH`

emoji play

```
USAGE
  $ pith kaomoji SEARCH

ARGUMENTS
  SEARCH  [default: happy] kaomoji to search

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/kaomoji.ts](https://github.com/ashutoshpith/sias/blob/v1.0.2/src/commands/kaomoji.ts)_

## `pith localhost`

```
USAGE
  $ pith localhost

OPTIONS
  -a, --app=app    desc -> enter browser name in which to open
                   ex -> -a=firefox || -a=chrome

  -h, --help       desc -> for help

  -p, --port=port  desc -> enter port number to open
```

_See code: [src/commands/localhost.ts](https://github.com/ashutoshpith/sias/blob/v1.0.2/src/commands/localhost.ts)_

## `pith mongodb:check`

```
USAGE
  $ pith mongodb:check
```

_See code: [src/commands/mongodb/check.ts](https://github.com/ashutoshpith/sias/blob/v1.0.2/src/commands/mongodb/check.ts)_

## `pith mysql:check`

```
USAGE
  $ pith mysql:check

OPTIONS
  -d, --db=db        [default: crm]
  -h, --host=host    [default: localhost]
  -p, --pass=pass    [default: zudo]
  -q, --help         show CLI help
  -t, --table=table
  -u, --user=user    [default: zudo]
```

_See code: [src/commands/mysql/check.ts](https://github.com/ashutoshpith/sias/blob/v1.0.2/src/commands/mysql/check.ts)_

## `pith os:info`

```
USAGE
  $ pith os:info
```

_See code: [src/commands/os/info.ts](https://github.com/ashutoshpith/sias/blob/v1.0.2/src/commands/os/info.ts)_

## `pith ssh:rsa`

```
USAGE
  $ pith ssh:rsa

OPTIONS
  -e, --emai=emai  [default: ashutoshpith@gmail.com]
  -h, --help       show CLI help
```

_See code: [src/commands/ssh/rsa.ts](https://github.com/ashutoshpith/sias/blob/v1.0.2/src/commands/ssh/rsa.ts)_

## `pith startServer`

```
USAGE
  $ pith startServer
```

_See code: [src/commands/startServer.ts](https://github.com/ashutoshpith/sias/blob/v1.0.2/src/commands/startServer.ts)_
<!-- commandsstop -->

# pith
