<template>
		<div class="toDire">
			<router-link :to="toLink">{{linkName}}</router-link>
		</div>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},props:['toLink','linkName']
	}
</script>

<style scoped>
	.toDire{
		position: absolute;
		top: 15%;
		right: 30%;
	}
</style>
