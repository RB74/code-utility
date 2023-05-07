---
title: Undo the last commit
type: snippet
language: git
tags: [commit,branch]
cover: racoon
dateModified: 2021-04-13T21:10:59+03:00
---

Undoes the last commit without rewriting history.

- Use `git revert HEAD` to revert the last commit, creating a new commit with the inverse of the commit's changes.

```shell
git revert HEAD
```

```shell
git revert HEAD
# Reverts the last commit
```
