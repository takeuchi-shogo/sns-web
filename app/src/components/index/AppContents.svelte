<script>
	let lists = []
</script>

<style>

</style>

<section class="app-contents">
	<div class="app-contents-wrap">
		<div class="contents-section">
			<div class="title">
				<h2>コラム</h2>
				<p>監修コンテンツ。パートナーが見つかる秘訣も大公開</p>
			</div>
			<section class="new-content">
				<a href="/">
					<div class="img"></div>
					<div class="text">
						<h3>テキスト</h3>
						<p></p>
						<div class="sub-info">
							<span class="time"></span>
							<span class="category"></span>
						</div>
					</div>
				</a>
			</section>
			{ #each lists as list}
				<section class="content">
					<a href="/">
						<div class="img"></div>
						<div class="text">
							<h3>テキスト</h3>
							<p></p>
							<div class="sub-info">
								<span class="time"></span>
								<span class="category"></span>
							</div>
						</div>
					</a>
				</section>
			{ /each }
		</div>
	</div>
	<div class="nav-container-center">
		<a href="/" class="nav-container-item">もっと読む</a>
	</div>
</section>