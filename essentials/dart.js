// Dart is also known as statically typed language meaning that once we declare a variable and we give that variable a type, we cannot change that type later on.

// Variables in Dart are declared using the var keyword. The type of the variable is inferred from the value assigned to it.
// There is a variable for integers called int, a variable for floating-point numbers called double, a variable for strings called String, and a variable for booleans called bool.

// Although you can't change the type of a variable using int, String, bool and so on. But you can use dynamic to declare a variable that can change its type (not recommended)

// The console.log equivalent in Dart is print.



// Functions in Dart are a bit different from JavaScript.
// You have to declare a function that has type in front of it

// For example:
// void main() {
//   print('Hello, World!');
// }

// The void keyword is used to indicate that the function does not return a value.

// If you want to return a value, you have to declare the type of the value that the function will return.

// For example:
// String greet() {
//   return 'Hello, World!';
// }

// To declare an array variable in Dart, we use the List keyword.
// For example:
// List<int> numbers = [1, 2, 3, 4, 5];

// To manipulate data in the array, we can use the following methods:
// numbers.add(6); // Add an item to the end of the list
// numbers.remove(3); // Remove an item from the list
// numbers.length; // Get the length of the list
// numbers.isEmpty; // Check if the list is empty

// ----------------------------

// To declare a class in Dart, we use the class keyword.
// similar to JavaScript, we can declare a constructor, properties, and methods inside a class.
// For example:
/*
    class User {
        String name = 'pozy';
        int age = 20;

        User(this.name, this.age);

        void greet() {
            print('Hello, my name is $name and I am $age years old');
        }
    }
*/

// To create an instance of the class, we need to put the type of User infront of the class, and invoke it afterwards.
/* void main() {
    User userTest = User();
    print(userTest.name);
    print(userTest.greet());
} */

// You can use constructors in class like this:
/*
    class User {
        String name;
        int age;

        User(String name, int age) {
            this.name = name;
            this.age = age;
        }

        void greet() {
            print('Hello, my name is $name and I am $age years old');
        }
    }
*/

// And these constructors can be used on our main function by passing an argument onto it.
/* void main() {
    User userTest = User('pozy', 20);
    print(userTest.name);
    print(userTest.greet());
} */

// Inheritance
// In Dart, we can use the extends keyword to inherit properties and methods from another class.
// For example:
/*  (Since we have the User class)
    class SuperUser extends User {
        SuperUser(String name, int age) : super(name, age);

        // The super in here is similar to JavaScript super() except that it has a colon in front of it.

        void superGreet() {
            print('I am a super user');
        }
    }
*/