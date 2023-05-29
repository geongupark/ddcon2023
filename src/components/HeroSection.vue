<template>
	<section id="hero-section" class="hero">
		<!-- video -->
		<video class="hero-video" :src="require('../../public/it.mp4')" autoplay loop muted></video>
		<!-- universe -->
		<kinesis-container class="perspective-container" event="scroll">
			<div class="orbit-container">
				<kinesis-element
					class="sun" 
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
					<img class="earth" :src="earth" />
					<kinesis-element
						class="moon"
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
	</section>
</template>
<script>
export default {
  name: 'ConferenceWebsite',
  data() {
    return {
			earth:require('../assets/earth.png'),
			sun:require('../assets/sun.png'),
			moon:require('../assets/moon.png'),
			mars:require('../assets/mars.png'),
      sunOrigin: 'center',
			earthmoonOrigin: '-40px',
			moonOrigin:'-30px',
			marsOrigin:'-175px'
    };
  },
}
</script>
<style>
.hero-video {
	width: 100%;
}

/* universe */
.perspective-container{
	padding: 400px 0;
}
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
.sun {
	width: 80px;
	height: 80px;
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
.earth {
	width: 30px;
	height: 30px;
	margin-left: 30px;
}
.moon {
	width: 15px;
	height: 15px;
	margin-left: 20px;
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