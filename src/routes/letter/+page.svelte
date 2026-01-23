<script lang="ts">
	import { base, resolve } from '$app/paths'
</script>

<svelte:head>
	<title>A Letter For You 💌</title>
</svelte:head>

<div class="page-container letter-page">
	<article class="letter-card">
		<header class="letter-header">
			<span class="envelope">💌</span>
			<h1>A Letter For You</h1>
		</header>

		<section class="letter-content">
			<p class="greeting">My Dearest, Georgette</p>

			<p class="letter-body">
				<!-- Your letter content goes here -->
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is where your
				heartfelt message will go...
			</p>

			<p class="letter-body">
				<!-- Add more paragraphs as needed -->
				Continue your message here...
			</p>

			<p class="closing">
				Forever yours,<br />
				<span class="signature">— Adriel</span>
			</p>
		</section>

		<!-- Photo gallery section - add your images to static/images/ -->
		<section class="photo-gallery">
			<h2>Our Memories 📸</h2>
			<div class="gallery-grid">
				<!-- TODO: Replace with actual photos -->
				<div class="photo-placeholder">
					<span>Photo 1</span>
					<!-- <img src="{base}/images/photo1.jpg" alt="Memory 1" /> -->
				</div>
				<div class="photo-placeholder">
					<span>Photo 2</span>
					<!-- <img src="{base}/images/photo2.jpg" alt="Memory 2" /> -->
				</div>
				<div class="photo-placeholder">
					<span>Photo 3</span>
					<!-- <img src="{base}/images/photo3.jpg" alt="Memory 3" /> -->
				</div>
				<div class="photo-placeholder">
					<span>Photo 4</span>
					<!-- <img src="{base}/images/photo4.jpg" alt="Memory 4" /> -->
				</div>
			</div>
		</section>

		<footer class="letter-footer">
			<a href={resolve('/')} class="btn btn-primary">← Back to Start</a>
		</footer>
	</article>
</div>

<style>
	.letter-page {
		padding: 1rem;
	}

	.letter-card {
		background: var(--color-white);
		padding: 2rem 1.5rem;
		border-radius: var(--border-radius);
		box-shadow: var(--shadow);
		max-width: 600px;
		width: 100%;
	}

	.letter-header {
		text-align: center;
		margin-bottom: 2rem;
	}

	.envelope {
		font-size: 3rem;
		display: block;
		margin-bottom: 0.5rem;
	}

	.letter-content {
		text-align: left;
		padding: 1.5rem;
		background: linear-gradient(to bottom, #fffbf0 0%, #fff5f8 100%);
		border-radius: 8px;
		border-left: 4px solid var(--color-primary);
		margin-bottom: 2rem;
	}

	.greeting {
		font-style: italic;
		color: var(--color-primary-dark);
		font-size: 1.2rem;
		margin-bottom: 1rem;
	}

	.letter-body {
		margin-bottom: 1rem;
		line-height: 1.8;
	}

	.closing {
		margin-top: 1.5rem;
		text-align: right;
	}

	.signature {
		font-style: italic;
		color: var(--color-primary-dark);
		font-weight: 600;
	}

	/* Photo Gallery */
	.photo-gallery {
		margin: 2rem 0;
	}

	.photo-gallery h2 {
		font-size: 1.25rem;
		color: var(--color-primary-dark);
		margin-bottom: 1rem;
		text-align: center;
	}

	.gallery-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 0.75rem;
	}

	.photo-placeholder {
		aspect-ratio: 1;
		background: linear-gradient(
			135deg,
			var(--color-secondary) 0%,
			var(--color-background) 100%
		);
		border-radius: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--color-primary-dark);
		font-size: 0.875rem;
		border: 2px dashed var(--color-primary);
	}

	.photo-placeholder img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 8px;
	}

	.letter-footer {
		text-align: center;
		margin-top: 1.5rem;
	}

	@media (min-width: 640px) {
		.letter-page {
			padding: 2rem;
		}

		.letter-card {
			padding: 3rem;
		}

		.gallery-grid {
			grid-template-columns: repeat(4, 1fr);
			gap: 1rem;
		}
	}
</style>
