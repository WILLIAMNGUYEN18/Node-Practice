/* 
path.normalize(p)
Normalize a string path, taking care of '..' and '.' parts.

path.join([path1][, path2][, ...])
Join all the arguments together and normalize the resulting path.

path.resolve([from ...], to)
Resolves to an absolute path.

path.isAbsolute(path)
Determines whether the path is an absolute path. 
An absolute path will always resolve to the same location, 
regardless of the working directory.

path.relative(from, to)
Solve the relative path from from to to.

path.dirname(p)
Return the directory name of a path. Similar to the Unix dirname command.

path.basename(p[, ext])
Return the last portion of a path. Similar to the Unix basename command.

path.extname(p)
Return the extension of the path, from the last '.' 
to end of string in the last portion of the path. 
If there is no '.' in the last portion of the path or 
the first character of it is '.', then it returns an empty string.

path.parse(pathString)
Returns an object from a path string.

path.format(pathObject)
Returns a path string from an object, the opposite of path.parse above.

path.sep
The platform-specific file separator. '\\' or '/'.

path.delimiter
The platform-specific path delimiter, ; or ':'.

path.posix
Provide access to aforementioned path methods 
but always interact in a posix compatible way.

path.win32

Provide access to aforementioned path methods 
but always interact in a win32 compatible way.
*/

var path = require("path");


console.log('normalization: '+ path.normalize('/test/test1//2slashes/1slash/tab/..'));

console.log('joint path: ' + path.join('/test','test1','2slashes/1slash','tab','..'));

console.log('resolve : ' + path.resolve('pathModules_example.js'));

console.log('ext name: ' + path.extname('pathModules_example.js'));
