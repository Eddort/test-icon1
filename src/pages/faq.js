import React from "react";
import theme from "theme";
import { Theme, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.MyAwesomeComponent2>
			<Override slot="button" />
			<Override slot="text">
				Component
			</Override>
			<Override slot="text1">
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you.
			</Override>
		</Components.MyAwesomeComponent2>
		<Components.MyAwesomeComponent2 background="--color-dark">
			<Override slot="text" color="--light" font="normal 900 72px/1.2 --fontFamily-googleJosefinSans">
				Component
			</Override>
			<Override
				slot="text1"
				color="--light"
				width="60%"
				margin="20px auto 20px auto"
				font="normal 300 26px/1.5 --fontFamily-googleJosefinSans"
			>
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you.
			</Override>
			<Override slot="button" font="normal 300 20px/1.5 --fontFamily-googleJosefinSans" background="--color-red" border-radius="32px">
				Button
			</Override>
		</Components.MyAwesomeComponent2>
		<Components.MyAwesomeComponent2>
			<Override slot="text" font="normal 900 72px/1.2 --fontFamily-googleShadowsIntoLight">
				Component
			</Override>
			<Override slot="text1" />
			<Override slot="button">
				Button
			</Override>
		</Components.MyAwesomeComponent2>
		<Components.MyAwesomeComponent2 background="#7bedf7">
			<Override slot="text">
				Component
			</Override>
			<Override
				slot="button"
				background="--color-darkL2"
				padding="12px 36px 11px 36px"
				font="normal 300 20px/1.5 --fontFamily-serifGaramond"
				border-radius="12px"
			>
				Button
			</Override>
			<Override slot="text1">
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you.
			</Override>
		</Components.MyAwesomeComponent2>
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