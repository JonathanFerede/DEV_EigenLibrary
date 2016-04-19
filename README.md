My library
-------

[1]: <https://github.com/kenwheeler/slick>

_The simplest textlooper you'll ever find_

#### Demo

Checkout index.html

#### How to use it...
##### Step 1 To load the library, place this in the ``` <head> ```
```html
    <script src="js/library.js"></script>
```
##### Step 2 Declare every element you want to use when your script is loaded.

```html
<script>
    //Define all the elements that the library has to use
    var ElementA = document.getElementsByClassName('ChangeText')[0];    
    var ElementB = document.getElementsByClassName('ChangeText')[1]; 
    
    //Call the library and tell it what element and speed to use
    library.init(ElementA, 1000);
    library.init(ElementB, 3000);
</script>

```
    
##### Step 3 have fun :P

#### Browser support

Safari and chrome and

#### License

Copyright (c) 2016 Jonathan Ferede