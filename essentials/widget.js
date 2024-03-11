// To build any applications in Flutter, we start with widgets – The building block of flutter applications. Widgets describe what their view should look like given their current configuration and state. It includes a text widget, row widget, column widget, container widget, and many more.

// Widgets: Each element on a screen of the Flutter app is a widget. The view of the screen completely depends upon the choice and sequence of the widgets used to build the apps. And the structure of the code of an apps is a tree of widgets

// It's like a component in React, but in Flutter, everything is a widget.

// For example there's a widget for a button, a widget for a text input, a widget for a row of items, a widget for a column of items, a widget for a container with a border, a widget for a container with rounded corners, a widget for a container with a shadow, and so on.

// On text widgets there are: style, textAlign, overflow, maxLines etc.
// On button widgets there are: color, eleveation, disabledColor, enabled etc.

// ---------------------

// Scaffold Widget allows us to implement the basic material design visual layout structure.
// AppBar widget is used to create a toolbar at the top of the screen.
// Drawer widget is used to create a drawer at the left side of the screen.
// BottomNavigationBar widget is used to create a bottom navigation bar.
// FloatingActionButton widget is used to create a floating action button.

// When styling Text widgets, we can use the TextStyle class to set the font size, font weight, font style, color, background color, and more.
// But with font family, we need to download that specific font from Google Fonts and create a folder called fonts, and make changes to pubspec.yaml in the fontFamily section and add the font from there following the format.

// ---------------------

// Difference between Stateless Widgets and Stateful Widgets
// Stateless widgets mean that its state of the widget cannot be changed overtime. Immutable.
// Stateful widgets mean that its state of the widget can be changed overtime. Mutable.

// ---------------------
// Now we don't want to do hot reload everytime we make changes to the code. We want to see the changes in real time. So we use hot restart. It's like refreshing the page in the browser.

// To do this, we need to declare a class called Home and this class is gonna contain all the widgets for the home screen. And this Home class extends from StatelessWidget.

// Now there's a method called build() that we need to override. The reason for this is that StatelessWidget has ITS OWN build method and so we need to override it with:
// @override
// So that the screen displays the Home class reactively.
