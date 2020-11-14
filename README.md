## Ready forms

Json schema based forms made simple (currently supports React 16.x versions)

### Installation and Usage

##### Step 1 : Install ready-forms
<code>npm i --save ready-forms</code>


##### Step 2 : Add CSS

Add the below lines to your index.js file

<code>import 'bootstrap/dist/css/bootstrap.min.css';</code>
<code>import "react-datepicker/dist/react-datepicker.css";</code>

##### Step 3 : Add core-js package to avoid errors

Currently there is an error in the build process. So when using this library you'll need to manually also install core-js using the below command :
<code>npm i --save core-js@2</code>

<i>Read about this issue here : https://github.com/babel/babel/issues/9734#issuecomment-475175676</i>

##### Step 4 : You're done!
If you face difficulties finding your way around this library I suggest looking at the below How to section.

### How to see an Example form running

1. Install ready-forms in your React 16.x project
2. Find the <i>demo</i> folder in github repo OR in your node_modules => ready-forms folder, download or copy the files from Demo folder into your own project's src folder.
3. Now import the Example component in your main component where you want to see the demo app running.
4. That's it! you should see a demo form loaded.

Demo Form
![](src/assets/demo.gif)

### What works

1. Support for different input types:
   - Currency
   - DateControl
   - Dropdownlist
   - Label
   - Number
   - Percentage
   - Radio
   - Table - (Note : nested tables are not supported)
   - Text
   - Website
   - Year
   - Zipcode
2. Support for templates for Form layout and individual control layout - Default implementations of these templates are FormInCardTemplate and BasicFormControlTemplate respectively
3. Validations on form elements
4. Form state is available on passing setFormState and formState state variables.
5. Disabling of fields is available via isDisabled property
6. Multiple forms on same page are supported however, please note that separate state variables and json schemas should be used.

### Roadmap

1. Add pending form controls :
   - Button
   - FormTooltip
   - Radio
   - Custom fields
2. Remove dependency on bootstrap, reactstrap - no default styling
3. Remove dependency on availity input controls - implement validation logic to remove this dependency
4. Easy schema creation tool
5. Get form's and individual control's validity statuses
6. Support reflection of one field's value in another non-related field in the same form (use-case : password and confirm password)
7. Custom hooks when updating values
8. Adding and Removing of new rows from Table
9. Toolbar elements for table type (for table action buttons)
10. Allow updating any property on a field - dynamic field labels to be made possible.
11. Differentiating optional fields by default - user should be able to override this behaviour.
12. Code cleanup and making better use of Typescript
13. Currency, Number, Year, Zipcode - currently all these work the same way. Need to have correct behaviours assigned as per the field type (for now the number field can be used in replacement for any of these)


### Dependencies

Ready-forms currently depends upon <i> availity-reactstrap-validation, bootstrap, react-datepicker</i> and <i>reactstrap </i> libraries which will get installed automatically when ready-forms is installed. If any of these libraries are not installed you can run this command to install all dependencies :

<code>npm i availity-reactstrap-validation bootstrap react-datepicker reactstrap</code>
