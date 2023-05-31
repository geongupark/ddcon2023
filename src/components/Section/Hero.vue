<template>
	<section id="hero-section" class="hero">
		<!-- video -->
		<video class="w-full" src="../../../public/it.mp4" autoplay loop muted></video>
		<!-- universe -->
		<!-- <div class="fixed inset-0 overflow-auto"> -->
		<div>
			<kinesis-container class="perspective-container py-[400px]" event="scroll">
				<div class="orbit-container">
					<kinesis-element
						class="w-[120px] h-[120px]" 
						tag="img"
						:transformOrigin="sunOrigin"
						:strength="100"
						:src="sun"
						type="rotate"/>
					<kinesis-element
					class="earthmoon"
					:transformOrigin="earthmoonOrigin"
					:strength="800"
					type="rotate">
						<img class="w-10 h-10 ml-10" :src="earth" />
						<kinesis-element
							class="w-5 h-5 ml-5"
							tag="img"
							:src="moon"
							:transformOrigin="moonOrigin"
							:strength="1200"
							type="rotate"/>
					</kinesis-element>
					<kinesis-element
						class="mars"
						tag="img"
						:src="mars"
						:transformOrigin="marsOrigin"
						:strength="500"
						type="rotate"/>
				</div>
			</kinesis-container>
			<div class="credits">
				<a href="https://www.flaticon.com/free-icons/planet" title="planet icons">Planet icons created by Freepik - Flaticon</a>
				<a href="https://www.flaticon.com/free-icons/summer" title="summer icons">Summer icons created by Aranagraphics - Flaticon</a>
				<a href="https://www.flaticon.com/free-icons/global" title="global icons">Global icons created by Freepik - Flaticon</a>
				<a href="https://www.flaticon.com/free-icons/moon" title="moon icons">Moon icons created by Freepik - Flaticon</a>
			</div>
		</div>
	</section>
</template>
<script>
import earthImg from '../../assets/earth.png';
import sunImg from '../../assets/sun.png';
import moonImg from '../../assets/moon.png';
import marsImg from '../../assets/mars.png';

export default {
  name: 'Hero',
  data() {
    return {
			// earth:new URL(`../../assets/earth.png`, import.meta.url).href,
			// sun:new URL(`../../assets/sun.png`, import.meta.url).href,
			// moon:new URL(`../../assets/moon.png`, import.meta.url).href,
			// mars:new URL(`../../assets/mars.png`, import.meta.url).href,
			earth:earthImg,
			sun:sunImg,
			moon:moonImg,
			mars:marsImg,
      sunOrigin: 'center',
			earthmoonOrigin: '-100px',
			moonOrigin:'-40px',
			marsOrigin:'-250px',
			isFixed: false,
    };
  },
	mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      // Adjust the scroll position threshold and logic according to your needs
      this.isFixed = window.scrollY > 200; // Example: Fix when scrolled 200 pixels down
    },
  },
}
</script>
<style>
/* universe */
.orbit-container {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.sunearthmoon {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
	top: calc(20% + 30px);
    position: absolute;
}

.earthmoon {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    left: calc(50% + 40px);
    position: absolute;
}
.mars {
	width: 25px;
	height: 25px;
	margin-left: 30px;
	left: calc(50% + 135px);
	position: absolute;
}
.credits {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
	-webkit-box-align: end;
	-ms-flex-align: end;
	align-items: flex-end;
}
.credits a {
	color: #fff;
	text-decoration: none;
	font-size: 12px;
}

</style>