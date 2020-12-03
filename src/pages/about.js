import React from "react";
import theme from "theme";
import { Theme, Link, Icon, Text, Box, Span } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { StackItem, Override, Menu, Stack, Section } from "@quarkly/components";
import * as Components from "components";
import { GiPalmTree } from "react-icons/gi";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section>
			<Stack sm-flex-direction="column" lg-flex-direction="column" gap="0px">
				<StackItem width="30%" sm-width="100%" lg-padding="0px 0px 12px 0px" lg-width="100%">
					<Box display="flex" align-items="center" margin="8px 0px 0px 0px">
						<Icon category="gi" icon={GiPalmTree} size="32px" margin="0px 12px 0px 0px" />
						<Text
							margin="0"
							md-margin="0px 0 0px 0"
							text-align="left"
							font="--lead"
							sm-margin="0px 0 0px 0"
						>
							Zanzibar Travel
						</Text>
					</Box>
				</StackItem>
				<StackItem width="70%" lg-width="100%" lg-padding="0px">
					<Menu
						overflow-x="hidden"
						display="flex"
						justify-content="flex-end"
						font="--base"
						font-weight="700"
						md-flex-direction="column"
						md-align-items="flex-start"
						text-align="right"
						lg-justify-content="flex-start"
						lg-margin="0px 0px 0px -18px"
					>
						<Override slot="link" text-decoration="none" color="--dark" padding="6px 12px" />
						<Override slot="link-active" color="--primary" background="rgba(0, 119, 204, 0.1)" border-radius="12px" />
						<Override slot="item" padding="6px" />
						<Override slot="link-404" display="none" />
						<Override slot="link-index" display="none">
							index
						</Override>
						<Override slot="item-404" sm-display="none" lg-display="none" />
						<Override slot="item-index" sm-display="none" lg-display="none" />
						<Override slot="item-projects" lg-padding="6px 6px 6px 0px" md-padding="6px 6px 6px 6px" />
					</Menu>
				</StackItem>
			</Stack>
		</Section>
		<Section background="--color-darkL2" padding="64px 0">
			<Stack>
				<StackItem
					color="--dark"
					padding="98px 64px"
					width="50%"
					lg-width="100%"
					background="--color-light"
				>
					<Text
						as="h4"
						margin="12px 0"
						font="--base"
						color="--grey"
						letter-spacing="1px"
						text-transform="uppercase"
					>
						About Zanzibar
					</Text>
					<Text as="h2" margin="12px 0" font="--headline2" md-font="--headline3">
						This is one of the world's great cultural crossroads, where Africa meets Arabia meets the Indian Ocean.
					</Text>
				</StackItem>
				<StackItem width="50%" lg-width="100%">
					<Stack>
						<StackItem
							width="100%"
							lg-width="33.3%"
							md-width="100%"
							padding-bottom="100%"
							background="url(https://images.unsplash.com/photo-1575999080555-3f7a698dd8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80) center/cover"
						/>
						<StackItem
							width="50%"
							lg-width="33.3%"
							md-width="50%"
							padding-bottom="100%"
							background="url(https://images.unsplash.com/photo-1577315734214-4b3dec92d9ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80) center/cover"
						/>
						<StackItem
							width="50%"
							lg-width="33.3%"
							md-width="50%"
							padding-bottom="100%"
							background="url(https://images.unsplash.com/photo-1575999502951-4ab25b5ca889?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80) center/cover"
						/>
					</Stack>
				</StackItem>
			</Stack>
		</Section>
		<Section text-align="center" padding="100px 0">
			<Text
				as="h1"
				font="--headline1"
				md-font="--headline2"
				margin="20px 0"
				text-align="left"
			>
				About Us
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="20px 0"
				text-align="left"
				width="80%"
			>
				Hi! I'm a paragraph.
				<br />
				Click here to add your own text and edit me. It’s a piece of cake.{" "}
				<br />
				I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are.{" "}
			</Text>
		</Section>
		<Section text-align="center" padding="260px 0" background="#000000 url(https://images.unsplash.com/photo-1534575180408-b7d7c0136ee8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI0MX0&auto=format&fit=crop&w=1650&q=80) 0% 100% /60% no-repeat scroll padding-box">
			<Text
				as="h1"
				font="--headline1"
				md-font="--headline2"
				margin="20px 0"
				text-align="left"
				color="--light"
			>
				Beautyful
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="20px 0"
				text-align="left"
				width="80%"
				color="--light"
			>
				The best part of beauty is that which no picture can express.
			</Text>
		</Section>
		<Section text-align="center" padding="100px 0">
			<Text
				as="h1"
				font="--headline1"
				md-font="--headline2"
				margin="20px 0"
				text-align="left"
			>
				About Us
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="20px 0"
				text-align="left"
				width="80%"
			>
				Hi! I'm a paragraph.
				<br />
				<Span font="small-caps 300 20px/30px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif" color="--green">
					Click here to add your own text and edit me. It’s a piece of cake.{" "}
					<br />
					<Span color="--orange" text-transform="uppercase">
						I
					</Span>
				</Span>
				<Span color="--orange" text-transform="uppercase">
					’m a great space for you to tell a story and let your site visitors know more about you.
				</Span>
				{" "}
				<Span color="--primary" font="italic 300 20px/30px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif">
					Talk about your business and what products and services you offer.{" "}
				</Span>
				<Span color="--purple" letter-spacing="3px">
					Share how you came up with the idea for your company and what makes you different from your competitors.
				</Span>
				{" "}
				<Span color="--red" text-decoration-line="line-through">
					Make your business stand out and show your visitors who you are.{" "}
				</Span>
			</Text>
		</Section>
		<Components.BeforeAfter width="100%" height="1000px" />
		<Components.BeforeAfter width="100%" height="1000px" />
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