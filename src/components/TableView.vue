<script setup>
	import { ref } from 'vue';
	import useModels from '../composables/useModels';

	const id = ref(1);

	const { getProductsById } = useModels(id);
</script>

<template>
	<div>
		<select v-model="id">
			<option value="1">Francisco Zapata</option>
			<option value="2">Ana Karyna Herrera</option>
		</select>
		<span style="margin-left: 10px">Select Buyer</span>
	</div>

	<table class="table">
		<thead>
			<tr class="tableHead">
				<th style="width: 10%">ID</th>
				<th style="width: 30%">Product</th>
				<th style="width: 15%">Category</th>
				<th style="width: 10%">Price</th>
				<th style="width: 10%">Sold</th>
				<th style="width: 15%">Release</th>
				<th style="width: 10%">User ID</th>
			</tr>
		</thead>
		<tbody>
			<tr
				v-for="{
					id,
					product,
					category,
					price,
					sold,
					released,
					userId,
				} in getProductsById"
				:key="id"
			>
				<td style="text-align: center">{{ id }}</td>
				<td>{{ product }}</td>
				<td style="padding-left: 20px">{{ category }}</td>
				<td style="text-align: right; padding-right: 20px">{{ price }}</td>
				<td style="text-align: right; padding-right: 30px">{{ sold }}</td>
				<td style="text-align: center">{{ released }}</td>
				<td style="text-align: center">{{ userId }}</td>
			</tr>
		</tbody>
	</table>
</template>
