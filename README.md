# Burger

Useful git commands:
```bash
git pull
# Pulls changes from remote branch into local branch
```
```bash
git add 'changed-files'
# Stage files before committing changes. Specify which files you want to stage. Use . while in the root dir to stage every changed file.
```
```bash
git commit -m "A good commit message"
# Commit the changes. Add a message describing the changes made
```
```bash
git push
# Push up the local changes to the remote branch

git push -u origin 'branch-name'
#Use this if you've made a new branch that doesn't have a remote branch
```
```bash
git fetch
#Fetch all remote branches
```
```bash
git branch
#Only shows the local branches

git branch -a
#Shows the local and remote branches

git branch -d
#Deletes local branch
```
```bash
git checkout 'existing-branch'
#Switch to another branch

git checkout -b 'new-branch'
#Make a new local branch and then switch to it
```