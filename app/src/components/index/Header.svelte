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

<nav>
	<ul>
		<li>ロゴ</li>
		<li>幸せレポート</li>
		<li>コラム</li>
		<li>料金</li>
		<li>ニュース</li>
		<li>
			<button>Facebookでログイン</button>
		</li>
		<li>
			<button on:click={ getLoginURLByGoogle }>Googleでログイン</button>
		</li>
		<li>
			<button><a href="/login">ログイン</a></button>
		</li>
	</ul>
</nav>
