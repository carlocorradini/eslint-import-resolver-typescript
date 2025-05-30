// import relative
import './.dot/tsImportee'
import './.dot/tsxImportee'
import './.dot/subfolder/tsImportee'
import './.dot/subfolder/tsxImportee'

// import using tsconfig.json path mapping
import 'folder/tsImportee'
import 'folder/tsxImportee'
import 'folder/subfolder/tsImportee'
import 'folder/subfolder/tsxImportee'

// import module with typings set in package.json
import 'folder/module'

// import from node_module
import 'typescript'
import 'dummy.js'
