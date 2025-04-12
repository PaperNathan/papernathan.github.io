---
title: Testing Stuff
description: Description of this stuff
image: squiggles.png
tags: tag1, tag2, tag3, tag4
date: August 13, 1989
---

## 1. Who talks to who?

A lot of relationships exist between elements of a Single Page Application (SPA). Here we'll document the relationships and their responsibilities in our application.

### Parent-Child Relationship

This is a relationship between two components where the Child component is a direct descendant of the Parent Component.

#### How do they communicate?

This relationship communicates via props and emitters.

- _Props_ are immutable pieces of data delivered to a Child component. Their purpose is to trigger a rerender when the parent component updates their values.
- _Emitters_ are events triggered from the Child component. The emitter can just emit the event or it can emit data with the event. Typically, you will use just the name when triggering some side effect from User Interaction.

### Grandparent-Child Relationship

This is a relationship where two components are separated by any number of parent components.

#### How do they communicate?
