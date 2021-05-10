<script>
    function loginform() {
        window.location.href = '/#/login'
    }
</script>

<ul class="navbar-nav ml-auto" id="nav">
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item" href="/">Action</a></li>
          <li><a class="dropdown-item" href="/">Another action</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="/">Something else here</a></li>
        </ul>
      </li>
    <li><a href="/" class="nav-link active">XXXXについて</a></li>
    <li><a href="/" class="nav-link">サポート</a></li>
    <form class="d-flex justify-content-md-end">
        <button on:click={loginform} class="btn btn-outline-success">ログイン</button>
    </form>
</ul>