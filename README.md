###Mobilizer

A mobile optimized web app for soliciting public outreach to Capitol Hill. Intended for those wanting to direct public reaction to congress around a particular piece of legislation currently under debate. Just swap in your own content blocks (the legislation, the argument, the talking points, the bacground) and deploy.

- - - - 
####Demo
http://mobilize.signalbase.org

- - - - 
* Uses the [Sunlight Congress API](http://services.sunlightlabs.com/docs/Sunlight_Congress_API/) to pull representatives associated with a 5 digit Zip Code.
	* First Name, Last Name, Title, Phone, Twitter ID, Picture: All maintained by the Sunlight Foundation
* Built as a Rack App so it's super easy to deploy to any Ruby friendly host.
* The app is a "Responsive" design but _NOT_ fluid, because fluid layouts are the devil.
	* If you're not sure what "Responsive Web Design" is, it's essentially a design that allows the content on the page to adapt as the context with which it's viewed changes. So as the browser viewport gets smaller, as when viewing the page on a mobile phone for instance, the layout changes to better suit that context. Try resizing your browser window in the demo and you'll get the idea. [Learn more](http://www.alistapart.com/articles/responsive-web-design/).

- - - - 

####Still To Do

* Move content blocks into markdown partials for easier customization
* Clean up the SASS and make basic styling: color scheme, fonts, etc. easier to customize.
* Improve ZIP Code validation (database?)

