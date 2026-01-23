<script lang="ts">
	import { base } from '$app/paths'
	import { onMount } from 'svelte'

	let isValentinesDay = false

	onMount(() => {
		// Check if today is February 14th
		const today = new Date()
		isValentinesDay = today.getMonth() === 1 && today.getDate() === 14
	})
</script>

<svelte:head>
	<title>Thank You! 💕</title>
</svelte:head>

<div class="page-container">
	<div class="thank-you-card">
		<div class="hearts-container">
			<span class="floating-heart" style="--delay: 0s">🩵</span>
			<span class="floating-heart" style="--delay: 0.5s">🤍</span>
			<span class="floating-heart" style="--delay: 1s">🩵</span>
		</div>

		<h1>Thank You!</h1>
		<p class="message">You just made me the happiest person in the world! 🥰</p>
		<p class="sub-message">I can't wait to spend Valentine's Day with you 🩵</p>

		<div class="action-group">
			<a href="{base}/" class="btn btn-primary">← Back</a>
			{#if isValentinesDay}
				<a href="{base}/letter/" class="btn btn-primary">Read My Letter →</a>
			{/if}
		</div>
	</div>
</div>

<style>
	.thank-you-card {
		background: var(--color-white);
		padding: 2.5rem 2rem;
		border-radius: var(--border-radius);
		box-shadow: var(--shadow);
		max-width: 600px;
		width: 100%;
		position: relative;
		overflow: hidden;
	}

	.hearts-container {
		display: flex;
		justify-content: center;
		gap: 1rem;
		margin-bottom: 1rem;
	}

	.floating-heart {
		font-size: 2.5rem;
		animation: float 3s ease-in-out infinite;
		animation-delay: var(--delay);
	}

	@keyframes float {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-15px);
		}
	}

	.message {
		font-size: 1.25rem;
		color: var(--color-primary-dark);
		font-weight: 500;
	}

	.sub-message {
		color: var(--color-primary-dark);
		opacity: 0.8;
	}

	.action-group {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-top: 2rem;
	}

	.action-group .btn {
		font-size: 1rem;
		padding: 0.875rem 1.5rem;
	}

	@media (min-width: 640px) {
		.action-group {
			flex-direction: row;
			justify-content: center;
		}

		.thank-you-card {
			padding: 3rem;
		}

		.floating-heart {
			font-size: 3rem;
		}
	}
</style>
