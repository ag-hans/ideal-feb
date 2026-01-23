<script lang="ts">
	import { base } from '$app/paths'
	import { onMount } from 'svelte'

	let isValentinesDay = $state(false)

	onMount(() => {
		// Check if today is February 14th
		const today = new Date()
		isValentinesDay = today.getMonth() === 1 && today.getDate() === 14
	})
</script>

<svelte:head>
	<title>Will You Be My Valentine? 💕</title>
</svelte:head>

<div class="page-container">
	<div class="question-card">
		<span class="heart">💕</span>
		<h1>Will You Be My Valentine?</h1>
		<p>I have something special to ask you...</p>

		<div class="button-group">
			<a href="{base}/thank-you/" class="btn btn-primary">Yes 🩵</a>
			<a href="{base}/thank-you/" class="btn btn-primary">Yes only 🤍</a>
		</div>

		{#if isValentinesDay}
			<div class="secret-section">
				<a href="{base}/letter/" class="btn btn-secret">
					✨ Special Surprise ✨
				</a>
			</div>
		{/if}
	</div>
</div>

<style>
	.question-card {
		background: var(--color-white);
		padding: 2.5rem 2rem;
		border-radius: var(--border-radius);
		box-shadow: var(--shadow);
		max-width: 400px;
		width: 100%;
	}

	.question-card .heart {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	.button-group {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-top: 1.5rem;
	}

	.secret-section {
		margin-top: 2rem;
		padding-top: 1.5rem;
		border-top: 2px dashed var(--color-secondary);
	}

	@media (min-width: 640px) {
		.button-group {
			flex-direction: row;
			justify-content: center;
		}

		.question-card {
			padding: 3rem;
		}
	}
</style>
