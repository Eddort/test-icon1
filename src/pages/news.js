import React from "react";
import theme from "theme";
import { Theme, Link, Icon, Text, Box, Span, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { StackItem, Stack, Override, Menu, SocialMedia, Section, Formspree, GoogleMap } from "@quarkly/components";
import { MdFace, MdArrowDownward } from "react-icons/md";
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
								<Override slot="link" font="--base" text-decoration-line="initial" color="--darkL1" />
								<Override slot="item-active" border-width="0px 0px 2px 0px" border-style="solid" border-color="--color-primary" />
								<Override slot="link-active" color="--primary" />
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
						</StackItem>
					</Stack>
				</StackItem>
				<StackItem width="100%">
					<Stack align-items="center" gap="0px">
						<StackItem width="50%" display="flex" flex-direction="row" />
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
						</StackItem>
					</Stack>
				</StackItem>
				<StackItem width="100%">
					<Stack align-items="center" gap="0px">
						<StackItem width="50%" display="flex" flex-direction="row">
							<Menu display="flex">
								<Override slot="item-404" display="none" />
								<Override slot="link" font="--base" text-decoration-line="initial" color="--darkL1" />
								<Override slot="item-active" border-width="0px 0px 2px 0px" border-style="solid" border-color="--color-primary" />
								<Override slot="link-active" color="--primary" />
							</Menu>
						</StackItem>
						<StackItem width="50%" text-align="right">
							<Box display="flex" justify-content="flex-end" align-items="center">
								<Text font="--base" margin="0px 18px 0px 0px">
									<Link href="tel:+1(234)567-89-00" color="--primary" text-decoration-line="initial">
										+1(234)567-89-00
									</Link>
								</Text>
								<SocialMedia
									facebook="https://www.facebook.com/quarklyapp/"
									twitter="https://twitter.com/quarklyapp"
									youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
									telegram="https://t.me/joinchat/DqSYDhS0R9nMRvOtFbIxrQ"
									icon-size="24px"
								>
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
						</StackItem>
					</Stack>
				</StackItem>
				<StackItem width="100%">
					<Stack align-items="center" gap="0px">
						<StackItem width="50%" display="flex" flex-direction="row">
							<Menu display="flex">
								<Override slot="item-404" display="none" />
								<Override slot="link" font="--base" text-decoration-line="initial" color="--darkL1" />
								<Override slot="item-active" border-width="0px 0px 2px 0px" border-style="solid" border-color="--color-primary" />
								<Override slot="link-active" color="--primary" />
							</Menu>
						</StackItem>
						<StackItem width="50%" text-align="right">
							<Box display="flex" justify-content="flex-end" align-items="center">
								<Text font="--base" margin="0px 18px 0px 0px">
									<Link href="tel:+1(234)567-89-00" color="--primary" text-decoration-line="initial">
										+1(234)567-89-00
									</Link>
								</Text>
								<SocialMedia
									facebook="https://www.facebook.com/quarklyapp/"
									twitter="https://twitter.com/quarklyapp"
									youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
									telegram="https://t.me/joinchat/DqSYDhS0R9nMRvOtFbIxrQ"
									icon-size="24px"
								>
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
							<SocialMedia
								facebook="https://www.facebook.com/quarklyapp/"
								twitter="https://twitter.com/quarklyapp"
								youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
								telegram="https://t.me/joinchat/DqSYDhS0R9nMRvOtFbIxrQ"
								text-align="center"
								align-items="center"
								justify-content="flex-end"
							>
								<Override
									slot="link"
									hover-background="--color-lightD1"
									border-radius="50%"
									transition="background --transitionDuration-normal --transitionTimingFunction-easeOut 0s"
									background="none"
								/>
								<Override slot="icon" color="--dark" />
								<Override slot="icon-youtube" color="#FC0D1B" />
								<Override slot="icon-twitter" color="#2AA3EF" />
								<Override slot="icon-facebook" color="#4469B0" />
								<Override slot="icon-telegram" color="#3EAEDF" />
							</SocialMedia>
						</StackItem>
					</Stack>
				</StackItem>
				<StackItem width="100%">
					<Stack align-items="center" gap="0px">
						<StackItem width="100%" flex-direction="row">
							<Menu display="flex">
								<Override slot="item" text-align="left" display="block" />
								<Override slot="item-404" display="none" />
								<Override slot="item-active" border-width="0px 0px 2px 0px" border-style="solid" border-color="--color-primary" />
								<Override slot="link-active" color="--primary" />
								<Override slot="link" font="--base" text-decoration-line="initial" color="#0E1317" />
								<Override
									slot="item-contacts"
									margin="0px 0px 0px auto"
									text-align="left"
									background="--color-primary"
									border-radius="30px"
									color="--light"
								/>
								<Override slot="link-contacts" color="--light" />
							</Menu>
						</StackItem>
						<StackItem width="50%" text-align="right">
							<Box display="flex" justify-content="flex-end" align-items="center">
								<Text font="--base" margin="0px 18px 0px 0px" />
							</Box>
						</StackItem>
					</Stack>
				</StackItem>
			</Stack>
		</Section>
		<Section padding="10px 0" border-width="0px 0px 1px 0px" border-style="solid" border-color="--color-lightD2">
			<Stack flex-direction="column" gap="0px">
				<StackItem width="100%">
					<Stack gap="0px">
						<StackItem
							width="33.33%"
							display="flex"
							flex-direction="row"
							padding="0px 0px 0px 0px"
							text-align="right"
							align-items="center"
							justify-content="flex-end"
							height="48px"
						>
							<Menu display="flex" margin="0px 0px 0px 0px">
								<Override slot="item" text-align="left" />
								<Override slot="item-404" display="none" />
								<Override slot="item-active" border-width="0px 0px 2px 0px" border-style="solid" border-color="--color-primary" />
								<Override slot="link-active" color="--primary" />
								<Override slot="link" font="--base" text-decoration-line="initial" color="#0E1317" />
								<Override
									slot="item-contacts"
									margin="0px 0px 0px auto"
									text-align="left"
									background="--color-primary"
									border-radius="30px"
									color="--light"
									display="none"
								/>
								<Override slot="link-contacts" color="--light" />
								<Override slot="item-news" display="none" />
								<Override slot="item-faq" display="none" />
								<Override slot="item-index" display="none" />
								<Override slot="item-about" display="none" />
							</Menu>
						</StackItem>
						<StackItem width="33.33%" text-align="right">
							<Box
								display="flex"
								align-items="center"
								text-align="center"
								justify-content="center"
								height="48px"
							>
								<Icon category="md" icon={MdFace} size="36px" margin="0px 12px 0px 0px" />
								<Text font="--headline3" margin="0px mixed">
									Company
								</Text>
							</Box>
						</StackItem>
						<StackItem
							width="33.33%"
							text-align="right"
							display="flex"
							align-items="center"
							height="48px"
						>
							<Menu display="flex">
								<Override slot="item" text-align="left" display="block" />
								<Override slot="item-404" display="none" />
								<Override slot="item-active" border-width="0px 0px 2px 0px" border-style="solid" border-color="--color-primary" />
								<Override slot="link-active" color="--primary" />
								<Override slot="link" font="--base" text-decoration-line="initial" color="#0E1317" />
								<Override slot="item-index" display="none" />
								<Override slot="item-projects" display="none" />
								<Override slot="item-team" display="none" />
								<Override slot="item-services" display="none" />
								<Override slot="item-contacts" display="none" />
							</Menu>
						</StackItem>
					</Stack>
				</StackItem>
			</Stack>
		</Section>
		<Section background="linear-gradient(0deg,rgba(4, 8, 12, 0.6) 0%,rgba(4, 8, 12, 0.6) 100%),--color-darkL2 url(https://images.unsplash.com/photo-1510125594188-5afc74c8cc43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80) center/cover" padding="64px 0" color="--light" font="--base">
			<Stack>
				<StackItem width="75%" lg-width="100%">
					<Text color="--lightD2" letter-spacing="1px" text-transform="uppercase" margin="0">
						We are born of the classics
					</Text>
					<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0">
						High-quality craftsmanship, unparalleled service, and value for everyone.
					</Text>
				</StackItem>
			</Stack>
			<Formspree errorMessage="Something went wrong" completeText="Success" endpoint="https://formspree.io/xlenpobd">
				<Input
					name="Your name"
					placeholder="Your name"
					margin-right="4px"
					type="text"
					as="input"
					required
				/>
				<Input
					name="Your age"
					margin-right="4px"
					placeholder="Your age"
					type="number"
					as="input"
					required
				/>
				<Input
					name="email"
					margin-right="4px"
					placeholder="Email"
					type="email"
					as="input"
				/>
				<Button>
					Submit
				</Button>
			</Formspree>
			<Box text-align="center" margin="96px 0 0 0">
				<Text margin="8px 0" text-transform="uppercase">
					Who we are
				</Text>
				<Icon category="md" margin="0 auto" icon={MdArrowDownward} />
			</Box>
		</Section>
		<Section>
			<GoogleMap />
		</Section>
		<Stack flex-wrap="nowrap">
			<StackItem width="50%">
				<Text>
					First item
				</Text>
			</StackItem>
			<StackItem width="50%">
				<Text>
					Second Item
				</Text>
			</StackItem>
			<StackItem width="50%">
				<Text>
					Second Item
				</Text>
			</StackItem>
			<StackItem width="50%">
				<Text>
					Second Item
				</Text>
			</StackItem>
			<StackItem width="50%">
				<Text>
					Second Item
				</Text>
			</StackItem>
			<StackItem width="50%">
				<Text>
					Second Item
				</Text>
			</StackItem>
			<StackItem width="50%">
				<Text>
					Second Item
				</Text>
			</StackItem>
			<StackItem width="50%">
				<Text>
					Second Item
				</Text>
			</StackItem>
			<StackItem width="50%">
				<Text>
					Second Item
				</Text>
			</StackItem>
			<StackItem width="50%">
				<Text>
					Second Item
				</Text>
			</StackItem>
			<StackItem width="50%">
				<Text>
					Second Item
				</Text>
			</StackItem>
			<StackItem width="50%">
				<Text>
					Second Item
				</Text>
			</StackItem>
			<StackItem width="50%">
				<Text>
					Second Item
				</Text>
			</StackItem>
			<StackItem width="50%">
				<Text>
					Second Item
				</Text>
			</StackItem>
		</Stack>
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