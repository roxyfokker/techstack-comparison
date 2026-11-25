import eleventyImg from '@11ty/eleventy-img'

export default function (eleventyConfig) {
	eleventyConfig.setInputDirectory('src')
	eleventyConfig.setOutputDirectory('dist')

	// Set directories to pass through to the dist folder
	eleventyConfig.addPassthroughCopy('src/fonts')
	eleventyConfig.addPassthroughCopy('src/images')
	eleventyConfig.addPassthroughCopy('src/css')

	eleventyConfig.addShortcode(
		'image',
		async function (src, alt, sizes = '100vw') {
			const metadata = await eleventyImg(src, {
				widths: [400, 800, 1600],
				formats: ['webp'],
				outputDir: './dist/img/',
				urlPath: '/img/',
			})

			return eleventyImg.generateHTML(metadata, {
				alt,
				sizes,
				loading: 'lazy',
				decoding: 'async',
			})
		},
	)
}

export const config = {
	markdownTemplateEngine: 'njk',
	htmlTemplateEngine: 'njk',
}
