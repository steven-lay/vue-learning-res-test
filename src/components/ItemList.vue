<script setup>
import CardWrapper from "./CardWrapper.vue";
import Item from "./Item.vue";

defineProps({
	items: {
		type: Array,
		required: true,
	},
});
</script>

<template>
	<CardWrapper>
		<div class="px-10 py-6">
			<template v-for="(item, index) in items" :key="item.id">
				<hr v-if="index !== 0" />
				<Item :item="item" />
			</template>
			<h3 v-if="!items.length" class="text-lg font-semibold">
				No items here!
			</h3>
		</div>
	</CardWrapper>
</template>