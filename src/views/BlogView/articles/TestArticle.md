## 1. Who talks to who?

A lot of relationships exist between elements of a Single Page Application (SPA). Here we'll document the relationships and their responsibilities in our application.

### Parent-Child Relationship

This is a relationship between two components where the Child component is a direct descendant of the Parent Component.

```
<Parent>
	<Child />
</Parent>
```

#### How do they communicate?

This relationship communicates via props and emitters.

- _Props_ are immutable pieces of data delivered to a Child component. Their purpose is to trigger a rerender when the parent component updates their values.
- _Emitters_ are events triggered from the Child component. The emitter can just emit the event or it can emit data with the event. Typically, you will use just the name when triggering some side effect from User Interaction.

### Grandparent-Child Relationship

This is a relationship where two components are separated by any number of parent components.

```
<Grandparent>
	<Parent>
		<Child />
	</Parent>
</Grandparent>
```

#### How do they communicate?

1. **Prop Drilling:** This is generally advised against but there are some cases where it makes sense. For example, in a Form you may have a Page level component holding all stateful data for that page, it passes a piece of state to a Form component, and then that Form component passes a piece of the form data as a prop to the Form Input component. Example:
