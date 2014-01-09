Package.describe({
	summary: "Font Awesome 4 packaged for Meteor"
});

Package.on_use(function (api){
	api.add_files('lib/font-awesome-4.0.3/fonts/fontawesome-webfont.eot', 'client');
	api.add_files('lib/font-awesome-4.0.3/fonts/fontawesome-webfont.svg', 'client');
	api.add_files('lib/font-awesome-4.0.3/fonts/fontawesome-webfont.ttf', 'client');
	api.add_files('lib/font-awesome-4.0.3/fonts/fontawesome-webfont.woff', 'client');
	api.add_files('lib/font-awesome-4.0.3/fonts/FontAwesome.otf', 'client');
	api.add_files('lib/font-awesome-4.0.3/css/font-awesome.css', 'client');
});
