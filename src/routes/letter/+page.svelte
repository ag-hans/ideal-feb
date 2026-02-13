<script lang="ts">
	import { resolve } from '$app/paths'
	import memory_1 from '$lib/assets/memory_1.jpg'
	import memory_2 from '$lib/assets/memory_2.jpg'
	import memory_3 from '$lib/assets/memory_3.jpg'
	import memory_4 from '$lib/assets/memory_4.jpg'
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
			<p class="greeting">My love, my future wife, Georgette</p>

			<p class="letter-body">
				I have never realize that I am capable of loving and taking care of
				another human being. I cannot stand being away from you for too long and
				I would do anything to be able to see your beautiful face every morning.
				I love you and it is timeless, I love you that I will remove ego and
				pride and change for you. I love you more than the difficult times ahead
				of us.
			</p>

			<p class="letter-body">
				I cannot imagine anyone in my life other than you. You're all that I ask
				and I wanted to last for a lifetime. Give me the chance to show you that
				I will be better and best version of myself for you. Love is built and 
				love is found. With you I found a love that sees me, chooses me, and stays.
				I will forever be yours and the one that will be waiting at you in the altar 💍 
			</p>

			<p class="closing">
				Forever yours,<br />
				<span class="signature">— Adriel, Future Husband</span>
			</p>
		</section>

		<!-- Photo gallery section - add your images to static/images/ -->
		<section class="photo-gallery">
			<h2>Our Memories 📸</h2>
			<div class="gallery-grid">
				<!-- TODO: Replace with actual photos -->
				<div class="photo-placeholder">
					<img src={memory_1} alt="Memory 1" />
				</div>
				<div class="photo-placeholder">
					<img src={memory_2} alt="Memory 2" />
				</div>
				<div class="photo-placeholder">
					<img src={memory_3} alt="Memory 3" />
				</div>
				<div class="photo-placeholder">
					<img src={memory_4} alt="Memory 4" />
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
