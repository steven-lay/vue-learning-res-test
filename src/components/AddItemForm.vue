<script setup>
import CardWrapper from "./CardWrapper.vue";
import { ref } from "vue";

const emit = defineEmits(["add-item", "bad-input"]);

let successTxt = ref(false);

function generateId() {
	return Math.random().toString(36).slice(2);
}

function showSuccess() {
	successTxt.value = true;
	setTimeout(() => {
		successTxt.value = false;
	}, 2500);
}

function onSubmit(event) {
	let enteredData = Object.fromEntries(new FormData(event.target));

	// Check if all fields were filled
	const valid = Object.values(enteredData).every((x) => x !== "");

	if (valid) {
		enteredData.id = generateId();
		emit("add-item", enteredData);
		showSuccess();
		event.target.reset();
	} else {
		emit("bad-input");
	}
}
</script>

<template>
	<CardWrapper>
		<form class="p-10" @submit.prevent="onSubmit">
			<div class="mb-4">
				<label class="form-label" for="input-title">Title</label>
				<input
					id="input-title"
					name="title"
					class="form-input"
					type="text"
				/>
			</div>
			<div class="mb-2">
				<label class="form-label" for="input-description">
					Description
				</label>
				<textarea
					id="input-description"
					name="description"
					class="form-input resize-none"
					rows="3"
				/>
			</div>
			<div class="mb-4">
				<label class="form-label" for="input-link">Link</label>
				<input
					id="input-link"
					name="link"
					class="form-input"
					type="text"
				/>
			</div>
			<div class="pt-2 flex">
				<button class="form-button" type="submit">Add</button>
				<div v-show="successTxt" class="ml-6 self-center">
					<p class="text-purple-600">Added resource successfully!</p>
				</div>
			</div>
		</form>
	</CardWrapper>
</template>

<style scoped>
.form-label {
	@apply block mb-1 text-gray-700 font-bold select-none;
}

.form-input {
	@apply border border-gray-400 rounded p-1 w-full;
}

.form-button {
	@apply rounded bg-purple-900 py-2 px-6 text-white select-none;
}
</style>