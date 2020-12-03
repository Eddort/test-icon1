import React from "react";
import theme from "theme";
import { Theme, Link, Icon, Text, Box, Span } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { StackItem, Stack, Override, Menu, SocialMedia, Section } from "@quarkly/components";
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
		<Section padding="17px 0" border-width="0px 0px 1px 0px" border-style="solid" border-color="--color-lightD2">
			<Stack flex-direction="column" gap="0px">
				<StackItem width="100%">
					<Stack gap="0px">
						<StackItem width="50%" display="flex" flex-direction="row" padding="0px 0px 0px 16px">
							<Box display="flex" align-items="center">
								<Icon category="md" icon={MdFace} size="36px" margin="0px 12px 0px 0px" />
								<Text font="normal 500 28px/1.2 --fontFamily-googleJosefinSans" margin="0px mixed" padding="8px 0px 0px 0px">
									Company
								</Text>
							</Box>
						</StackItem>
						<Box display="flex" justify-content="flex-end" width="50%" align-items="flex-end">
							<Text font="normal 300 16px/1.5 --fontFamily-googleJosefinSans" margin="0px mixed">
								Striving for{" "}
								<Span
									font="italic 400 15px/24px --fontFamily-googleJosefinSans"
									color="--orange"
									padding="0px 0px 0px 0px"
									margin="0px 0px 0px 0px"
									display="inline-block"
								>
									perfection
								</Span>
								{" "}in everything we do
							</Text>
						</Box>
					</Stack>
				</StackItem>
				<StackItem width="100%">
					<Stack align-items="center" gap="0px">
						<StackItem width="50%" display="flex" flex-direction="row">
							<Menu display="flex">
								<Override slot="item-404" display="none" />
								<Override slot="link" font="normal 400 16px/1.5 --fontFamily-googleJosefinSans" text-decoration-line="initial" color="--darkL1" />
								<Override slot="item-active" border-width="0px 0px 2px 0px" border-style="solid" border-color="--color-primary" />
								<Override slot="link-active" color="--primary" />
								<Override slot="item-index" display="none" />
							</Menu>
						</StackItem>
						<StackItem width="50%" text-align="right">
							<Box display="flex" justify-content="flex-end" align-items="center">
								<Text font="--base" margin="0px 0px 0px 0px">
									<Link href="tel:+1(234)567-89-00" color="--primary" text-decoration-line="initial" font="300 16px/24px --fontFamily-googleJosefinSans">
										+1(234)567-89-00
									</Link>
								</Text>
								<SocialMedia
									facebook="https://www.facebook.com/quarklyapp/"
									twitter="https://twitter.com/quarklyapp"
									youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
									margin="0px 0px 0px 18px"
									icon-size="18px"
								>
									<Override slot="link" background="none" />
									<Override slot="icon" color="--darkL2" />
								</SocialMedia>
							</Box>
						</StackItem>
					</Stack>
				</StackItem>
			</Stack>
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