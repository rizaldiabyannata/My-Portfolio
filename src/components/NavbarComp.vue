<template>
    <div class="navbar bg-base-100">
        <div class="navbar-start">
            <SwitchDarkComp class="scale-[70%]"></SwitchDarkComp>
        </div>
        <div class="navbar-center">
            <a class="btn btn-ghost text-xl">My-Portfolio</a>
        </div>
        <div class="navbar-end">
            <ul class="hidden lg:menu menu-vertical lg:menu-horizontal rounded-box">
                <li class="text-lg"><a>About Me</a></li>
                <li class="text-lg"><a>Skills</a></li>
                <li class="text-lg"><a>Projects</a></li>
            </ul>
            <div class="dropdown dropdown-end lg:hidden">
                <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                </div>
                <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Homepage</a></li>
                    <li><a>Portfolio</a></li>
                    <li><a>About</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import SwitchDarkComp from './SwitchDarkComp.vue';

export default {
    components: {
        SwitchDarkComp,
    }
}

</script>