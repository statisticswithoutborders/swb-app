# swb-app

# Git Workflow
For working with feature branches
1. YOu select an issue from github, lets say “Button Component” and ensure it's in the "In Progress" column of its respective project
1. You should checkout the develop branch running `git checkout develop`
1. You should then pull the latest from the remote develop branch with `git pull origin develop`
1. Now that your development branch is up to date, you want to create you feature branch using `git checkout -b nameOfFeature-YOURINITIALS`
1. Once you have completed coding the feature, you should pull develop into your feature branch to ensure you have the latest version `git pull origin develop`
1. Now you are ready to push your code `git push origin nameOfFeature-YOURINITIALS`
1. Once your feature has been approved, and you are ready to move onto the next feature, you should repeat everything in this check list, starting with step 1 