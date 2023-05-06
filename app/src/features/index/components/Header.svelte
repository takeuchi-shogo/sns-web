<script>
	import OAuth from '/src/database/OAuthRepository.js'

	const oauth = new OAuth

	function getLoginURLByGoogle() {
		oauth.getLoginURLByGoogle((error, message, data) => {
			if (error) {
				console.log(message)
				return
			}
			location.href = data.loginUrl
		})
	}
</script>

<style>

</style>

<nav class="header-nav">
	<ul>
		<li>ロゴ</li>
		<li>幸せレポート</li>
		<li>コラム</li>
		<li>料金</li>
		<li>ニュース</li>
	</ul>
	<div class="auth-button-group">
		<!-- <div class="auth-button-group-item">
			<button class="button">Facebookでログイン</button>
		</div>
		<div class="auth-button-group-item">
			<button class="button" on:click={ getLoginURLByGoogle }>Googleでログイン</button>
		</div> -->
		<div class="auth-button-group-item">
			<a class="auth-link" href="/login">ログイン</a>
		</div>
		<div>
			<a class="button" href="/signup">サインアップ</a>
		</div>
	</div>
</nav>
