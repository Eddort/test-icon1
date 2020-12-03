import React from "react";
import theme from "theme";
import { Theme, Link, Text, Image, Box } from "@quarkly/widgets";
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
		<Section text-align="center" padding="100px 0" background="url(https://artemzhigalin.ru/src/title-promo3.svg) center/contain no-repeat scroll padding-box,#ffffff url(https://images.unsplash.com/photo-1556139954-ec19cce61d61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80) 0% 0% /contain no-repeat scroll padding-box">
			<Stack>
				<StackItem width="50%" />
				<StackItem width="50%">
					<Text as="h1" font="--headline1" md-font="--headline2" margin="20px 0">
						The headline about us
					</Text>
					<Text as="p" font="--lead" margin="20px 0">
						Tell what your business is about, what you do and how you do it.
		Write an engaging story describing your work experience and how
		passionate you are about what you do.
					</Text>
					<Box display="flex" margin="40px 0 20px 0" justify-content="space-around">
						<Box padding="10px">
							<Image src="https://images.unsplash.com/photo-1501870190084-cdf29f15ef87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" width="320px" max-width="100%" />
						</Box>
						<Box padding="10px">
							<Image src="https://images.unsplash.com/photo-1503341960582-b45751874cf0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" width="320px" max-width="100%" />
						</Box>
						<Box padding="10px">
							<Image src="https://images.unsplash.com/photo-1503342394128-c104d54dba01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" width="320px" max-width="100%" />
						</Box>
					</Box>
				</StackItem>
			</Stack>
		</Section>
		<Section text-align="center" padding="100px 0" inner-max-width="100%" background="#FFF">
			<Stack gap="32px">
				<StackItem width="50%" background="url(https://artemzhigalin.ru/src/title-promo4.svg) center/105% no-repeat border-box,#ffffff url(https://images.unsplash.com/photo-1556139954-ec19cce61d61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80) 0% 50% /cover no-repeat scroll padding-box" />
				<StackItem width="50%">
					<Box display="flex" margin="40px 0 20px 0" justify-content="space-around">
						<Box padding="10px">
							<Image src="https://images.unsplash.com/photo-1501870190084-cdf29f15ef87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" width="320px" max-width="100%" />
						</Box>
						<Box padding="10px">
							<Image src="https://images.unsplash.com/photo-1503341960582-b45751874cf0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" width="320px" max-width="100%" />
						</Box>
						<Box padding="10px">
							<Image src="https://images.unsplash.com/photo-1503342394128-c104d54dba01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" width="320px" max-width="100%" />
						</Box>
					</Box>
				</StackItem>
			</Stack>
		</Section>
		<Section text-align="center" padding="100px 0" background="rgba(0, 0, 0, 0) url(https://artemzhigalin.ru/src/title-promo.svg) center/100% no-repeat scroll padding-box,#ffffff url(https://images.unsplash.com/photo-1556139954-ec19cce61d61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80) 0% 0% /contain no-repeat scroll padding-box">
			<Stack>
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
			</Stack>
			<Text as="h1" font="--headline1" md-font="--headline2" margin="20px 0">
				The headline about us
			</Text>
			<Text as="p" font="--lead" margin="20px 0">
				Tell what your business is about, what you do and how you do it.
		Write an engaging story describing your work experience and how
		passionate you are about what you do.
			</Text>
			<Box display="flex" margin="40px 0 20px 0" justify-content="space-around">
				<Box padding="10px">
					<Image src="https://images.unsplash.com/photo-1501870190084-cdf29f15ef87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" width="320px" max-width="100%" />
				</Box>
				<Box padding="10px">
					<Image src="https://images.unsplash.com/photo-1503341960582-b45751874cf0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" width="320px" max-width="100%" />
				</Box>
				<Box padding="10px">
					<Image src="https://images.unsplash.com/photo-1503342394128-c104d54dba01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" width="320px" max-width="100%" />
				</Box>
			</Box>
		</Section>
		<Section padding="140px 0" background="url(https://images.unsplash.com/photo-1515600051222-a3c338ff16f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80) center/cover">
			<Box max-width="240px" padding="50px 80px 80px 50px" background="--color-light" color="--dark">
				<Text
					as="h4"
					font="--base"
					color="--grey"
					letter-spacing="1px"
					text-transform="uppercase"
					margin="6px 0"
				>
					About me
				</Text>
				<Text as="h2" font="--headline2" margin="0 0 12px 0">
					as as{" "}
				</Text>
				<Text font="--base">
					asasas as as as фы вфыв фыв фыв фыв фыв фывф ыв
					<br />
					фыв фыв
					<br />
					фы вфыв фыв фыв фыв фыв ф
					<br />
					фы вфы вфы
				</Text>
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