# Git

## Global Settings
- Related Setup: https://gist.github.com/hofmannsven/6814278
- Related Pro Tips: https://ochronus.com/git-tips-from-the-trenches/
- Interactive Beginners Tutorial: http://try.github.io/
- Git Cheatsheet by GitHub: https://services.github.com/on-demand/downloads/github-git-cheat-sheet/

## Reminder
Press `minus + shift + s` and `return` to chop/fold long lines!

Show folder content: `ls -la`

## Notes
Do not put (external) dependencies in version control!

## Setup
See where Git is located:
`which git`

Get the version of Git:
`git --version` 

Create an alias (shortcut) for `git status`:
`git config --global alias.st status`

Help:
`git help`

## General
Initialize Git:
`git init`

Get everything ready to commit:
`git add .`

Get custom file ready to commit:
`git add index.html`

Commit changes:
`git commit -m "Message"`

Commit changes with title and description:
`git commit -m "Title" -m "Description..."`

Add and commit in one step:
`git commit -am "Message"`

Remove files from Git:
`git rm index.html`

Update all changes:
`git add -u`

Remove file but do not track anymore:
`git rm --cached index.html`

Move or rename files:
`git mv index.html dir/index_new.html`

Undo modifications (restore files from latest commited version):
`git checkout -- index.html`

Restore file from a custom commit (in current branch):
`git checkout 6eb715d -- index.html`

## Reset
Go back to commit:
`git revert 073791e7dd71b90daa853b2c5acc2c925f02dbc6`

Soft reset (move HEAD only; neither staging nor working dir is changed):
`git reset --soft 073791e7dd71b90daa853b2c5acc2c925f02dbc6`

Undo latest commit: `git reset --soft HEAD~ `

Mixed reset (move HEAD and change staging to match repo; does not affect working dir):
`git reset --mixed 073791e7dd71b90daa853b2c5acc2c925f02dbc6`

Hard reset (move HEAD and change staging dir and working dir to match repo):
`git reset --hard 073791e7dd71b90daa853b2c5acc2c925f02dbc6`

Hard reset of a single file (`@` is short for `HEAD`):
`git checkout @ -- index.html`

## Update & Delete
Test-Delete untracked files:
`git clean -n`

Delete untracked files (not staging):
`git clean -f`

Unstage (undo adds):
`git reset HEAD index.html`

Update most recent commit (also update the commit message):
`git commit --amend -m "New Message"`

## Branch
Show branches:
`git branch`

Create branch:
`git branch branchname`

Change to branch:
`git checkout branchname`

Create and change to new branch:
`git checkout -b branchname`

Rename branch:
`git branch -m branchname new_branchname` or:
`git branch --move branchname new_branchname`

Show all completely merged branches with current branch:
`git branch --merged`

Delete merged branch (only possible if not HEAD):
`git branch -d branchname` or:
`git branch --delete branchname`

Delete not merged branch:
`git branch -D branch_to_delete`

## Merge
True merge (fast forward):
`git merge branchname`

Merge to master (only if fast forward):
`git merge --ff-only branchname`

Merge to master (force a new commit):
`git merge --no-ff branchname`

Stop merge (in case of conflicts):
`git merge --abort`

Stop merge (in case of conflicts):
`git reset --merge` // prior to v1.7.4

Undo local merge that hasn't been pushed yet:
`git reset --hard origin/master`

Merge only one specific commit: 
`git cherry-pick 073791e7`

Rebase:
`git checkout branchname` » `git rebase master`
or:
`git merge master branchname`
(The rebase moves all of the commits in `master` onto the tip of `branchname`.)

Cancel rebase:
`git rebase --abort`

Squash multiple commits into one:
`git rebase -i HEAD~3` ([source](https://www.devroom.io/2011/07/05/git-squash-your-latests-commits-into-one/))

Squash-merge a feature branch (as one commit):
`git merge --squash branchname` (commit afterwards)

## Stash
Put in stash:
`git stash save "Message"`

Show stash:
`git stash list`

Show stash stats:
`git stash show stash@{0}`

Show stash changes:
`git stash show -p stash@{0}`

Use custom stash item and drop it:
`git stash pop stash@{0}`

Use custom stash item and do not drop it:
`git stash apply stash@{0}`

Use custom stash item and index:
`git stash apply --index`

Create branch from stash: 
`git stash branch new_branch`

Delete custom stash item:
`git stash drop stash@{0}`

Delete complete stash:
`git stash clear`

## Gitignore & Gitkeep
About: https://help.github.com/articles/ignoring-files

Useful templates: https://github.com/github/gitignore

Add or edit gitignore: 
`nano .gitignore`

Track empty dir: 
`touch dir/.gitkeep`

## Log
Show commits:
`git log`

Show oneline-summary of commits:
`git log --oneline`

Show oneline-summary of commits with full SHA-1:
`git log --format=oneline`

Show oneline-summary of the last three commits:
`git log --oneline -3`

Show only custom commits:
`git log --author="Sven"`
`git log --grep="Message"`
`git log --until=2013-01-01`
`git log --since=2013-01-01`

Show only custom data of commit:
`git log --format=short`
`git log --format=full`
`git log --format=fuller`
`git log --format=email`
`git log --format=raw`

Show changes:
`git log -p`

Show every commit since special commit for custom file only:
`git log 6eb715d.. index.html`

Show changes of every commit since special commit for custom file only:
`git log -p 6eb715d.. index.html`

Show stats and summary of commits:
`git log --stat --summary`

Show history of commits as graph:
`git log --graph`

Show history of commits as graph-summary:
`git log --oneline --graph --all --decorate`

## Compare
Compare modified files:
`git diff`

Compare modified files and highlight changes only:
`git diff --color-words index.html`

Compare modified files within the staging area:
`git diff --staged`

Compare branches:
`git diff master..branchname`

Compare branches like above:
`git diff --color-words master..branchname^`

Compare commits:
`git diff 6eb715d`
`git diff 6eb715d..HEAD`
`git diff 6eb715d..537a09f`

Compare commits of file:
`git diff 6eb715d index.html`
`git diff 6eb715d..537a09f index.html`

Compare without caring about spaces:
`git diff -b 6eb715d..HEAD` or:
`git diff --ignore-space-change 6eb715d..HEAD`

Compare without caring about all spaces:
`git diff -w 6eb715d..HEAD` or:
`git diff --ignore-all-space 6eb715d..HEAD`

Useful comparings:
`git diff --stat --summary 6eb715d..HEAD`

Blame:
`git blame -L10,+1 index.html`

## Releases & Version Tags
Show all released versions:
`git tag`

Show all released versions with comments:
`git tag -l -n1`

Create release version:
`git tag v1.0.0`

Create release version with comment:
`git tag -a v1.0.0 -m 'Message'`

Checkout a specific release version:
`git checkout v1.0.0`

## Collaborate
Show remote:
`git remote`

Show remote details:
`git remote -v`

Add remote upstream from GitHub project:
`git remote add upstream https://github.com/user/project.git`

Add remote upstream from existing empty project on server:
`git remote add upstream ssh://root@123.123.123.123/path/to/repository/.git`

Fetch:
`git fetch upstream`

Fetch a custom branch:
`git fetch upstream branchname:local_branchname`

Merge fetched commits:
`git merge upstream/master`

Remove origin:
`git remote rm origin`

Show remote branches:
`git branch -r`

Show all branches (remote and local):
`git branch -a`

Create and checkout branch from a remote branch:
`git checkout -b local_branchname upstream/remote_branchname`

Compare:
`git diff origin/master..master`

Push (set default with `-u`):
`git push -u origin master`

Push:
`git push origin master`

Force-Push:
`git push origin master --force

Pull:
`git pull`

Pull specific branch:
`git pull origin branchname`

Fetch a pull request on GitHub by its ID and create a new branch:
`git fetch upstream pull/ID/head:new-pr-branch`

Clone to localhost:
`git clone https://github.com/user/project.git` or:
`git clone ssh://user@domain.com/~/dir/.git`

Clone to localhost folder:
`git clone https://github.com/user/project.git ~/dir/folder`

Clone specific branch to localhost:
`git clone -b branchname https://github.com/user/project.git`

Clone with token authentication (in CI environment):
`git clone https://oauth2:<token>@gitlab.com/username/repo.git`

Delete remote branch (push nothing):
`git push origin :branchname` or:
`git push origin --delete branchname`

## Archive
Create a zip-archive: `git archive --format zip --output filename.zip master`

Export/write custom log to a file: `git log --author=sven --all > log.txt`

## Troubleshooting
Ignore files that have already been committed to a Git repository: http://stackoverflow.com/a/1139797/1815847

## Security
Hide Git on the web via `.htaccess`: `RedirectMatch 404 /\.git` 
(more info here: http://stackoverflow.com/a/17916515/1815847)

## Large File Storage
Website: https://git-lfs.github.com/

Install: `brew install git-lfs`

Track `*.psd` files: `git lfs track "*.psd"` (init, add, commit and push as written above)




testing doc

<p align="center"><img src="[https://www.facebook.com/DjMiggie69]" width="50%"></p>

<p align="center">
<a href="https://styleci.io/repos/26730195/"><img src="https://styleci.io/repos/26730195/shield" alt="StyleCI"></a>
<a href="LICENSE"><img src="https://img.shields.io/badge/license-BSD3-brightgreen.svg?style=flat-square" alt="License"></a>
<a href="https://translate.cachethq.io/project/cachet"><img src="https://d322cqt584bo4o.cloudfront.net/cachet/localized.svg" alt="Localisation"></a>
<a href="https://github.com/CachetHQ/Cachet/releases"><img src="https://img.shields.io/github/release/cachethq/cachet.svg?style=flat-square" alt="Latest Stable Version"></a>
</p>


- 👋 Hi, I’m @MiguelFlores
- 👀 I’m interested in ...
- 🌱 I’m currently learning ...
- 💞️ I’m looking to collaborate on ...
- 📫 How to reach me ...

<!---
Miguelzamora13/Miguelzamora13 is a ✨ special ✨ repository because its `README.md` (this file) appears on your GitHub profile.
You can click the Preview link to take a look at your changes.
--->
<div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0&appId=666928838152594" nonce="pAL1iXXD"></script>


<div class="fb-like" data-href="https://www.facebook.com/DjMiggie69/" data-width="" data-layout="" data-action="" data-size="" data-share="true"></div>


# Yadi te AMAMOS Feliz Cumpleaños!!! 😍💓❤💓❤💓😍
# se que nunca veras esto porque no te import mis Projectos
# git add .
# Adds the file to your local repository and stages it for commit. 'received_231163335341842.jpeg'
# git commit -m "received_231163335341842.jpeg"
# commits the tracked changes and prepares them to be pushed to a remote repository. To remove this commit and modify.  # the file, use 'git reset --soft HEAD~1' and commit and add the file again.
# git push origin YOUR_BRANCH
# pushes the changes in your local repository up to the remote repository you specified as the origin





<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '{your-app-id}',
      cookie     : true,
      xfbml      : true,
      version    : '{api-version}'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>Copy Code

[![Deploy Jekyll with GitHub Pages dependencies preinstalled](https://github.com/Miguelzamora13/fb_messenger_bot/actions/workflows/jekyll-gh-pages.yml/badge.svg)](https://github.com/Miguelzamora13/fb_messenger_bot/actions/workflows/jekyll-gh-pages.yml)
[![Deploy static content to Pages](https://github.com/Miguelzamora13/fb_messenger_bot/actions/workflows/static.yml/badge.svg)](https://github.com/Miguelzamora13/fb_messenger_bot/actions/workflows/static.yml)

<script async src="https://telegram.org/js/telegram-widget.js?22" data-telegram-login="Fbapp_bot" data-size="large" data-onauth="onTelegramAuth(user)" data-request-access="write"></script>
<script type="text/javascript">
  function onTelegramAuth(user) {
    alert('Logged in as ' + user.first_name + ' ' + user.last_name + ' (' + user.id + (user.username ? ', @' + user.username : '') + ')');
  }
</script>

This Drupal module provides a tool to build a chat bot to work on Facebook's Messenger
Platform. 

## Requirements

- Drupal 8
- PHP 5.6 or greater
- Facebook App and Page

## Installation

 1. Enable the fb_messenger_bot module.
 2. Visit /admin/config/fb-messenger and enter a custom value for the Facebook
    Verify Token (save the configuration).
 3. Complete steps 1-4 outlined in [Facebook's quickstart documentation](https://developers.facebook.com/docs/messenger-platform/quickstart)
    including the copying of the page access token in step 3 (note: this module sets up the webhook at /webhook/contact).
 4. Return to /admin/config/fb-messenger and paste the page access token into
    the Facebook Page Access Token field (save the configuration).
 5. Clear caches.
 6. Visit the Facebook page your app is subscribed to and send it a message.
    You should receive a response from the bot!

## Customizing your bot

 *Note:* You can use the demo_fb_messenger_bot folder as a starting point or
 reference.
 1. In a custom module, create a custom workflow by creating a class that
    extends the FBMessengerBotWorkflow class.
 2. Modify the fb_messenger_bot.workflow service to use your custom workflow by
    creating a class that extends ServiceProviderBase and implements the alter()
    method ([documentation from d.o.](https://www.drupal.org/node/2026959)).

### Supported message types

As of right now, this module can handle sending text, button, generic, and video
messages from [Facebook's Send API](https://developers.facebook.com/docs/messenger-platform/product-overview/conversation#send_messages).

#### Text message

```
$textMessage =  new TextMessage('Hello world!');
```

#### Button message

```
$buttonMessage = new ButtonMessage(
  array(
    new PostbackButton('Next Step', 'buttonMessage_Next'),
    new UrlButton('URL Button', 'http://www.example.com');
  )
);
```

#### Video message
```
$videoMessage = new VideoMessage('http://techslides.com/demos/sample-videos/small.mp4');
```

### Steps

The meat of a workflow resides in its steps. Each step is an object responsible
for providing the workflow with a human readable name (see Roadmap), machine
name, and message(s) to send the user. In addition to those basics, steps need
to indicate what the next step to go to in the workflow based on a user's
response. Lastly, steps should provide a validation callback which will be
invoked to validate the user's response to the step, as well as an invalid
response message, which will be sent to the user in the event that the callback
returns false.

#### Instantiating a step in your workflow

```
$stepHumanReadableName
$stepMachineName
$messageToSend = array(new TextMessage('You ugly!'));

// Set step welcoming user to conversation.
$welcomeStep = new BotWorkflowStep($humanReadableName, $stepMachineName, $messageToSend);
```
#### Adding response handlers

As mentioned above, every step needs to indicate the next step to go to based on
a user's response to that step. This is achieved with response handlers.

```
$welcomeStep->setResponseHandlers(
  array(
    '*' => array(
      'handlerMessage' => NULL,
      'goto' => 'builtABot',
    ),
  )
);
```

In the example above, we indicate that regardless of what the user sends us (the
asterisk), we want to proceed to the step in the workflow with machine name
'builtABot'. By indicating 'NULL' for the handlerMessage, we are saying we want
to send whatever message text is configured in the builtABot step. If we want to
override that behavior, we can simply set the handlerMessage value to be an
array of messages(s) of type MessageInterface.

If you sent out a message with buttons, and want to route a user to different
steps depending on which button they clicked, you would achieve that using
response handlers:

```
$builtStep = new BotWorkflowStep('Built A Bot', 'builtABot',
  new ButtonMessage('Glad you stopped by for a chat. Have you ever built a chat bot?',
    array(
      new PostbackButton('Yep!', 'builtABot_Yes'),
      new PostbackButton("Nope!", 'builtABot_No'),
    )
  )
);

$builtStep->setResponseHandlers(
  array(
    'builtABot_Yes' => array(
      'handlerMessage' => NULL,
      'goto' => 'veteranBuilder',
    ),
    'builtABot_No' => array(
      'handlerMessage' => NULL,
      'goto' => 'neverBuilt',
    ),
  )
);
```

#### Step validation

Often times, you'll want to collect some sort of information from the user that
requires validation prior to saving it. The module ships with a few validation
callbacks you can use, but you're free to override them, and/or
implement your own. These include:
- text message (ensure the user sent text)
- postback (ensure the user clicked one of the buttons you sent them)
- zip code
- e-mail
- phone number (U.S.)

```
$validationFunction = $this->getTextMessageValidatorFunction();
$invalidResponse = $this->getGenericValidationFailMessage();
$welcomeStep->setValidationCallback($validationFunction);
$welcomeStep->setInvalidResponseMessage($invalidResponse);
```

## Roadmap

### Documentation Improvements

Add documentation on:
- starting over a conversation
- fetching and storing a user's info from Facebook
- pre and post conversation process methods
- handling trolling users

### Enhancements and hopes

We'd love to:
- Refactor as much of the code as possible to be usable in a general
PHP context, outside of Drupal.
- Convert objects to be Drupal entities where appropriate. Refactoring steps
to being config entities, for example, would allow for configuration of steps by
an admin.
- Support multiple workflows (e.g. you could have a intro workflow with
certain steps and then transition a user to a gather contact info workflow with
a different set of steps etc.)
- See you all fork and contribute to the module! (It would be great to see
someone from the community polish the code and contribute it to [drupal.org](drupal.org)).

v.1.1.1

https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg

file:///storage/emulated/0/Download/pngwing.com.png

