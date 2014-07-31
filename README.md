# Installation

    npm install str-tpl
    
# Example

### Replace that:

```js
var str1 = 'concatenation';
var str2 = '5.016831';
//...
var s = 'Avoid string ' + str1 + '. In addition, you can apply inline number formatting like this: ' + parseFloat(str2).toFixed(2) + '\n'
```

### by this:

```js
var s = 'Avoid string {{str1}}. In addition, you can apply inline number formatting like this: {{str2|2}}\n'
        .tpl({str1:'concatenation', str2: '5.016831'}));
```