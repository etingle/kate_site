



<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled is-u2f-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-d0dea0e5376d5c42aabf467726e0cffb7034a0d94eb947b9328eb6c9c4fcbba3.css" integrity="sha256-0N6g5TdtXEKqv0Z3JuDP+3A0oNlOuUe5Mo62ycT8u6M=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github2-5f7255544b25f937224217b1c37ee5c139a0a00a3decd8020b9aabc550340903.css" integrity="sha256-X3JVVEsl+TciQhexw37lwTmgoAo97NgCC5qrxVA0CQM=" media="all" rel="stylesheet" />
    
    
    

    <link as="script" href="https://assets-cdn.github.com/assets/frameworks-9ee55ceaf87fc34dc86334249fef6cbece88e815478e0fbe81642d57ed0fff89.js" rel="preload" />
    <link as="script" href="https://assets-cdn.github.com/assets/github-8afeb971202f92778ffc73ddd92661c1977dc5e42a928ed35f8ec96e425a6e7a.js" rel="preload" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>bootstrap-photo-gallery/jquery.bsPhotoGallery.js at master · michaelsoriano/bootstrap-photo-gallery · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="https://avatars3.githubusercontent.com/u/5881081?v=3&amp;s=400" name="twitter:image:src" /><meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="michaelsoriano/bootstrap-photo-gallery" name="twitter:title" /><meta content="bootstrap-photo-gallery - A simple jQuery plugin that will create a Bootstrap based Photo Gallery for your images" name="twitter:description" />
      <meta content="https://avatars3.githubusercontent.com/u/5881081?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="michaelsoriano/bootstrap-photo-gallery" property="og:title" /><meta content="https://github.com/michaelsoriano/bootstrap-photo-gallery" property="og:url" /><meta content="bootstrap-photo-gallery - A simple jQuery plugin that will create a Bootstrap based Photo Gallery for your images" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    
    <meta name="pjax-timeout" content="1000">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="47E80FCF:1BA1:7584D67:56AE67BC" name="octolytics-dimension-request_id" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />



  <meta class="js-ga-set" name="dimension1" content="Logged Out">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

        <meta name="expected-hostname" content="github.com">

      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta content="6bb624bb146e5fd1e1c533d70dea8beb78fc4132" name="form-nonce" />

    <meta http-equiv="x-pjax-version" content="55b41dd856d04e698e17bd7fc2020079">

      
  <meta name="description" content="bootstrap-photo-gallery - A simple jQuery plugin that will create a Bootstrap based Photo Gallery for your images">
  <meta name="go-import" content="github.com/michaelsoriano/bootstrap-photo-gallery git https://github.com/michaelsoriano/bootstrap-photo-gallery.git">

  <meta content="5881081" name="octolytics-dimension-user_id" /><meta content="michaelsoriano" name="octolytics-dimension-user_login" /><meta content="31482240" name="octolytics-dimension-repository_id" /><meta content="michaelsoriano/bootstrap-photo-gallery" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="31482240" name="octolytics-dimension-repository_network_root_id" /><meta content="michaelsoriano/bootstrap-photo-gallery" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/michaelsoriano/bootstrap-photo-gallery/commits/master.atom" rel="alternate" title="Recent Commits to bootstrap-photo-gallery:master" type="application/atom+xml">


      <link rel="canonical" href="https://github.com/michaelsoriano/bootstrap-photo-gallery/blob/master/jquery.bsPhotoGallery.js" data-pjax-transient>
  </head>


  <body class="logged_out   env-production macintosh vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



      
      <div class="header header-logged-out" role="banner">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <span aria-hidden="true" class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions" role="navigation">
        <a class="btn btn-primary" href="/join?source=header-repo" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      <a class="btn" href="/login?return_to=%2Fmichaelsoriano%2Fbootstrap-photo-gallery%2Fblob%2Fmaster%2Fjquery.bsPhotoGallery.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
    </div>

    <div class="site-search repo-scope js-site-search" role="search">
      <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/michaelsoriano/bootstrap-photo-gallery/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/michaelsoriano/bootstrap-photo-gallery/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      aria-label="Search this repository"
      data-global-scope-placeholder="Search GitHub"
      data-repo-scope-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
    </div>

      <ul class="header-nav left" role="navigation">
          <li class="header-nav-item">
            <a class="header-nav-link" href="/explore" data-ga-click="(Logged out) Header, go to explore, text:explore">Explore</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/features" data-ga-click="(Logged out) Header, go to features, text:features">Features</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://enterprise.github.com/" data-ga-click="(Logged out) Header, go to enterprise, text:enterprise">Enterprise</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/pricing" data-ga-click="(Logged out) Header, go to pricing, text:pricing">Pricing</a>
          </li>
      </ul>

  </div>
</div>



    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope itemtype="http://schema.org/WebPage">
    <div id="js-repo-pjax-container" class="context-loader-container js-repo-nav-next" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
      <a href="/login?return_to=%2Fmichaelsoriano%2Fbootstrap-photo-gallery"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <span aria-hidden="true" class="octicon octicon-eye"></span>
    Watch
  </a>
  <a class="social-count" href="/michaelsoriano/bootstrap-photo-gallery/watchers">
    4
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fmichaelsoriano%2Fbootstrap-photo-gallery"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span aria-hidden="true" class="octicon octicon-star"></span>
    Star
  </a>

    <a class="social-count js-social-count" href="/michaelsoriano/bootstrap-photo-gallery/stargazers">
      35
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fmichaelsoriano%2Fbootstrap-photo-gallery"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span aria-hidden="true" class="octicon octicon-repo-forked"></span>
        Fork
      </a>

    <a href="/michaelsoriano/bootstrap-photo-gallery/network" class="social-count">
      23
    </a>
  </li>
</ul>

    <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public ">
  <span aria-hidden="true" class="octicon octicon-repo"></span>
  <span class="author"><a href="/michaelsoriano" class="url fn" itemprop="url" rel="author"><span itemprop="title">michaelsoriano</span></a></span><!--
--><span class="path-divider">/</span><!--
--><strong><a href="/michaelsoriano/bootstrap-photo-gallery" data-pjax="#js-repo-pjax-container">bootstrap-photo-gallery</a></strong>

  <span class="page-context-loader">
    <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
  </span>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <a href="/michaelsoriano/bootstrap-photo-gallery" aria-label="Code" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /michaelsoriano/bootstrap-photo-gallery">
    <span aria-hidden="true" class="octicon octicon-code"></span>
    Code
</a>
    <a href="/michaelsoriano/bootstrap-photo-gallery/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /michaelsoriano/bootstrap-photo-gallery/issues">
      <span aria-hidden="true" class="octicon octicon-issue-opened"></span>
      Issues
      <span class="counter">0</span>
</a>
  <a href="/michaelsoriano/bootstrap-photo-gallery/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /michaelsoriano/bootstrap-photo-gallery/pulls">
    <span aria-hidden="true" class="octicon octicon-git-pull-request"></span>
    Pull requests
    <span class="counter">0</span>
</a>

  <a href="/michaelsoriano/bootstrap-photo-gallery/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /michaelsoriano/bootstrap-photo-gallery/pulse">
    <span aria-hidden="true" class="octicon octicon-pulse"></span>
    Pulse
</a>
  <a href="/michaelsoriano/bootstrap-photo-gallery/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /michaelsoriano/bootstrap-photo-gallery/graphs">
    <span aria-hidden="true" class="octicon octicon-graph"></span>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/michaelsoriano/bootstrap-photo-gallery/blob/c004d34be91417b8ca5ce860cb75c51c89b849cd/jquery.bsPhotoGallery.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:cf9e58287109c175d9c514ee865ab946 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="master"
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span aria-label="Close" class="octicon octicon-x js-menu-close" role="button"></span>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/michaelsoriano/bootstrap-photo-gallery/blob/master/jquery.bsPhotoGallery.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/michaelsoriano/bootstrap-photo-gallery/blob/plugin/jquery.bsPhotoGallery.js"
               data-name="plugin"
               data-skip-pjax="true"
               rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="plugin">
                plugin
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group right">
    <a href="/michaelsoriano/bootstrap-photo-gallery/find/master"
          class="js-show-file-finder btn btn-sm"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/michaelsoriano/bootstrap-photo-gallery" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">bootstrap-photo-gallery</span></a></span></span><span class="separator">/</span><strong class="final-path">jquery.bsPhotoGallery.js</strong>
  </div>
</div>


  <div class="commit-tease">
      <span class="right">
        <a class="commit-tease-sha" href="/michaelsoriano/bootstrap-photo-gallery/commit/c004d34be91417b8ca5ce860cb75c51c89b849cd" data-pjax>
          c004d34
        </a>
        <time datetime="2016-01-20T03:39:30Z" is="relative-time">Jan 19, 2016</time>
      </span>
      <div>
        <img alt="" class="avatar" height="20" src="https://2.gravatar.com/avatar/4b592757e625bc7e0cf3ad64c5cad0a4?d=https%3A%2F%2Fassets-cdn.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png&amp;r=x&amp;s=140" width="20" />
        <span class="user-mention">mikesoriano</span>
          <a href="/michaelsoriano/bootstrap-photo-gallery/commit/c004d34be91417b8ca5ce860cb75c51c89b849cd" class="message" data-pjax="true" title="added a close &quot;x&quot; button to the modal box.">added a close "x" button to the modal box.</a>
      </div>

    <div class="commit-tease-contributors">
      <a class="muted-link contributors-toggle" href="#blob_contributors_box" rel="facebox">
        <strong>0</strong>
         contributors
      </a>
      
    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/michaelsoriano/bootstrap-photo-gallery/raw/master/jquery.bsPhotoGallery.js" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/michaelsoriano/bootstrap-photo-gallery/blame/master/jquery.bsPhotoGallery.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/michaelsoriano/bootstrap-photo-gallery/commits/master/jquery.bsPhotoGallery.js" class="btn btn-sm " rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="https://mac.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:mac">
            <span aria-hidden="true" class="octicon octicon-device-desktop"></span>
        </a>

        <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <span aria-hidden="true" class="octicon octicon-pencil"></span>
        </button>
        <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <span aria-hidden="true" class="octicon octicon-trashcan"></span>
        </button>
  </div>

  <div class="file-info">
      273 lines (247 sloc)
      <span class="file-info-divider"></span>
    9.26 KB
  </div>
</div>

  

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">(<span class="pl-k">function</span>(<span class="pl-smi">$</span>) {</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line">  <span class="pl-s"><span class="pl-pds">&quot;</span>use strict<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">$.fn</span>.<span class="pl-en">bsPhotoGallery</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">options</span>) {</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> settings <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">extend</span>({}, <span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">bsPhotoGallery</span>.<span class="pl-smi">defaults</span>, options);</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> id <span class="pl-k">=</span> <span class="pl-en">generateId</span>();</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> classesString <span class="pl-k">=</span> <span class="pl-smi">settings</span>.<span class="pl-c1">classes</span>;</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> classesArray <span class="pl-k">=</span> <span class="pl-smi">classesString</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> clicked <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">function</span> <span class="pl-en">getCurrentUl</span>(){</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ul[data-bsp-ul-id=&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">clicked</span>.<span class="pl-smi">ulId</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&quot;][data-bsp-ul-index=&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">clicked</span>.<span class="pl-smi">ulIndex</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&quot;]<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">function</span> <span class="pl-en">generateId</span>() {</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">//http://fiznool.com/blog/2014/11/16/short-id-generation-in-javascript/</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> <span class="pl-c1">ALPHABET</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> <span class="pl-c1">ID_LENGTH</span> <span class="pl-k">=</span> <span class="pl-c1">4</span>;</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> out <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-c1">ID_LENGTH</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">          out <span class="pl-k">+=</span> <span class="pl-smi">ALPHABET</span>.<span class="pl-c1">charAt</span>(<span class="pl-smi">Math</span>.<span class="pl-c1">floor</span>(<span class="pl-smi">Math</span>.<span class="pl-c1">random</span>() <span class="pl-k">*</span> <span class="pl-smi">ALPHABET</span>.<span class="pl-c1">length</span>));</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&#39;</span>bsp-<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>out;</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">function</span> <span class="pl-en">createModalWrap</span>(){</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span>(<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#bsPhotoGalleryModal<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">length</span> <span class="pl-k">!==</span> <span class="pl-c1">0</span>){</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> modal <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">        modal <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;modal fade&quot; id=&quot;bsPhotoGalleryModal&quot; tabindex=&quot;-1&quot; role=&quot;dialog&quot;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">        modal <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>aria-labelledby=&quot;myModalLabel&quot; aria-hidden=&quot;true&quot;&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">        modal <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;modal-dialog&quot;&gt;&lt;div class=&quot;modal-content&quot;&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">        modal <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;modal-body&quot;&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>body<span class="pl-pds">&#39;</span></span>).<span class="pl-en">append</span>(modal);</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">function</span> <span class="pl-en">showHideControls</span>(){</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">    		<span class="pl-k">var</span> total <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-en">getCurrentUl</span>()<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span> li[data-bsp-li-index]<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">    		<span class="pl-k">if</span>(total <span class="pl-k">===</span> <span class="pl-smi">clicked</span>.<span class="pl-smi">nextImg</span>){</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">    			<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>a.next<span class="pl-pds">&#39;</span></span>).<span class="pl-en">hide</span>();</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">    		}<span class="pl-k">else</span>{</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">    			<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>a.next<span class="pl-pds">&#39;</span></span>).<span class="pl-en">show</span>()</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">    		}</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">    		<span class="pl-k">if</span>(<span class="pl-smi">clicked</span>.<span class="pl-smi">prevImg</span> <span class="pl-k">===</span> <span class="pl-k">-</span><span class="pl-c1">1</span>){</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">    			<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>a.previous<span class="pl-pds">&#39;</span></span>).<span class="pl-en">hide</span>();</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">    		}<span class="pl-k">else</span>{</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">    			<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>a.previous<span class="pl-pds">&#39;</span></span>).<span class="pl-en">show</span>()</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">    		}</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">    	}</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">function</span> <span class="pl-en">showModal</span>(){</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> src <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-v">this</span>).<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>img<span class="pl-pds">&#39;</span></span>).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>src<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> largeImg <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-v">this</span>).<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>img<span class="pl-pds">&#39;</span></span>).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>data-bsp-large-src<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span>(<span class="pl-k">typeof</span> largeImg <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>){</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">                src <span class="pl-k">=</span> largeImg;</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> index <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-v">this</span>).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>data-bsp-li-index<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> ulIndex <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-v">this</span>).<span class="pl-c1">parent</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>ul<span class="pl-pds">&#39;</span></span>).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>data-bsp-ul-index<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> ulId <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-v">this</span>).<span class="pl-c1">parent</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>ul<span class="pl-pds">&#39;</span></span>).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>data-bsp-ul-id<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">clicked</span>.<span class="pl-smi">img</span> <span class="pl-k">=</span> src;</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">clicked</span>.<span class="pl-smi">prevImg</span> <span class="pl-k">=</span> <span class="pl-c1">parseInt</span>(index) <span class="pl-k">-</span> <span class="pl-c1">parseInt</span>(<span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">      		<span class="pl-smi">clicked</span>.<span class="pl-smi">nextImg</span> <span class="pl-k">=</span> <span class="pl-c1">parseInt</span>(index) <span class="pl-k">+</span> <span class="pl-c1">parseInt</span>(<span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">clicked</span>.<span class="pl-smi">ulIndex</span> <span class="pl-k">=</span> ulIndex;</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">clicked</span>.<span class="pl-smi">ulId</span> <span class="pl-k">=</span> ulId;</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#bsPhotoGalleryModal<span class="pl-pds">&#39;</span></span>).<span class="pl-en">modal</span>();</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> html <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> img <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;img src=&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">clicked</span>.<span class="pl-smi">img</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot; class=&quot;img-responsive&quot;/&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">          html <span class="pl-k">+=</span> img;</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">          html <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;span class=&quot;glyphicon glyphicon-remove-circle&quot; style=&quot;position: absolute; right: -14px; top: -11px; font-size: 30px; color:#fff; text-shadow: 1px 1px 18px #000;&quot;&gt;&lt;/span&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">          html <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div style=&quot;height:25px;clear:both;display:block;&quot;&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">          html <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;a class=&quot;controls next&quot; data-bsp-id=&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">clicked</span>.<span class="pl-smi">ulId</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&quot; href=&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> (<span class="pl-smi">clicked</span>.<span class="pl-smi">nextImg</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;&gt;next &amp;raquo;&lt;/a&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">          html <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;a class=&quot;controls previous&quot; data-bsp-id=&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">clicked</span>.<span class="pl-smi">ulId</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&quot; href=&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> (<span class="pl-smi">clicked</span>.<span class="pl-smi">prevImg</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;&gt;&amp;laquo; prev&lt;/a&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">          html <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#bsPhotoGalleryModal .modal-body<span class="pl-pds">&#39;</span></span>).<span class="pl-en">html</span>(html);</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.glyphicon-remove-circle<span class="pl-pds">&#39;</span></span>).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>click<span class="pl-pds">&#39;</span></span>, closeModal);</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">showHideControls</span>();</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">function</span> <span class="pl-en">closeModal</span>(){</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#bsPhotoGalleryModal<span class="pl-pds">&#39;</span></span>).<span class="pl-en">modal</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>hide<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">function</span> <span class="pl-en">nextPrevHandler</span>(){</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> ul <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-en">getCurrentUl</span>());</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> index <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-v">this</span>).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>href<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> src <span class="pl-k">=</span> <span class="pl-smi">ul</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>li[data-bsp-li-index=&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>index<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&quot;] img<span class="pl-pds">&#39;</span></span>).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>src<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> largeImg <span class="pl-k">=</span> <span class="pl-smi">ul</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>li[data-bsp-li-index=&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>index<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&quot;] img<span class="pl-pds">&#39;</span></span>).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>data-bsp-large-src<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span>(<span class="pl-k">typeof</span> largeImg <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>){</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">                src <span class="pl-k">=</span> largeImg;</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.modal-body img<span class="pl-pds">&#39;</span></span>).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>src<span class="pl-pds">&#39;</span></span>, src);</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">clicked</span>.<span class="pl-smi">prevImg</span> <span class="pl-k">=</span> <span class="pl-c1">parseInt</span>(index) <span class="pl-k">-</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">clicked</span>.<span class="pl-smi">nextImg</span> <span class="pl-k">=</span> <span class="pl-c1">parseInt</span>(<span class="pl-smi">clicked</span>.<span class="pl-smi">prevImg</span>) <span class="pl-k">+</span> <span class="pl-c1">2</span>;</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span>(<span class="pl-en">$</span>(<span class="pl-v">this</span>).<span class="pl-en">hasClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>previous<span class="pl-pds">&#39;</span></span>)){</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">              <span class="pl-en">$</span>(<span class="pl-v">this</span>).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>href<span class="pl-pds">&#39;</span></span>, <span class="pl-smi">clicked</span>.<span class="pl-smi">prevImg</span>);</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">              <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>a.next<span class="pl-pds">&#39;</span></span>).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>href<span class="pl-pds">&#39;</span></span>, <span class="pl-smi">clicked</span>.<span class="pl-smi">nextImg</span>);</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">          }<span class="pl-k">else</span>{</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">              <span class="pl-en">$</span>(<span class="pl-v">this</span>).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>href<span class="pl-pds">&#39;</span></span>, <span class="pl-smi">clicked</span>.<span class="pl-smi">nextImg</span>);</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">              <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>a.previous<span class="pl-pds">&#39;</span></span>).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>href<span class="pl-pds">&#39;</span></span>, <span class="pl-smi">clicked</span>.<span class="pl-smi">prevImg</span>);</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">          <span class="pl-c">// console.log(clicked);</span></td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">showHideControls</span>();</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">function</span> <span class="pl-en">clearModalContent</span>(){</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#bsPhotoGalleryModal .modal-body<span class="pl-pds">&#39;</span></span>).<span class="pl-en">html</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">        clicked <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">function</span> <span class="pl-en">insertClearFix</span>(<span class="pl-smi">el</span>,<span class="pl-smi">x</span>){</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> index <span class="pl-k">=</span> (x<span class="pl-k">+</span><span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">$</span>.<span class="pl-en">each</span>(classesArray,<span class="pl-k">function</span>(<span class="pl-smi">e</span>){</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">           <span class="pl-k">switch</span>(classesArray[e]){</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">             <span class="pl-c">//large</span></td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">             <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>col-lg-1<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">                  <span class="pl-k">if</span>(<span class="pl-en">$</span>(el).<span class="pl-c1">next</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>li.clearfix<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">length</span> <span class="pl-k">==</span> <span class="pl-c1">0</span>){</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">                    <span class="pl-en">$</span>(el).<span class="pl-en">after</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;li class=&quot;clearfix visible-lg-block&quot;&gt;&lt;/li&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">                  }</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">             <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>col-lg-2<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span>(index<span class="pl-k">%</span><span class="pl-c1">6</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>){</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">                  <span class="pl-en">$</span>(el).<span class="pl-en">after</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;li class=&quot;clearfix visible-lg-block&quot;&gt;&lt;/li&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">             <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>col-lg-3<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">if</span>(index<span class="pl-k">%</span><span class="pl-c1">4</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>){</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">$</span>(el).<span class="pl-en">after</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;li class=&quot;clearfix visible-lg-block&quot;&gt;&lt;/li&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">             <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">             <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>col-lg-4<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">if</span>(index<span class="pl-k">%</span><span class="pl-c1">3</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>){</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">$</span>(el).<span class="pl-en">after</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;li class=&quot;clearfix visible-lg-block&quot;&gt;&lt;/li&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">             <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">             <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>col-lg-5<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">             <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>col-lg-6<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">if</span>(index<span class="pl-k">%</span><span class="pl-c1">2</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>){</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">$</span>(el).<span class="pl-en">after</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;li class=&quot;clearfix visible-lg-block&quot;&gt;&lt;/li&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">             <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">             <span class="pl-c">//medium</span></td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">             <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>col-md-1<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">                  <span class="pl-k">if</span>(<span class="pl-en">$</span>(el).<span class="pl-c1">next</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>li.clearfix<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">length</span> <span class="pl-k">==</span> <span class="pl-c1">0</span>){</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">                    <span class="pl-en">$</span>(el).<span class="pl-en">after</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;li class=&quot;clearfix visible-md-block&quot;&gt;&lt;/li&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">                  }</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">             <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>col-md-2<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span>(index<span class="pl-k">%</span><span class="pl-c1">6</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>){</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">                  <span class="pl-en">$</span>(el).<span class="pl-en">after</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;li class=&quot;clearfix visible-md-block&quot;&gt;&lt;/li&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">             <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>col-md-3<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">if</span>(index<span class="pl-k">%</span><span class="pl-c1">4</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>){</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">$</span>(el).<span class="pl-en">after</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;li class=&quot;clearfix visible-md-block&quot;&gt;&lt;/li&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">             <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">             <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>col-md-4<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">if</span>(index<span class="pl-k">%</span><span class="pl-c1">3</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>){</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">$</span>(el).<span class="pl-en">after</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;li class=&quot;clearfix visible-md-block&quot;&gt;&lt;/li&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">             <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">             <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>col-md-5<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">             <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>col-md-6<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">if</span>(index<span class="pl-k">%</span><span class="pl-c1">2</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>){</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">$</span>(el).<span class="pl-en">after</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;li class=&quot;clearfix visible-md-block&quot;&gt;&lt;/li&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">             <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">             <span class="pl-c">//small</span></td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">             <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>col-sm-1<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">                  <span class="pl-k">if</span>(<span class="pl-en">$</span>(el).<span class="pl-c1">next</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>li.clearfix<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">length</span> <span class="pl-k">==</span> <span class="pl-c1">0</span>){</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">                    <span class="pl-en">$</span>(el).<span class="pl-en">after</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;li class=&quot;clearfix visible-sm-block&quot;&gt;&lt;/li&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">                  }</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">             <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>col-sm-2<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span>(index<span class="pl-k">%</span><span class="pl-c1">6</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>){</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">                  <span class="pl-en">$</span>(el).<span class="pl-en">after</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;li class=&quot;clearfix visible-sm-block&quot;&gt;&lt;/li&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">             <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>col-sm-3<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">if</span>(index<span class="pl-k">%</span><span class="pl-c1">4</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>){</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">$</span>(el).<span class="pl-en">after</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;li class=&quot;clearfix visible-sm-block&quot;&gt;&lt;/li&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">             <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">             <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>col-sm-4<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">if</span>(index<span class="pl-k">%</span><span class="pl-c1">3</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>){</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">$</span>(el).<span class="pl-en">after</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;li class=&quot;clearfix visible-sm-block&quot;&gt;&lt;/li&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">             <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">             <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>col-sm-5<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">             <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>col-sm-6<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">if</span>(index<span class="pl-k">%</span><span class="pl-c1">2</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>){</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">$</span>(el).<span class="pl-en">after</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;li class=&quot;clearfix visible-sm-block&quot;&gt;&lt;/li&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">             <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">             <span class="pl-c">//x-small</span></td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">             <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>col-xs-1<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">                  <span class="pl-k">if</span>(<span class="pl-en">$</span>(el).<span class="pl-c1">next</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>li.clearfix<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">length</span> <span class="pl-k">==</span> <span class="pl-c1">0</span>){</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">                    <span class="pl-en">$</span>(el).<span class="pl-en">after</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;li class=&quot;clearfix visible-xs-block&quot;&gt;&lt;/li&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">                  }</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">             <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>col-xs-2<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span>(index<span class="pl-k">%</span><span class="pl-c1">6</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>){</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">                  <span class="pl-en">$</span>(el).<span class="pl-en">after</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;li class=&quot;clearfix visible-xs-block&quot;&gt;&lt;/li&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">             <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>col-xs-3<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">if</span>(index<span class="pl-k">%</span><span class="pl-c1">4</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>){</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">$</span>(el).<span class="pl-en">after</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;li class=&quot;clearfix visible-xs-block&quot;&gt;&lt;/li&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">             <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">             <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>col-xs-4<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">if</span>(index<span class="pl-k">%</span><span class="pl-c1">3</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>){</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">$</span>(el).<span class="pl-en">after</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;li class=&quot;clearfix visible-xs-block&quot;&gt;&lt;/li&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">             <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">             <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>col-xs-5<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">             <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>col-xs-6<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">if</span>(index<span class="pl-k">%</span><span class="pl-c1">2</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>){</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">$</span>(el).<span class="pl-en">after</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;li class=&quot;clearfix visible-xs-block&quot;&gt;&lt;/li&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">             <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">           }</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">      <span class="pl-v">this</span>.<span class="pl-en">each</span>(<span class="pl-k">function</span>(<span class="pl-smi">i</span>){</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">//ul</span></td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> items <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-v">this</span>).<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>li<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">$</span>(<span class="pl-v">this</span>).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>data-bsp-ul-id<span class="pl-pds">&#39;</span></span>, id);</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">$</span>(<span class="pl-v">this</span>).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>data-bsp-ul-index<span class="pl-pds">&#39;</span></span>, i);</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">items</span>.<span class="pl-en">each</span>(<span class="pl-k">function</span>(<span class="pl-smi">x</span>){</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">insertClearFix</span>(<span class="pl-v">this</span>,x);</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">$</span>(<span class="pl-v">this</span>).<span class="pl-en">addClass</span>(classesString);</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">$</span>(<span class="pl-v">this</span>).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>data-bsp-li-index<span class="pl-pds">&#39;</span></span>, x);</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">$</span>(<span class="pl-v">this</span>).<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>img<span class="pl-pds">&#39;</span></span>).<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>img-responsive<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span>(<span class="pl-smi">settings</span>.<span class="pl-smi">hasModal</span> <span class="pl-k">===</span> <span class="pl-c1">true</span>){</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">$</span>(<span class="pl-v">this</span>).<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bspHasModal<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">$</span>(<span class="pl-v">this</span>).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>click<span class="pl-pds">&#39;</span></span>, showModal);</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">      })</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span>(<span class="pl-smi">settings</span>.<span class="pl-smi">hasModal</span> <span class="pl-k">===</span> <span class="pl-c1">true</span>){</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">//this is for the next / previous buttons</span></td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">$</span>(<span class="pl-c1">document</span>).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>click<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>a.controls[data-bsp-id=&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>id<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&quot;]<span class="pl-pds">&#39;</span></span>, nextPrevHandler);</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">$</span>(<span class="pl-c1">document</span>).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>hidden.bs.modal<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#bsPhotoGalleryModal<span class="pl-pds">&#39;</span></span>, clearModalContent);</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">//start init methods</span></td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">createModalWrap</span>();</td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">  <span class="pl-c">/*defaults*/</span></td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">bsPhotoGallery</span>.<span class="pl-smi">defaults</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>classes<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>col-lg-2 col-md-2 col-sm-3 col-xs-4<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>hasModal<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-c1">true</span></td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line">}(jQuery));</td>
      </tr>
</table>

  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop"></div>
</div>

    </div>
  </div>

    </div>

        <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>
        <li><a href="https://github.com/pricing" data-ga-click="Footer, go to pricing, text:pricing">Pricing</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span aria-hidden="true" class="mega-octicon octicon-mark-github" title="GitHub "></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2016 <span title="0.03915s from github-fe134-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    
    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span aria-hidden="true" class="octicon octicon-alert"></span>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <span aria-hidden="true" class="octicon octicon-x"></span>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      
      <script crossorigin="anonymous" integrity="sha256-nuVc6vh/w03IYzQkn+9svs6I6BVHjg++gWQtV+0P/4k=" src="https://assets-cdn.github.com/assets/frameworks-9ee55ceaf87fc34dc86334249fef6cbece88e815478e0fbe81642d57ed0fff89.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-iv65cSAvkneP/HPd2SZhwZd9xeQqko7TX47JbkJabno=" src="https://assets-cdn.github.com/assets/github-8afeb971202f92778ffc73ddd92661c1977dc5e42a928ed35f8ec96e425a6e7a.js"></script>
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <span aria-hidden="true" class="octicon octicon-alert"></span>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
    <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <span aria-hidden="true" class="octicon octicon-x"></span>
    </button>
  </div>
</div>

  </body>
</html>

