<script setup>
import CardWrapper from "./CardWrapper.vue";

defineEmits(["change-tab"]);
</script>

<template>
	<CardWrapper>
		<div class="m-4 grid grid-cols-2 gap-4">
			<button
				class="rounded py-2 bg-purple-600 text-white font-semibold"
				type="button"
				@click="$emit('change-tab', 'stored-resources')"
			>
				Stored resources
			</button>
			<button
				class="rounded py-2 bg-purple-600 text-white font-semibold"
				type="button"
				@click="$emit('change-tab', 'add-resources')"
			>
				Add resources
			</button>
		</div>
	</CardWrapper>
</template>