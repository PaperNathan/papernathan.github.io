<template>
  <div class="Article">
    <h2>1. Who talks to who?</h2>

    A lot of relationships exist between elements of a Single Page Application
    (SPA). Here we'll document the relationships and their responsibilities in
    our application.

    <h3>Parent-Child Relationship</h3>

    This is a relationship between two components where the Child component is a
    direct descendant of the Parent Component.

    <pre>
<code>

</code>
</pre>

    <h4>How do they communicate?</h4>

    This relationship communicates via props and emitters.

    <ul>
      <li>
        <em>Props</em> are immutable pieces of data delivered to a Child
        component. Their purpose is to trigger a rerender when the parent
        component updates their values.
      </li>
      <li>
        <em>Emitters</em> are events triggered from the Child component. The
        emitter can just emit the event or it can emit data with the event.
        Typically, you will use just the name when triggering some side effect
        from User Interaction.
      </li>
    </ul>

    <h3>Grandparent-Child Relationship</h3>

    This is a relationship where two components are separated by any number of
    parent components.

    <pre>
<code>

</code>
</pre>

    <h4>How do they communicate?</h4>

    <ol>
      <li><strong>Prop</strong></li>
    </ol>

    <pre>
<code>

</code>
</pre>

    <ol>
      <li>undefined</li>
    </ol>
  </div>
</template>
