import re, sys

base_file = "base.js"
build_file = "build/build.js"

file = open(base_file)

def subs(m):
	inclusion = re.search("(\".+\"|'.+')", m.group(0))

	target_file = open(inclusion.group(0)[1:-1])
	return target_file.read()

result = re.sub("@include\((\"|').+(.js)?(\"|')\);?", subs, file.read())

newFile = open(build_file, "w")
newFile.write(result)
newFile.close()
