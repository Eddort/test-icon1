import React from "react";
import theme from "theme";
import { Theme, Link, Text, Span, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Section } from "@quarkly/components";
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
		<Section
			text-align="center"
			padding="220px 0 290px 0px"
			position="relative"
			height="380px"
			background="#000000 url(https://images.unsplash.com/photo-1496108493338-3b30de66f9be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80) 113% 89% /76% no-repeat scroll padding-box"
		>
			<Text
				as="h1"
				font="normal small-caps 900 18px/1.2 --fontFamily-googleIbmPlexSans"
				md-font="--headline2"
				margin="mixed auto mixed 0px"
				text-align="left"
				color="#f47858"
				width="40%"
				text-transform="uppercase"
				letter-spacing="4px"
				quarkly-title="eyebrow"
			>
				Beautiful
			</Text>
			<Text
				as="h1"
				font="normal 400 52px/1.2 --fontFamily-googleCinzelDecorative"
				margin="mixed auto mixed 0px"
				text-align="left"
				width="40%"
				color="--light"
				md-font="--headline2"
				quarkly-title="headline"
			>
				The best part of 
			beauty
		 is that which no picture can express
				<Span font="900 102px/0px &quot;Petit Formal Script&quot;, cursive">
					.
				</Span>
			</Text>
			<Components.AnimCircle3
				position="absolute"
				bottom="auto"
				height="552.51px"
				left="auto"
				right="0px"
				top="148px"
				width="600px"
				quarkly-title="animated circle"
			/>
			<Box
				position="absolute"
				left={0}
				right={0}
				bottom={0}
				top={0}
				background="#dbdee3"
				z-index="0"
				mix-blend-mode="exclusion"
				quarkly-title="exclusion"
			/>
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