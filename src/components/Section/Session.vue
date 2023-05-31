<template>
	<CustomCarousel class="mb-5" sessionItemPath="../../../public/test.json" direction="ltr"></CustomCarousel>
	<CustomCarousel class="mb-5" sessionItemPath="../../../public/test.json" direction="rtl"></CustomCarousel>
	<CustomGrid sessionItemPath="../../../public/test.json"></CustomGrid>

	<kinesis-container class="relative w-[200px] h-[200px] py-[400px] text-center	">
		<kinesis-element
						class="w-[120px] h-[120px]" 
						tag="img"
						:transformOrigin="sunOrigin"
						:strength="10"
						src="../../../public/vite.svg"
						type="depth">
		</kinesis-element>
	</kinesis-container>
</template>

<script>
import CustomCarousel from './session/CustomCarousel.vue'
import CustomGrid from './session/CustomGrid.vue'
export default {
	name: 'App',
	components: {
		CustomCarousel,
		CustomGrid
	},
}
</script>