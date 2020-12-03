import React from "react";
import theme from "theme";
import { Theme, Link, Text, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Section } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section text-align="center" padding="100px 0" background="--color-lightD3">
			<Text
				as="h2"
				md-font="--headline2"
				text-decoration="underline dotted --color-lightD1"
				text-shadow="1px 1px 1px --color-lightD4, 1px 1px 4px --color-lightD2"
				margin="20px 0"
				font="normal 900 72px/1.2 --fontFamily-googleJosefinSans"
				color="--light"
			>
				Components{" "}
			</Text>
			<Text as="p" margin="20px auto" width="60%" font="normal 300 20px/1.5 --fontFamily-googleJosefinSans">
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you.
			</Text>
			<Button
				font="--lead"
				margin="20px 0"
				background="--color-lightD2"
				color="--dark"
				border-radius="42px"
				padding="18px 44px 18px 44px"
			>
				Button
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