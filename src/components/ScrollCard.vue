<template>
	<div class="card-background">
		<div class="card-box">
				<img src="../assets/event/event1.png">
		</div>
		<div class="card-box">
				<img src="../assets/event/event2.png">
		</div>
		<div class="card-box">
				<img src="../assets/event/event3.png">
		</div>
	</div>
</template>

<script>
export default {
  name: 'ScrollCard',
  data() {
    return {
      
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeMount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {      
			const scrollHeight = window.pageYOffset;
			console.log(scrollHeight);

			const yEvent1 = -1/544 * scrollHeight + 3650/544;
			document.querySelectorAll('.card-box')[0].style.opacity= yEvent1;

			const yEvent2 = -1/638 * scrollHeight + 4288/638;
			document.querySelectorAll('.card-box')[1].style.opacity= yEvent2;
    },
  }
}
</script>

<style>
	.card-background {
		height: 3000px;
	}
	.card-box {
		position: sticky;
		top: 200px;
		margin-top: 200px;
	}
	.card-box img {
		display: block;
		margin: auto;
		max-width: 80%;
	}
</style>