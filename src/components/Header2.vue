<script>
export default {
    data() {
        return {
            baseConfig: {
                appTitle: 'Vue Dashboard'
            },
            menuLinks: [
                { title: 'Dashboard', link: '/' },
                { title: 'About', link: '/about' }
            ]
        };
    }
};
</script>

<template>
    <div class="drawer drawer-start">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<!-- Navbar -->
		<div class="navbar w-full border border-t-0 border-l-0 border-r-0 border-b-aebi-red bg-gray-800 text-white">
			<div class="mx-2 flex-1 px-2 text-2xl font-bold">
				<h1>{{baseConfig.appTitle}}</h1>
			</div>
			<div class="flex-none lg:hidden">
				<label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block h-6 w-6 stroke-current"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						></path></svg
					>
				</label>
			</div>
			<div class="hidden flex-none lg:block">
				<ul class="menu menu-horizontal">
					<!-- Navbar menu content here -->
                    <li v-for="menu in menuLinks" :key="menu.link">
                        <a :href="menu.link">{{menu.title}}</a>
                    </li>
				</ul>
			</div>
			<div class="flex-none">
				<a href="/profile">Profile</a>
			</div>
		</div>
		<!-- Page content here -->
		<slot />
	</div>
	<div class="drawer-side">
		<label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="menu min-h-full w-80 bg-gray-600">
			<div class="bg-gray-600 p-3 text-white">
				<span class="m-1 text-xl">{{baseConfig.appTitle}}</span>
			</div>
			<!-- Sidebar content here -->
			<div v-for="menu in menuLinks" :key="menu.link">
				<li class="m-2 text-lg">
					<a :href="menu.link">{{menu.title}}</a>
				</li>
            </div>
		</ul>
	</div>
</div>
</template>