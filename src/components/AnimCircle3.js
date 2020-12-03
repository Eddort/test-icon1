import React from "react";
import atomize from "@quarkly/atomize";
import WarpJs from "warpjs";

const Warp = props => {
	const ref = React.useRef(null);
	React.useEffect(() => {
		if (!ref.current) return;
		const warp = new WarpJs(ref.current);
		let anim;
		warp.interpolate(4);
		warp.transform(([x, y]) => [x, y, y]);
		let offset = 0;

		function animate() {
			warp.transform(([x, y, oy]) => [x, oy + 4 * Math.sin(x / 16 + offset), oy]);
			offset += 0.1;
			anim = requestAnimationFrame(animate);
		}

		animate();
		return () => cancelAnimationFrame(anim);
	}, [ref.current]);
	return <div {...props}>
		      
		<svg ref={ref} viewBox="0 0 293 281">
			        
			<circle cx="118.784" cy="141.382" r="108.784" style={{
				stroke: "#FFC400",
				fill: "transparent",
				mixBlendMode: "hard-light"
			}} />
			       
			<circle cx="120" cy="141.382" r="104" style={{
				stroke: "#FFC400",
				fill: "#DE350B",
				mixBlendMode: "exclusion"
			}} />
			      
		</svg>
		    
	</div>;
};

export default atomize(Warp)({
	name: "Warp",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// past here description for your component
		en: "Warp — my awesome component"
	},
	propInfo: {
		// past here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
}, {
	width: "300px"
});