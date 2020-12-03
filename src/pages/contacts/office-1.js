import React from "react";
import theme from "theme";
import { Theme, Link, Icon, Text, Box, Span } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { StackItem, Stack, Override, Menu, Section } from "@quarkly/components";
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
						<StackItem width="80%" display="flex" flex-direction="row">
							<Menu display="flex" exact-active-match={false}>
								<Override
									slot="link"
									text-decoration-line="initial"
									color="--darkL2"
									padding="8px 12px 8px 12px"
									hover-background="rgba(0, 119, 204, 0.1)"
									border-radius="4px"
									margin="0px 0px 0px 0px"
									display="block"
								/>
								<Override
									slot="link-active"
									color="--primary"
									border-width="0px 0px 2px 0px"
									border-style="solid"
									border-radius="0px"
								/>
								<Override slot="item-404" display="none" />
								<Override slot="item-index" display="none" />
								<Override slot="item-contacts" />
								<Override slot="item" />
								<Override slot="link-contacts" />
								<Override slot="link-projects" color="--darkL2" />
								<Override
									slot="item-projects"
									font="16px --fontFamily-googleJosefinSans"
									text-transform="uppercase"
									letter-spacing="2px"
									color="--red"
								/>
							</Menu>
						</StackItem>
						<StackItem width="20%" text-align="right">
							<Box display="flex" justify-content="flex-end" align-items="center">
								<Text font="--base" margin="0px 18px 0px 0px">
									<Link href="tel:+1(234)567-89-00" color="--primary" text-decoration-line="initial">
										+1(234)567-89-00
									</Link>
								</Text>
							</Box>
						</StackItem>
					</Stack>
				</StackItem>
			</Stack>
		</Section>
		<Section text-align="center" padding="100px 0">
			<Menu display="flex" depth="2" rootId="5e973ef918aa4c001e454e83" exact-active-match={false}>
				<Override
					slot="link"
					text-decoration-line="initial"
					color="--darkL2"
					padding="8px 12px 8px 12px"
					hover-background="rgba(0, 119, 204, 0.1)"
					border-radius="4px"
				/>
				<Override
					slot="link-active"
					color="--primary"
					border-width="0px 0px 2px 0px"
					border-style="solid"
					border-radius="0px"
				/>
				<Override slot="item-404" display="none" />
				<Override slot="item-index" display="none" />
				<Override slot="link-office-1">
					Great Office
				</Override>
				<Override slot="link-office-2">
					Awesome Office
				</Override>
			</Menu>
			<Box margin="20px 0px 20px 0px" itemScope itemType="http://schema.org/Organization">
				<Text
					as="p"
					font="--lead"
					margin="0px 0px 5px 0px"
					text-align="left"
					itemprop="name"
				>
					Awesome Company
				</Text>
				<Box margin="25px 0px 30px 0px" itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
					<Text
						as="p"
						font="normal 600 13px/1.5 --fontFamily-sans"
						margin="0px 0px 5px 0px"
						text-align="left"
						text-transform="uppercase"
						letter-spacing="2px"
						color="--darkL2"
					>
						Our Location
					</Text>
					<Text as="p" font="--base" margin="5px 0 5px 0" text-align="left">
						<Span itemProp="streetAddress">
							4998 Hanover Street
						</Span>
						,{" "}
						<Span itemProp="addressLocality">
							New York
						</Span>
						,{" "}
						<Span itemProp="postalCode">
							10011
						</Span>
					</Text>
				</Box>
				<Box margin="25px 0px 30px 0px">
					<Text
						as="p"
						font="normal 600 13px/1.5 --fontFamily-sans"
						margin="0px 0px 5px 0px"
						text-align="left"
						text-transform="uppercase"
						letter-spacing="2px"
						color="--darkL2"
					>
						contact us
					</Text>
					<Text as="p" font="--base" margin="5px 0 5px 0" text-align="left">
						hello@company.com
					</Text>
				</Box>
				<Box margin="25px 0px 30px 0px">
					<Text
						as="p"
						font="normal 600 13px/1.5 --fontFamily-sans"
						margin="0px 0px 5px 0px"
						text-align="left"
						text-transform="uppercase"
						letter-spacing="2px"
						color="--darkL2"
					>
						Phone us
					</Text>
					<Text as="p" font="--base" margin="5px 0 5px 0" text-align="left">
						+1(234)567-89-00
					</Text>
					<Text as="p" font="--base" margin="5px 0 5px 0" text-align="left">
						+1(234)567-89-00
					</Text>
				</Box>
			</Box>
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