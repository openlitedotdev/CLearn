<template>
  <div>
    <header class="position-sticky top-0 z-36">
      <TheNav />
    </header>
    <main>
      <slot />
    </main>
    <footer>
      footer
    </footer>
  </div>
</template>

<style>
.dark {
  background-color: #161618;
  color: #fff;
}
</style>
