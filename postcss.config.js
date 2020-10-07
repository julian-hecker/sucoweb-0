const plugins = [require('autoprefixer')];

if (process.env.NODE_ENV === 'production') {
    plugins.push(
        require('@fullhuman/postcss-purgecss')({
            content: [
                './resources/html-scrape/*.html',
                './resources/js/**/*.js',
                './src/**/*.liquid',
            ],
        }),
    );

    plugins.push(require('cssnano'));

    plugins.push(
        require('postcss-discard-comments')({
            removeAll: true,
        }),
    );
}

module.exports = {
    plugins,
};
