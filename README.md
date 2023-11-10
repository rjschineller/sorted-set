# sorted-set

A simple typescript library to implement a redis-like [sorted set](https://redis.com/glossary/redis-sorted-sets/) data structure.

## Install
```sh
$ npm install sortedset
```

## Usage

This closely follows [redis's sorted set](https://redis.io/commands/?alpha=z&group=sorted-set) command API

```js
import * from sortedset;

const set = new SortedSet();
```