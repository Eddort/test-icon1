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
			"font": "normal 900 72px/1.2 --fontFamily-sans",
			"md-font": "--headline2",
			"margin": "20px 0",
			"children": "The headline about\xA0us"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"as": "p",
			"font": "normal 300 20px/1.5 --fontFamily-sans",
			"width": "60%",
			"margin": "20px auto 20px auto",
			"children": "Hi! I'm a paragraph. Click here to add your own text and edit me. It\u2019s a piece of cake.\xA0I\u2019m a great space for you to tell a story and let your site visitors know more about you."
		}
	},
	"button": {
		"kind": "Button",
		"props": {
			"font": "--lead",
			"margin": "20px 0",
			"children": "Button text"
		}
	}
};

const MyAwesomeComponent2 = props => {
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

Object.assign(MyAwesomeComponent2, { ...Section,
	defaultProps,
	overrides
});
export default MyAwesomeComponent2;