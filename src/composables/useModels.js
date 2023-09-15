import { onMounted, ref, watch } from 'vue';
import { fetchProducts, fetchProductsById } from '../apis/models';

export default function useModels(getIdRef) {
	const getProducts = ref([]);
	const getProductsById = ref([]);

	const setProducts = async () => {
		getProducts.value = await fetchProducts();
	};

	const setProductsById = async () => {
		getProductsById.value = await fetchProductsById(getIdRef.value);
	};

	onMounted(() => {
		setProducts();
		setProductsById();
	});

	watch(getIdRef, setProductsById);

	return {
		getProducts,
		setProducts,
		getProductsById,
		setProductsById,
	};
}
