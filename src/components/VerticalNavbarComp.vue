<!-- VerticalNavbarComp.vue -->

<template>
    <div class="h-full w-32 flex justify-center items-center" @mouseover="handleHover(true)" @mouseout="handleHover(false)">
        <div class="h-96 bg-[#12F7D6] w-1 rounded-xl -translate-x-5">
        </div>
        <div class="h-[400px] w-20 flex bg-zinc-900 rounded-3xl border border-white px-3 py-2 flex-col space-y-5 justify-center items-center transition"
            :class="{ 'slide-in': isHovered, 'slide-out': !isHovered }">
            <div class="flex items-center space-y-1 flex-col cursor-pointer hover:scale-95">
                <img src="../assets/icon/icon-user.svg" alt="user-icon">
                <p class="text-center">About Me</p>
            </div>
            <div class="flex items-center space-y-1 flex-col cursor-pointer hover:scale-95">
                <img src="../assets/icon/icon-code.svg" alt="user-icon">
                <p>Skills</p>
            </div>
            <div class="flex items-center space-y-1 flex-col cursor-pointer hover:scale-95">
                <img src="../assets/icon/icon-monitor.svg" alt="user-icon">
                <p>Work</p>
            </div>
            <div class="flex items-center space-y-1 flex-col cursor-pointer hover:scale-95">
                <img src="../assets/icon/icon-edit.svg" alt="user-icon">
                <p>Blogs</p>
            </div>
            <div class="flex items-center space-y-1 flex-col cursor-pointer hover:scale-95">
                <img src="../assets/icon/icon-mail.svg" alt="user-icon">
                <p>Contact</p>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            isHovered: false,
        };
    },
    methods: {
        handleHover(value) {
            this.isHovered = value;
        },
    },
};
</script>
  
<style scoped>
/* Apply transition class for smooth slide-in/out effect */
.transition {
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

/* Apply slide-in and slide-out transformations */
.slide-in {
    transform: translateX(0);
    opacity: 1;
}

.slide-out {
    transform: translateX(-200%);
    opacity: 0;
    transition-delay: 1s;
    /* Add delay when transitioning out of hover */
}
</style>
  