import type { StorybookConfig } from '@storybook/react-webpack5';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const config: StorybookConfig = {
	stories: ['../src/**/*.story.mdx', '../src/**/*.story.@(js|jsx|ts|tsx)'],
	core: {},

	addons: ['@storybook/addon-links', '@storybook/addon-essentials', 'storybook-dark-mode'],

	framework: {
		name: '@storybook/react-webpack5',
		options: {},
	},

	webpackFinal(config) {
		if (config.resolve) {
			if (config.resolve.plugins === undefined) {
				config.resolve.plugins = [new TsconfigPathsPlugin()];
			} else {
				config.resolve.plugins.push(new TsconfigPathsPlugin());
			}
		}
		return config;
	},

	docs: {
		autodocs: true,
	},
};

module.exports = config;
