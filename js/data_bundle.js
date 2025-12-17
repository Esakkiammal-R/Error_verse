
/**
 * Fallback Data Bundle
 * This file contains the error data from the JSON files.
 * It is used as a fallback when fetch() fails (e.g. file:// protocol restriction).
 */
const FallbackData = {
    'python': {
        "SyntaxErrors": [
            {
                "name": "SyntaxError",
                "meaning": "The Python code has invalid syntax.",
                "reason": "Missing symbols like colons, brackets, or quotes.",
                "analogy": "Writing a sentence with broken grammar.",
                "fix": "Check brackets, colons, and correct syntax."
            },
            {
                "name": "IndentationError",
                "meaning": "Incorrect indentation in the code.",
                "reason": "Improper spacing or mixing tabs and spaces.",
                "analogy": "Paragraphs not aligned properly in a book.",
                "fix": "Use consistent indentation (4 spaces)."
            },
            {
                "name": "TabError",
                "meaning": "Tabs and spaces are mixed in indentation.",
                "reason": "Using both tabs and spaces together.",
                "analogy": "Using two different rulers to draw one line.",
                "fix": "Use only spaces or only tabs consistently."
            }
        ],
        "RuntimeErrors": [
            {
                "name": "NameError",
                "meaning": "Variable or function name is not defined.",
                "reason": "Using a variable before declaring it.",
                "analogy": "Calling a person who doesn’t exist.",
                "fix": "Define the variable before using it."
            },
            {
                "name": "TypeError",
                "meaning": "Invalid operation between incompatible types.",
                "reason": "Trying to mix different data types.",
                "analogy": "Mixing oil and water.",
                "fix": "Convert data types properly."
            },
            {
                "name": "ValueError",
                "meaning": "Correct type but wrong value.",
                "reason": "Passing invalid value to a function.",
                "analogy": "Entering correct key into wrong lock.",
                "fix": "Provide valid values."
            },
            {
                "name": "IndexError",
                "meaning": "Index out of range.",
                "reason": "Accessing an index that doesn’t exist.",
                "analogy": "Trying to open a page beyond the book.",
                "fix": "Check list or array length."
            },
            {
                "name": "KeyError",
                "meaning": "Key not found in dictionary.",
                "reason": "Accessing non-existing key.",
                "analogy": "Searching for a house with wrong address.",
                "fix": "Check if key exists before access."
            },
            {
                "name": "AttributeError",
                "meaning": "Object has no such attribute.",
                "reason": "Calling undefined property or method.",
                "analogy": "Asking a car to fly.",
                "fix": "Use correct object attributes."
            },
            {
                "name": "ZeroDivisionError",
                "meaning": "Division by zero.",
                "reason": "Divisor is zero.",
                "analogy": "Dividing apples among zero people.",
                "fix": "Ensure denominator is not zero."
            },
            {
                "name": "ImportError",
                "meaning": "Module cannot be imported.",
                "reason": "Incorrect module name or missing module.",
                "analogy": "Trying to read a book not in library.",
                "fix": "Check module name and installation."
            },
            {
                "name": "ModuleNotFoundError",
                "meaning": "Specified module not found.",
                "reason": "Module is not installed or path incorrect.",
                "analogy": "Searching for a shop that doesn’t exist.",
                "fix": "Install module using pip."
            },
            {
                "name": "FileNotFoundError",
                "meaning": "File does not exist.",
                "reason": "Wrong file path or missing file.",
                "analogy": "Looking for a file that was deleted.",
                "fix": "Check file path and existence."
            }
        ],
        "LogicalErrors": [
            {
                "name": "Infinite Loop",
                "meaning": "Loop never ends.",
                "reason": "Condition never becomes false.",
                "analogy": "Walking in a circle forever.",
                "fix": "Correct loop condition."
            },
            {
                "name": "Wrong Output",
                "meaning": "Program runs but gives incorrect result.",
                "reason": "Incorrect logic implementation.",
                "analogy": "Correct calculation but wrong formula.",
                "fix": "Recheck logic and conditions."
            },
            {
                "name": "Incorrect Condition",
                "meaning": "Wrong condition used in decision making.",
                "reason": "Incorrect comparison operators.",
                "analogy": "Taking left turn instead of right.",
                "fix": "Verify condition logic."
            }
        ],
        "SystemErrors": [
            {
                "name": "MemoryError",
                "meaning": "Program ran out of memory.",
                "reason": "Too many objects in memory.",
                "analogy": "Phone storage completely full.",
                "fix": "Optimize memory usage."
            },
            {
                "name": "OverflowError",
                "meaning": "Result is too large to handle.",
                "reason": "Numeric limit exceeded.",
                "analogy": "Pouring water into a small glass.",
                "fix": "Use smaller values or proper limits."
            },
            {
                "name": "RecursionError",
                "meaning": "Maximum recursion depth exceeded.",
                "reason": "Function calls itself too many times.",
                "analogy": "Standing between two mirrors forever.",
                "fix": "Add proper base condition."
            },
            {
                "name": "OSError",
                "meaning": "Operating system related error.",
                "reason": "File or device access issue.",
                "analogy": "Door locked when trying to enter.",
                "fix": "Check system permissions."
            },
            {
                "name": "IOError",
                "meaning": "Input/Output operation failed.",
                "reason": "File read/write issue.",
                "analogy": "Pen not writing on paper.",
                "fix": "Check file access and permissions."
            }
        ]
    },
    'c': {
        "CompileTimeErrors": [
            {
                "name": "syntax error",
                "meaning": "Code structure is invalid.",
                "reason": "Missing semicolons, braces, or wrong statements.",
                "analogy": "Writing a sentence with broken grammar.",
                "fix": "Check semicolons, braces, and code syntax."
            },
            {
                "name": "undeclared identifier",
                "meaning": "Variable or function is not declared.",
                "reason": "Using a name that the compiler doesn’t recognize.",
                "analogy": "Calling someone who doesn’t exist.",
                "fix": "Declare the variable or function before use."
            },
            {
                "name": "expected ';'",
                "meaning": "Semicolon missing at the end of a statement.",
                "reason": "Statement not properly terminated.",
                "analogy": "Sentence missing a period.",
                "fix": "Add semicolon at the end of the statement."
            },
            {
                "name": "type mismatch",
                "meaning": "Assigning a value to a variable of incompatible type.",
                "reason": "Data type mismatch between variable and value.",
                "analogy": "Pouring water into a solid box.",
                "fix": "Use the correct data type for the value."
            },
            {
                "name": "implicit declaration",
                "meaning": "Function used without declaration.",
                "reason": "Function is called before its prototype or definition.",
                "analogy": "Calling someone without knowing their phone number.",
                "fix": "Declare or include function prototype before use."
            }
        ],
        "RuntimeErrors": [
            {
                "name": "Segmentation fault",
                "meaning": "Invalid memory access.",
                "reason": "Accessing memory that is not allocated.",
                "analogy": "Entering someone else’s locked house.",
                "fix": "Check pointers and memory allocation."
            },
            {
                "name": "Floating point exception",
                "meaning": "Invalid floating-point operation.",
                "reason": "Division by zero or invalid arithmetic.",
                "analogy": "Dividing apples among zero people.",
                "fix": "Check arithmetic operations."
            },
            {
                "name": "Bus error",
                "meaning": "Invalid memory alignment access.",
                "reason": "Accessing memory at wrong address.",
                "analogy": "Placing a square peg in a round hole.",
                "fix": "Use proper memory alignment and valid addresses."
            },
            {
                "name": "Stack overflow",
                "meaning": "Stack memory exceeded.",
                "reason": "Too many nested function calls or infinite recursion.",
                "analogy": "Adding too many plates in a stack until it falls.",
                "fix": "Reduce recursion depth or optimize function calls."
            }
        ],
        "LogicalErrors": [
            {
                "name": "Infinite loop",
                "meaning": "Loop never ends.",
                "reason": "Loop condition never becomes false.",
                "analogy": "Walking in a circle forever.",
                "fix": "Correct the loop condition."
            },
            {
                "name": "Wrong output",
                "meaning": "Program executes but gives incorrect results.",
                "reason": "Incorrect logic or calculation.",
                "analogy": "Following wrong directions to a place.",
                "fix": "Check and correct the algorithm or logic."
            },
            {
                "name": "Incorrect condition",
                "meaning": "Wrong condition used in decision making.",
                "reason": "Improper comparison or logical operators.",
                "analogy": "Taking left instead of right at a turn.",
                "fix": "Verify and correct the condition."
            }
        ],
        "MemoryErrors": [
            {
                "name": "Memory leak",
                "meaning": "Allocated memory not freed.",
                "reason": "Dynamically allocated memory not released.",
                "analogy": "Leaving tap open forever and wasting water.",
                "fix": "Use free() to release allocated memory."
            },
            {
                "name": "Dangling pointer",
                "meaning": "Pointer refers to freed memory.",
                "reason": "Accessing memory after free().",
                "analogy": "Using a remote control for a broken TV.",
                "fix": "Set pointer to NULL after freeing memory."
            },
            {
                "name": "Buffer overflow",
                "meaning": "Writing outside allocated array bounds.",
                "reason": "Accessing memory beyond buffer size.",
                "analogy": "Overflowing a cup with too much water.",
                "fix": "Ensure array access is within valid bounds."
            },
            {
                "name": "Invalid pointer access",
                "meaning": "Pointer used without proper initialization.",
                "reason": "Pointer is NULL or uninitialized.",
                "analogy": "Following a map that doesn’t exist.",
                "fix": "Initialize pointer before use."
            }
        ]
    },
    'cpp': {
        "CompileTimeErrors": [
            {
                "name": "syntax error",
                "meaning": "Code structure is invalid.",
                "reason": "Missing semicolons, braces, or incorrect statements.",
                "analogy": "Writing a sentence with broken grammar.",
                "fix": "Check semicolons, braces, and correct syntax."
            },
            {
                "name": "invalid conversion",
                "meaning": "Cannot convert one type to another.",
                "reason": "Assigning incompatible types or casting incorrectly.",
                "analogy": "Pouring juice into a solid container.",
                "fix": "Use correct type conversion or casting."
            },
            {
                "name": "no matching function",
                "meaning": "Function call does not match any definition.",
                "reason": "Wrong parameters or function signature mismatch.",
                "analogy": "Ordering a coffee size that doesn’t exist.",
                "fix": "Check function name and parameter types."
            },
            {
                "name": "redefinition error",
                "meaning": "A variable, function, or class is defined multiple times.",
                "reason": "Duplicate definitions in code.",
                "analogy": "Giving two houses the same address.",
                "fix": "Remove duplicate definitions."
            },
            {
                "name": "undefined reference",
                "meaning": "Linker cannot find the function or variable.",
                "reason": "Function declared but not defined.",
                "analogy": "Address given but house not built.",
                "fix": "Provide definition for all declared functions and variables."
            }
        ],
        "RuntimeErrors": [
            {
                "name": "Segmentation fault",
                "meaning": "Invalid memory access.",
                "reason": "Accessing memory that is not allocated.",
                "analogy": "Entering someone else’s locked house.",
                "fix": "Check pointers and memory allocation."
            },
            {
                "name": "std::bad_alloc",
                "meaning": "Memory allocation failed.",
                "reason": "Heap memory exhausted.",
                "analogy": "No space left in cupboard.",
                "fix": "Free unused memory or optimize memory usage."
            },
            {
                "name": "std::out_of_range",
                "meaning": "Container index is out of valid range.",
                "reason": "Accessing vector, string, or array with invalid index.",
                "analogy": "Picking a page beyond the book’s total pages.",
                "fix": "Check container size before accessing."
            },
            {
                "name": "Floating point exception",
                "meaning": "Invalid arithmetic operation occurred.",
                "reason": "Division by zero or invalid float calculation.",
                "analogy": "Dividing apples among zero people.",
                "fix": "Check arithmetic operations."
            }
        ],
        "LogicalErrors": [
            {
                "name": "Wrong output",
                "meaning": "Program executes but gives incorrect results.",
                "reason": "Incorrect logic or algorithm implementation.",
                "analogy": "Following wrong directions to a place.",
                "fix": "Review and correct algorithm."
            },
            {
                "name": "Infinite loop",
                "meaning": "Loop never ends.",
                "reason": "Loop condition never becomes false.",
                "analogy": "Walking in a circle forever.",
                "fix": "Fix loop condition."
            },
            {
                "name": "Incorrect algorithm",
                "meaning": "Algorithm does not solve the problem correctly.",
                "reason": "Logic or steps are incorrect.",
                "analogy": "Using a wrong map to reach destination.",
                "fix": "Use the correct algorithm."
            }
        ],
        "MemoryErrors": [
            {
                "name": "Memory leak",
                "meaning": "Allocated memory not freed.",
                "reason": "Memory allocated dynamically is not released.",
                "analogy": "Leaving tap open forever and wasting water.",
                "fix": "Use delete or free() to release memory."
            },
            {
                "name": "Dangling pointer",
                "meaning": "Pointer refers to memory that has been freed.",
                "reason": "Accessing pointer after delete/free.",
                "analogy": "Using a remote control for a broken TV.",
                "fix": "Set pointer to NULL after freeing memory."
            },
            {
                "name": "Heap corruption",
                "meaning": "Memory on heap is overwritten or invalid.",
                "reason": "Accessing memory out of bounds or double-free.",
                "analogy": "Messing up storage boxes and losing items.",
                "fix": "Check heap allocations and avoid invalid access."
            }
        ]
    },
    'java': {
        "CompileTimeErrors": [
            {
                "name": "cannot find symbol",
                "meaning": "The compiler cannot find a variable, method, or class.",
                "reason": "The symbol is not declared or misspelled.",
                "analogy": "Searching for a book that doesn’t exist in the library.",
                "fix": "Declare the variable, method, or class correctly."
            },
            {
                "name": "incompatible types",
                "meaning": "You are assigning a value of one type to a variable of another type.",
                "reason": "Type mismatch in assignment or method call.",
                "analogy": "Pouring juice into a bottle of milk.",
                "fix": "Use the correct data type."
            },
            {
                "name": "missing return statement",
                "meaning": "A non-void method does not return a value on all paths.",
                "reason": "The method is expected to return a value but doesn’t.",
                "analogy": "Asking for a book and the librarian says nothing.",
                "fix": "Ensure all paths return a proper value."
            },
            {
                "name": "unreachable statement",
                "meaning": "Code cannot be executed because it is after a return or throw statement.",
                "reason": "Statements placed after code that exits the method.",
                "analogy": "Putting a note after the door has been locked.",
                "fix": "Remove or reposition unreachable code."
            },
            {
                "name": "class not found",
                "meaning": "Compiler cannot locate a class file.",
                "reason": "The class is missing or not imported.",
                "analogy": "Looking for a shop that does not exist.",
                "fix": "Check imports and classpath."
            },
            {
                "name": "method not found",
                "meaning": "Compiler cannot find the called method.",
                "reason": "Method name is wrong or signature mismatch.",
                "analogy": "Calling a person who doesn’t answer.",
                "fix": "Check method name and parameters."
            }
        ],
        "RuntimeExceptions": [
            {
                "name": "NullPointerException",
                "meaning": "Trying to use an object reference that is null.",
                "reason": "Object not initialized before use.",
                "analogy": "Trying to drink from an empty glass.",
                "fix": "Initialize objects before use."
            },
            {
                "name": "ArrayIndexOutOfBoundsException",
                "meaning": "Array index accessed is outside its bounds.",
                "reason": "Accessing invalid index in an array.",
                "analogy": "Trying to open a page beyond a book.",
                "fix": "Check array length before accessing."
            },
            {
                "name": "StringIndexOutOfBoundsException",
                "meaning": "String index is out of valid range.",
                "reason": "Accessing invalid position in a string.",
                "analogy": "Picking a character that doesn’t exist in a word.",
                "fix": "Check string length before accessing."
            },
            {
                "name": "ArithmeticException",
                "meaning": "Illegal arithmetic operation occurred.",
                "reason": "For example, division by zero.",
                "analogy": "Dividing apples among zero people.",
                "fix": "Check for zero or invalid operations."
            },
            {
                "name": "ClassCastException",
                "meaning": "Invalid type casting between objects.",
                "reason": "Casting an object to an incompatible type.",
                "analogy": "Trying to fit a square peg into a round hole.",
                "fix": "Cast only to compatible types."
            },
            {
                "name": "NumberFormatException",
                "meaning": "String cannot be converted to a numeric type.",
                "reason": "Invalid number format.",
                "analogy": "Trying to read letters as numbers.",
                "fix": "Ensure string contains valid numeric data."
            },
            {
                "name": "InputMismatchException",
                "meaning": "Scanner input type does not match expected type.",
                "reason": "User input type is wrong.",
                "analogy": "Expecting a number but receiving a word.",
                "fix": "Validate input type before reading."
            }
        ],
        "CheckedExceptions": [
            {
                "name": "IOException",
                "meaning": "Input/output operation failed.",
                "reason": "File, network, or stream issues.",
                "analogy": "Trying to read a book that is locked.",
                "fix": "Handle exceptions with try-catch."
            },
            {
                "name": "SQLException",
                "meaning": "Database operation failed.",
                "reason": "Wrong query, connection, or table issues.",
                "analogy": "Asking for a book that isn’t in the library.",
                "fix": "Check database query and connection."
            },
            {
                "name": "FileNotFoundException",
                "meaning": "The file being accessed does not exist.",
                "reason": "Incorrect file path or missing file.",
                "analogy": "Looking for a missing book.",
                "fix": "Check the file path and existence."
            },
            {
                "name": "ClassNotFoundException",
                "meaning": "Class not found at runtime.",
                "reason": "Class not present in classpath.",
                "analogy": "Trying to visit a house that doesn’t exist.",
                "fix": "Ensure the class is in classpath."
            }
        ],
        "JVMErrors": [
            {
                "name": "OutOfMemoryError",
                "meaning": "JVM ran out of memory.",
                "reason": "Too many objects allocated.",
                "analogy": "Cupboard full with no space left.",
                "fix": "Optimize memory usage."
            },
            {
                "name": "StackOverflowError",
                "meaning": "Stack memory exceeded.",
                "reason": "Deep or infinite recursion.",
                "analogy": "Falling into a never-ending hole.",
                "fix": "Add base condition to recursion."
            },
            {
                "name": "VirtualMachineError",
                "meaning": "JVM cannot continue.",
                "reason": "Severe system-level problem.",
                "analogy": "Computer stops working unexpectedly.",
                "fix": "Check JVM environment and resources."
            }
        ],
        "LogicalErrors": [
            {
                "name": "Wrong Logic",
                "meaning": "Program executes but gives wrong results.",
                "reason": "Incorrect algorithm or condition.",
                "analogy": "Following wrong directions to a place.",
                "fix": "Review logic and correct it."
            },
            {
                "name": "Infinite Loop",
                "meaning": "Loop never ends.",
                "reason": "Condition never becomes false.",
                "analogy": "Walking in circles forever.",
                "fix": "Fix loop condition."
            },
            {
                "name": "Incorrect Condition",
                "meaning": "Wrong condition used in if/else or loop.",
                "reason": "Incorrect comparison or logical operator.",
                "analogy": "Taking left instead of right.",
                "fix": "Check and correct the condition."
            }
        ]
    }
};
