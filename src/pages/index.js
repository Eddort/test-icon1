import React from "react";
import theme from "theme";
import { Theme, Link, Icon, Text, Box, Span } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { StackItem, Stack, Override, Menu, SocialMedia, Section } from "@quarkly/components";
import * as Components from "components";
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
								<Text font="--headline3" margin="0px mixed">
									Company
								</Text>
							</Box>
						</StackItem>
						<StackItem width="50%" text-align="right">
							<Text font="--base" margin="0px mixed">
								Striving for{" "}
								<Span font="italic 300 18px/24px --fontFamily-serifGeorgia" color="--orange">
									perfection
								</Span>
								{" "}in everything we do
							</Text>
						</StackItem>
					</Stack>
				</StackItem>
				<StackItem width="100%">
					<Stack align-items="center" gap="0px">
						<StackItem width="50%" display="flex" flex-direction="row">
							<Menu display="flex">
								<Override slot="item-404" display="none" />
								<Override slot="link" font="normal 400 16px/1.5 --fontFamily-sansHelvetica" text-decoration-line="initial" color="--darkL1" />
								<Override slot="item-active" border-width="0px 0px 2px 0px" border-style="solid" border-color="--color-primary" />
								<Override slot="link-active" color="--primary" />
								<Override slot="item-index" display="none" />
							</Menu>
						</StackItem>
						<StackItem width="50%" text-align="right">
							<Box display="flex" justify-content="flex-end" align-items="center">
								<Text font="--base" margin="0px 18px 0px 0px">
									<Link href="tel:+1(234)567-89-00" color="--primary" text-decoration-line="initial">
										+1(234)567-89-00
									</Link>
								</Text>
								<SocialMedia facebook="https://www.facebook.com/quarklyapp/" twitter="https://twitter.com/quarklyapp" youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw" telegram="https://t.me/joinchat/DqSYDhS0R9nMRvOtFbIxrQ">
									<Override
										slot="link"
										background="none"
										border-radius="50%"
										transition="background --transitionDuration-normal --transitionTimingFunction-easeOut 0s"
										color="--darkL2"
										hover-color="--light"
										hover-background="none"
									/>
									<Override slot="icon" color="inherit" />
									<Override slot="link-youtube" hover-color="#FC0D1B" />
									<Override slot="link-telegram" hover-color="#45AFDD" />
									<Override slot="link-twitter" hover-background="none" hover-color="#2AA3EF" />
									<Override slot="link-facebook" hover-color="#4469B0" />
								</SocialMedia>
							</Box>
						</StackItem>
					</Stack>
				</StackItem>
			</Stack>
		</Section>
		<Section padding="17px 0" border-width="0px 0px 1px 0px" border-style="solid" border-color="--color-lightD2">
			<Stack flex-direction="column" gap="0px">
				<StackItem width="100%">
					<Stack gap="0px">
						<StackItem width="50%" display="flex" flex-direction="row" padding="0px 0px 0px 16px">
							<Box display="flex" align-items="center">
								<Icon category="md" icon={MdFace} size="36px" margin="0px 12px 0px 0px" />
								<Text font="--headline3" margin="0px mixed">
									Company
								</Text>
							</Box>
						</StackItem>
						<StackItem width="50%" text-align="right">
							<Text font="--base" margin="0px mixed">
								Striving for{" "}
								<Span font="italic 300 18px/24px --fontFamily-serifGeorgia" color="--orange">
									perfection
								</Span>
								{" "}in everything we do
							</Text>
							<Text font="--base" margin="0px mixed">
								Striving for{" "}
								<Span font="italic 300 18px/24px --fontFamily-serifGeorgia" color="--orange">
									perfection
								</Span>
								{" "}in everything we do
							</Text>
							<Text font="--base" margin="0px mixed">
								Striving for{" "}
								<Span font="italic 300 18px/24px --fontFamily-serifGeorgia" color="--orange">
									perfection
								</Span>
								{" "}in everything we do
							</Text>
						</StackItem>
					</Stack>
				</StackItem>
				<StackItem width="100%">
					<Stack align-items="center" gap="0px">
						<StackItem width="50%" display="flex" flex-direction="row">
							<Menu display="flex">
								<Override slot="item-404" display="none" />
								<Override slot="link" font="normal 400 16px/1.5 --fontFamily-sansHelvetica" text-decoration-line="initial" color="--darkL1" />
								<Override slot="item-active" border-width="0px 0px 2px 0px" border-style="solid" border-color="--color-primary" />
								<Override slot="link-active" color="--primary" />
								<Override slot="item-index" display="none" />
							</Menu>
						</StackItem>
						<StackItem width="50%" text-align="right">
							<Box display="flex" justify-content="flex-end" align-items="center">
								<Text font="--base" margin="0px 18px 0px 0px">
									<Link href="tel:+1(234)567-89-00" color="--primary" text-decoration-line="initial">
										+1(234)567-89-00
									</Link>
								</Text>
								<SocialMedia facebook="https://www.facebook.com/quarklyapp/" twitter="https://twitter.com/quarklyapp" youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw" telegram="https://t.me/joinchat/DqSYDhS0R9nMRvOtFbIxrQ">
									<Override
										slot="link"
										background="none"
										border-radius="50%"
										transition="background --transitionDuration-normal --transitionTimingFunction-easeOut 0s"
										color="--darkL2"
										hover-color="--light"
										hover-background="none"
									/>
									<Override slot="icon" color="inherit" />
									<Override slot="link-youtube" hover-color="#FC0D1B" />
									<Override slot="link-telegram" hover-color="#45AFDD" />
									<Override slot="link-twitter" hover-background="none" hover-color="#2AA3EF" />
									<Override slot="link-facebook" hover-color="#4469B0" />
								</SocialMedia>
							</Box>
						</StackItem>
					</Stack>
				</StackItem>
			</Stack>
		</Section>
		<Components.AnimCircle />
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