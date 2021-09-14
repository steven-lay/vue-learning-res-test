<script setup>
defineEmits(["dismiss-modal"]);
</script>

<template>
	<teleport to="body">
		<div class="background"></div>
		<div class="modal">
			<div class="modal-content">
				<h1 class="text-purple-700 text-2xl font-semibold mb-1">
					Bad entry
				</h1>
				<p class="mb-5">
					Please verify that you filled in all the inputs.
				</p>
				<button
					type="button"
					class="text-white rounded bg-purple-900 py-1.5 px-3"
					@click="$emit('dismiss-modal')"
				>
					Ok!
				</button>
			</div>
		</div>
	</teleport>
</template>


<style scoped>
.background {
	position: fixed;
	background-color: black;
	opacity: 0.7;
	margin: 0;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 2;
}

.modal {
	position: fixed;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	z-index: 3;
	background-color: white;
	min-height: 10rem;
	min-width: 25rem;
	border-radius: 6px;
}

.modal-content {
	margin: 1rem 2rem;
}
</style>