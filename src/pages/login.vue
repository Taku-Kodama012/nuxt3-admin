<template>
	<div class="loginFormWrap">
		<Card>
			<template v-slot:content>
				<h1>login</h1>
				<form action="">
					<input type="text" placeholder="email">
					<input type="text" placeholder="password">
				</form>
				<NuxtLink to="/">Login</NuxtLink>
			</template>
		</Card>
	</div>
</template>
<script lang="ts">
import Card from "../components/block/Card.vue"
export default {
	layout:'simple',
	components:{Card}
}
</script>
<style lang="sass" scoped>
.loginFormWrap
	position: absolute
	top: 50%
	left: 50%
	transform: translate(-50%,-50%)
</style>