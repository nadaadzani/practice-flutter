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

// ---------------------
// Adding images in Flutter
// You can add images in Flutter in two ways:
// 1. Adding images from the internet by using NetworkImage widget.
// 2. Adding images from the local storage by using AssetImage widget.
// But first these widgets need to be inside of a parent image widget called Image

// To use NetworkImage widget, simply pass in the URL of the image as a string.
// But AssetImage, you need to change the pubspec.yaml file to include the image in the assets section.

// Like this:
// assets:
//   - images/your_image.png

// Tip: you can include all images by typing 'images/' and this will include all of them.

// Then you can use the AssetImage widget and pass in the path

// Tip: you can use shortcuts to the Image widget by just typing image.asset or image.network


// ---------------------
// Adding icons and buttons in Flutter
// You can add icons in Flutter by using the Icon widget. You can use the Icons class to get the list of all the available icons in Flutter.
// e.g. :
/*
    child: Icon(
      Icons.add,
      color: Colors.white,
    ),
*/


// With newer version of Flutter, using FlatButton, RaisedButton won't work anymore since it is deprecated.
// Instead we use TextButton, ElevatedButton, and OutlinedButton.
// And styling the buttons comes easier with the ButtonStyle widget.

// Difference between TextButton and ElevatedButton is that ElevatedButton has a shadow or background meanwhile TextButton does not.

// e.g. :
/*
    child: ElevatedButton(
      onPressed: () {},
      child: Text('click me'),
      style: ButtonStyle(
        backgroundColor: MaterialStateProperty.all(Colors.blue[600]),
      ),
    ),
*/

// To add a button with an icon in it, you can use the ElevatedButton.icon widget and pass in the icon and label as the child.
// e.g. :
/*
    child: ElevatedButton.icon(
      onPressed: () {},
      icon: Icon(Icons.mail),
      label: Text('Mail'),
      style: ButtonStyle(
        backgroundColor: MaterialStateProperty.all(Colors.blue[600]),
      ),
    ),
*/

// You can also turn an icon into a button by using the IconButton widget and pass in the icon and the onPressed function.
// e.g. :
/*
    child: IconButton(
      onPressed: () {},
      icon: Icon(Icons.mail),
      color: Colors.blue[600],
    ),
*/

// ---------------------
// Container and Padding widgets
// Container widget is used to create a container with a border, padding, margin, and background color.
// Padding widget is used to create padding around the child widget and is used as more of a specific widget.
// So you cannot use margin in the Padding widget.

// e.g. :
// Essentially a div if it were an HTML element
/*
    child: Container(
      padding: EdgeInsets.all(20.0),
      margin: EdgeInsets.all(20.0),
      color: Colors.grey[400],
      child: Text('hello'),
    ),
*/

// To add padding and margin, there's a widget called EdgeInsets that we can use to add padding and margin.
// It has a few methods like all, only, symmetric, and fromLTRB.

// ---------------------
// Rows and Columns

// Row widget is used to create a row of items.
// Similar to flexbox in CSS.

// e.g. :

// mainAxisAlignment is like justify-content in CSS
// crossAxisAlignment is like align-items in CSS
/*
    child: Row(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text('hello'),
        FlatButton(onPressed: () {}, child: Text('click me')),
        Container(
          color: Colors.cyan,
          padding: EdgeInsets.all(30.0),
          child: Text('inside container'),
        ),
      ],
    ),
*/

// Column widget is used to create a column of items.
// e.g. :
// You can also put a row inside a column and vice versa.
// Similar to nested containers in HTML.
/*
    child: Column(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          children: [
            Text('hello'),
            FlatButton(onPressed: () {}, child: Text('click me')),
          ],
        ),
        Text('hello'),
        FlatButton(onPressed: () {}, child: Text('click me')),
        Container(
          color: Colors.cyan,
          padding: EdgeInsets.all(30.0),
          child: Text('inside container'),
        ),
      ],
    ),
*/

// ---------------------
// Expanded widget
// Expanded widget is used to expand a widget to fill the available space.
// It's like flex-grow in CSS.
// e.g. :
// It also accepts a method called flex which is similar to flex-basis in CSS.
/*
    child: Row(
      children: [
        Expanded(flex: 3, child: Container(color: Colors.red, height: 100.0)),
        Expanded(child: Container(color: Colors.green, height: 100.0)),
        Expanded(child: Container(color: Colors.blue, height: 100.0)),
      ],
    ),
*/
