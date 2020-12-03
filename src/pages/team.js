import React from "react";
import theme from "theme";
import { Theme, Link, Span, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { StackItem, Stack, Section } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section padding="64px 0" font="--base" color="--dark">
			<Stack margin-top="40px">
				<StackItem
					width="25%"
					lg-width="50%"
					sm-width="100%"
					position="relative"
					padding="36px 16px 16px 0px"
				>
					<Text
						as="h1"
						font="--headline1"
						md-font="--headline2"
						max-width="520px"
						margin="mixed 0px"
						text-align="left"
						width="400px"
					>
						<Span
							font="--base"
							color="--red"
							letter-spacing="1px"
							text-transform="uppercase"
							display="block"
							margin="0px 0px 0px 0px"
						>
							Our{" "}
							<br />
						</Span>
						<Span
							font="--headline1"
							as="h1"
							margin="0 auto 5px auto"
							max-width="520px"
							md-font="--headline2"
							text-align="left"
						>
							Team
						</Span>
					</Text>
					<Text
						as="h3"
						color="--darkL2"
						max-width="520px"
						margin="5px 0 20px 0"
						text-align="left"
						font="--lead"
						width="400px"
					>
						The smartest people work every day to provide the best service and to make our clients happy
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" quarkly-title="Nathan">
					<Box
						height="0"
						margin="0 0 20px 0"
						padding-bottom="100%"
						background="linear-gradient(0deg,rgba(247, 251, 255, 0.2) 0%,rgba(247, 251, 255, 0.2) 100%),url(https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80) 20% 5%/150% no-repeat"
						border-radius="50%"
					/>
					<Text
						color="--grey"
						margin="0"
						font="normal 300 12px/1.5 --fontFamily-sans"
						text-transform="uppercase"
						letter-spacing="1px"
					>
						CEO
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						Nathan K. Joe
					</Text>
					<Text as="p" margin="20px 0 5px 0" color="--greyD2" font="--base">
						This space is 100% editable. Use it to introduce a team member, describe their work experience and role within the company. This is also a great place to highlight a team member's strong sides.
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" quarkly-title="David">
					<Box
						height="0"
						margin="0 0 20px 0"
						padding-bottom="100%"
						background="linear-gradient(0deg,rgba(247, 251, 255, 0.2) 0%,rgba(247, 251, 255, 0.2) 100%),url(https://images.unsplash.com/photo-1546672741-d327539d5f13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80) 50% 0/cover no-repeat"
						border-radius="50%"
					/>
					<Text
						color="--grey"
						margin="0"
						font="normal 300 12px/1.5 --fontFamily-sans"
						text-transform="uppercase"
						letter-spacing="1px"
					>
						Developer
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						David R. Lema
					</Text>
					<Text as="p" margin="20px 0 5px 0" color="--greyD2" font="--base">
						This space is 100% editable. Use it to introduce a team member, describe their work experience and role within the company. This is also a great place to highlight a team member's strong sides.
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" quarkly-title="Janet">
					<Box
						height="0"
						margin="0 0 20px 0"
						padding-bottom="100%"
						background="linear-gradient(0deg,rgba(247, 251, 255, 0.2) 0%,rgba(247, 251, 255, 0.2) 100%),url(https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80) 50% 0/cover no-repeat"
						border-radius="50%"
					/>
					<Text
						color="--grey"
						margin="0"
						font="normal 300 12px/1.5 --fontFamily-sans"
						text-transform="uppercase"
						letter-spacing="1px"
					>
						Marketing
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						Janet E. Morey
					</Text>
					<Text as="p" margin="20px 0 5px 0" color="--greyD2" font="--base">
						This space is 100% editable. Use it to introduce a team member, describe their work experience and role within the company. This is also a great place to highlight a team member's strong sides.
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section padding="64px 0" font="--base" color="--dark">
			<Stack margin-top="40px">
				<StackItem
					width="25%"
					lg-width="50%"
					sm-width="100%"
					position="relative"
					padding="36px 16px 16px 0px"
				>
					<Text
						as="h1"
						font="--headline1"
						md-font="--headline2"
						max-width="520px"
						margin="mixed 0px"
						text-align="left"
						width="400px"
					>
						<Span
							font="normal 300 16px/1.5 --fontFamily-mono"
							color="--red"
							letter-spacing="1px"
							text-transform="uppercase"
							display="block"
							margin="0px 0px 12px 0px"
						>
							Our{" "}
							<br />
						</Span>
						<Span
							font="normal 900 72px/1.2 --fontFamily-googleJosefinSans"
							margin="0 auto 5px auto"
							as="h1"
							md-font="--headline2"
							max-width="520px"
							text-align="left"
						>
							Team
						</Span>
					</Text>
					<Text
						as="h3"
						color="--darkL2"
						max-width="520px"
						margin="5px 0 20px 0"
						text-align="left"
						font="normal 300 25px/1.5 --fontFamily-googleCaveat"
						width="400px"
					>
						The smartest people work every day to provide the best service and to make our clients happy
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" quarkly-title="Nathan">
					<Box
						height="0"
						margin="0 0 20px 0"
						padding-bottom="100%"
						background="linear-gradient(0deg,rgba(247, 251, 255, 0.2) 0%,rgba(247, 251, 255, 0.2) 100%),url(https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80) 20% 5%/150% no-repeat"
						border-radius="50%"
					/>
					<Text
						color="--grey"
						margin="0"
						font="normal 300 12px/1.5 --fontFamily-mono"
						text-transform="uppercase"
						letter-spacing="1px"
					>
						CEO
					</Text>
					<Text as="h3" font="normal 500 28px/1.2 --fontFamily-googleCaveat" margin="5px 0 20px 0">
						Nathan K. Joe
					</Text>
					<Text as="p" margin="20px 0 5px 0" color="--greyD2" font="normal 300 16px/1.5 --fontFamily-googleJosefinSans">
						This space is 100% editable. Use it to introduce a team member, describe their work experience and role within the company. This is also a great place to highlight a team member's strong sides.
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" quarkly-title="David">
					<Box
						height="0"
						margin="0 0 20px 0"
						padding-bottom="100%"
						background="linear-gradient(0deg,rgba(247, 251, 255, 0.2) 0%,rgba(247, 251, 255, 0.2) 100%),url(https://images.unsplash.com/photo-1546672741-d327539d5f13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80) 50% 0/cover no-repeat"
						border-radius="50%"
					/>
					<Text
						color="--grey"
						margin="0"
						font="normal 300 12px/1.5 --fontFamily-mono"
						text-transform="uppercase"
						letter-spacing="1px"
					>
						Developer
					</Text>
					<Text as="h3" font="normal 500 28px/1.2 --fontFamily-googleCaveat" margin="5px 0 20px 0">
						David R. Lema
					</Text>
					<Text as="p" margin="20px 0 5px 0" color="--greyD2" font="normal 300 16px/1.5 --fontFamily-googleJosefinSans">
						This space is 100% editable. Use it to introduce a team member, describe their work experience and role within the company. This is also a great place to highlight a team member's strong sides.
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" quarkly-title="Janet">
					<Box
						height="0"
						margin="0 0 20px 0"
						padding-bottom="100%"
						background="linear-gradient(0deg,rgba(247, 251, 255, 0.2) 0%,rgba(247, 251, 255, 0.2) 100%),url(https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80) 50% 0/cover no-repeat"
						border-radius="50%"
					/>
					<Text
						color="--grey"
						margin="0"
						font="normal 300 12px/1.5 --fontFamily-mono"
						text-transform="uppercase"
						letter-spacing="1px"
					>
						Marketing
					</Text>
					<Text as="h3" font="normal 500 28px/1.2 --fontFamily-googleCaveat" margin="5px 0 20px 0">
						Janet E. Morey
					</Text>
					<Text as="p" margin="20px 0 5px 0" color="--greyD2" font="normal 300 16px/1.5 --fontFamily-googleJosefinSans">
						This space is 100% editable. Use it to introduce a team member, describe their work experience and role within the company. This is also a great place to highlight a team member's strong sides.
					</Text>
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