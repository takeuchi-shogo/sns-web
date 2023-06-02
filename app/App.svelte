
<script>

	import { parse, stringify } from 'qs'

	import { Router } from '@roxi/routify'
	import { routes } from '/.routify/routes'

	const queryHandler = { parse, stringify }
	
</script>

<Router {routes} config={ queryHandler } />
