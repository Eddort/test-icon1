import React from "react";
import theme from "theme";
import { Theme, Link, Text, Icon, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Section } from "@quarkly/components";
import { MdFace } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section text-align="center" padding="100px 0">
			<Text as="h2" font="--headline1" md-font="--headline2" margin="20px 0">
				The headline about us
			</Text>
			<Icon
				category="md"
				icon={MdFace}
				position="absolute"
				top="111px"
				left="174px"
				width="10px"
				height="10px"
				bottom="auto"
				right="auto"
			/>
			<Text as="p" font="--lead" margin="20px 0">
				Tell what your business is about, what you do and how you do it. Write
		an engaging story describing your work experience and how passionate you
		are about what you do. Describe your partners and what you've achieved
		together. Share why your goods and services are special. Provide a
		couple of examples to prove your point.
			</Text>
			<Button font="--lead" margin="20px 0">
				Button text
			</Button>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});