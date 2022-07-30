// quick and dirty script to combine 001.json to 151.json into a single file for ease of use

import glob

result = ''
for f in glob.glob("*.json"):
    with open(f, "r") as infile:
        result += ',\n'
        result += infile.read()

with open("allpokemon.json", "w") as outfile:
    outfile.writelines(result)