import React from 'react';
import atomize from "@quarkly/atomize";
import ReactCompareImageTheme from 'react-compare-image';

const CompareImageThemes = props => <div {...props}>
	 
	<ReactCompareImageTheme
		aspectRatio='wider'
		hover
		sliderLineWidth={0}
		leftImage='https://images.unsplash.com/photo-1534575180408-b7d7c0136ee8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI0MX0&auto=format&fit=crop&w=1650&q=80'
		rightImage='https://images.unsplash.com/photo-1520990056956-5d29b4884100?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1618&q=80'
	/>
	 
</div>;

export default atomize(CompareImageThemes)({
	name: "CompareImageThemes",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// past here description for your component
		en: "CompareImageThemes — my awesome component"
	},
	propInfo: {
		// past here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});