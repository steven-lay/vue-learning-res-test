<script setup>
import { inject } from "vue";

defineProps({
	item: {
		required: true,
		type: Object,
	},
});

const deleteItem = inject("deleteItem");
</script>

<template>
	<div class="my-6">
		<div class="flex place-content-between mb-1">
			<h2 class="font-semibold text-xl">{{ item.title }}</h2>
			<span
				class="text-purple-900 font-semibold text-sm cursor-pointer"
				@click="deleteItem(item.id)"
				>Delete
			</span>
		</div>
		<p>{{ item.description }}</p>
		<a
			class="cursor-pointer font-semibold text-purple-600"
			:href="item.link"
		>
			View resource
		</a>
	</div>
</template>