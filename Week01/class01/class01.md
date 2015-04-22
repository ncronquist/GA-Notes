# Class Overview

## First Third - Fundamentals
- ~ Week 1 - Week 5
- Web app using:
  - JS
  - Jquery
  - Node
  - Express
  - PostgreSQL/sequelize
  - Bootstrap
- They will be teaching us everything from the ground up

## Second Third - Resourcefulness
- ~ Week 5 - Week 9
- App using:
  - Ruby
  - Ruby on Rails (RoR)
  - Testing
  - API/OAUTH
  - Ajax/jquery
  - PostgreSQL
  - Agile
- We will end up with the same issues, so hopefully we will know how to solve those problems

## Final Third - Independence
- ~ Week 9 - End
- Single Page app
  - Angular
    - Directives
    - Controlles
    - Serices

## Installfest
- Things installed or to install:
  - cowsay
  - fortune
  - node
  - npm
  - zsh
  - Oh My ZSH

## Command Line
Command                  | Action
-------------------------|------------------------------------------------------
cat                      | Prints file to console `cat newfile.txt`
sort                     | Sorts the output
head -1                  | Retrieves the first line of output
tail -1                  | Retrieves the last line of output
|                        | Pipe operator retrieves output and puts it into input ex: `cat newfile.txt | sort | tail -2` This would give you the last two sorted lines in the file


## Find the Murderer

1. Get clues from the crimescene
  - `grep CLUE crimescene`
    - Perp is male at least 6'
    - Memberships: AAA, Delta SkyMiles, Local Library, Museum of Bash History
    - Witness: Annabel; Blond spiky hair, New Zealand accent
2. Find the correct Annabel
  - `grep Annabel people`
    - Annabel Sun; F; 26; Hart Place; line 40
    - Annabel Church; F; 38; Buckingham Place; line 179
3. The people file tells us which line to look at in a particular street file for a person; Search for the 2 potential Annabels
  - `head -n 40 streets/Hart_Place | tail -n 1`
    - See Interview #47246024
  - `head -n 179 streets/Buckingham_Place | tail -n 1`
    - See interview #699607
4. Check the two interview files
  - `cat interviews/interview-47246024`
    - Ms. Sun has brown hair and is not from New Zealand.
  - `cat interviews/interview-699607
    - Interviewed Ms. Church;
      - Did not see shooter;
      - Saw blue Honda with license plate L337 and ended with 9
5. Find people with blue Hondas with the license plate starting with L337
  - `grep -i "L337..9" -A 5 vehicles | grep Honda -A 4 -B 1 | grep Blue -A 3 -B 2 | grep Owner -A 2`
    - 2 people matching description
      - Joe Germuska
      - Jeremy Bowers
6. Compare memberships to see which person matches more
  - `cat memberships/AAA memberships/Delta_SkyMiles  memberships/library.txt memberships/Museum_of_Bash_History | grep -c 'Joe Germuska'`
    - 2 memberships match
  - `cat memberships/AAA memberships/Delta_SkyMiles  memberships/library.txt memberships/Museum_of_Bash_History | grep -c 'Jeremy Bowers'`
    - 4 memberships match
    - Mystery solved
