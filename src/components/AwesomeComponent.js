import React from "react";
import { useOverrides, Section } from "@quarkly/components";
import { Text, Button } from "@quarkly/widgets";
const defaultProps = {
	"text-align": "center",
	"padding": "100px 0"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"as": "h2",
			"md-font": "--headline2",
			"margin": "20px 0",
			"children": "Component",
			"font": "normal 900 72px/1.2 --fontFamily-googleJosefinSans"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"as": "p",
			"margin": "20px auto",
			"width": "60%",
			"children": "Hi! I'm a paragraph. Click here to add your own text and edit me. It\u2019s a piece of cake.\xA0I\u2019m a great space for you to tell a story and let your site visitors know more about you.",
			"font": "normal 300 20px/1.5 --fontFamily-googleJosefinSans"
		}
	},
	"button": {
		"kind": "Button",
		"props": {
			"font": "--lead",
			"margin": "20px 0",
			"children": "Button",
			"padding": "18px 44px 18px 44px",
			"background": "--color-lightD2",
			"border-radius": "40px",
			"color": "--dark"
		}
	}
};

const AwesomeComponent = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Text {...override("text")} />
		<Text {...override("text1")} />
		<Button {...override("button")} />
		{children}
	</Section>;
};

Object.assign(AwesomeComponent, { ...Section,
	defaultProps,
	overrides
});
export default AwesomeComponent;