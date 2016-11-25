<template>
	<div class="dialogs">
		<div class="dialog" :class="{ 'dialog-active': show.showCode }" :style="{width:wid}">
			<div class="dialog-content">
				<slot name="header"></slot>
				<slot name="body"></slot>
				<slot name="footer"></slot>
			</div>
		</div>
		<div class="dialog-overlay" v-touch:tap="close"></div>
	</div>
</template>

<script>
    export default {
		props: {
			show : null,
			wid : {
				default : '10rem'
			}
		},
		methods: {
			close: function() {
				this.show.showCode = false;
				return false;
			}
		}
	}
</script>