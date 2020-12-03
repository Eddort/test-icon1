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
		<Section text-align="center" padding="220px 0 290px 0px" background="#000000 url(https://images.unsplash.com/photo-1534870439272-475575042b61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80) 0% 52% /140% no-repeat scroll padding-box" position="relative">
			<Text
				as="h1"
				font="normal small-caps 700 18px/1.2 --fontFamily-mono"
				md-font="--headline2"
				margin="mixed auto mixed 0px"
				text-align="left"
				color="--secondary"
				width="40%"
				text-transform="uppercase"
				letter-spacing="4px"
			>
				Beautiful
			</Text>
			<Text
				as="h1"
				font="normal 900 52px/1.2 --fontFamily-googlePetitFormalScript"
				margin="mixed auto mixed 0px"
				text-align="left"
				width="40%"
				color="--light"
				md-font="--headline2"
			>
				The best part of 
			beauty
		 is that which no picture can express
				<Span font="900 102px/0px &quot;Petit Formal Script&quot;, cursive">
					.
				</Span>
			</Text>
			<Components.AnimCircle
				position="absolute"
				bottom="140px"
				height="552.51px"
				left="251px"
				right="auto"
				top="auto"
				width="600px"
			/>
			<Box
				position="absolute"
				left={0}
				top={0}
				right={0}
				bottom={0}
				background="--color-light"
				mix-blend-mode="difference"
				display="none"
			/>
			<Components.AnimCircle
				position="absolute"
				bottom="140px"
				height="552.51px"
				left="251px"
				right="auto"
				top="auto"
				width="600px"
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