////////////////// exception handleing ///////////////////

// exception is an enexpected event in the program.
// exception is a type of error.
// Error are of three types.
// 1: Syntax
// 2: Runtime
// 3: Logical

try {
    document.writeln("this is suppose to be error"+abc);
} catch (error) {
    alert(`An error occured: ${error.message}`);
}