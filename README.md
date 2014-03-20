###Mobilizer

A web app for soliciting public outreach to Capitol Hill. Intended for those wanting to direct public reaction to congress around a particular piece of legislation currently under debate. Just swap in your own content blocks (the legislation, the argument, the talking points, the background) and deploy.


* Uses the [Sunlight Congress API](http://services.sunlightlabs.com/docs/Sunlight_Congress_API/) to pull representatives associated with a 5 digit Zip Code.
	* First Name, Last Name, Title, Phone, Twitter ID, Picture: All maintained by the Sunlight Foundation
* Built as a Rack App so it's super easy to deploy to any Ruby friendly host.

- - - - 

####Screenshots

Making the argument:
![ScreenShot](https://raw.github.com/BryanSchuetz/mobilizer-testing/master/screenshot_argument.jpg)

Making the call:
![ScreenShot](https://raw.github.com/BryanSchuetz/mobilizer-testing/master/screenshot_action.jpg)

- - - - 

####Still To Do

* Move content blocks into markdown partials for easier customization
* Clean up the SASS and make basic styling: color scheme, fonts, etc. easier to customize.
* Improve ZIP Code validation (database?)
* Make the whole customization and deployment part web based so it's even easier.

