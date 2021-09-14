<script setup>
import AddItemForm from "../components/AddItemForm.vue";
import AlertModal from "../components/AlertModal.vue";
import ItemList from "../components/ItemList.vue";
import Tabs from "../components/Tabs.vue";
import { ref, provide } from "vue";

let curTab = ref("stored-resources");
let showModal = ref(false);

let items = ref([
	{
		id: "official-guide",
		title: "Official Guide",
		description: "The official resource to learn Vue.",
		link: "https://vuejs.org/",
	},
	{
		id: "search-engine",
		title: "Search Engine",
		description: "A place where you can find the answer to many questions.",
		link: "https://www.google.com/",
	},
	{
		id: "visual-studio-code",
		title: "Visual Studio Code",
		description: "The IDE that was used to develop this application.",
		link: "https://code.visualstudio.com/",
	},
]);

provide("deleteItem", deleteItem);

function deleteItem(itemId) {
	items.value = items.value.filter((item) => item.id != itemId);
}

function addItem(newItem) {
	items.value.unshift(newItem);
}

function changeTab(tab) {
	curTab.value = tab;
}

function toggleModal(val) {
	showModal.value = val;
}
</script>

<template>
	<AlertModal v-if="showModal" @dismiss-modal="toggleModal(false)" />

	<div class="max-w-lg mx-auto my-12">
		<Tabs @change-tab="changeTab" />

		<KeepAlive>
			<AddItemForm
				v-if="curTab === 'add-resources'"
				@add-item="addItem"
				@bad-input="toggleModal(true)"
			/>
		</KeepAlive>

		<ItemList v-if="curTab === 'stored-resources'" :items="items" />
	</div>
</template>