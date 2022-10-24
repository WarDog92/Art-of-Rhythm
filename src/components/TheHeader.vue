<template>
	<div class="header-container">
		<div class="header-container__left-header">
			<div class="header-container__logo"></div>
		</div>
		<div class="header-container__right-header">
			<ul class="header-container__menu">
				<li>
					<a href="#songs">SONGS</a>
				</li>
				<li>
					<a href="#screenshots">SCREENSHOTS</a>
				</li>

			</ul>
		</div>

	</div>
</template>

<script lang="ts" src="./TheHeader.ts"></script>


<style scoped lang="scss">

.header-container {
	height: 80px;
	width: 100%;
	position: absolute;
	z-index: 999;

	&__logo {
		background: url("../assets/logo.svg") center no-repeat;
		background-size: contain;
		width: 250px;
		height: 60px;
		margin: 0 20px;
	}

	&__menu {
		margin: 0;
		padding: 0 20px;
		list-style: none;
		display: inline-block;
		font-weight: 700;

		li {
			display: inline-block;
			padding: 40px 39px 0;
			height: 60px;

			a {
				position: relative;
				display: inline-block;
				font-weight: 700;
				text-decoration: none;
				color: inherit;
				cursor: pointer;

				&:after {
					position: absolute;
					bottom: -4px;
					left: 0;
					content: "";
					width: 100%;
					height: 2px;
					background: #333;
					transform: scaleX(0);
					transform-origin: right top;
					transition: transform .3s;
				}

				&:hover {
					&:after {
						transform-origin: left top;
						transform: scale(1);
					}
				}
			}
		}
	}

	&__left-header {
		display: flex;
		align-items: center;
		float: left;
		width: fit-content;
		background-color: #fff;
		position: relative;
		height: 100%;

		&:before {
			width: 0;
			height: 0;
			border-top: 41px solid transparent;
			border-bottom: 41px solid transparent;
			content: "";
			border-left: 50px solid #fff;
			position: absolute;
			right: -49px;
		}
	}

	&__right-header {
		display: flex;
		align-items: center;
		float: right;
		background-color: #fff;
		position: relative;
		height: 100%;

		&:before {
			width: 0;
			height: 0;
			border-top: 41px solid transparent;
			border-bottom: 41px solid transparent;
			content: "";
			border-right: 50px solid #fff;
			position: absolute;
			left: -49px;
		}
	}
}

</style>
