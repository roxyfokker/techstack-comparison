export default function (eleventyConfig) {
	eleventyConfig.setInputDirectory('src');
	eleventyConfig.setOutputDirectory('dist');

    // Set directories to pass through to the dist folder
    eleventyConfig.addPassthroughCopy('src/images');
	eleventyConfig.addPassthroughCopy('src/css');
}

export const config = {
	markdownTemplateEngine: 'njk',
	htmlTemplateEngine: 'njk',
};