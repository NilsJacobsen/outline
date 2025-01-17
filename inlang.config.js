/**
 * @type { import("@inlang/core/config").DefineConfig }
 */
export async function defineConfig(env) {
	const { default: jsonPlugin } = await env.$import(
		"https://cdn.jsdelivr.net/npm/@inlang/plugin-i18next@3/dist/index.js",
	)

	const { default: standardLintRules } = await env.$import(
		"https://cdn.jsdelivr.net/npm/@inlang/plugin-standard-lint-rules@3/dist/index.js",
	)

	return {
		referenceLanguage: "en_US",
		plugins: [
			jsonPlugin({
				pathPattern: "shared/i18n/locales/{language}/translation.json",
			}),
			standardLintRules(),
		],
	}
}
