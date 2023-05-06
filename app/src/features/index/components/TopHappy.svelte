<script>
	let lists = [
		{},
		{},
		{},
		{},
		{},
		{},
	]
</script>

<style>

</style>

<section class="top-happy">
	<div class="top-happy-inner">
		<div class="top-happy-headline">
			<h2 class="top-happy-title">
				このサービスは平均3ヶ月で<br>
				恋人ができています
			</h2>
		</div>
		<section class="top-happy-reports">
			<div class="top-happy-reports-item-container">
				{ #each lists as list }
					<section class="top-happy-reports-item">
						<!--ここにレポートを入れる-->
						<div class="top-happy-reports-item-image">
							<img src="img/sample-image.jpg" alt="">
						</div>
						<div class="top-happy-reports-item-title">
							ここにタイトルが入ります
						</div>
						<div class="top-happy-reports-item-content">
							ここに投稿者が入ります
						</div>
					</section>
				{ /each }
			</div>
		</section>
		<div class="nav-container-center">
			<a href="/">すべてのレポートを見る</a>
		</div>
	</div>
</section>
