<template>
	<TheHeader></TheHeader>
	<div class="page-content">
		<div class="background-home">
			<div class="background-home__logo"></div>
		</div>
		<div class="app-store">
			<div class="app-store__buttons-container">
				<div class="app-store__buttons app-store__buttons_app-store"></div>
				<div class="app-store__buttons app-store__buttons_google-play"></div>
			</div>
		</div>
		<div id="songs" class="songs">
			<div class="container">
				<div class="songs__header">
					<div class="songs__header-image">
						Songs
					</div>
				</div>
				<div class="songs__slider slider flicking-viewport">
					<div class="flicking-camera">
						<div
							v-for="(slide, index) in songsSliderData"
							class="slider__slide"
							:key="index"
						>
							<img :src="slide.url" class="songs__image" style="pointer-events: none">
							<div class="songs__title">
								{{ slide.title }}
							</div>
							<div class="songs__info">
								<div class="songs__artist">
									<span>Artist</span>
									{{ slide.artist }}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="screenshots" class="screenshots">
			<div class="container">
				<div class="screenshots__header">
					<div class="screenshots__header-image">
						ScreenShots
					</div>
				</div>
				<div class="screenshots__slider slider flicking-viewport">
					<div class="flicking-camera">
						<div
							v-for="(slide, index) in screenshotsSliderData"
							class="slider__slide"
							:key="index"
						>
							<img :src="slide.url" class="screenshots__image" style="pointer-events: none">
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<TheFooter></TheFooter>
</template>

<script lang="ts" src="./App.ts">
</script>

<style lang="scss">
body {
	background: black;
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: Open Sans,sans-serif;
}

.container {
	max-width: 1100px;
	margin: 0 auto;
}

.flicking-camera {
	width: 100%;
	height: 100%;
	display: flex;
	position: relative;
	padding: 0 20px;
	flex-direction: row;
	z-index: 1;
}

.background-home {
	display: flex;
	justify-content: center;
	align-items: center;
	background: url("./assets/background-logo.svg") center no-repeat;
	background-size: cover;
	width: 100%;
	height: 50vw;

	&__logo {
		background: url("./assets/background-logo.png") center no-repeat;
		background-size: contain;
		width: 600px;
		height: 150px;
		margin-top: 100px;
	}
}

.app-store {
	display: flex;
	background: url("./assets/background-black.jpg") center no-repeat;
	background-size: cover;
	height: 150px;

	&__buttons-container {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	&__buttons {

		&:last-child {
			margin-right: 0;
		}

		&_app-store {
			background: url("./assets/AppStore.svg") center no-repeat;
			background-size: cover;
			width: 132px;
			height: 44px;
			
		}

		&_google-play {
			background: url("./assets/GooglePlay.svg") center no-repeat;
			background-size: cover;
			width: 170px;
			height: 66px;
		}
	}
}

.songs {
	padding: 50px 0;
	background: url("./assets/background-white.jpg") center no-repeat;
	background-size: cover;
	overflow: hidden;

	&__image {
		width: 190px;
		height: 230px;
	}

	&__title {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: -4px;
		background: #34333e;
		color: #fff;
		font-size: 1rem;
		font-weight: 700;
		height: 40px;
		max-width: 190px;
	}

	&__info {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 61px;
		background-color: #66676d;
		max-width: 190px;

		span {
			color: #c9c9c9;
			font-size: .75rem;
		}
	}

	&__artist {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 50%;
		color: #fff;
		font-weight: 700;
		padding: 0 6px;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}

	&__illustation {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 50%;
		color: #fff;
		font-weight: 700;
		padding: 0 6px;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}

	&__header {
		display: flex;
		justify-content: center;
	}

	&__header-image {
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
		font-size: 30px;
		background: url("./assets/ScreenShots.svg") center no-repeat;
		background-size: cover;
		width: 485px;
		height: 68px;
	}

	&__slider {
		padding: 40px 0 60px;

		.slider {
			&__slide {
				width: 500px;
				height: 330px;
				margin: 25px;
			}
		}
	}
}

.screenshots {
	padding: 50px 0;
	background: url("./assets/background-black.jpg") center no-repeat;
	background-size: cover;
	overflow: hidden;

	&__image {
		width: 500px;
		height: 300px;
	}

	&__header {
		display: flex;
		justify-content: center;
	}

	&__header-image {
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
		font-size: 30px;
		background: url("./assets/ScreenShots.svg") center no-repeat;
		background-size: cover;
		width: 485px;
		height: 68px;
	}

	&__slider {
		padding: 40px 0 60px;

		.slider {
			&__slide {
				width: 500px;
				height: 300px;
				margin: 25px;
			}
		}
	}
}
</style>
