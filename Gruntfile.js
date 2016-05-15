module.exports = function(grunt) {
  grunt.initConfig({
    'chrome-extension': {
      options: {
        name: "lightshot-hopper",
        version: "1.0.0",
        id: "00000000000000000000000000000000",
        chrome: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        updateUrl: "http://example.com/extension/111111/",
        clean: true,
        certDir: 'cert',
        buildDir: 'build',
        resources: [
          "js/**",
          "icons/**"
        ]
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'js/**/*.js', 'test/**/*.js']
    },
    watch: {
      scripts: {
        files: ['<%= jshint.all %>'],
        tasks: ['jshint'],
        options: {
          spawn: false,
        },
      }
    }
  });

  grunt.loadNpmTasks('grunt-chrome-compile');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['chrome-extension']);
};
