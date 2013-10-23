Package.describe({
	summary: "Font Awesome 4 packaged for Meteor"
});

Package.on_use(function (api){
	api.add_files('lib/font-awesome-4.0.0/font/fontawesome-webfont.eot', 'client');
	api.add_files('lib/font-awesome-4.0.0/font/fontawesome-webfont.svg', 'client');
	api.add_files('lib/font-awesome-4.0.0/font/fontawesome-webfont.ttf', 'client');
	api.add_files('lib/font-awesome-4.0.0/font/fontawesome-webfont.woff', 'client');
	api.add_files('lib/font-awesome-4.0.0/font/FontAwesome.otf', 'client');
	api.add_files('lib/font-awesome-4.0.0/css/font-awesome.css', 'client');
});
