<template>
    <div>
        <!-- Nav -->
        <Nav />
        <slot />
    </div>
</template>

<script>
import Nav from '../layout/Nav';
export default {
    components : {Nav},
    name: "Master",
};
</script>